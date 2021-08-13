import React from 'react';
import Link from 'next/link';

const Blurb: React.FC = () => (
  <div className="container mx-auto px-6 py-2 pt-24 lg:pt-0 flex flex-col justify-between items-center mt-10 lg:mt-20 overflow-scroll lg:overflow-hidden">
    <h2 className="text-3xl lg:text-5xl font-bold mb-6 mx-6">
      Beta signup coming soon!
    </h2>

    <p className="text-center text-xl mb-6 mx-6 lg:mx-64 mt-4 bg-primary-light-3 p-4 rounded">
      In the meantime you can
      {' '}
      <Link href="/">
        <span className="primary cursor-pointer border-bottom-primary">subscribe</span>
      </Link>
      {' '}
      to receive updates.
    </p>
  </div>
);

export default Blurb;
