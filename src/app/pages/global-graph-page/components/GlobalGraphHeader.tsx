import GlobalGraphBackButton from './GlobalGraphBackButton';
import style from './GlobalGraphHeader.module.css';

const GlobalGraphHeader = (): React.JSX.Element => {
  return (
    <header className={style.container}>
      <GlobalGraphBackButton />
    </header>
  );
};

export default GlobalGraphHeader;
