'use client';

// React
import React from 'react';

// Shadcn
import { cn } from '@shadcn/lib/utils';

/* This line of code is creating a context object called `PreloadContext` using the
`React.createContext` function. The context object is of type `React.Context<boolean>`, which means
it will provide a value of type `boolean` to its consumers. The initial value of the context is set
to `false` using the `React.createContext<boolean>(false)` syntax. */
const PreloadContext: React.Context<boolean> =
  React.createContext<boolean>(false);

/**
 * The PreloadProvider component is a React functional component that provides a preloading context and
 * renders a loading overlay until the content is preloaded.
 * @param props - The `props` parameter is an object that contains the properties passed to the
 * `PreloadProvider` component. These properties can be accessed using dot notation, for example
 * `props.children` to access the `children` property.
 * @returns The PreloadProvider component is returning a JSX element.
 */
const PreloadProvider: React.FC<React.PropsWithChildren> = (
  props
): JSX.Element => {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const preloadTimeout: NodeJS.Timeout = setTimeout(() => {
      setIsPreloaded(true);
    }, 200);

    return () => clearTimeout(preloadTimeout);
  }, []);

  const { children } = props;

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        className={cn(
          'fixed inset-0 flex items-center justify-center bg-background transition-opacity',
          preloaded && 'pointer-events-none opacity-0'
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
};

/**
 * The usePreloadState function returns the boolean value from the PreloadContext.
 */
const usePreloadState: () => boolean = (): boolean =>
  React.useContext(PreloadContext);

export { usePreloadState, PreloadProvider };
