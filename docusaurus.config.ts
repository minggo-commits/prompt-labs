import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PromptLabs',
  tagline: 'An Open Source Guide to Prompt Engineering & AI Experiments',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://promptlabs-portfolio.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'minggo-commits', // Usually your GitHub org/user name.
  projectName: 'prompt-engineering-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: 'docs',
        },
        blog: false, // Disabled as requested
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'prompt engineering, ai templates, large language models, promptlabs'},
      {name: 'author', content: 'PromptLabs Team'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'robots', content: 'index, follow'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'PromptLabs',
      logo: {
        alt: 'PromptLabs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Mastering Techniques',
        },
        {
          to: '/docs/templates/library',
          label: 'Prompt Library',
          position: 'left',
        },
        {
          href: 'https://www.linkedin.com/in/muh-arsan-akbar-06207a215/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/minggo-commits/prompt-engineering-portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Direct Links',
          items: [
            {
              label: 'The Hub',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/muh-arsan-akbar-06207a215/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/minggo-commits/prompt-engineering-portfolio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PromptLabs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
