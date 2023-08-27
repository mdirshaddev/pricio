// Sentry
import { captureException } from '@sentry/nextjs';

/**
 * The function `getSpotifyPlaying` is an asynchronous function that fetches data from a specified URL
 * and returns an object with information about the currently playing song on Spotify.
 */
const getSpotifyCurrentPlaying = async (): Promise<{
  data: {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
  };
}> => {
  try {
    const response = await fetch('/api/spotify/current', {
      method: 'GET'
    });
    return (await response.json()) as {
      data: {
        isPlaying: boolean;
        title: string;
        album: string;
        artist: string;
        albumImageUrl: string;
        songUrl: string;
      };
    };
  } catch (err) {
    captureException(err);
    throw new Error(`Fetching Spotify Current playing function not working`);
  }
};

export { getSpotifyCurrentPlaying };
