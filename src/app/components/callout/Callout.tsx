import style from './Callout.module.css';

interface CalloutProps {
  children: React.ReactNode;
}

const Callout = ({ children }: CalloutProps): React.JSX.Element => {
  return (
    <div className={style.container}>
      {children}
    </div> 
  );
};

export default Callout;
