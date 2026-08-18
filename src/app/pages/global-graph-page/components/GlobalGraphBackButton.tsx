import { type NavigateFunction, useNavigate } from 'react-router';
import ChevronLeftIcon from '../../../components/icons/ChevronLeftIcon';
import style from './GlobalGraphBackButton.module.css';

const GlobalGraphBackButton = (): React.JSX.Element => {

  const navigate: NavigateFunction = useNavigate();
  
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className={style.button} onClick={handleClick}>
      <ChevronLeftIcon className={style.icon} />
      <p className={style.text}>戻る</p>
    </button>
  );
};

export default GlobalGraphBackButton;
