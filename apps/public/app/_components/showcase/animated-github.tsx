'use client';

import dynamic from 'next/dynamic';

import { CreateLoading } from 'src/shared/createLoading';

const GithubOverview = dynamic(
  () =>
    import('src/shared/showcase/github').then(GitHub => GitHub.GithubOverview),
  { ssr: false, loading: CreateLoading({ width: 360, height: 264 }) }
);

export { GithubOverview };
