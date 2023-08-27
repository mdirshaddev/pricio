import { Icons } from 'configs';

export type ThemeConfig = typeof themeConfig;

export const themeConfig = [
  {
    name: 'Change Theme to Dark',
    mode: 'dark',
    ThemeIcon: Icons.theme.moon
  },
  {
    name: 'Change Theme to Light',
    mode: 'light',
    ThemeIcon: Icons.theme.sun
  },
  {
    name: 'Change Theme to System',
    mode: 'system',
    ThemeIcon: Icons.theme.system
  }
];
