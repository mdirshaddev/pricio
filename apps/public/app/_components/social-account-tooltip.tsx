'use client';

import React from 'react';

// Shadcn
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@shadcn/hover-card';
import { cn } from '@shadcn/lib/utils';
import { buttonVariants } from '@shadcn/button';

// Configs
import { socialAccountsConfig } from 'configs';

const SocialAccountTooltip: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      {socialAccountsConfig.map(
        ({ name, href, AccountIcon, ContentForTooltip }) => (
          <HoverCard key={href}>
            <HoverCardTrigger asChild>
              <a
                href={href}
                target='_blank'
                className={cn(
                  buttonVariants({
                    size: 'icon',
                    variant: 'ghost'
                  }),
                  'cursor-pointer'
                )}>
                <AccountIcon className='h-6 w-6 text-black dark:text-white' />
                <span className='sr-only'>{name}</span>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className='w-80 '>
              <ContentForTooltip />
            </HoverCardContent>
          </HoverCard>
        )
      )}
    </React.Fragment>
  );
};

export { SocialAccountTooltip };
