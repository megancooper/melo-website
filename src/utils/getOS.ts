import {OS} from '../constants';

interface GetOS {
  os: string;
  value: string;
}

const getOS = (): GetOS => {
  // @ts-ignore
  const {userAgent} = global.window?.navigator || {};
  // @ts-ignore
  const {platform} = global.window?.navigator || {};
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = {os: '', value: ''};

  if (macosPlatforms.indexOf(platform) !== -1 || iosPlatforms.indexOf(platform) !== -1) {
    os = {os: 'Mac', value: OS.MAC};
  } else if (windowsPlatforms.indexOf(platform) !== -1 || /Android/.test(userAgent)) {
    os = {os: 'Windows', value: OS.WINDOWS};
  } else if (!os && /Linux/.test(platform)) {
    os = {os: 'Linux', value: OS.LINUX};
  }

  return os;
};

export default getOS;
