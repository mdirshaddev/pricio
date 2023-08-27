'use client';

import dynamic from 'next/dynamic';

import { CreateLoading } from 'src/shared/createLoading';

const SpotifyCurrentPlaying = dynamic(
  () =>
    import('src/shared/showcase/spotify').then(
      Spotify => Spotify.SpotifyOverview
    ),
  { ssr: false, loading: CreateLoading({ width: 360, height: 136 }) }
);

export { SpotifyCurrentPlaying };
