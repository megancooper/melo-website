import React from 'react';
import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
import useDownload from '../../hooks/useDownload';
import {OS} from '../../constants';

const useStyles = createStyles(theme => ({
  fullBleed: {
    backgroundColor: theme.colors.gray[1],
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
      paddingLeft: '16px',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface DownloadProps {
  latestVersion: string
}

const VERSIONS = [
  {label: 'MacOS', value: OS.MAC},
  {label: 'Windows', value: OS.WINDOWS},
  {label: 'Linux', value: OS.LINUX},
];

const Download: React.FC<DownloadProps> = ({latestVersion = '0.0.1'}: DownloadProps) => {
  const {classes} = useStyles();
  const {download} = useDownload();

  const footerHeight = 320;
  const containerHeight = `calc(100vh - ${footerHeight}px)`;

  return (
    <Container className={classes.wrapper} style={{height: containerHeight}}>
      <Title className={classes.title}>
        Download Alpha
        {' '}
        {!!latestVersion && 'v'}
        {latestVersion}
      </Title>

      <Container>
        <Text size="sm" className={classes.description}>
          Download the latest version of Melo. Note, this version is an
          alpha version and could contain bugs. Feel free to
          &nbsp;
          <a href="/feedback">submit feedback</a>
          &nbsp;
          or
          &nbsp;
          <a href="https://github.com/melo-music-app/melo-issues" target="_blank" rel="noreferrer">report any bugs</a>
          &nbsp;
          you encounter.
        </Text>

        <Group mt={30} position="center">
          {VERSIONS.map(({label, value}) => (
            <Button
              key={label}
              onClick={() => download({os: value, version: latestVersion})}
            >
              Download For&nbsp;
              {label}
            </Button>
          ))}
        </Group>
      </Container>

    </Container>
  );
};

export const getServerSideProps = async () => {
  let latestVersion: string = '';
  let res: Response;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_MELO_API}/api/latest`);

    if (res?.ok) {
      const data = await res?.json();
      latestVersion = data.latest;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      latestVersion,
    },
  };
};

export default Download;
