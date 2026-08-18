import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ScrollToTopLink from '../../link/ScrollToTopLink';
import style from './GlobalGraphButton.module.css';

interface GlobalGraphButtonProp {
  subjectNumbering?: string;
}

const GlobalGraphButton = ({ subjectNumbering }: GlobalGraphButtonProp): React.JSX.Element => {
  const linkUrl = subjectNumbering !== undefined ? `/global-graph?subject=${subjectNumbering}` : '/global-graph';

  return (
    <ScrollToTopLink className={style.anchor} to={linkUrl}>
      <div className={style.globalGraphButton}>
        <p className={style.globalGraphButtonText}>グローバルグラフ</p>
        <ChevronRightIcon className={style.globalGraphButtonChevron} />
      </div>
    </ScrollToTopLink>
  );
};

export default GlobalGraphButton;
