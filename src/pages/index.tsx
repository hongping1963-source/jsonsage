import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DeepseekChat from '@site/src/components/DeepseekChat';
import NucleiScanner from '@site/src/components/NucleiScanner';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

function DemoSection() {
  return (
    <section className={styles.demoSection}>
      <div className="container">
        <h2 className={styles.demoTitle}>在线 JSON 验证</h2>
        <p className={styles.demoDescription}>
          使用我们强大的 JSON 验证工具，检查您的 JSON 数据是否符合标准，并发现潜在的问题。
        </p>
        <div className={styles.demoContent}>
          <NucleiScanner />
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="智能的JSON处理工作流系统，提供自动化监控、验证和转换功能。">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
        <DemoSection />
      </main>
      <DeepseekChat />
    </Layout>
  );
}
