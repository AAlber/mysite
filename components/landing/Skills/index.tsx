import SkillsAccordion from '../SkillsAccordion/index';
import styles from './Skills.module.scss';

import { useIntl } from 'react-intl';

const Skills = () => {
  const intl = useIntl();
  const header= intl.formatMessage({id:'home.skills.header'})
  const skillTitle1 = intl.formatMessage({ id: 'page.home.skill.title.1' });
  const skillTitle2 = intl.formatMessage({ id: 'page.home.skill.title.2' });
  const skillTitle3 = intl.formatMessage({ id: 'page.home.skill.title.3' });
  const skillDescription1 = intl.formatMessage({ id: 'page.home.skill.description.1' });
  const skillDescription2 = intl.formatMessage({ id: 'page.home.skill.description.2' });
  const skillDescription3 = intl.formatMessage({ id: 'page.home.skill.description.3' });

  const titles= [skillTitle1, skillTitle2, skillTitle3];
  const descriptions= [skillDescription1, skillDescription2, skillDescription3];

  return (
    <div className={styles['skills']}>
    <h2 className="header-secondary gradient-text">{header}</h2>
      <div className={styles['skills__accordion']}>
        <hr />
        {titles.map((title , index) => (
          <SkillsAccordion title={title} content={descriptions[index]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
