import { type RefObject, useEffect, useRef } from 'react';
import { SourceSubjectGraph } from '../../../../graph/source-subject-graph';
import { type Subject } from '../../../../data/syllabus';
import style from './SourceSubjectGraphContainer.module.css';

interface SourceSubjectGraphContainerProp {
  currentlyViewingSubject: Subject;
}

const SourceSubjectGraphContainer = ({ currentlyViewingSubject }: SourceSubjectGraphContainerProp): React.JSX.Element => {
  const conatinerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (conatinerRef.current != null) {
      SourceSubjectGraph.initialize(conatinerRef.current, currentlyViewingSubject);
    }
  });
  return <div className={style.graphContainer} ref={conatinerRef}></div>;
};

export default SourceSubjectGraphContainer;
