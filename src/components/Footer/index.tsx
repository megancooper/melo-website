import React from 'react';
import Link from 'next/link';
import {
  createStyles, Text, Container, ActionIcon, Group,
} from '@mantine/core';
import {Twitter, SuitHeartFill} from 'react-bootstrap-icons';
import {FOOTER_LINKS} from '../../constants';
import Logo from '../Logo';

const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  madeBy: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '0.85rem',
    marginRight: '2rem',
  },
}));

const Footer = () => {
  const {classes} = useStyles();
  const groups = FOOTER_LINKS.map(group => {
    const links = group.links.map((link, index) => (
      <Link
        key={link.label}
        href={link.link || '#'}
      >
        <span className={classes.link}>{link.label}</span>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
          <Text size="xs" color="dimmed" className={classes.description}>
            A simple music organizer built to help you play and manage audio files on your computer
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          ©
          &nbsp;
          {new Date().getFullYear()}
          &nbsp;
          Yam Software LLC. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Link href="https://www.megancooper.com">
            <div className={classes.madeBy}>
              <span>Made with&nbsp;</span>
              <SuitHeartFill size={15} color="#FF2D50" />
              &nbsp;
              <span>by Megan</span>
            </div>
          </Link>

          <ActionIcon size="lg">
            <Twitter size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
