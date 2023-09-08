import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Services We Offer',
    Svg: require('@site/static/img/folder-plus.svg').default,
    description: (
      <>
        We provide value to the community through development
        of Cardano, empowering the community to build on top
        of Cardano.
      </>
    ),
  },
  {
    title: 'Join our Team',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        We have a strong team of haskell developers with over 5
        years of development experience building Cardano. Our team
        work closely with IOG research to bring the latest and greatest
        research ideas to fruition. We're always looking for new people
        to join.

      </>
    ),
  },
  {
    title: 'Founding Member of Intersect',
    Svg: require('@site/static/img/droplet.svg').default,
    description: (
      <>
        We're a founding member of Cardano's members based organization
        Intersect. Learn more about what we do for Intersect or become
        a member yourself.
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
