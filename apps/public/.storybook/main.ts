import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  stories: [
    '../app/**/*.stories.tsx',
    '../documentation/*.mdx',
    '../src/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  docs: {
    autodocs: 'tag'
  }
};

export default config;
