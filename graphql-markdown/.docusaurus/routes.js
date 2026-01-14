import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b09'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e38'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0d3'),
            routes: [
              {
                path: '/docs/api/',
                component: ComponentCreator('/docs/api/', 'ff5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/directives/include',
                component: ComponentCreator('/docs/api/operations/directives/include', 'd6f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/directives/skip',
                component: ComponentCreator('/docs/api/operations/directives/skip', '101'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/mutations/create-post',
                component: ComponentCreator('/docs/api/operations/mutations/create-post', 'd25'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/mutations/create-user',
                component: ComponentCreator('/docs/api/operations/mutations/create-user', 'c01'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/queries/post',
                component: ComponentCreator('/docs/api/operations/queries/post', '6d2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/queries/user',
                component: ComponentCreator('/docs/api/operations/queries/user', '76c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/operations/queries/users',
                component: ComponentCreator('/docs/api/operations/queries/users', 'bde'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/directives/deprecated',
                component: ComponentCreator('/docs/api/types/directives/deprecated', '68c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/directives/one-of',
                component: ComponentCreator('/docs/api/types/directives/one-of', 'bc5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/directives/specified-by',
                component: ComponentCreator('/docs/api/types/directives/specified-by', '277'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/inputs/create-post-input',
                component: ComponentCreator('/docs/api/types/inputs/create-post-input', '2da'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/inputs/create-user-input',
                component: ComponentCreator('/docs/api/types/inputs/create-user-input', 'cf7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/objects/post',
                component: ComponentCreator('/docs/api/types/objects/post', '859'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/objects/user',
                component: ComponentCreator('/docs/api/types/objects/user', 'fe3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/scalars/boolean',
                component: ComponentCreator('/docs/api/types/scalars/boolean', '2c6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/scalars/id',
                component: ComponentCreator('/docs/api/types/scalars/id', 'de6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/api/types/scalars/string',
                component: ComponentCreator('/docs/api/types/scalars/string', '675'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
