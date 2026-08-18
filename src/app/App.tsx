import './normalize.css';
import './App.css';
import { Outlet } from 'react-router';

const App = (): React.JSX.Element => {
  return <Outlet />;
};

export default App;
