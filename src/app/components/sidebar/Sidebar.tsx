import PageList from './components/PageList';
import SidebarGlobalGraphButton from './components/SidebarGlobalGraphButton';
import SiteName from './components/SiteName';
import style from './Sidebar.module.css';

interface SidebarProps {
  subjectId?: string;
}

const Sidebar = ({ subjectId }: SidebarProps): React.JSX.Element => {
  return (
    <nav className={style.container}>
      <SiteName />
      <hr />
      <h2>ページ</h2>
      <SidebarGlobalGraphButton subjectId={subjectId} />
      <PageList />
    </nav>
  );
};

export default Sidebar;
