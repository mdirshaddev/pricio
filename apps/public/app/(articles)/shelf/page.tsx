// Next
import { type Metadata } from 'next';

// React
import React from 'react';

export const metadata: Metadata = {
  title: 'Md Irshad - 📚 My Shelf',
  description: '📚 My Collection of day to day resource'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Shelf page</div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Page;
