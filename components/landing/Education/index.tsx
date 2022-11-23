import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Education.module.scss';
import FaqAccordion from '../FaqAccordion/index';

import { useIntl } from 'react-intl';
import EducationTitle from '../EducationTitle';

const Education = () => {
  const intl = useIntl();
  const eduTitle1 = intl.formatMessage({ id: 'page.home.edu.title.1' });
  const eduTitle2 = intl.formatMessage({ id: 'page.home.edu.title.2' });
  const eduTitle3 = intl.formatMessage({ id: 'page.home.edu.title.3' });
  const eduDescription1 = intl.formatMessage({ id: 'page.home.edu.description.1' });
  const eduDescription2 = intl.formatMessage({ id: 'page.home.edu.description.2' });
  const eduDescription3 = intl.formatMessage({ id: 'page.home.edu.description.3' });
  const eduData: { title: string; content: string }[] = [
    {
      title: "CODE University of Applied Sciences Berlin",
      content: eduDescription1,
    },
    {
      title: "Technical University of Delft",
      content: eduDescription2,
    },
    {
      title: "Harriton High School",
      content: eduDescription3,
    },
  ];
  const [educationTitle, setEducationTitle]= useState(eduData[0].title);
  const [educationContent, setEducationContent]= useState(eduData[0].content)

  return (

      <div className={styles['education']}>
        <div className='mt-one'>
        {eduData.map(({ title, content }, index)=>(
            <EducationTitle setEducationContent={setEducationContent} setEducationTitle={setEducationTitle} content={content} title={title} isClicked={educationTitle===title}/>
        ))}
        </div>
        <div className={styles['education__description']}>
            <h3 className='header-tertiary'>{educationTitle}</h3>
            <p >{educationContent}</p>
        </div>
      </div>
  );
};

export default Education;
