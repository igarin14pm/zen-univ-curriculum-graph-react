import ScrollToTopLink from '../../link/ScrollToTopLink';
import style from './PageList.module.css';

const PageList = (): React.JSX.Element => {
  return (
    <ul className={style.pageList}>
      <li><ScrollToTopLink to="/subjects">科目</ScrollToTopLink></li>
      <li><ScrollToTopLink to="/contact">お問い合わせ</ScrollToTopLink></li>
    </ul>
  );
};

export default PageList;
