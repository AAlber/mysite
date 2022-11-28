import { useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from './Education.module.scss';

import { useIntl } from 'react-intl';
import EducationTitle from '../EducationTitle';

const Education = () => {
  const intl = useIntl();
  const {width} = useWindowDimensions();

  const header = intl.formatMessage({ id: 'home.education.header' });
  const eduDescription1 = intl.formatMessage({ id: 'page.home.edu.description.1' });
  const eduDescription2 = intl.formatMessage({ id: 'page.home.edu.description.2' });
  const eduDescription3 = intl.formatMessage({ id: 'page.home.edu.description.3' });
  const titles = [
    'CODE University of Applied Sciences Berlin',
    'Technical University of Delft',
    'Harriton High School',
  ];
  const shortTitles = [
    'CODE University',
    'TU Delft',
    'Harriton HS',
  ];
  const eduDescriptions = [eduDescription1, eduDescription2, eduDescription3];
  const [educationTitle, setEducationTitle] = useState(width!>1000 ? titles[0]: shortTitles[0]);
  const [educationContent, setEducationContent] = useState(eduDescriptions[0]);

  return (
    <div className={styles["education"]}> 
      <h2 className="header-secondary gradient-text mt-two">{header}</h2>
      <div className={styles['education__flex']}>
        <div className={styles['education__titles']}>
          {(width!>1000 ? titles: shortTitles ).map((title, index) => (
            <EducationTitle
              setEducationContent={setEducationContent}
              setEducationTitle={setEducationTitle}
              content={eduDescriptions[index]}
              title={title}
              isClicked={educationTitle === title}
              key={index}
            />
          ))}
        </div>
        <div className={styles['education__description']}>
          <h3 className="header-tertiary">{educationTitle}</h3>
          <p>{educationContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
