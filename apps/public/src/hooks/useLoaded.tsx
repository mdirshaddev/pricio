'use client';

// React
import React from 'react';

// Preload hooks
import { usePreloadState } from 'src/contexts/preload-context';

/**
 * The function `useLoaded` is a custom hook in TypeScript React that returns a boolean value
 * indicating whether the component has finished loading.
 * @returns The function `useLoaded` returns a boolean value indicating whether the component is loaded
 * or not.
 */
const useLoaded: () => boolean = (): boolean => {
  const preloaded = usePreloadState();
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [preloaded]);

  return isLoaded;
};

export { useLoaded };
