'use client';

// Next themes typings
import { type ThemeProviderProps } from 'next-themes/dist/types';

// React
import React from 'react';

// Next themes
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export { ThemeProvider };
