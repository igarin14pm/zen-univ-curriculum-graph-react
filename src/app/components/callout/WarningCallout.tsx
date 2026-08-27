import WarningIcon from '../icons/WarningIcon';
import style from './WarningCallout.module.css';

interface WarningCalloutProps {
  title: string,
  children: React.ReactNode;
}

const WarningCallout = ({ title, children }: WarningCalloutProps): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <WarningIcon className={style.titleIcon} />
        <p className={style.titleText}>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default WarningCallout;
