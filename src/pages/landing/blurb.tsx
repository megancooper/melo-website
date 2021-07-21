import Image from 'next/image';
import Button from '../../components/button';

const ReactLink = (
  <a
    href="https://reactjs.org?ref=melo"
    rel="noopener noreferrer"
    className="primary"
    target="_blank"
  >
    React
  </a>
);

const ReduxLink = (
  <a
    href="https://redux.js.org?ref=melo"
    rel="noopener noreferrer"
    className="primary"
    target="_blank"
  >
    Redux
  </a>
);

const ElectronLink = (
  <a
    href="https://www.electronjs.org?ref=melo"
    rel="noopener noreferrer"
    className="primary"
    target="_blank"
  >
    Electron
  </a>
);
const Blurb = () => (
  <div className="container mx-auto px-6 py-2 flex justify-between items-center mt-20">
    <div className="hidden lg:inline-block mr-10">
      <Image
        src="/assets/melo-screen.png"
        alt="scrumy-list design"
        width={1000}
        height={700}
      />
    </div>
    <div>
      <h1 className="text-5xl font-bold mb-3">
        Simple
        {' '}
        <br />
        {' '}
        customizable
        {' '}
        <br />
        {' '}
        music player.
      </h1>
      <p>
        Melo is a simple music organizer built to help you play and manage
        audio files on your computer.
        {' '}
        <br />
        Melo is powered by
        {' '}
        {ReactLink}
        ,
        {' '}
        {ReduxLink}
        , and
        {' '}
        {ElectronLink}
        .
      </p>

      <div className="mt-10 flex flex-col lg:flex-row">
        <input disabled placeholder="Coming shortly..." type="email" className="mb-4 lg:mr-2 lg:mb-0 flex-grow" />
        <Button disabled>Stay Updated</Button>
      </div>
    </div>
  </div>
);

export default Blurb;
