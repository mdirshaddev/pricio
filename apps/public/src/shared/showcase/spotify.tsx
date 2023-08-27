'use client';

// Next
import Image from 'next/image';

// React Query
import { useQuery } from '@tanstack/react-query';

// Services
import { getSpotifyCurrentPlaying } from 'src/services/spotify';
import { SiSpotify } from 'react-icons/si';

// TODO: Call the api here and populate the data
export const SpotifyOverview: React.FC = (): JSX.Element => {
  const { data, isLoading, isError, isFetched } = useQuery(['spotify'], () =>
    getSpotifyCurrentPlaying()
  );
  return (
    <div className='h-[136px] w-[360px] cursor-pointer overflow-hidden rounded-xl bg-primary p-[20px] transition-all hover:shadow-xl '>
      {isLoading && !data && !isError && !isFetched && (
        <div className='flex h-full flex-col items-center justify-center'>
          <div className='text-white'>Loading...</div>
        </div>
      )}
      {isFetched &&
        !isLoading &&
        !isError &&
        data.data &&
        data.data.isPlaying && (
          <div className='flex flex-row items-start gap-4'>
            <Image
              className='rounded-md'
              quality={100}
              src={data.data.albumImageUrl}
              width={96}
              height={96}
              alt={data.data.title}
            />
            <div className='flex w-full flex-col justify-between overflow-hidden'>
              <div>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap font-extrabold text-white'>
                  {data.data.title}
                </p>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap text-xs text-white'>
                  {data.data.album}
                </p>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap text-xs text-white'>
                  {data.data.artist}
                </p>
              </div>
              <div className='flex justify-end'>
                <SiSpotify className='h-7 w-7 text-white' />
              </div>
            </div>
          </div>
        )}
      {isFetched && data?.data && !data.data.isPlaying && (
        <div className='flex h-full flex-row items-center justify-center gap-8'>
          <SiSpotify className='h-16 w-16 text-white' />
          <p className='text-xl font-semibold text-white'>
            Not playing right now
          </p>
        </div>
      )}
    </div>
  );
};
