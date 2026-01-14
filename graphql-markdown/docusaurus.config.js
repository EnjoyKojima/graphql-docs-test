// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphQL API Docs',
  tagline: 'GraphQL Markdown POC',
  url: 'http://localhost',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
      {
        schema: '../schema.graphql',
        rootPath: './docs',
        baseURL: 'api',
        homepage: './docs/api/api.md',
        loaders: {
          GraphQLFileLoader: '@graphql-tools/graphql-file-loader',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GraphQL API',
        items: [
          {
            type: 'doc',
            docId: 'api/api',
            position: 'left',
            label: 'API Docs',
          },
        ],
      },
    }),
};

module.exports = config;
