import React from 'react';
import Image from 'next/image';
import {Download} from 'react-bootstrap-icons';
import Button from '../../components/button';
import getOS from '../../utils/getOS';
import useDownload from '../../hooks/useDownload';

interface BlurbProps {
  latestVersion: string
}

const Blurb: React.FC<BlurbProps> = ({latestVersion}: BlurbProps) => {
  const {os, value} = getOS();
  const {download} = useDownload();

  return (
    <div className="container mx-auto px-8 py-2 lg:px-24 lg:pb-0 flex justify-between items-center mt-20 mb-10 flex-col lg:flex-row">
      <div className="hidden md:inline-block mr-10">
        <Image
          src="/assets/melo-screenshot.png"
          alt="scrumy-list design"
          width={1000}
          height={700}
          priority
          placeholder="blur"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-3">
          A simple, intuitive, music player.
        </h1>
        <p>
          Melo is a simple music organizer built to help you play and manage
          audio files on your computer.
        </p>

        <Button
          onClick={() => download({os: value, version: latestVersion})}
          className="flex items-center justify-center md:justify-auto mt-4 px-4 py-4 lg:px-4 lg:py-4 hover:shadow-md btn-hover-fill w-full md:w-auto"
        >
          Download Alpha
          {' '}
          {!!latestVersion && 'v'}
          {latestVersion}
          &nbsp;
          {!!os && 'for'}
          &nbsp;
          {os}
          <Download fill="#FFF" className="ml-8 md:ml-2 hover-fill" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Blurb;
