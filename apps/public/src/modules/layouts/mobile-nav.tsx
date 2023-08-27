'use client';

// React
import React from 'react';

// Next
import Link from 'next/link';

// Shadcn
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@shadcn/accordion';
import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription
} from '@shadcn/sheet';
import { Button } from '@shadcn/button';
import { ScrollArea } from '@shadcn/scroll-area';

// Configs
import { Icons, navigationConfig, siteConfig } from 'configs';

const MobileNav: React.FC = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger asChild className='flex lg:hidden'>
        <Button variant='outline'>
          <Icons.mobileNavBar />
        </Button>
      </SheetTrigger>
      <SheetContent className='px-0 pb-0 pt-6'>
        <SheetHeader className='border-b px-4 pb-4'>
          <SheetTitle className=' text-left'>{siteConfig.title}</SheetTitle>
          <SheetDescription>
            It is better to fail in originality than to succeed in imitation.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className='relative h-[calc(100vh-8rem)] pb-10'>
          <div className='grid gap-4'>
            <Accordion type='single' collapsible className='w-full'>
              <div className='border-b px-4'>
                <h3 className='flex'>
                  <button
                    type='button'
                    data-orientation='vertical'
                    className='flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all'>
                    <SheetTrigger asChild>
                      <Link
                        className='flex w-full items-center gap-4 text-lg'
                        href={'/'}>
                        <Icons.logo className='h-4 w-4' />
                        Home
                      </Link>
                    </SheetTrigger>
                  </button>
                </h3>
              </div>
              <AccordionItem value='blog' className='px-4'>
                <AccordionTrigger style={{ textDecoration: 'none' }}>
                  <div className='flex w-full items-center gap-4 text-lg'>
                    <Icons.navigation.blog.icon />
                    Blog
                  </div>
                </AccordionTrigger>
                {navigationConfig.blog.subnavigation.map(
                  ({ name, href, Icon, external }) => (
                    <AccordionContent
                      className='focus:outline-none focus-visible:outline-none'
                      key={name}>
                      <SheetTrigger
                        asChild
                        className='flex w-full items-center '>
                        <Link
                          href={href}
                          target={!external ? '_self' : '_blank'}
                          className='flex w-full items-center gap-4 rounded-md border border-[#ececec] py-3 pl-4 active:bg-[#ececec] dark:border-[#222] active:dark:bg-[#222]'>
                          <Icon />
                          {name}
                        </Link>
                      </SheetTrigger>
                    </AccordionContent>
                  )
                )}
              </AccordionItem>
              <AccordionItem value='works' className='px-4'>
                <AccordionTrigger style={{ textDecoration: 'none' }}>
                  <div className='flex w-full items-center gap-4 text-lg'>
                    <Icons.navigation.works.icon />
                    Works
                  </div>
                </AccordionTrigger>
                {navigationConfig.works.subnavigation.map(
                  ({ name, href, Icon, external }) => (
                    <AccordionContent
                      className='focus:outline-none focus-visible:outline-none'
                      key={name}>
                      <SheetTrigger
                        asChild
                        className='flex w-full items-center '>
                        <Link
                          href={href}
                          target={!external ? '_self' : '_blank'}
                          className='flex w-full items-center gap-4 rounded-md border border-[#ececec] py-3 pl-4 active:bg-[#ececec] dark:border-[#222] active:dark:bg-[#222]'>
                          <Icon />
                          {name}
                        </Link>
                      </SheetTrigger>
                    </AccordionContent>
                  )
                )}
              </AccordionItem>
              <AccordionItem value='insights' className='px-4'>
                <AccordionTrigger style={{ textDecoration: 'none' }}>
                  <div className='flex w-full items-center gap-4 text-lg'>
                    <Icons.navigation.insights.icon />
                    Insights
                  </div>
                </AccordionTrigger>
                {navigationConfig.insights.subnavigation.map(
                  ({ name, href, Icon }) => (
                    <AccordionContent
                      className='focus:outline-none focus-visible:outline-none'
                      key={name}>
                      <SheetTrigger
                        asChild
                        className='flex w-full items-center '>
                        <Link
                          href={href}
                          className='flex w-full items-center gap-4 rounded-md border border-[#ececec] py-3 pl-4 active:bg-[#ececec] dark:border-[#222] active:dark:bg-[#222]'>
                          <Icon />
                          {name}
                        </Link>
                      </SheetTrigger>
                    </AccordionContent>
                  )
                )}
              </AccordionItem>
              <div className='border-b px-4'>
                <h3 className='flex'>
                  <button
                    type='button'
                    data-orientation='vertical'
                    className='flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all'>
                    <SheetTrigger asChild>
                      <Link
                        className='flex w-full items-center gap-4 text-lg'
                        href={'/guestbook'}>
                        <Icons.navigation.guestbook />
                        Guestbook
                      </Link>
                    </SheetTrigger>
                  </button>
                </h3>
              </div>
              <div className='border-b px-4'>
                <h3 className='flex'>
                  <button
                    type='button'
                    data-orientation='vertical'
                    className='flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all'>
                    <SheetTrigger asChild>
                      <Link
                        className='flex w-full items-center gap-4 text-lg'
                        href={'/about'}>
                        <Icons.navigation.about />
                        About
                      </Link>
                    </SheetTrigger>
                  </button>
                </h3>
              </div>
            </Accordion>
          </div>
          <SheetFooter className='px-4 py-4'>
            <SheetClose asChild>{/* <Button></Button> */}</SheetClose>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
