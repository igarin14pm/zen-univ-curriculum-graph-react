import type { Dispatch, SetStateAction } from 'react';
import ChevronRightIcon from '../../common-components/ChevronRightIcon';
import style from './GlobalGraphButton.module.css';

interface GlobalGraphButtonProp {
  setIsGlobalGraphVisible: Dispatch<SetStateAction<boolean>>;
}

const GlobalGraphButton = ({ setIsGlobalGraphVisible }: GlobalGraphButtonProp): React.JSX.Element => {

  const handleClick = () => {
    setIsGlobalGraphVisible(true);
  };

  return (
    <button onClick={handleClick} className={style.globalGraphButton}>
      <p className={style.globalGraphButtonText}>グローバルグラフ</p>
      <ChevronRightIcon className={style.globalGraphButtonChevron} />
    </button>
  );
};

export default GlobalGraphButton;
