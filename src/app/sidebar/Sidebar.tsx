import { type Dispatch, type SetStateAction } from 'react';
import GlobalGraphButton from './components/GlobalGraphButton';
import PageList from './components/PageList';
import SiteName from './components/SiteName';
import style from './Sidebar.module.css';

interface SidebarProp {
  setIsGlobalGraphVisible: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setIsGlobalGraphVisible }: SidebarProp): React.JSX.Element => {
  return (
    <nav className={style.container}>
      <SiteName />
      <hr />
      <h2>ページ</h2>
      <GlobalGraphButton setIsGlobalGraphVisible={setIsGlobalGraphVisible} />
      <PageList />
    </nav>
  );
};

export default Sidebar;
