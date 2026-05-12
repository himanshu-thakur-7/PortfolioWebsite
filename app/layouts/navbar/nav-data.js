import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#system-projects',
  },
  {
    label: 'Blog',
    pathname: '/#blogs',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Experience',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
