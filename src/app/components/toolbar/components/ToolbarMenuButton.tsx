import type { Dispatch, SetStateAction } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import MenuIcon from '../../icons/MenuIcon';
import style from './ToolbarMenuButton.module.css';

interface ToolbarMenuButtonProps {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const ToolbarMenuButton = ({ isExpanded, setIsExpanded }: ToolbarMenuButtonProps): React.JSX.Element => {

  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {isExpanded ? <CloseIcon className={style.icon} /> : <MenuIcon className={style.icon} />}
    </button>
  );
};

export default ToolbarMenuButton;
