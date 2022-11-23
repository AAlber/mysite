import { init, setOptOut, track } from '@amplitude/analytics-browser';
import { ServerZone } from '@amplitude/analytics-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useIntl } from 'react-intl';
import Contact from '../components/landing/Contact';
import Education from '../components/landing/Education';
import Faq from '../components/landing/Faq';
import ProjectGrid from '../components/landing/ProjectGrid';
import ProjectHeader from '../components/landing/ProjectHeader';
import BurgerMenu from '../components/Layout/BurgerMenu';
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
  

  const onButtonClick = () => track('Funnel Click');
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const specialTitle = intl.formatMessage({ id: 'page.home.special.mainTitle' });
  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const trustFactorTitle1 = intl.formatMessage({ id: 'page.home.trustFactor.title.1' });
  const trustFactorTitle2 = intl.formatMessage({ id: 'page.home.trustFactor.title.2' });
  const trustFactorTitle3 = intl.formatMessage({ id: 'page.home.trustFactor.title.3' });
  const trustFactorText1 = intl.formatMessage({ id: 'page.home.trustFactor.text.1' });
  const trustFactorText2 = intl.formatMessage({ id: 'page.home.trustFactor.text.2' });
  const trustFactorText3 = intl.formatMessage({ id: 'page.home.trustFactor.text.3' });
  const trustFactorTextShort1 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.1' });
  const trustFactorTextShort2 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.2' });
  const trustFactorTextShort3 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.3' });
  const cookieMessage = intl.formatMessage({ id: 'component.cookie.message' });

  //Animations
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const dreamScrollAnim = getFadeInAnim(dreamsScroll);
  //   const signupAnim = getSlideUpAnim(signupRef);
  //   const textAnimTl = getTextTransformTimeline(easyAdjectives.split(' '));
  //   return () => {
  //     textAnimTl.kill();
  //     signupAnim.kill();
  //     dreamScrollAnim.kill();
  //   };
  // }, [easyAdjectives, width]);

  return (
    <div>
      <Head>
        <title>Foodle</title>
        <meta
          name="description"
          content="Foodle is a licensed kitchen rental service where food businesses (like restaurants, bakeries, ice cream shops, etc.) rent out their kitchens to cooks, bakers or other food producers.
          Foodle ist eine .
          "
        />
        <link rel="icon" href="/foodle_logo.svg" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="de" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
        {/* Web Analytics */}
      </Head>
      <Navbar screenWidth={width} />
      <div className={styles['sidebar']}>
        <BurgerMenu />
      </div>
      <CookieConsent
        hideOnAccept={true}
        enableDeclineButton
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
      <header className={styles['mainAnimation__wrapper']}>
        <div className={styles["mainAnimation"]}>
          <div className={styles["mainAnimation__topPlane"]}></div>
          <div className={styles["MainAnimation__bottomPlane"]}></div>
        </div>
      </header>

      {/* <=== Section 1 ===> */}
      <div id="join-foodle"></div>
      <div className={styles['hero']}>
        {/* Section 1 TOP */}
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
      <div id="trust-factors"></div>

      <div id="faq"></div>
      <div className="flex-center mt-two">
        <h2 className="header-secondary gradient-text mt-two">This influenced me as a programmer.</h2>
      </div>

      {/*Empty div to prevent scrolling down to much and over the FAQ title section*/}
      <Faq />
      <div className="flex-center mt-two">
        <h2 className="header-secondary gradient-text mt-two">So did my education.</h2>
      </div>
      <Education />
      <ProjectHeader/>
      <div className={styles['projectGrids']}>
      <ProjectGrid
        title={'Foodle'}
        description={'In the beginning of 2022 I co-founded Foodle, which is a platform to easily rent and rent out licensed kitchen spaces in your own city. '}

        links={[{linkHref:"https://stackoverflow.com/questions/39771131/how-to-convert-array-into-comma-separated-string-in-javascript", linkTitle: "Main Application" }]}
        tech={["Next.Js", "SCSS", "Prisma", "NexusJS", "GraphQL Codegen", "Apollo GQL", "AWS", "Stripe"]} headers={["Fullstack", "Product", "Design"]} contents={["As the fullstack tech lead of the team I implemented and integrated a lot of the major features while mentoring 5 other developers.", "As the fullstack tech lead of the team I implemented andnevelopers.","As the fulh lead of the team I implemented and integrated a lot of the major features while mentoring 5 other developers."]}      />
      <ProjectGrid
        title={'Foodle'}
        description={'Foodle is fun Foodle is funFoodle is funFoodle is funFoodle is funFoodle is funFoodle is fun'}

        links={[{linkHref:"https://stackoverflow.com/questions/39771131/how-to-convert-array-into-comma-separated-string-in-javascript", linkTitle: "Main Application" }]}
        tech={["Next.Js", "SCSS", "Prisma", "NexusJS", "GraphQL Codegen", "Apollo GQL", "AWS", "Stripe"]} headers={["Frontend"]} contents={["As the fullstack tech lead of the team I implemented and integrated a lot of the major features while mentoring 5 other developers."]}      />
        <ProjectGrid
        title={'Foodle'}
        description={'Foodle is fun Foodle is funFoodle is funFoodle is funFoodle is funFoodle is funFoodle is fun'}

        links={[{linkHref:"https://stackoverflow.com/questions/39771131/how-to-convert-array-into-comma-separated-string-in-javascript", linkTitle: "Main Application" }]}
        tech={["Next.Js", "SCSS", "Prisma", "NexusJS", "GraphQL Codegen", "Apollo GQL", "AWS", "Stripe"]} headers={["Frontend", "Design"]} contents={["As the fullstack tech lead of trs.", "As the fullstack tech lead of the team I implemented and integrated a lot of the major features while mentoring 5 other developers."]}      />
      </div>
      <div id="contact">
        <Contact links={[{imgSrc:'/mail.svg', linkSrc: 'mailto:alex.alber.aa@gmail.com'}, {imgSrc:'/linkedin.svg', linkSrc: 'mailto:alex.alber.aa@gmail.com'}]}  />
      </div>
      
    </div>
  );
};

export default Home;
