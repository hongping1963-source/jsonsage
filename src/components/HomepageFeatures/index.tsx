import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '智能监控',
    Svg: require('@site/static/img/features/monitoring.svg').default,
    description: (
      <>
        自动监控JSON文件变化，实时响应文件更新。
        支持复杂的文件匹配模式和排除规则。
      </>
    ),
  },
  {
    title: '强大的验证',
    Svg: require('@site/static/img/features/validation.svg').default,
    description: (
      <>
        内置智能的JSON验证引擎，支持自定义验证规则。
        提供详细的错误报告和修复建议。
      </>
    ),
  },
  {
    title: '高性能处理',
    Svg: require('@site/static/img/features/performance.svg').default,
    description: (
      <>
        优化的性能和可扩展架构，轻松处理大规模JSON数据。
        支持异步处理和批量操作。
      </>
    ),
  },
  {
    title: '完整监控',
    Svg: require('@site/static/img/features/metrics.svg').default,
    description: (
      <>
        内置完整的性能指标收集系统。
        支持自定义指标和报警规则。
      </>
    ),
  },
  {
    title: '易于集成',
    Svg: require('@site/static/img/features/integration.svg').default,
    description: (
      <>
        提供简单直观的API，易于与现有系统集成。
        支持多种集成方式和扩展点。
      </>
    ),
  },
  {
    title: '安全可靠',
    Svg: require('@site/static/img/features/security.svg').default,
    description: (
      <>
        内置多层安全保护机制，确保数据处理的安全性。
        提供完整的错误处理和恢复机制。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
