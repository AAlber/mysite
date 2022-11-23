import { useState } from 'react';
import styles from './ProjectTabs.module.scss';

export type ProjectTabsProps = {
  titles: string[];
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

const ProjectTabs = (props: ProjectTabsProps) => {
  function updateGliderStyle(index: number) {
    setGliderStyle(
      styles['glider'] + ' ' + styles['glider--' + props.titles.length] + ' ' + styles['selected--' + index]
    );
  }
  const [gliderStyle, setGliderStyle] = useState(
    styles['glider'] +
      ' ' +
      styles['glider--' + props.titles.length] +
      ' ' +
      styles['selected--' + props.selectedTab.toString()]
  );
  return (
    <div className={styles['projectTabs']}>
      {props.titles.map((title, index) => {
        return (
          <a
            onClick={() => {
              updateGliderStyle(index);
              props.setSelectedTab(index);
            }}
            className={index === props.selectedTab ? styles['selectedTab'] + ' header-tertiary' : 'header-tertiary'}
          >
            {title}
          </a>
        );
      })}
      <div className={gliderStyle}></div>
    </div>
  );
};

export default ProjectTabs;
