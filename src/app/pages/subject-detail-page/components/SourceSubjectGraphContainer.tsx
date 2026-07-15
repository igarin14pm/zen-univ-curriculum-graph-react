import { type NavigateFunction, useNavigate } from 'react-router';
import { type RefObject, useEffect, useRef } from 'react';
import { type Subject, Syllabus } from '../../../../data/syllabus';
import { SourceSubjectGraph } from '../../../../graph/source-subject-graph';
import style from './SourceSubjectGraphContainer.module.css';

interface SourceSubjectGraphContainerProp {
  syllabus: Syllabus;
  currentlyViewingSubject: Subject;
}

const SourceSubjectGraphContainer = ({ syllabus, currentlyViewingSubject }: SourceSubjectGraphContainerProp): React.JSX.Element => {
  const conatinerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (conatinerRef.current != null) {
      SourceSubjectGraph.initialize(
        conatinerRef.current, 
        syllabus, 
        currentlyViewingSubject,
        navigate
      );
    }
  });
  return <div className={style.graphContainer} ref={conatinerRef}></div>;
};

export default SourceSubjectGraphContainer;
