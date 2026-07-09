import { Link } from 'react-router';
import style from './PageList.module.css';

const PageList = (): React.JSX.Element => {
  return (
    <ul className={style.pageList}>
      <li><Link to="/subject">科目</Link></li>
      <li><Link to="/report-bugs">不具合を報告する</Link></li>
    </ul>
  );
};

export default PageList;
