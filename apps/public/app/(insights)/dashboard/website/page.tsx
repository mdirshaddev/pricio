// Next
import { type Metadata } from 'next';

// React
import React from 'react';

export const metadata: Metadata = {
  title: 'Md Irshad - 📊 Website analytics',
  description: '📈 Analytics of this Website'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Website Dashboard page</div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Page;
