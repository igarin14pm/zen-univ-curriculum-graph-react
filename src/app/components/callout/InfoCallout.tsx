import InfoIcon from '../icons/InfoIcon';
import style from './InfoCallout.module.css';

interface InfoCalloutProps {
  title: string,
  children: React.ReactNode;
}

const InfoCallout = ({ title, children }: InfoCalloutProps): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <InfoIcon className={style.titleIcon} />
        <p className={style.titleText}>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default InfoCallout;
