import GlobalGraphButton from './components/GlobalGraphButton';
import PageList from './components/PageList';
import SiteName from './components/SiteName';
import style from './Sidebar.module.css';

const Sidebar = (): React.JSX.Element => {
  return (
    <nav className={style.container}>
      <SiteName />
      <hr />
      <h2>ページ</h2>
      <GlobalGraphButton />
      <PageList />
    </nav>
  );
};

export default Sidebar;
