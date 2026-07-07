import ChevronRight from './ChevronRight';
import { Link } from 'react-router';
import logoImage from '../img/logo.svg';
import style from './Sidebar.module.css';

const SiteName = (): React.JSX.Element => {
  return (
    <Link to="/" className={style.siteNameLink}>
      <div>
        <img className={style.siteLogo} src={logoImage} alt="ZEN大 カリキュラム・グラフのロゴ" />
        <h1 className={style.siteNameText}>
          ZEN大<br />
          カリキュラム・グラフ
        </h1>
      </div>
    </Link>
  );
};

const GlobalGraphButton = (): React.JSX.Element => {
  return (
    <button className={style.globalGraphButton}>
      <p className={style.globalGraphButtonText}>グローバルグラフ</p>
      <ChevronRight className={style.globalGraphButtonChevron} />
    </button>
  );
};

const PageList = (): React.JSX.Element => {
  return (
    <ul>
      <li><Link to="/subject">科目</Link></li>
      <li><Link to="/report-bugs">不具合を報告する</Link></li>
    </ul>
  );
};

const Sidebar = (): React.JSX.Element => {
  return (
    <nav className={style.sidebarContainer}>
      <SiteName />
      <hr />
      <h2>ページ</h2>
      <GlobalGraphButton />
      <PageList />
    </nav>
  );
};

export default Sidebar;
