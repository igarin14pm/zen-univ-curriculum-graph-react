import './normalize.css';
import './App.css';
import GlobalGraphDialog from './global-graph-dialog/GlobalGraphDialog';
import { Outlet } from 'react-router';
import Sidebar from './sidebar/Sidebar';
import type { UseStateValue } from '../utils/use-state-value';
import style from './App.module.css';
import { useState } from 'react';

const App = (): React.JSX.Element => {

  const [isGlobalGraphVisible, setIsGlobalGraphVisible]: UseStateValue<boolean> = useState(false);

  return (
    <div className={style.appContainer}>
      <Sidebar setIsGlobalGraphVisible={setIsGlobalGraphVisible} />
      <GlobalGraphDialog isVisible={isGlobalGraphVisible} />
      <Outlet />
    </div>
  );
};

export default App;
