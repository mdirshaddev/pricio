'use client';

// React
import React from 'react';

// Modules - Notifications
import { ToastNotification } from 'src/modules/notifications';

// Contexts - Preload
import { PreloadProvider } from 'src/contexts';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Modules - Theme
import { ThemeProvider } from 'src/modules/themes';

// React Query Devtool
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Framer Motion
import { AnimatePresence } from 'framer-motion';

const RootProviders: React.FC<React.PropsWithChildren> = (
  props
): JSX.Element => {
  const queryClientRef = React.useRef<QueryClient>(new QueryClient());

  const { children } = props;

  return (
    <AnimatePresence>
      <ToastNotification>
        <PreloadProvider>
          <QueryClientProvider client={queryClientRef.current}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              {children}
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </PreloadProvider>
      </ToastNotification>
    </AnimatePresence>
  );
};

export { RootProviders };
