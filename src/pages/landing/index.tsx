import React from 'react';
import Head from 'next/head';
import Header from '../../components/header';
import Blurb from './blurb';
import Features from './features';
import Beta from './beta';
import Subscribe from './subscribe';
import Footer from '../../components/footer';

interface LandingProps {
  latestVersion: string
}

const Landing: React.FC<LandingProps> = ({latestVersion}: LandingProps) => (
  <>
    <Head>
      <title>Melo</title>
    </Head>
    <div className="flex flex-col">
      <Header />
      <Blurb latestVersion={latestVersion} />
      <Features />
      <Beta latestVersion={latestVersion} />
      <Subscribe />
    </div>
    <Footer />
  </>
);

export const getServerSideProps = async () => {
  let latestVersion: string = '';

  const res = await fetch(`${process.env.NEXT_PUBLIC_MELO_API}/api/latest`);

  if (res.ok) {
    const data = await res.json();
    latestVersion = data.latest;
  }

  return {
    props: {
      latestVersion,
    },
  };
};

export default Landing;
