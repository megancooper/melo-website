import React from 'react';
import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
import Image from '../../components/Image';
import getOS from '../../utils/getOS';
import useDownload from '../../hooks/useDownload';

const useStyles = createStyles(theme => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  download: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
    backgroundColor: '#8BA4F8',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#8BA4F8',
    },

    svg: {
      marginLeft: '1rem',
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none !important', /* Use important to override NextJS display styles */
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: '#D8E1FD',
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

interface HeaderProps {
  latestVersion: string;
}

const Header = ({latestVersion}: HeaderProps) => {
  const {classes} = useStyles();
  const {os, value} = getOS();
  const {download} = useDownload();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A&nbsp;
              <span className={classes.highlight}>simple</span>
              <br />
              music player
            </Title>
            <Text color="dimmed" mt="md">
              Melo is a music organizer built to help you play and manage
              audio files on your computer.
            </Text>

            <Group mt={30}>
              <Button size="md" className={classes.download} onClick={() => download({os: value, version: latestVersion})}>
                Download Alpha&nbsp;
                {!!latestVersion && 'v'}
                {latestVersion}
                {!!os && ' for '}
                {os}
              </Button>
            </Group>
          </div>
          <Image
            src="alpha-screenshot.png"
            alt="melo app screenshot"
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
