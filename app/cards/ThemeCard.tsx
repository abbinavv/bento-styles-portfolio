'use client';

import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeCard() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { 
      id: 'light' as const, 
      icon: Sun, 
      label: 'Light',
      color: '#14F4C9'
    },
    { 
      id: 'dark' as const, 
      icon: Moon, 
      label: 'Dark',
      color: '#3A7BFF'
    },
    { 
      id: 'system' as const, 
      icon: Monitor, 
      label: 'System',
      color: '#6C63FF'
    },
  ];

  return (
    <div className="glass-card p-6 h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-between">
        {/* Header */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">
            APPEARANCE
          </p>
          <h3 className="text-sm md:text-base font-semibold text-white">
            Theme
          </h3>
        </div>

        {/* Theme Options */}
        <div className="space-y-2 mt-4">
          {themes.map(({ id, icon: Icon, label }) => {
            const isActive = theme === id;
            
            return (
              <motion.button
                key={id}
                onClick={() => setTheme(id)}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-xl
                  border transition-all duration-200
                  ${
                    isActive
                      ? 'bg-white/7 border-white/20'
                      : 'bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className={`
                    w-9 h-9 rounded-lg flex items-center justify-center
                    transition-all duration-200
                    ${isActive ? 'bg-white/10' : 'bg-white/5'}
                  `}
                >
                  <Icon 
                    className="w-4 h-4" 
                    style={{ 
                      color: isActive ? '#14F4C9' : 'rgba(255,255,255,0.45)' 
                    }} 
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <p className={`
                    text-sm font-medium transition-colors
                    ${isActive ? 'text-white' : 'text-white/45'}
                  `}>
                    {label}
                  </p>
                  <p className="text-[11px] text-white/45">
                    {id === 'light' && 'Bright and clear'}
                    {id === 'dark' && 'Easy on the eyes'}
                    {id === 'system' && 'Matches device'}
                  </p>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTheme"
                    className="w-1.5 h-1.5 rounded-full bg-[#14F4C9]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
