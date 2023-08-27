// React
import React from 'react';

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Shorts Article page</div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Page;
