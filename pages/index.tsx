import { init, setOptOut } from '@amplitude/analytics-browser';
import { ServerZone } from '@amplitude/analytics-types';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useIntl } from 'react-intl';
import Contact from '../components/landing/Contact';
import Education from '../components/landing/Education';
import Homes from '../components/landing/Homes';
import ProjectGrid from '../components/landing/ProjectGrid';
import ProjectHeader from '../components/landing/ProjectHeader';
import Skills from '../components/landing/Skills';
import Navbar from '../components/Layout/Navbar';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
  const { width } = useWindowDimensions();
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    process.env.NODE_ENV === 'production'
      ? init(process.env['NEXT_PUBLIC_AMPLITUDE_KEY']!, undefined, {
          serverZone: ServerZone.EU,
          trackingOptions: { ipAddress: false },
        })
      : null;
  });
  const intl = useIntl();

  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const foodleGeneralDescription = intl.formatMessage({ id: "home.projects.foodle.generalDescription" });
  const foodleFullstack = intl.formatMessage({ id: "home.projects.foodle.fullstack" });
  const foodleDesign = intl.formatMessage({ id: "home.projects.foodle.design" });
  const foodleProduct = intl.formatMessage({ id: "home.projects.foodle.product" });
  const hashtuneGeneralDescription= intl.formatMessage({ id: "home.projects.hashtune.generalDescription" });
  const hashtuneFrontend = intl.formatMessage({ id: "home.projects.hashtune.frontend" });
  const tradeRouteGeneralDescription = intl.formatMessage({ id: "home.projects.tradeRoute.generalDescription" });
  const tradeRouteFrontend = intl.formatMessage({ id: "home.projects.tradeRoute.frontend" });
  const tradeRouteDesign = intl.formatMessage({ id: "home.projects.tradeRoute.design" });
  const cookieMessage = intl.formatMessage({ id: "component.cookie.message"});


  return (
    <div>
      <Head>
        <title>Alex Alber</title>
        <meta
          name="description"
          content="Hi! I'm an experienced frontend developer and this site explains my journey and projects.
          "
        />
        <link rel="icon" href="/dev.svg" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="de" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
        {/* Web Analytics */}
      </Head>
      <Navbar screenWidth={width} />
      <CookieConsent
        hideOnAccept={true}
        // style={{backgroundColor: 'black'}}
        // disableStyles
        enableDeclineButton
        containerClasses={styles['cookie']}
        // location={bottom}

        contentClasses={styles['cookie__content']}
        declineButtonClasses={styles['cookie__decline']}
        buttonClasses={styles['cookie__accept']}
        onDecline={() => setOptOut(true)}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            setOptOut(false);
          } else {
            setOptOut(true);
          }
        }}
      >
        {cookieMessage}
      </CookieConsent>

      {/* <=== Section 1 ===> */}
      <div className={styles['hero']}>
        <Image
          priority={true}
          src="/landing.png"
          className={styles['hero-image']}
          alt="Cook cutting vegetables on a kitchen counter"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <h1 className={'header-primary gradient-text'}>{title}</h1>
            <p className={'body-text'}>{description}</p>
          </div>
        </div>
      </div>
      <div id="journey"/>
      <br />
      <br />
      <Homes/>
      <br />
      <br />
      <Skills />
      <div id="education"/>
      <br />
      <br />
      <Education />
      <div id='projects'/>
      <br />
      <ProjectHeader/>
      <div className={styles['projectGrids']}>
      <ProjectGrid
        title={'Foodle'}
        description={foodleGeneralDescription}
        links={[{linkHref:"https://beta.foodle-kitchens.com", linkTitle: "Main Application" }, {linkHref:"https://foodle-kitchens.com", linkTitle: "Landing Page" }, {linkHref:"https://foodle-kitchens.com", linkTitle: "Landing Page GitHub" }]}
        tech={["TypeScript", "Next.Js", "SCSS", "Prisma", "NexusJS", "GraphQL Codegen", "Apollo GQL", "AWS", "Stripe"]} headers={["Fullstack", "Product", "Design"]} contents={[foodleFullstack, foodleProduct, foodleDesign]}      />
      <ProjectGrid
        title={'Hashtune'}
        description={hashtuneGeneralDescription}
        links={[{linkHref: "https://github.com/hashtune/Hashtune-Marketplace-Client", linkTitle: "GitHub"}]}
        tech={["TypeScript", "Next.Js", "SCSS", "Prisma", "NexusJS", "GraphQL Codegen", "Apollo GQL"]} headers={["Frontend"]} contents={[hashtuneFrontend]}      />
        <ProjectGrid
        title={'Trade Route'}
        description={tradeRouteGeneralDescription}
        links={[{linkHref:"https://github.com/AlAlber/traderoute1/tree/master", linkTitle: "GitHub" }]}
        tech={["Java, JavaFX, Scenebuilder"]} headers={["Frontend", "Design"]} contents={[tradeRouteFrontend, tradeRouteDesign]}      />
      </div>
      <div id="contact">
        <Contact links={[{imgSrc:'/mail.svg', linkSrc: 'mailto:alex.alber.aa@gmail.com'}, {imgSrc:'/linkedin.svg', linkSrc: 'mailto:alex.alber.aa@gmail.com'}]}  />
      </div>
    </div>
  );
};

export default Home;
