import React from 'react';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Form from './form';

const Feedback = () => (
  <>
    <Head>
      <title>Feedback</title>
    </Head>
    <div className="lg:h-screen flex flex-col">
      <Header />
      <Form />
    </div>
    <Footer />
  </>
);

export default Feedback;
