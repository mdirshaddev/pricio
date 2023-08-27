// Next
import { NextResponse } from 'next/server';

// Sentry
import { captureException } from '@sentry/nextjs';

export const revalidate = 0;

export async function GET() {
  try {
    return NextResponse.json(
      {
        data: {
          message: 'Vercel Deployed API is working'
        }
      },
      { status: 200 }
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
