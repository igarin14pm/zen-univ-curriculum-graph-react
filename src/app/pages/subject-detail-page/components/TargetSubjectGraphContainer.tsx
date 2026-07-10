import { type RefObject, useEffect, useRef } from 'react';
import { type Subject, Syllabus } from '../../../../data/syllabus';
import { TargetSubjectGraph } from '../../../../graph/target-subject-graph';
import style from './TargetSubjectGraphContainer.module.css';

interface TargetSubjectGraphContainerProp {
  syllabus: Syllabus;
  currentlyViewingSubject: Subject;
}

const TargetSubjectGraphContainer = ({ syllabus, currentlyViewingSubject }: TargetSubjectGraphContainerProp): React.JSX.Element => {
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current != null) {
      TargetSubjectGraph.initialize(containerRef.current, syllabus, currentlyViewingSubject);
    }
  });
  return <div className={style.graphContainer} ref={containerRef}></div>;
};

export default TargetSubjectGraphContainer;
