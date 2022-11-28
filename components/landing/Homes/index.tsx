import Marquee from "react-fast-marquee";
import { useIntl } from "react-intl";
import styles from './Homes.module.scss';

const generateRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const Homes = () => {
  const header = useIntl().formatMessage({id:"home.homes.header"});

  const poland = useIntl().formatMessage({id:"component.locations.poland"});
  const germany = useIntl().formatMessage({id:"component.locations.germany"});
  const netherlands = useIntl().formatMessage({id:"component.locations.netherlands"});
  const italy = useIntl().formatMessage({id:"component.locations.italy"});
  const switzerland = useIntl().formatMessage({id:"component.locations.switzerland"});
  const rome = useIntl().formatMessage({id:"component.locations.rome"});
  const milan = useIntl().formatMessage({id:"component.locations.milan"});
  const geneva = useIntl().formatMessage({id:"component.locations.geneva"});
  const warsaw = useIntl().formatMessage({id:"component.locations.warsaw"});
  const bolzano = useIntl().formatMessage({id:"component.locations.bolzano"});
  const locations = [
    bolzano + ', '+italy,
    milan + ', '+italy,
    geneva + ', '+switzerland,
    rome + ', '+italy,
    warsaw + ', '+poland,
    'Philadelphia, USA',
    'Delft, '+ netherlands,
    bolzano + ', '+italy,
    'Berlin, '+germany,
  ];
  const endDates = ['2000','2002', '2007', '2010', '2012', '2015', '2018', '2019', '2020', '2022'];
  
  return (
    <div className={styles['homes']}>
      <h2 className="header-secondary gradient-text mt-two mb-two">{header}</h2>
      {locations.map((location: string, index) => {
        let isEven = index%2 === 0;
        return (
          <Marquee key={index}  speed={generateRandomNumber(30, 80)} direction={isEven? "left": "right"} className={styles['homes__location']}>
            <h4>{location} {"("}{endDates[index]} - {endDates[index+1]}{")"}</h4>
          </Marquee>
        );
      })}
    </div>
  );
};

export default Homes;
