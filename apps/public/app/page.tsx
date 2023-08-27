// React
import React from 'react';

// Next
import Link from 'next/link';

// Components
import {
  SocialAccountTooltip,
  GithubOverview,
  SpotifyCurrentPlaying
} from 'app/_components';

// Animations
import { FadeInContainer } from 'src/animations/FadeIn';

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto h-full max-w-[1400px] pb-10 portrait:h-full portrait:pb-10 portrait:pt-10 landscape:h-[calc(100vh-64px)] landscape:pb-0'>
        <article className='h-full px-4 lg:px-8'>
          <div className='mx-auto grid h-full grid-cols-1 place-content-center gap-8 md:place-content-stretch lg:grid-cols-2 xl:gap-0'>
            <FadeInContainer className='mx-0 my-auto w-full pt-10 lg:pt-12'>
              <p
                data-fade='0'
                className='text-center text-3xl font-bold sm:text-4xl md:text-left md:text-5xl xl:text-6xl '>
                Hi, I&apos;m Md Irshad
              </p>
              <p
                data-fade='1'
                className='mx-auto my-0 mt-4 max-w-sm text-center text-base md:ml-0 md:max-w-md md:text-left'>
                An aspiring full stack developer with the desire to learn and
                grow. I am eager to learn new technologies and tools to keep
                myself updated and also to meet the recent market demand.
              </p>
              <div
                data-fade='2'
                className='mt-4 flex flex-wrap items-center justify-center gap-4 md:items-start md:justify-start'>
                <Link
                  href={'/'}
                  className='rounded-md bg-primary px-4 py-2 font-bold text-white'>
                  Read blog
                </Link>
                <Link
                  href={'/'}
                  className='rounded-md px-4 py-2 font-bold text-primary ring-1 ring-primary'>
                  About Me
                </Link>
              </div>
              <div
                data-fade='3'
                className='mt-4 flex flex-row flex-wrap items-center justify-center gap-4 md:justify-start'>
                <SocialAccountTooltip />
              </div>
            </FadeInContainer>
            <div className='relative hidden h-[calc(100%-80px)] min-w-[50vw] overflow-hidden rounded-bl-lg bg-showcase-container-light dark:bg-showcase-container-dark dark:bg-blend-multiply lg:block'>
              <div className='min-w-max overflow-auto lg:min-w-[2000px]'>
                <div className='grid grid-cols-1 p-0 lg:flex lg:w-1/2 lg:p-6'>
                  <div className='w-full lg:w-[360px]'>
                    <GithubOverview />
                    <div className='mt-[20px]'>
                      {' '}
                      <SpotifyCurrentPlaying />
                      {/* <WeatherOverview /> */}
                    </div>
                  </div>
                  <div className='w-full pl-0 lg:w-[400px] lg:pl-6'>
                    <div className='mt-[20px]'>
                      {/* <MeetingScheduler /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className=''>
        <article className=''></article>
      </section>
    </React.Fragment>
  );
};

export default Page;
