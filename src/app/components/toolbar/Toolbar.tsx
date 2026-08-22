import ToolbarMenuButton from './components/ToolbarMenuButton';
import ToolbarMenuLink from './components/ToolbarMenuLink';
import { type UseStateValue } from '../../../types/use-state-value';
import logoImage from '../../../images/logo.svg';
import style from './Toolbar.module.css';
import { useState } from 'react';

interface ToolbarProps {
  subjectId?: string;
}

const Toolbar = ({ subjectId }: ToolbarProps): React.JSX.Element => {

  const [isExpanded, setIsExpanded]: UseStateValue<boolean> = useState<boolean>(false);
  const containerHeight: string = isExpanded ? 'calc(100vh)' : 'calc(20px * 2 + 1rem + 1px)';
  const globalGraphLinkUrl: string = subjectId !== undefined ? `/global-graph?subject=${subjectId}` : '/global-graph';

  return (
    <div className={style.container} style={{ height: containerHeight }}>
      <div className={style.toolbar}>
        <ToolbarMenuButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <img className={style.logo} src={logoImage} alt="ZEN大 カリキュラム・グラフのロゴ" />
      </div>
      <div className={style.menu}>
        <ToolbarMenuLink text="Home" to="/" setIsExpanded={setIsExpanded} />
        <ToolbarMenuLink text="グローバルグラフ" to={globalGraphLinkUrl} setIsExpanded={setIsExpanded} />
        <ToolbarMenuLink text="科目" to="/subjects" setIsExpanded={setIsExpanded} />
        <ToolbarMenuLink text="不具合を報告する" to="/report-bugs" setIsExpanded={setIsExpanded} />
      </div>
    </div>
  );
};

export default Toolbar;
