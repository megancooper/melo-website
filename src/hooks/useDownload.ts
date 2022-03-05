import {useState} from 'react';

interface UseDownload {
  os: string;
  version: string;
}

const useDownload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const download = async ({os, version}: UseDownload) => {
    setIsLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_MELO_API}/api/download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        os,
        version,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const {url} = data;
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${url.split('/').pop()}`);
      document.body.appendChild(link);
      link.click();
    }

    setIsLoading(false);
  };

  return {isLoading, download};
};

export default useDownload;
