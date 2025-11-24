"use client";

import { useEffect, useState } from "react";
import { Preloader } from "@/components/ui/preloader";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // First load only - show preloader for 1.4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isDone={!isLoading} />
      {children}
    </>
  );
}
