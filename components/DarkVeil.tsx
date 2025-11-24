"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";
import "./DarkVeil.css";

type Props = {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
};

export default function DarkVeil({
  hueShift = 18,
  noiseIntensity = 0.03,
  scanlineIntensity = 0.08,
  speed = 0.4,
  scanlineFrequency = 0.35,
  warpAmount = 0.06,
  resolutionScale = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({
      canvas,
      width: window.innerWidth * resolutionScale,
      height: window.innerHeight * resolutionScale,
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.clearColor(0.008, 0.02, 0.067, 1); // #020511

    // Vertex shader - simple passthrough
    const vertex = /* glsl */ `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader - cyberpunk dark veil effect
    const fragment = /* glsl */ `
      precision highp float;
      
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uHueShift;
      uniform float uNoise;
      uniform float uScan;
      uniform float uScanFreq;
      uniform float uWarp;
      
      varying vec2 vUv;
      
      // Noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      // RGB to HSV conversion
      vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
      }
      
      // HSV to RGB conversion
      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }
      
      void main() {
        vec2 uv = vUv;
        vec2 centered = (uv - 0.5) * 2.0;
        
        // Subtle warping
        float warp1 = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uv.y * 2.0 + uTime * 0.15)) * uWarp;
        float warp2 = snoise(vec2(uv.x * 3.0 - uTime * 0.08, uv.y * 3.0 + uTime * 0.12)) * uWarp;
        uv.x += warp1;
        uv.y += warp2;
        
        // Base dark gradient (radial from center)
        float vignette = length(centered) * 0.5;
        vec3 baseColor = vec3(0.008, 0.02, 0.067); // #020511
        
        // Noise layers for texture
        float noise1 = snoise(uv * 3.0 + uTime * 0.05) * 0.5 + 0.5;
        float noise2 = snoise(uv * 5.0 - uTime * 0.03) * 0.5 + 0.5;
        float noise3 = snoise(uv * 8.0 + uTime * 0.08) * 0.5 + 0.5;
        
        // Combined noise
        float combinedNoise = (noise1 + noise2 * 0.5 + noise3 * 0.25) / 1.75;
        
        // Apply noise to base color
        vec3 color = baseColor + vec3(combinedNoise * uNoise);
        
        // Add subtle colored bands (cyberpunk aesthetic)
        float bands = sin(uv.y * 20.0 + uTime * 0.5) * 0.5 + 0.5;
        vec3 accentColor = vec3(0.078, 0.957, 0.788); // #14F4C9 electric aqua
        color += accentColor * bands * 0.015;
        
        // Scanlines (CRT effect)
        float scanline = sin(uv.y * uResolution.y * uScanFreq + uTime * 2.0) * 0.5 + 0.5;
        color -= vec3(scanline * uScan);
        
        // Apply vignette
        color *= (1.0 - vignette * 0.3);
        
        // Hue shift
        vec3 hsv = rgb2hsv(color);
        hsv.x += uHueShift / 360.0;
        color = hsv2rgb(hsv);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(window.innerWidth, window.innerHeight) },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth * resolutionScale;
      const height = window.innerHeight * resolutionScale;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = new Vec2(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      
      const elapsed = (Date.now() - startTime) / 1000;
      program.uniforms.uTime.value = elapsed * speed;
      
      renderer.render({ scene: mesh });
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

  return <canvas ref={canvasRef} className="darkveil-canvas" />;
}
