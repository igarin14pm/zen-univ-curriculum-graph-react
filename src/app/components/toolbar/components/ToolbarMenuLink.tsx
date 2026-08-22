import type { Dispatch, SetStateAction } from 'react';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import { Link } from 'react-router';
import style from './ToolbarMenuLink.module.css';

interface ToolbarMenuLinkProps {
  text: string;
  to: string;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const ToolbarMenuLink = ({ text, to, setIsExpanded }: ToolbarMenuLinkProps): React.JSX.Element => {

  const handleClick = (): void => {
    setIsExpanded(false);
  };

  return (
    <Link to={to} onClick={handleClick} className={style.anchor}>
      <div className={style.container}>
        <p className={style.text}>
          {text}
        </p>
        <ChevronRightIcon className={style.chevron} />
      </div>
    </Link>
  );
};

export default ToolbarMenuLink;
