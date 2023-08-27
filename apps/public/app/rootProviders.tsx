'use client';

// React
import React from 'react';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// React Query Devtool
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Modules - Notifications
import { ToastNotification } from 'src/modules/notifications';

// Modules - Theme
import { ThemeProvider } from 'src/modules/themes';

// Contexts - Preload
import { PreloadProvider } from 'src/contexts';

const RootProviders: React.FC<React.PropsWithChildren> = (
  props
): JSX.Element => {
  const queryClientRef = React.useRef<QueryClient>(new QueryClient());

  const { children } = props;

  return (
    <PreloadProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <ToastNotification>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </ToastNotification>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PreloadProvider>
  );
};

export { RootProviders };
