// Next Link
import Link from 'next/link';

// Shadcn
import { buttonVariants } from '@shadcn/button';

// Configs
import { Icons, siteConfig } from 'configs';

// Modules - Theme
import { ThemeToggle } from 'src/modules/themes';

import { Navbar } from 'src/modules/layouts/navbar';
import { MobileNav } from 'src/modules/layouts/mobile-nav';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0 lg:px-8'>
        <div className='flex gap-4'>
          <MobileNav />
          <Link href='/' className='ml-0 flex items-center space-x-2'>
            <Icons.logo className='h-6 w-6' />
            <span className='hidden font-bold lg:inline-block'>
              {siteConfig.title}
            </span>
          </Link>
          <div className='hidden lg:flex'>
            <Navbar />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}>
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}>
                <Icons.social.twitter className='h-5 w-5 fill-current' />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
