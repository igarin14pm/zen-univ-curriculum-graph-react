import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ScrollToTopLink from '../../link/ScrollToTopLink';
import style from './GlobalGraphButton.module.css';

interface GlobalGraphButtonProp {
  subjectId?: string;
}

const GlobalGraphButton = ({ subjectId }: GlobalGraphButtonProp): React.JSX.Element => {
  const linkUrl = subjectId !== undefined ? `/global-graph?subject=${subjectId}` : '/global-graph';

  return (
    <ScrollToTopLink className={style.anchor} to={linkUrl}>
      <div className={style.button}>
        <p className={style.text}>グローバルグラフ</p>
        <ChevronRightIcon className={style.chevron} />
      </div>
    </ScrollToTopLink>
  );
};

export default GlobalGraphButton;
