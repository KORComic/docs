import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import CombinedImage from "@site/static/screenshots/combined-1-2.png"; // alias for static/

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* @ts-ignore  Docusaurus returns ReactNode, which can't be used in ReactElement, so it breaks type checking*/}
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <img width="700" src={CombinedImage} />

        <div className={styles.buttons}>
          {/* @ts-ignore  Docusaurus returns ReactNode, which can't be used in ReactElement, so it breaks type checking*/}
          <Link
            className="button button--secondary button--lg"
            to="/comicreader.koplugin/intro"
          >
            ComicReader
          </Link>

          {/* @ts-ignore  Docusaurus returns ReactNode, which can't be used in ReactElement, so it breaks type checking*/}
          <Link
            className="button button--secondary button--lg"
            to="/comicmeta.koplugin/intro"
          >
            CoimicMeta
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    // @ts-ignore Docusaurus returns ReactNode, which can't be used in ReactElement, so it breaks type checking
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
