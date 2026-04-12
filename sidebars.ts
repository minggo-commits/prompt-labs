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
        'techniques/least-to-most',
        'techniques/self-consistency',
        'techniques/metaprompting',
        'techniques/rag',
        'techniques/orchestration',
      ],
    },
    {
      type: 'category',
      label: 'Prompt Library',
      items: [
        'templates/library',
        'templates/seo-strategy',
        'templates/realistic-images',
        'templates/ai-video',
      ],
    },
  ],
};

export default sidebars;
