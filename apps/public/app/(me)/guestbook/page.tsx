// Next
import { type Metadata } from 'next';

// React
import React from 'react';

// Animation
import { FadeInContainer } from 'src/animations/FadeIn';

// Shared
import { GiscusCommentBox } from 'src/shared/giscus';

export const metadata: Metadata = {
  title: 'Md Irshad - 📔 Guestbook',
  description: '📝 Comment on my work'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto mb-8 mt-10 h-full max-w-[1400px] px-4 md:mb-[unset] lg:px-8'>
        <FadeInContainer>
          <p data-fade='0' className='pb-2 text-4xl font-bold'>
            Guestbook
          </p>
          <p data-fade='1' className='pb-2'>
            Leave whatever you like to say—message, appreciation, suggestions.
            If you got some questions, you can leave them on the{' '}
            <a
              target='_blank'
              href='https://github.com/mdirshaddev/mdirshad/discussions/2'
              className='cursor-newtab font-bold underline '>
              AMA discussions
            </a>
          </p>
          <figure className='mt-12'>
            <GiscusCommentBox />
          </figure>
        </FadeInContainer>
      </section>
    </React.Fragment>
  );
};

export default Page;
