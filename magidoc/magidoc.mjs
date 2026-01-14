export default {
  introspection: {
    type: 'sdl',
    paths: ['../schema.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    options: {
      appTitle: 'GraphQL API Docs',
      appLogo: 'https://graphql.org/img/logo.svg',
      pages: [{
        title: 'Introduction',
        content: `
# GraphQL API Documentation

Welcome to the API documentation.

This is a POC for Magidoc documentation generation.
        `
      }]
    },
  },
}
