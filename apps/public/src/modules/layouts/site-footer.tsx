'use client';

import Link from 'next/link';

// Shadcn
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@shadcn/hover-card';

// Icons
import { Icons, siteConfig } from 'configs';

// Command center
import { CommandDialogMenu } from 'src/command';

export function SiteFooter() {
  return (
    <footer className='flex flex-col-reverse border-t bg-background px-4 pb-9 pt-6  lg:flex-col'>
      <div className='mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-4 px-8 py-4 lg:flex-row'>
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          <Link href='/' className='flex items-center space-x-2'>
            <Icons.logo className='h-6 w-6' />
            <span className='block font-bold'>{siteConfig.title}</span>
          </Link>
          <div>©️ Md Irshad 2023</div>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
          <CommandDialogMenu />
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                aria-label='Checkly Status'
                target='_blank'
                href={siteConfig.checklyStatus}
                className='cursor-newtab gap- flex h-9 items-center gap-2 rounded-md border border-[#ececec] px-3 py-2 hover:bg-[#ececec] dark:border-[#222] hover:dark:bg-[#222]'
                rel='noopener'>
                <p>Checkly</p>
                <div>
                  <Icons.checkly className='h-6 w-6' />
                </div>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className='w-80 cursor-pointer ring-1 ring-primary'>
              <siteConfig.checklyTooltipMessage />
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className='mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center p-0 lg:flex-row lg:px-8 lg:pb-4'>
        <ul className='flex w-full flex-row flex-wrap justify-center gap-x-4 gap-y-4 lg:justify-start'>
          <li>
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href={'https://github.com/mdirshaddev/mdirshad'}
                  target='_blank'
                  className='cursor-newtab gap- flex w-full items-center gap-2 rounded-md border border-[#ececec] px-3 py-2 hover:bg-[#ececec] dark:border-[#222] hover:dark:bg-[#222]'>
                  <Icons.social.github />
                  Source Code
                </a>
              </HoverCardTrigger>
              <HoverCardContent className='w-auto cursor-pointer ring-1 ring-primary'>
                <div className='flex justify-between space-x-4'>
                  <p className='text-sm'>
                    This website is{' '}
                    <span className='font-bold'>Open Source!</span>
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </li>
          {footerLinks.map(({ name, href, Icon, TooltipMessage }, index) => (
            <li key={index}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href={href}
                    target={name === 'Starter Templates' ? '_blank' : '_self'}
                    className='cursor-newtab gap- flex w-full items-center gap-2 rounded-md border border-[#ececec] px-3 py-2 hover:bg-[#ececec] dark:border-[#222] hover:dark:bg-[#222]'>
                    <Icon />
                    {name}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className='w-80 cursor-pointer ring-1 ring-primary '>
                  <div className='flex justify-between space-x-4'>
                    <TooltipMessage />
                  </div>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    name: 'Design',
    href: '/design',
    Icon: Icons.design,
    TooltipMessage: () => (
      <p className='select-none text-center text-sm'>
        <span className='font-bold'>mdirshad.vercel.app</span> client server
        architecture
      </p>
    )
  },
  {
    name: 'Starter Templates',
    href: 'https://github.com/mdirshaddev?tab=repositories&q=&type=template&language=&sort=stargazers',
    Icon: Icons.templates,
    TooltipMessage: () => (
      <p className='select-none text-center text-sm'>
        Starter code for faster project development
      </p>
    )
  },
  {
    name: 'Insights',
    href: '/dashboard',
    Icon: Icons.navigation.insights.icon,
    TooltipMessage: () => (
      <p className='select-none text-center text-sm'>
        Posts, GitHub and Website Statistics
      </p>
    )
  },
  {
    name: 'Guestbook',
    href: '/guestbook',
    Icon: Icons.navigation.guestbook,
    TooltipMessage: () => (
      <p className='select-none text-center text-sm'>
        Leave whatever you like to say—
        <span className='font-bold'>message, appreciation, suggestions</span>
      </p>
    )
  },
  {
    name: 'Docs',
    href: '/docs',
    Icon: Icons.docs,
    TooltipMessage: () => (
      <p className='select-none text-center text-sm'>
        Best practises for development, production deployment, workflows or
        devops pipeline
      </p>
    )
  }
];
