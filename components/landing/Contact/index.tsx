import Image from 'next/image';
import styles from './Contact.module.scss';


import { useIntl } from 'react-intl';

import Link from 'next/link';

export type ContactProps ={
    links : {linkSrc:string,imgSrc: string }[];
}
const Contact = (props:ContactProps) => {

const intl = useIntl();

const contactHeader = intl.formatMessage({ id: "component.contact.header"});

  return (
      <div className={styles['contact']}>
        <p className='header-secondary'>{contactHeader}</p>

        <a href={"tel:${+49 176 63741892}"}>+49 176 63741892</a>
        <div className={styles['contact__links']}>
        {props.links.map(({linkSrc, imgSrc}, index)=>{
            return (
                <Link href={linkSrc} key={index} ><a>
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
