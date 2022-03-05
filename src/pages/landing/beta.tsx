import React, {ButtonHTMLAttributes} from 'react';
import Button from '../../components/button';
import useDownload from '../../hooks/useDownload';
import {OS} from '../../constants';

interface DownloadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface BetaProps {
  latestVersion: string
}

const DownloadButton:
React.FC<DownloadButtonProps> = ({children, ...rest}: DownloadButtonProps) => (
  <Button className="text-lg w-full md:w-auto mb-6 shadow hover: shadow-lg md:mx-8 md:px-4 md:py-4 lg:py-4" {...rest}>
    {children}
  </Button>
);

const VERSIONS = [
  {label: 'MacOS (.dmg)', value: OS.MAC},
  {label: 'Windows (.exe)', value: OS.WINDOWS},
  {label: 'Linux (.AppImage)', value: OS.LINUX},
];

const Beta: React.FC<BetaProps> = ({latestVersion}: BetaProps) => {
  const {download} = useDownload();

  return (
    <div className="bg-primary-light-2">
      <div className="font-bold text-2xl text-center mb-4">
        Download Alpha
        {' '}
        {!!latestVersion && 'v'}
        {latestVersion}
      </div>
      <div className="text-center text-lg mx-8 md:mx-0">
        Download the latest version of melo. Note, this version is an
        alpha version and could contain bugs.
      </div>
      <div className="container mx-auto mt-8 mb-20 flex justify-center">
        <div className="w-full md:w-auto">
          <div className="flex flex-col mx-8 md:mx-0 md:flex-row">
            {VERSIONS.map(({label, value}) => (
              <DownloadButton
                key={label}
                onClick={() => download({os: value, version: latestVersion})}
              >
                {label}
              </DownloadButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beta;
