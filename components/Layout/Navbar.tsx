import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './Navbar.module.scss';
import Tab from './Tab';
export type NavbarProps = {
  screenWidth?: number;
};

const Navbar = (props: NavbarProps) => {
  const intl = useIntl();
  const myJourney = intl.formatMessage({ id: 'component.navbar.journey' });
  const myEducation = intl.formatMessage({ id: 'component.navbar.education' });
  const myProjects = intl.formatMessage({ id: 'component.navbar.projects' });

  const router = useRouter()
  return (
    <nav className={styles['navbar']}>
        <div className={styles['navbar__menu']}>
        <Tab href="/" iconSrc={'/world-icon.svg'} title="EN" burger={false} />
        <Tab href="#journey" title={myJourney} />
        <Tab href="#education" title={myEducation} />
        <Tab href="#projects" title={myProjects} />
      </div>
    </nav>
  );
};
export default Navbar;
