import './normalize.css';
import './App.css';
import { Outlet } from 'react-router';
import Sidebar from './sidebar/Sidebar';
import style from './App.module.css';

const App = (): React.JSX.Element => {
  return (
    <div className={style.appContainer}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;
