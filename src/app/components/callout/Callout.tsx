import style from './Callout.module.css';

interface CalloutProp {
  children: React.ReactNode;
}

const Callout = ({ children }: CalloutProp): React.JSX.Element => {
  return (
    <div className={style.calloutContainer}>
      {children}
    </div> 
  );
};

export default Callout;
