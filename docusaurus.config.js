// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeltaDocs",
  tagline: "Dinosaurs are cool",
  url: "https://deltahostcloud.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DeltaHostCloud",
  projectName: "deltahostcloud.github.io",
  presets: [
    [
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "billing",
        path: "billing",
        routeBasePath: "billing",
        sidebarPath: require.resolve("./sidebarsbilling.js"),
      },
    ],
  ],

  themeConfig: {
    theme: {
      customCss: [require.resolve("./src/css/custom.css")],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Panel",
        },
        {
          docId: "billing",
          position: "left",
          label: "Billing",
          to: "/billing/test",
        },
        {
          to: "/blog",
          label: "Anuncios",
          position: "left",
        },
        {
          href: "https://discord.gg/vD8drXYuxn",
          className: "header-discord-link header-discord-link",
          position: "right",
        },
      ],
    },
  },
};

module.exports = config;
