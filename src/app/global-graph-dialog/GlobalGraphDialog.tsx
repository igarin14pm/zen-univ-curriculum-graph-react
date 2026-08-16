import type { Dispatch, SetStateAction } from 'react';
import CloseIcon from '../components/icons/CloseIcon';
import style from './GlobalGraphDialog.module.css';

interface GlobalGraphDialogProp {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const GlobalGraphDialog = ({ isVisible, setIsVisible }: GlobalGraphDialogProp): React.JSX.Element => {

  const handleClose = (): void  => {
    setIsVisible(false);
  };

  const handleClickDialog = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div 
      className={style.background}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={handleClose}
    >
      <div className={style.dialog} onClick={handleClickDialog}>
        <div className={style.toolbar}>
          <button className={style.closeButton} onClick={handleClose}>
            <CloseIcon className={style.closeButtonIcon} />
            <p className={style.closeButtonText}>閉じる</p>
          </button>
        </div>
        <p>Dialog</p>
      </div>
    </div>
  );
};

export default GlobalGraphDialog;

// TODO: 続きを書く
