import { type RefObject, useEffect, useRef } from 'react';
import { type Subject } from '../../../../data/syllabus';
import { TargetSubjectGraph } from '../../../../graph/target-subject-graph';
import style from './TargetSubjectGraphContainer.module.css';

interface TargetSubjectGraphContainerProp {
  currentlyViewingSubject: Subject
}

const TargetSubjectGraphContainer = ({ currentlyViewingSubject }: TargetSubjectGraphContainerProp): React.JSX.Element => {
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current != null) {
      TargetSubjectGraph.initialize(containerRef.current, currentlyViewingSubject);
    }
  });
  return <div className={style.graphContainer} ref={containerRef}></div>;
};

export default TargetSubjectGraphContainer;
