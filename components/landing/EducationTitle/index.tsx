import { useEffect, useState } from 'react';
import styles from './EducationTitle.module.scss';


type EducationTitleProps = {
  setEducationTitle: (value: string) => void;
  setEducationContent: (value: string) => void;
  content: string;
  title: string;
  isClicked: boolean;
};
const Education = (props: EducationTitleProps) => {
  const [spanStyle, setSpanStyle] = useState<string>('gradient-text');
  useEffect(() => {
    props.isClicked ? setSpanStyle('gradient-text ' + styles['longer']) : setSpanStyle('gradient-text');
  });
  return (
    <div className={styles['title']}>
      <span className={spanStyle}></span>
      <a
        className={'header-quarternary ' + (props.isClicked ? 'gradient-text' : '')}
        onClick={() => {
          props.setEducationContent(props.content);
          props.setEducationTitle(props.title);
        }}
      >
        {props.title}
      </a>
    </div>
  );
};

export default Education;

{
  /* <>

isChecked: boolean;
        <input type="radio" name="educationTitle" className={styles['title']}>

        </input>
        <span className='gradient-text'></span>
        <label className='header-quarternary' onClick={()=>{
            props.setEducationContent(props.content)
            props.setEducationTitle(props.title)
            }}>{props.title}</label>
    </> */
}
