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

export default function Home(): ReactNode {
  return (
    <Layout
      title={`PromptLabs - AI Techniques Guide`}
      description="The definitive open-source guide for mastering AI Prompt Engineering techniques like Few-Shot, CoT, and RAG.">
      <HomepageHeader />
      <main>
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2>Core Methodologies</h2>
          <div className="row" style={{ marginTop: '2rem' }}>
            <div className="col col--4">
              <h3>Zero-Shot & Few-Shot</h3>
              <p>Learn how to properly condition models with minimal data for maximum predictability.</p>
            </div>
            <div className="col col--4">
              <h3>Reasoning & CoT</h3>
              <p>Force models to 'think' before answering using Chain-of-Thought and Step-Back logic.</p>
            </div>
            <div className="col col--4">
              <h3>RAG & Orchestration</h3>
              <p>Integrate external knowledge bases and tool use protocols to create grounded AI systems.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
