import ChevronRightIcon from '../../../components/icons/ChevronRightIcon';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import style from './HomePageGlobalGraphButton.module.css';

interface HomePageGlobalGraphButtonProps {
  subjectId?: string;
}

const HomePageGlobalGraphButton = ({ subjectId }: HomePageGlobalGraphButtonProps): React.JSX.Element => {
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

export default HomePageGlobalGraphButton;
