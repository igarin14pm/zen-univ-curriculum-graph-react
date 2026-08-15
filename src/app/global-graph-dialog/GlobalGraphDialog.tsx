import type { Dispatch, SetStateAction } from 'react';
import style from './GlobalGraphDialog.module.css';

interface GlobalGraphDialogProp {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const GlobalGraphDialog = ({ isVisible, setIsVisible }: GlobalGraphDialogProp): React.JSX.Element => {

  const handleClickBackground = (): void  => {
    setIsVisible(false);
  };

  const handleClickDialog = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div 
      className={style.background}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={handleClickBackground}
    >
      <div className={style.dialog} onClick={handleClickDialog}>
        <p>Dialog</p>
      </div>
    </div>
  );
};

export default GlobalGraphDialog;

// TODO: 続きを書く
