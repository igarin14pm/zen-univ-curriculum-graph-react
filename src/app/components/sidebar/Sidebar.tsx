import GlobalGraphButton from './components/GlobalGraphButton';
import PageList from './components/PageList';
import SiteName from './components/SiteName';
import style from './Sidebar.module.css';

interface SidebarProp {
  subjectId?: string;
}

const Sidebar = ({ subjectId }: SidebarProp): React.JSX.Element => {
  return (
    <nav className={style.container}>
      <SiteName />
      <hr />
      <h2>ページ</h2>
      <GlobalGraphButton subjectId={subjectId} />
      <PageList />
    </nav>
  );
};

export default Sidebar;
