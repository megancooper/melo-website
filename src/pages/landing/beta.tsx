import React from 'react';
import Button from '../../components/button';

interface DownloadButtonProps {
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({text}: DownloadButtonProps) => (
  <Button className="text-lg w-full md:w-auto mb-6 shadow hover: shadow-lg md:mx-8 md:px-4 md:py-4 lg:py-4">
    {text}
  </Button>
);

const VERSIONS = [
  'MacOS (.dmg)',
  'Windows (.exe)',
  'Linux (.AppImage)',
];

const Beta: React.FC = () => (
  <>
    <div className="font-bold text-2xl text-center mb-4">Download Beta</div>
    <div className="text-center text-lg mx-8 md:mx-0">
      Download the latest version of melo. Note, this version is still a
      beta and could contain bugs.
    </div>
    <div className="container mx-auto mt-8 mb-20 flex justify-center">
      <div className="w-full md:w-auto">
        <div className="flex flex-col mx-8 md:mx-0 md:flex-row">
          {VERSIONS.map((ver, index) => (
            <DownloadButton
              key={`ver_${index}`}
              text={ver}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Beta;
