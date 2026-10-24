import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? 'Dark futuristic mode' : 'High-contrast light mode'}`}
      title={`Switch to ${isLight ? 'Dark Mode' : 'High-Contrast Light Mode'}`}
      className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
        isLight
          ? 'bg-amber-100/80 border-amber-300 text-amber-950 shadow-sm hover:bg-amber-200/90'
          : 'bg-white/5 border-white/15 text-neutral-300 hover:text-white hover:bg-white/10'
      } ${className}`}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        {isLight ? (
          <Sun className="w-4 h-4 text-amber-600 animate-in zoom-in-50 duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-amber-400 animate-in zoom-in-50 duration-200" />
        )}
      </div>
      <span className="text-xs font-semibold tracking-wide font-display hidden sm:inline">
        {isLight ? 'High Contrast' : 'Dark Mode'}
      </span>
    </button>
  );
};
