'use client';

import { Icons } from 'configs/Icons';

export type NavigtionConfig = typeof navigationConfig;

// TODO: Shortcuts are yet to be added and need to be linked with command center
export const navigationConfig = {
  blog: {
    name: 'Blog',
    ShortcutIcon: Icons.directions.arrowUpRight,
    Icon: Icons.navigation.blog.icon,
    subnavigation: [
      {
        name: 'Posts',
        description: 'Hands-on, Tutorials and R&D ',
        href: '/blog',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.blog.posts,
        external: false
      },
      {
        name: 'Shorts',
        description: 'Personal Notion Notes',
        href: '/shorts',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.blog.notes,
        external: false
      },
      {
        name: 'Templates',
        description: 'Project starter templates',
        href: 'https://github.com/mdirshaddev?tab=repositories&q=&type=template&language=&sort=stargazers',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.blog.github,
        external: true
      }
    ]
  },
  works: {
    name: 'Works',
    ShortcutIcon: Icons.directions.arrowUpRight,
    Icon: Icons.navigation.works.icon,
    subnavigation: [
      {
        name: 'Projects',
        description: 'Variety of projects',
        href: '/projects',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.works.projects,
        external: false
      },
      {
        name: 'CodeSandBox',
        description: 'Projects on CodeSandBox',
        href: 'https://codesandbox.io/u/mdirshaddev',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.works.codesandbox,
        external: true
      },
      {
        name: 'CodePen',
        description: 'Projects on CodePen',
        href: 'https://codepen.io/mdirshaddev',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.works.codepen,
        external: true
      },
      {
        name: 'Arduino',
        description: 'Projects on IoT',
        href: 'https://projecthub.arduino.cc/irshaddev',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.works.arduino,
        external: true
      }
    ]
  },
  insights: {
    name: 'Insights',
    ShortcutIcon: Icons.directions.arrowUpRight,
    Icon: Icons.navigation.insights.icon,
    subnavigation: [
      {
        name: 'Overview',
        description: 'Combined metrics',
        href: '/dashboard',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.insights.dashboard
      },
      {
        name: 'GitHub Dashboard',
        description: 'Personal github insights',
        href: '/dashboard/github',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.insights.github
      },
      {
        name: 'Website Insights',
        description: 'Website metrics insight',
        href: '/dashboard/website',
        ShortcutIcon: Icons.directions.arrowUpRight,
        Icon: Icons.navigation.insights.website
      }
    ]
  },
  guestbook: {
    name: 'Guestbook',
    href: '/guestbook',
    Icon: Icons.navigation.guestbook,
    ShortcutIcon: Icons.directions.arrowUpRight
  },
  about: {
    name: 'About',
    href: '/about',
    Icon: Icons.navigation.about,
    ShortcutIcon: Icons.directions.arrowUpRight
  }
};
