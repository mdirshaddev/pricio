'use client';

// Next
import Image from 'next/image';

// GraphQL Codegen generated
import { useGithubOverviewQuery } from 'generated/generates';

// React Icons
import { SiClockify } from 'react-icons/si';
import { TfiGithub } from 'react-icons/tfi';

// Services
import { githubGraphQLClient } from 'src/services/github';

const month = new Date().getUTCMonth();
const year = new Date().getUTCFullYear();

// TODO: Fetch my githb data from my personal github account and populate here
export const GithubOverview: React.FC = (): JSX.Element => {
  const { data, isFetched, isLoading, isError } = useGithubOverviewQuery(
    githubGraphQLClient,
    { username: 'mdirshaddev', first: 5 },
    { cacheTime: 50000 }
  );
  return (
    <div
      style={{
        background: 'linear-gradient(to right bottom, #007FFF, #0059B2 120%)',
        color: 'white'
      }}
      className='h-[264px] cursor-pointer overflow-hidden rounded-xl border-[1px] border-solid border-[#5090D3] p-[20px] transition-all hover:shadow-xl'>
      {isLoading && !data && !isError && !isFetched && (
        <div className='flex h-full flex-col items-center justify-center'>
          <div className='text-white'>Loading...</div>
        </div>
      )}
      {isFetched && !isLoading && !isError && data && (
        <div className='flex flex-col items-start gap-6'>
          <div className='flex flex-row items-center gap-4'>
            <SiClockify /> {`${month}, ${year}`}
          </div>
          <div className='flex flex-row items-center gap-4 font-bold'>
            <TfiGithub className='text-3xl' />
            @mdirshaddev
          </div>
          <p className='font-medium'>{data.user?.bio}</p>
          <div className='flex w-full gap-4'>
            <div className='relative h-12 w-12'>
              <Image
                src={data.user?.avatarUrl}
                fill
                className='rounded'
                alt={data.user?.name as string}
              />
            </div>
            <div className='flex-1'>
              <p className='font-extrabold'>{data.user?.name}</p>
              <p className='text-sm'>{data.user?.email}</p>
            </div>
          </div>
        </div>
      )}
      {isFetched && !data && (
        <div className='flex h-full flex-col items-center justify-center'>
          <p className='text-white'>There is no data</p>
        </div>
      )}
    </div>
  );
};
