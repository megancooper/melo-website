// eslint-disable-next-line import/prefer-default-export
export const OS = {
  MAC: 'mac',
  WINDOWS: 'win',
  LINUX: 'linux',
};

export const NAVIGATION_LINKS = [
  {link: '/download', label: 'Download'},
  {label: 'Feedback', link: '/feedback'},
  {link: 'https://docs.melo-app.org/', label: 'Docs'},
  {
    label: 'Support',
    links: [
      {
        link: 'https://github.com/melo-music-app/melo-issues',
        label: 'Report Bugs',
      },
      {
        link: 'https://docs.melo-app.org/faq',
        label: 'FAQ',
      },
    ],
  },
];

export const FOOTER_LINKS = [
  {
    title: 'About',
    links: [
      {label: 'Submit Feedback', link: '/feedback'},
      // {label: 'Features', link: '/features'},
      // {label: 'Pricing', link: '/pricing'},
    ],
  },
  // {
  //   title: 'Legal',
  //   links: [
  //     {label: 'Privacy Statement', link: '/privacy'},
  //     {label: 'Terms and Conditions', link: '/terms'},
  //     {label: 'License Statement', link: '/license'},
  //   ],
  // },
  {
    title: 'Support',
    links: [
      {label: 'Report Bugs', link: 'https://github.com/melo-music-app/melo-issues'},
      {label: 'FAQ', link: 'https://docs.melo-app.org/faq'},
      {label: 'Documentation', link: 'https://docs.melo-app.org/'},
    ],
  },
];
