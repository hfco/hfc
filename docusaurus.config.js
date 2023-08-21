// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require("path")


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hard Fork Company',
  tagline: 'Enabling Development of Cardano for years to come',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hardfork.company',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hfco', // Usually your GitHub org/user name.
  projectName: 'hfc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hfco/hfc/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve(path.join(__dirname, '/plugins/symlink-resolver'))],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hard Fork Company',
        logo: {
          alt: 'Hard Fork Company Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Content',
          },
          {
            to: 'about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/hfco/hfc',
            label: 'GitHub',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/hfcompany',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hfco/hfc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HFC`,
      },
      prism: {
        defaultLanguage: 'nix',
        additionalLanguages: ['haskell', 'nix', 'rust'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
