// Node URL
import { URLSearchParams } from 'url';

// Sentry
import { captureException } from '@sentry/nextjs';

const base64Encoded = Buffer.from(
  `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<{
  access_token: string;
  token_type: string;
  expires_at: number;
  scopes: string;
}> => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64Encoded}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams([
        ['grant_type', 'refresh_token'],
        ['refresh_token', process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN]
      ]).toString()
    });
    return (await response.json()) as {
      access_token: string;
      token_type: string;
      expires_at: number;
      scopes: string;
    };
  } catch (err) {
    captureException(err);
    throw new Error('Spotify Access Token function is not working');
  }
};

export { getAccessToken };
