// Next
import { NextResponse } from 'next/server';

// Sentry
import { captureException } from '@sentry/nextjs';

// Spotify Current Playing
import { getCurrentPlaying } from 'src/lib/spotify/getCurrentPlaying';

export const revalidate = 0;

export async function GET() {
  try {
    const response = await getCurrentPlaying();
    const data = {
      isPlaying: response.is_playing,
      title: response.item.name,
      album: response.item.album.name,
      artist: response.item.album.artists.map(artist => artist.name).join(', '),
      albumImageUrl: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify
    };

    return NextResponse.json(
      {
        data: data
      },
      {
        status: 200
      }
    );
  } catch (err) {
    captureException(err);
    return NextResponse.json(
      {
        data: {
          error: 'Some error has occured in server side'
        }
      },
      { status: 500 }
    );
  }
}
