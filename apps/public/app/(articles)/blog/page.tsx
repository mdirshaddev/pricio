// Next
import { type Metadata } from 'next';

// React
import React from 'react';

export const metadata: Metadata = {
  title: 'Md Irshad - 📑 Blog',
  description: '📖 Posts on Technical, Theoretical and Demo projects'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Blog page</div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Page;
