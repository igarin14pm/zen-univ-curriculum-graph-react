import ScrollToTopLink from '../../common-components/ScrollToTopLink';
import style from './PageList.module.css';

const PageList = (): React.JSX.Element => {
  return (
    <ul className={style.pageList}>
      <li><ScrollToTopLink to="/subjects">科目</ScrollToTopLink></li>
      <li><ScrollToTopLink to="/report-bugs">不具合を報告する</ScrollToTopLink></li>
    </ul>
  );
};

export default PageList;
