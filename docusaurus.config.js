// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'COSMIIC Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/Cosmiic_favicon-150x150.png',

  // Set the production url of your site here
  url: 'https://COSMIIC-Inc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/COSMIIC-Inc.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'COSMIIC-Inc', // Usually your GitHub org/user name.
  projectName: 'COSMIIC-Inc.github.io', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/COSMIIC-square-logo.svg',

      announcementBar: {
        id: 'support_us',
        content:
          'Please consider giving us money',
        backgroundColor: '#000000',
        textColor: '#fffff',
        isCloseable: true,
      },

      navbar: 
      {
        style: 'primary',
        hideOnScroll: true,
        title: 'COSMIIC Documentation',
        logo: 
        {
          alt: 'COSMIIC Logo',
          src: 'img/Cosmiic_favicon-150x150.png',
        },
        items: 
        [
          //links "Documentation" in nav bar to side bar
          {
            type: 'docSidebar',
            position: 'right',
            sidebarId: 'docsSidebar',
            label: 'Docs',
          },
          {
            href: 'https://github.com/COSMIIC-Inc',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://cosmiic.org',
            label: 'Main Site',
            position: 'right',
          },
          
        ],
      },
      footer: 
      {
        style: 'dark',
        logo: 
        {
          src: 'img/Cosmiic_favicon-150x150.png',
          width: 75,
          height: 75,
        },
        copyright: `Copyright © ${new Date().getFullYear()} COSMIIC`,
      },
      prism: 
      {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
