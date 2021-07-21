import Head from 'next/head';
import Header from '../../components/header';
import Blurb from './blurb';
import Footer from '../../components/footer';

const Landing = () => (
  <>
    <Head>
      <title>Melo</title>
    </Head>
    <div className="h-screen flex flex-col">
      <Header />
      <Blurb />
    </div>
    <Footer />
  </>
);

export default Landing;
