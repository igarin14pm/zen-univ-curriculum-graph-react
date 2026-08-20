import type { Dispatch, SetStateAction } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import MenuIcon from '../../icons/MenuIcon';
import style from './ToolbarMenuButton.module.css';

interface ToolbarMenuButtonProp {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const ToolbarMenuButton = ({ isExpanded, setIsExpanded }: ToolbarMenuButtonProp): React.JSX.Element => {

  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button className={style.toolbarMenuButton} onClick={handleClick}>
      {isExpanded ? <CloseIcon className={style.toolbarMenuIcon} /> : <MenuIcon className={style.toolbarMenuIcon} />}
    </button>
  );
};

export default ToolbarMenuButton;
