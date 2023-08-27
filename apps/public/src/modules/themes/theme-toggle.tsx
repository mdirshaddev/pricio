'use client';

// React
import React from 'react';

// Next themes
import { useTheme } from 'next-themes';

// Shadcn
import { Button } from '@shadcn/button';

// Configs
import { Icons } from 'configs';

const ThemeToggle: React.FC = (): JSX.Element => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Icons.theme.sun className='h-[1.5rem] w-[1.3rem] dark:hidden' />
      <Icons.theme.moon className='hidden h-5 w-5 dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export { ThemeToggle };
