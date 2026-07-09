import ChevronRight from '../../common-components/ChevronRight';
import style from './GlobalGraphButton.module.css';

const GlobalGraphButton = (): React.JSX.Element => {
  return (
    <button className={style.globalGraphButton}>
      <p className={style.globalGraphButtonText}>グローバルグラフ</p>
      <ChevronRight className={style.globalGraphButtonChevron} />
    </button>
  );
};

export default GlobalGraphButton;
