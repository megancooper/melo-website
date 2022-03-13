import React from 'react';
import Header from './Header';
import Features from './Features';
import Subscribe from './Subscribe';

interface LandingProps {
  latestVersion: string
}

const Landing: React.FC<LandingProps> = ({latestVersion}: LandingProps) => (
  <>
    <Header latestVersion={latestVersion} />
    <Features />
    <Subscribe />
  </>
);

export const getServerSideProps = async () => {
  let latestVersion: string = '';
  let res: Response;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_MELO_API}/api/latest`);

    if (res?.ok) {
      const data = await res?.json();
      latestVersion = data.latest;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      latestVersion,
    },
  };
};

export default Landing;
