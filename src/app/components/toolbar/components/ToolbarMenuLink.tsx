import type { Dispatch, SetStateAction } from 'react';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import { Link } from 'react-router';
import style from './ToolbarMenuLink.module.css';

interface ToolbarMenuLinkProp {
  text: string;
  to: string;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const ToolbarMenuLink = ({ text, to, setIsExpanded }: ToolbarMenuLinkProp): React.JSX.Element => {

  const handleClick = (): void => {
    setIsExpanded(false);
  };

  return (
    <Link to={to} onClick={handleClick} className={style.toolbarMenuLinkAnchor}>
      <div className={style.toolbarMenuLinkContainer}>
        <p className={style.toolbarMenuLinkText}>
          {text}
        </p>
        <ChevronRightIcon className={style.toolbarMenuLinkChevron} />
      </div>
    </Link>
  );
};

export default ToolbarMenuLink;
