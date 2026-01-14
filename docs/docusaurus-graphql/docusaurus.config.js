// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes as prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphQL Documentation Test',
  tagline: 'Testing @graphql-markdown/docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EnjoyKojima', // Usually your GitHub org/user name.
  projectName: 'graphql-docs-test', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/EnjoyKojima/graphql-docs-test/tree/main/docs/docusaurus-graphql/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/EnjoyKojima/graphql-docs-test/tree/main/docs/docusaurus-graphql/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@graphql-markdown/docusaurus',
      /** @type {import('@graphql-markdown/docusaurus').Options} */
      ({
        schema: './schema/schema.graphql',
        rootPath: './docs',
        baseURL: 'graphql',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GraphQL Docs Test',
        logo: {
          alt: 'GraphQL Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/docs/graphql',
            label: 'GraphQL API',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/EnjoyKojima/graphql-docs-test',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'GraphQL API',
                to: '/docs/graphql',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EnjoyKojima/graphql-docs-test',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GraphQL Docs Test. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
