import React from 'react';
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import {
  HandIndexThumbFill, FileEarmarkMusicFill, Laptop, Icon,
} from 'react-bootstrap-icons';

const FEATURES = [
  {
    icon: HandIndexThumbFill,
    title: 'User-friendly Interface',
    description: 'Tired of not having an intuitive way to manage your local audio files? With Melo you can organize your files with a modern interface.',
  },
  {
    icon: FileEarmarkMusicFill,
    title: 'Music Management Features',
    description: 'Craving features only available with streaming apps? Group your locals files by curating playlists within Melo.',
  },
  {
    icon: Laptop,
    title: 'Multi-platform Support',
    description: 'Melo is available on all major platforms, including Windows, MacOS, and Linux.',
  },
];

interface FeatureProps {
  icon: Icon;
  title: string;
  description: string;
}

export function Feature({icon: BootstrapIcon, title, description}: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="filled" color="dark" size={40} radius={40}>
        <BootstrapIcon fill="#FFFFFF" size={36} style={{width: 20, height: 20}} />
      </ThemeIcon>
      <Text style={{marginTop: theme.spacing.sm, marginBottom: 7}}>{title}</Text>
      <Text size="sm" color="dimmed" style={{lineHeight: 1.6}}>
        {description}
      </Text>
    </div>
  );
}

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
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

const Features = () => {
  const {classes} = useStyles();
  const theme = useMantineTheme();
  const features = FEATURES.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <div className={classes.fullBleed}>
      <Container className={classes.wrapper}>
        <Title className={classes.title}>
          Intuitive, Modern, and Familiar
        </Title>

        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            A cross-platform, desktop music player that is
            for users who want a modern experience.
          </Text>
        </Container>

        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            {maxWidth: 980, cols: 2, spacing: 'xl'},
            {maxWidth: 755, cols: 1, spacing: 'xl'},
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Features;
