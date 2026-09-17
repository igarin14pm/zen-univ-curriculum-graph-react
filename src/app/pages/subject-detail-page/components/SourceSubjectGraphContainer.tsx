import { type NavigateFunction, useNavigate } from 'react-router';
import { type RefObject, useEffect, useRef } from 'react';
import { type Subject, Syllabus } from '../../../../data/syllabus';
import { SourceSubjectGraph } from '../../../../graph/source-subject-graph';
import style from './SourceSubjectGraphContainer.module.css';

interface SourceSubjectGraphContainerProps {
  syllabus: Syllabus;
  currentlyViewingSubject: Subject;
}

const SourceSubjectGraphContainer = ({ syllabus, currentlyViewingSubject }: SourceSubjectGraphContainerProps): React.JSX.Element => {
  const conatinerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (conatinerRef.current == null) { return; }
    const sourceSubjectGraph = new SourceSubjectGraph(
      conatinerRef.current, 
      syllabus, 
      currentlyViewingSubject,
      navigate
    );

    return () => {
      sourceSubjectGraph.destroy();
    };
  }, [syllabus, currentlyViewingSubject, navigate]);

  return <div className={style.graphContainer} ref={conatinerRef}></div>;
};

export default SourceSubjectGraphContainer;
