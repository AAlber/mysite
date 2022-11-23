import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProjectTabs from '../ProjectTabs';
import styles from './ProjectGrid.module.scss';

export type ProjectGridProps = {
  title: string;
  description: string;
  headers: string[];
  contents: string[];
  links: { linkTitle: string; linkHref: string }[];
  tech: string[];
};

const ProjectGrid = (props: ProjectGridProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles['projectGrid']}>
      <div className={styles['projectGrid__left']}>
        <h3 className="header-tertiary">{props.title}</h3>
        <p>{props.description}</p>
        <br />
        <div className={styles['projectGrid__flexImage']}>
        <Image src={'/techstack.svg'} width={50} height={50}/>
        <span>{props.tech.toString()}</span>
        </div>
        
        
      </div>
      <div>
        <div className={styles['projectGrid__topRight']}>
          <ProjectTabs titles={props.headers} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          <p>{props.contents[selectedTab]}</p>
        </div>
        <div className={styles['projectGrid__flexImage']+ ' '+ styles['projectGrid__bottomRight']}>

        <Image src={'/link.svg'} width={50} height={50}/>

        {props.links.map(({ linkHref, linkTitle }) => (
          <Link href={linkHref}>
            <a className="gradient-text">{linkTitle}</a>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
