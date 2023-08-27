'use client';

// React
import React from 'react';

// Next
import Link from 'next/link';

// Shadcn
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle
} from '@shadcn/navigation-menu';
import { cn } from '@shadcn/lib/utils';

// Configs
import { Icons, navigationConfig } from 'configs';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <NavigationMenu className='bg-background'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink
                  className='flex h-full w-full select-none flex-col justify-end rounded-md bg-navigation-blog p-6 no-underline outline-none focus:shadow-md'
                  href='/'>
                  <Icons.navigation.blog.icon className='h-6 w-6 text-white' />
                  <div className='mb-2 mt-4 text-lg font-bold text-white'>
                    Blog
                  </div>
                  <p className='text-sm leading-tight text-white'>
                    Articles on Hands On Tutorials, Research and Development and
                    Proof of concepts work
                  </p>
                </NavigationMenuLink>
              </li>
              {navigationConfig.blog.subnavigation.map(
                ({ name, href, description, external }) => (
                  <NavigationMenuItem key={name}>
                    <NavigationMenuLink
                      className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      )}
                      target={!external ? '_self' : '_blank'}
                      href={href}>
                      {/* <a {...props}> */}
                      <div className='text-sm font-medium leading-none'>
                        {name}
                      </div>
                      <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {description}
                      </p>
                      {/* </a> */}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='p-4 pb-0'>
              <NavigationMenuLink
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-navigation-works p-6 no-underline outline-none focus:shadow-md'
                href='/'>
                <Icons.navigation.works.icon className='h-6 w-6 text-white' />
                <div className='mb-2 mt-4 text-lg font-bold text-white'>
                  Works
                </div>
                <p className='text-sm leading-tight text-white'>
                  My Projects some are deployed running on free resources or
                  some can be used for any open source work. I keep things
                  updated with instructions
                </p>
              </NavigationMenuLink>
            </div>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {navigationConfig.works.subnavigation.map(
                ({ name, href, description, external }) => (
                  // <ListItem
                  //   key={name}
                  //   title={name}
                  //   href={href}
                  //   target={!external ? '_self' : '_blank'}>
                  //   {description}
                  // </ListItem>
                  <NavigationMenuItem key={name}>
                    <NavigationMenuLink
                      className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      )}
                      target={!external ? '_self' : '_blank'}
                      href={href}>
                      {/* <a {...props}> */}
                      <div className='text-sm font-medium leading-none'>
                        {name}
                      </div>
                      <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {description}
                      </p>
                      {/* </a> */}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              <li className='row-span-3'>
                <NavigationMenuLink
                  className='flex h-full w-full select-none flex-col justify-end rounded-md bg-navigation-insights p-6 no-underline outline-none focus:shadow-md'
                  href='/'>
                  <Icons.navigation.insights.icon className='h-6 w-6 text-white' />
                  <div className='mb-2 mt-4 text-lg font-bold text-white'>
                    Insights
                  </div>
                  <p className='text-sm leading-tight text-white'>
                    Get insights for overall metrics on each projects from
                    github and other sources
                  </p>
                </NavigationMenuLink>
              </li>
              {navigationConfig.insights.subnavigation.map(
                ({ name, href, description }) => (
                  // <ListItem key={name} title={name} href={href}>
                  //   {description}
                  // </ListItem>
                  <NavigationMenuItem key={name}>
                    <NavigationMenuLink
                      className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      )}
                      href={href}>
                      {/* <a {...props}> */}
                      <div className='text-sm font-medium leading-none'>
                        {name}
                      </div>
                      <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {description}
                      </p>
                      {/* </a> */}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/guestbook'
            className={navigationMenuTriggerStyle()}>
            Guestbook
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/about'
            className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        href={href}>
        {/* <a {...props}> */}
        <div className='text-sm font-medium leading-none'>{title}</div>
        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
        {/* </a> */}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export { Navbar };
