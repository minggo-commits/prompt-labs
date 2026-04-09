import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core Techniques',
      items: [
        'techniques/zero-and-few-shot',
        'techniques/chain-of-thought',
        'techniques/rag',
        'techniques/orchestration',
      ],
    },
  ],
};

export default sidebars;
