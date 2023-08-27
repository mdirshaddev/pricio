// React
import React from 'react';

// Shadcn
import { cn } from '@shadcn/lib/utils';

interface SlideContainerProps extends React.PropsWithChildren {
  animationName: 'animate-slide-up' | 'animate-slide-down';
}

/**
 * The `SlideContainer` function is a TypeScript React component that renders a div with a specified animation
 * name and children components.
 * @param props - The `props` parameter is an object that contains the properties passed to the `SlideContainer`
 * component. In this case, it expects two properties:
 * @returns a JSX element.
 */
const SlideContainer: React.FC<SlideContainerProps> = (props): JSX.Element => {
  const { animationName, children } = props;
  return (
    <div
      className={cn(
        `${animationName}`,
        'grid w-min grid-rows-[min-content] gap-2 sm:gap-4 md:gap-8'
      )}>
      {children}
    </div>
  );
};

export { SlideContainer };
