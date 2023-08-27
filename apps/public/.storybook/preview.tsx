import '../app/globals.css'; // Tailwindcss
import React from 'react';
import { Preview } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';

// Custom viewports definition. Extends the MINIMAL_VIEWPORTS
const customViewports = {
  iphone7: {
    name: 'iPhone 7',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  samsungGalaxyS21Ultra: {
    name: 'Samsung Galaxy S21 Ultra',
    styles: {
      width: '384px',
      height: '854px'
    }
  }
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#212b31' }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    },
    nextjs: {
      appDirectory: true
    },
    options: {
      storySort: {
        order: ['About', '*']
      }
    },
    docs: {
      container: ({
        children,
        ...rest
      }: React.PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer {...rest}>
          {/* Table of Content Placeholder */}
          {children}
          {/* Back To Top */}
        </DocsContainer>
      )
    }
  }
};

export default preview;
