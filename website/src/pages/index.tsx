import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Master the Core Techniques of Prompt Engineering
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
            style={{ padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold' }}>
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Prompt Technique',
    Svg: ({ className }) => (
      <svg className={clsx(styles.featureIcon, className)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description: (
      <>Master the foundational methodologies for steering LLMs with precision and predictability.</>
    ),
  },
  {
    title: 'Prompt Template',
    Svg: ({ className }) => (
      <svg className={clsx(styles.featureIcon, className)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    description: (
      <>Production-grade starting points and boilerplate for diverse AI-driven use cases.</>
    ),
  },
  {
    title: 'Prompt Experiment',
    Svg: ({ className }) => (
      <svg className={clsx(styles.featureIcon, className)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 3h15" />
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
        <path d="M6 14h12" />
        <circle cx="12" cy="17" r="1.5" />
      </svg>
    ),
    description: (
      <>Empirical testing and data-driven insights to verify model behaviors across versions.</>
    ),
  },
  {
    title: 'Prompt Chain',
    Svg: ({ className }) => (
      <svg className={clsx(styles.featureIcon, className)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    description: (
      <>Sequencing multiple prompts for complex, multi-step reasoning and AI pipelines.</>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`PromptLabs - Mastering AI Mastery`}
      description="The definitive open-source guide for mastering AI Prompt Engineering techniques, templates, and orchestration.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
