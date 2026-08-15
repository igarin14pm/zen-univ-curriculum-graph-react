import type { Dispatch, SetStateAction } from 'react';
import ChevronRight from '../../common-components/ChevronRight';
import style from './GlobalGraphButton.module.css';

interface GlobalGraphButtonProp {
  isGlobalGraphVisible: boolean;
  setIsGlobalGraphVisible: Dispatch<SetStateAction<boolean>>;
}

const GlobalGraphButton = ({ isGlobalGraphVisible, setIsGlobalGraphVisible }: GlobalGraphButtonProp): React.JSX.Element => {

  const handleClick = () => {
    setIsGlobalGraphVisible(!isGlobalGraphVisible);
  };

  return (
    <button onClick={handleClick} className={style.globalGraphButton}>
      <p className={style.globalGraphButtonText}>グローバルグラフ</p>
      <ChevronRight className={style.globalGraphButtonChevron} />
    </button>
  );
};

export default GlobalGraphButton;
