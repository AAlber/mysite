import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './ProjectHeader.module.scss';


const ProjectHeader = () => {
    const header= useIntl().formatMessage({id:"home.projects.header"});
    const subheader= useIntl().formatMessage({id:"home.projects.subheader"});
  return (
    <div className={styles['projectHeader']}>
       <h2 className='header-primary gradient-text'>{header}</h2>
       <p>{subheader}</p>
       <div className={styles['projectHeader__images']}>
       <Image src={'/sidebubble.svg'} className={styles['sidebubble']+ ' ' + styles['sidebubble--1'] } width={130} height={300}/>
       <Image src={'/sidebubble.svg'} className={styles['sidebubble']+ ' ' + styles['sidebubble--2'] } width={130} height={300}/>
       </div>
    </div>
  );
};

export default ProjectHeader;
