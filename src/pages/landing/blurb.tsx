import React from 'react';
import Image from 'next/image';
import {
  Download,
  Boombox,
  MusicNoteList,
  MusicPlayer,
  Vinyl,
  VinylFill,
  MusicPlayerFill,
  FileEarmarkMusicFill,
  MusicNoteBeamed,
} from 'react-bootstrap-icons';
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
    <div className="px-8 pt-24 pb-40 lg:px-24 blurb flex flex-col justify-between items-center relative" style={{backgroundColor: '#404141'}}>
      <Boombox className="absolute left-96 top-20 background-icon" size={50} fill="#E7B898" />
      <MusicNoteList className="absolute top-80 background-icon" size={50} fill="#B0D4E7" style={{right: '28rem'}} />
      <MusicPlayer className="absolute right-12 top-24 background-icon" size={50} fill="#A8CBA8" />
      <Vinyl className="absolute right-96 top-40 background-icon" size={60} fill="#B2D5E8" />
      <VinylFill className="absolute right-48 top-60 background-icon" size={50} fill="#D1B2E8" />
      <MusicPlayerFill className="absolute left-48 top-60 background-icon" size={50} fill="#BFC4E9" />
      <FileEarmarkMusicFill className="absolute top-80 background-icon" size={50} fill="#E9BFD5" style={{left: '30rem'}} />
      <MusicNoteBeamed className="absolute top-96 background-icon" size={50} fill="#D3E9BF" style={{left: '20rem'}} />

      <div className="flex flex-col items-center z-20">
        <h1 className="text-5xl mb-3 text-center text-white">
          A simple, intuitive, music player.
        </h1>
        <p className="text-center text-white">
          Melo is a simple music organizer built to help you play and manage
          audio files on your computer.
        </p>

        <Button
          onClick={() => download({os: value, version: latestVersion})}
          className="flex items-center justify-center md:justify-auto mt-6 px-4 py-4 lg:px-4 lg:py-4 hover:shadow-md btn-hover-fill w-full md:w-auto"
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

      <div className="px-8 pt-24 pb-40 lg:px-24 lg:pb-96 z-20 absolute top-80 screenshot-overlay">
        <Image
          src="/assets/alpha-screenshot.png"
          alt="scrumy-list design"
          width={2340}
          height={1644}
          priority
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Blurb;
