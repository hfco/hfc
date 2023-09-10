import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import ServicesImage from "@site/static/img/services.jpeg";
import JoinTeamImage from "@site/static/img/join-team.jpeg";
import IntersectImage from "@site/static/img/intersect.jpeg";

import { Cta } from "../Cta";

type FeatureItem = {
  title: string;
  img: string | ComponentType<any>;
  description: JSX.Element;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Services We Offer',
    img: ServicesImage,
    description: (
      <>
        We provide value to the community through development
        of Cardano, empowering the community to build on top
        of Cardano.
      </>
    ),
    href: "docs/cardano",
    cta: "Learn More"
  },
  {
    title: 'Join our Team',
    img: JoinTeamImage,
    description: (
      <>
        We have a strong team of haskell developers with over 5
        years of development experience building Cardano. Our team
        work closely with IOG research to bring the latest and greatest
        research ideas to fruition. We're always looking for new people
        to join.

      </>
    ),
    href: "team",
    cta: "Learn More"
  },
  {
    title: 'Founding Member of Intersect',
    img: IntersectImage,
    description: (
      <>
        We're a founding member of Cardano's members based organization
        Intersect. Learn more about what we do for Intersect or become
        a member yourself.
      </>
    ),
    href: "https://www.intersectmbo.org/join",
    cta: "Join Now"
  },
];

function Feature({
  title,
  img: Image,
  description,
  href,
  cta
}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Image === "string" ? (
          <img src={Image} />
        ) : (
          <Image />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {href && cta ? (
          <Cta appearance="secondary" href={href}>
            {cta}
          </Cta>
        ) : null}
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
