import { type NavigateFunction, useNavigate } from 'react-router';
import { type RefObject, useEffect, useRef } from 'react';
import { GlobalGraph } from '../../../../graph/global-graph';
import type { Syllabus } from '../../../../data/syllabus';
import style from './GlobalGraphContainer.module.css';

interface GlobalGraphContainerProp {
  syllabus: Syllabus;
}

const GlobalGraphContainer = ({ syllabus }: GlobalGraphContainerProp): React.JSX.Element => {
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (containerRef.current != null) {
      GlobalGraph.initialize(
        containerRef.current,
        syllabus,
        null, // TODO: 後で置き換える
        navigate
      );
    };
  });
  return <div className={style.container} ref={containerRef}></div>;
};

export default GlobalGraphContainer;
