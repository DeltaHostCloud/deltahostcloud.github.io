// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DeltaDocs',
  tagline: 'Dinosaurs are cool',
  url: 'https://deltahostcloud.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore', //'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DeltaHost-project', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'billing',
        path: 'billing',
        routeBasePath: 'billing',
        sidebarPath: require.resolve('./sidebarsbilling.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      theme: {
        customCss: [require.resolve('./src/css/custom.css')],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
        },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Panel',
          },
          {
            docId: 'billing',
            position: 'left',
            label: 'Billing',
            to: '/billing/test'
          },
          {
            to: '/blog',
            label: 'Anuncios',
            position: 'left'
          },
          {
            href: "https://discord.gg/vD8drXYuxn",
            className: "header-discord-link header-discord-link",
            position: "right",
          },
        ],
      },
    }),
};

module.exports = config;
