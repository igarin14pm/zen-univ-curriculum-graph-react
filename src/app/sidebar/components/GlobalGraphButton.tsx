import type { Dispatch, SetStateAction } from 'react';
import ChevronRight from '../../common-components/ChevronRight';
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
      <ChevronRight className={style.globalGraphButtonChevron} />
    </button>
  );
};

export default GlobalGraphButton;
