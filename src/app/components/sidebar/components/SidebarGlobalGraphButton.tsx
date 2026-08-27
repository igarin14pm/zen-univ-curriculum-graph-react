import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ScrollToTopLink from '../../link/ScrollToTopLink';
import style from './SidebarGlobalGraphButton.module.css';

interface GlobalGraphButtonProps {
  subjectId?: string;
}

const GlobalGraphButton = ({ subjectId }: GlobalGraphButtonProps): React.JSX.Element => {
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
