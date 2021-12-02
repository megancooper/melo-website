import React from 'react';
import Head from 'next/head';
import Header from '../../components/header';
import Blurb from './blurb';
import Features from './features';
import Beta from './beta';
import Footer from '../../components/footer';

const Landing = () => (
  <>
    <Head>
      <title>Melo</title>
    </Head>
    <div className="flex flex-col">
      <Header />
      <Blurb />
      <Features />
      <Beta />
    </div>
    <Footer />
  </>
);

export default Landing;
