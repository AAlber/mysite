import Image from 'next/image';
import styles from './Contact.module.scss';

import Link from 'next/link';

export type ContactProps ={
    links : {linkSrc:string,imgSrc: string }[];
}
const Contact = (props:ContactProps) => {
  return (
      <div className={styles['contact']}>
        <p className='header-primary'>Coffee Chat?</p>
        <p>Contact me here!</p>
        <div className={styles['contact__links']}>
        {props.links.map(({linkSrc, imgSrc})=>{
            return (
                <Link href={linkSrc} ><a>
                <Image src={imgSrc} width={50} height={50}/>
                </a>
                </Link>
            )
        })}
        </div>
      </div>
  );
};

export default Contact;
