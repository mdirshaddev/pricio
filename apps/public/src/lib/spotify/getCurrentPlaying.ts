// Sentry
import { captureException } from '@sentry/nextjs';

// Lib
import { getAccessToken } from 'src/lib/spotify/getAccessToken';

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: [{ name: string }];
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
    uri?: string;
  };
  currently_playing_type: string;
}

const getCurrentPlaying = async (): Promise<SpotifyData> => {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(
      process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );
    if (response.status === 204 || response.status > 400) {
      return {
        is_playing: false,
        item: {
          name: '',
          album: {
            name: '',
            artists: [{ name: '' }],
            images: [{ url: '' }]
          },
          external_urls: {
            spotify: ''
          },
          uri: ''
        },
        currently_playing_type: ''
      };
    }

    return (await response.json()) as SpotifyData;
  } catch (err) {
    captureException(err);
    throw new Error('Spotify Current Playing function is not working');
  }
};

export { getCurrentPlaying };
