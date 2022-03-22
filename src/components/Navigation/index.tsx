import React from 'react';
import Link from 'next/link';
import {
  createStyles, Header, Menu, Group, Center, Burger, Container,
} from '@mantine/core';
import {useBooleanToggle} from '@mantine/hooks';
import {ChevronDown} from 'react-bootstrap-icons';
import {NAVIGATION_LINKS} from '../../constants';
import Logo from '../Logo';

const useStyles = createStyles(theme => ({
  header: {
    position: 'fixed',
    zIndex: 299,
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderBottom: '1px solid #dee2e6',
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const Navigation = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const {classes} = useStyles();

  const items = NAVIGATION_LINKS.map(link => {
    const menuItems = link.links?.map(item => (
      <Link
        key={item.label}
        href={item.link || '#'}
      >
        <Menu.Item key={item.link} className={classes.link}>
          {item.label}
        </Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={0.25}
          control={(
            <a
              href={link.link}
              className={classes.link}
              onClick={event => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          )}
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link || '#'}
      >
        <span className={classes.link}>
          {link.label}
        </span>
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Logo />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
};

export default Navigation;
