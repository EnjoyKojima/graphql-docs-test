export default {
  introspection: {
    type: 'sdl',
    paths: ['schema.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    output: 'docs/magidoc',
    options: {
      appTitle: 'GraphQL API Documentation',
      appLogo: '',
      appFavicon: '',
      siteMeta: {
        description: 'GraphQL API Documentation',
        keywords: 'graphql,api,documentation',
      },
      pages: [
        {
          title: 'Home',
          content: `
# GraphQL API Documentation

This documentation is generated using Magidoc for a GraphQL API.

## Overview

This is a simple GraphQL API for managing users and posts.

## Main Features

- Query and create users
- Query and create posts
- Manage relationships between users and posts

## Usage

Use the navigation on the left to explore queries, mutations, and types in detail.
          `,
        },
      ],
    },
  },
}
