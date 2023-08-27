'use client';

// React
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Next themes
import { useTheme } from 'next-themes';

// Configs
import {
  Icons,
  themeConfig,
  navigationConfig,
  socialAccountsConfig
} from 'configs';

import {
  Command,
  CommandItem,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandDialog,
  CommandShortcut,
  CommandSeparator
} from '@shadcn/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@shadcn/dialog';
import { Badge } from '@shadcn/badge';
import { Button } from '@shadcn/button';
import { Input } from '@shadcn/input';
import { Label } from '@shadcn/label';

// Hooks
import { useCopyToClipboard } from 'src/hooks';
import { useToast } from '@shadcn/use-toast';
import { ToastAction } from '@shadcn/toast';
import { cn } from '@shadcn/lib/utils';

export function CommandDialogMenu() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [inputValue, setInputValue] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const { toast } = useToast();

  const router = useRouter();

  const { setTheme } = useTheme();

  const [copy] = useCopyToClipboard();

  const [propmtMenu, setPromptMenu] = React.useState<string[]>(['home']);
  const activePage = propmtMenu[propmtMenu.length - 1];
  const isHome = activePage === 'home';

  const popPage = React.useCallback(() => {
    setPromptMenu(propmtMenu => {
      const x = [...propmtMenu];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        popPage();
      }
    },
    [inputValue.length, isHome, popPage]
  );

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 100);

      setInputValue('');
    }
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'm' && e.ctrlKey) {
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <React.Fragment>
      <Button
        variant={'outline'}
        className='bg-background pr-[0.35rem]'
        onClick={() => setOpen(!open)}>
        <p className='flex items-center text-sm font-semibold text-black dark:text-white'>
          Command Menu{' '}
          <kbd className='pointer-events-none ml-1.5 inline-flex h-6 w-6 select-none items-center gap-1 rounded border bg-muted font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='w-full text-xs'>⌘</span>
          </kbd>
          <kbd className='pointer-events-none ml-1.5 inline-flex h-6 w-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='w-full text-xs'>M</span>
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command
          ref={ref}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              bounce();
            }

            if (isHome || inputValue.length) {
              return;
            }

            if (e.key === 'Backspace') {
              e.preventDefault();
              popPage();
              bounce();
            }
          }}>
          <CommandInput
            autoFocus
            onValueChange={value => {
              setInputValue(value);
            }}
            placeholder='Type a command or search...'
          />
          <div className='flex flex-row items-center gap-2 border-b p-4'>
            {propmtMenu.map(pageName => (
              <Badge
                onClick={e => {
                  e.preventDefault();
                  if (pageName !== activePage) {
                    bounce();
                    popPage();
                  }
                }}
                key={pageName}
                aria-disabled={pageName === activePage}
                className={cn(
                  pageName === activePage
                    ? 'cursor-pointer bg-primary'
                    : 'cursor-pointer bg-slate-700 dark:bg-slate-300'
                )}>
                {pageName}
              </Badge>
            ))}
          </div>
          <CommandList className=''>
            <CommandEmpty>No results found.</CommandEmpty>
            {activePage === 'home' && (
              <React.Fragment>
                <CommandGroup heading='Suggestions'>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'projects'])}
                    className='cursor-pointer'>
                    <Icons.search.projects className='mr-2 h-4 w-4' />
                    <span>Search Projects</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'posts'])}
                    className='cursor-pointer'>
                    <Icons.search.posts className='mr-2 h-4 w-4' />
                    <span>Search Posts</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'social'])}
                    className='cursor-pointer'>
                    <Icons.share className='mr-2 h-4 w-4' />
                    <span>Social Accounts</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Navigation'>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'blogs'])}
                    className='cursor-pointer'>
                    <Icons.navigation.blog.icon className='mr-2 h-4 w-4' />
                    <span>Blog</span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'works'])}
                    className='cursor-pointer'>
                    <Icons.navigation.works.icon className='mr-2 h-4 w-4' />
                    <span>Works</span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'insights'])}
                    className='cursor-pointer'>
                    <Icons.navigation.insights.icon className='mr-2 h-4 w-4' />
                    <span>Insights</span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      router.push('/guestbook');
                      setOpen(false);
                    }}
                    className='cursor-pointer'>
                    <Icons.navigation.guestbook className='mr-2 h-4 w-4' />
                    <span>Guestbook</span>
                    <CommandShortcut>
                      <Icons.directions.arrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      router.push('/about');
                      setOpen(false);
                    }}
                    className='cursor-pointer'>
                    <Icons.navigation.about className='mr-2 h-4 w-4' />
                    <span>About</span>
                    <CommandShortcut>
                      <Icons.directions.arrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='General'>
                  <CommandItem
                    onSelect={() => setPromptMenu([...propmtMenu, 'themes'])}
                    className='cursor-pointer'>
                    <Icons.switch className='mr-2 h-4 w-4' />
                    <span>Change Theme</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      copy(window.location.href).then(() => {
                        // setIsCopied(true);
                        // setTimeout(() => setIsCopied(false), 150);
                        setOpen(false);
                        toast({
                          title: window.location.href,
                          description: 'Copied to Clipboard',
                          action: (
                            <ToastAction altText='Close'>Close</ToastAction>
                          )
                        });
                      });
                    }}
                    className='cursor-pointer'>
                    <Icons.copy className='mr-2 h-4 w-4' />
                    <span>Copy Current URL</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Help'>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      router.push('/docs');
                    }}
                    className='cursor-pointer'>
                    <Icons.docs className='mr-2 h-4 w-4' />
                    <span>Search Docs</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                    }}
                    className='cursor-pointer'>
                    <Icons.feedback className='mr-2 h-4 w-4' />
                    <span>Send Feedbacks</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem className='cursor-pointer'>
                    <Icons.meeting className='mr-2 h-4 w-4' />
                    <span>1 - 1 Connect</span>
                    <CommandShortcut></CommandShortcut>
                  </CommandItem>
                  <CommandItem className='cursor-pointer'>
                    <a
                      className='flex h-full w-full flex-row items-center'
                      target='_self'
                      href='mailto:mdirshaddev+query@gmail.com?subject=Query'>
                      <Icons.ask className='mr-2 h-4 w-4' />
                      <span>Ask Question</span>
                      <CommandShortcut></CommandShortcut>
                    </a>
                  </CommandItem>
                </CommandGroup>
              </React.Fragment>
            )}
            {activePage === 'projects' && <SearchProjectsPromptMenu />}
            {activePage === 'posts' && <SearchPostsPromptMenu />}
            {activePage === 'blogs' && (
              <CommandGroup heading='Blog'>
                {navigationConfig.blog.subnavigation.map(
                  ({ name, href, external, Icon, ShortcutIcon }) => (
                    <CommandItem
                      onSelect={() => {
                        if (external) {
                          window.open(href, '_blank');
                        } else {
                          router.push(href);
                        }
                        setOpen(false);
                      }}
                      className='cursor-pointer'
                      key={name}>
                      <Icon className='mr-2 h-4 w-4' />
                      <span>{name}</span>
                      <CommandShortcut>
                        <ShortcutIcon />
                      </CommandShortcut>
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            )}
            {activePage === 'works' && (
              <CommandGroup heading='Works'>
                {navigationConfig.works.subnavigation.map(
                  ({ name, href, external, Icon, ShortcutIcon }) => (
                    <CommandItem
                      onSelect={() => {
                        if (external) {
                          window.open(href, '_blank');
                        } else {
                          router.push(href);
                        }
                        setOpen(false);
                      }}
                      className='cursor-pointer'
                      key={name}>
                      <Icon className='mr-2 h-4 w-4' />
                      <span>{name}</span>
                      <CommandShortcut>
                        <ShortcutIcon />
                      </CommandShortcut>
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            )}

            {activePage === 'insights' && (
              <CommandGroup heading='Insights'>
                {navigationConfig.insights.subnavigation.map(
                  ({ name, href, Icon, ShortcutIcon }) => (
                    <CommandItem
                      onSelect={() => {
                        router.push(href);
                        setOpen(false);
                      }}
                      className='cursor-pointer'
                      key={name}>
                      <Icon className='mr-2 h-4 w-4' />
                      <span>{name}</span>
                      <CommandShortcut>
                        <ShortcutIcon />
                      </CommandShortcut>
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            )}
            {activePage === 'social' && (
              <CommandGroup heading='Social Accounts'>
                {socialAccountsConfig.map(
                  ({ name, href, AccountIcon, ShortcutIcon }) => (
                    <CommandItem
                      onSelect={() => {
                        window.open(href, '_blank');
                        setOpen(false);
                      }}
                      className='cursor-pointer'
                      key={name}>
                      <AccountIcon className='mr-2 h-4 w-4' />
                      <span>{name}</span>
                      <CommandShortcut>
                        <ShortcutIcon className='h-4 w-4' />
                      </CommandShortcut>
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            )}
            {activePage === 'themes' && (
              <CommandGroup heading='General'>
                {themeConfig.map(({ name, mode, ThemeIcon }) => (
                  <CommandItem
                    onSelect={() => setTheme(mode)}
                    key={name}
                    aria-label={name}
                    className='cursor-pointer'>
                    <ThemeIcon className='mr-2 h-4 w-4' />
                    <span>{name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </React.Fragment>
  );
}

// TODO: Async data fetching for list of projects
function SearchProjectsPromptMenu() {
  return <React.Fragment></React.Fragment>;
}

// TODO: Async data fetching from mdx files for posts
function SearchPostsPromptMenu() {
  return <React.Fragment></React.Fragment>;
}
