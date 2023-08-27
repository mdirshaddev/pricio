'use client';

import React from 'react';

interface FadeDelayContainerProps extends React.PropsWithChildren {
  delay: number;
}

/**
 * The `FadeDelayContainer` component fades in its children after a specified delay.
 * @returns The `FadeDelayContainer` component returns the `children` wrapped in a `React.Fragment` if `fadeIn`
 * is `true`. Otherwise, it returns `null`.
 */
const FadeDelayContainer: React.FC<FadeDelayContainerProps> = props => {
  const { delay, children } = props;

  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    const time = setTimeout(() => {
      setFadeIn(true);
    }, delay);
    return () => {
      clearTimeout(time);
    };
  }, [delay]);

  if (fadeIn) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return null;
};

export { FadeDelayContainer };
