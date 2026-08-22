import { type NavigateFunction, useNavigate } from 'react-router';
import { type RefObject, useEffect, useRef } from 'react';
import { type Subject, Syllabus } from '../../../../data/syllabus';
import { TargetSubjectGraph } from '../../../../graph/target-subject-graph';
import style from './TargetSubjectGraphContainer.module.css';

interface TargetSubjectGraphContainerProps {
  syllabus: Syllabus;
  currentlyViewingSubject: Subject;
}

const TargetSubjectGraphContainer = ({ syllabus, currentlyViewingSubject }: TargetSubjectGraphContainerProps): React.JSX.Element => {
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (containerRef.current != null) {
      TargetSubjectGraph.initialize(
        containerRef.current, 
        syllabus, 
        currentlyViewingSubject,
        navigate
      );
    }
  });
  return <div className={style.graphContainer} ref={containerRef}></div>;
};

export default TargetSubjectGraphContainer;
