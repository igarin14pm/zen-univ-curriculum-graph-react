import ChevronRightIcon from '../../icons/ChevronRightIcon';
import style from './GlobalGraphButton.module.css';

const GlobalGraphButton = (): React.JSX.Element => {

  return (
    <button className={style.globalGraphButton}>
      <p className={style.globalGraphButtonText}>グローバルグラフ</p>
      <ChevronRightIcon className={style.globalGraphButtonChevron} />
    </button>
  );
};

export default GlobalGraphButton;
