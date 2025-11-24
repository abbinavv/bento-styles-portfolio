'use client';

import React from 'react';
import clsx from 'clsx';

export type WavyBackgroundVariant =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'contact';

interface WavyBackgroundProps {
  variant?: WavyBackgroundVariant;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ variant = 'home' }) => {
  return (
    <div
      className={clsx(
        'page-bg',
        'wave-bg',
        {
          'wave-bg--home': variant === 'home',
          'wave-bg--about': variant === 'about',
          'wave-bg--experience': variant === 'experience',
          'wave-bg--projects': variant === 'projects',
          'wave-bg--contact': variant === 'contact',
        },
      )}
      aria-hidden="true"
    >
      <div className="wave-layer wave-layer--primary" />
      <div className="wave-layer wave-layer--secondary" />
    </div>
  );
};

export default WavyBackground;
