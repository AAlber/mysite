import Image from 'next/image';
import styles from './ProjectHeader.module.scss';


const ProjectHeader = () => {
  return (
    <div className={styles['projectHeader']}>
       <h2 className='header-primary gradient-text'>Major Projects</h2>
       <p>So far most of my software engineering work has been in Startup Projects</p>
       <div className={styles['projectHeader__images']}>
       <Image src={'/sidebubble.svg'} className={styles['sidebubble']+ ' ' + styles['sidebubble--1'] } width={130} height={300}/>
       <Image src={'/sidebubble.svg'} className={styles['sidebubble']+ ' ' + styles['sidebubble--2'] } width={130} height={300}/>
       </div>
    </div>
  );
};

export default ProjectHeader;
