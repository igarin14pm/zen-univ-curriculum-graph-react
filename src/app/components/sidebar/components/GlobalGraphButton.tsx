import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ScrollToTopLink from '../../link/ScrollToTopLink';
import style from './GlobalGraphButton.module.css';

const GlobalGraphButton = (): React.JSX.Element => {

  return (
    <ScrollToTopLink className={style.anchor} to="/global-graph">
      <div className={style.globalGraphButton}>
        <p className={style.globalGraphButtonText}>グローバルグラフ</p>
        <ChevronRightIcon className={style.globalGraphButtonChevron} />
      </div>
    </ScrollToTopLink>
  );
};

export default GlobalGraphButton;
