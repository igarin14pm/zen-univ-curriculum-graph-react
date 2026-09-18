import { type RefObject, useEffect, useRef } from 'react';
import { SubjectGraphLegend } from '../../../../graph/subject-graph-legend';
import style from './HomePageSubjectGraphLegendContainer.module.css';

const HomePageSubjectGraphLegendContainer = (): React.JSX.Element => {
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current == null) { return; }
    const subjectGraphLegend = new SubjectGraphLegend(
      containerRef.current
    );

    return () => {
      subjectGraphLegend.destroy();
    };
  }, []);

  return <div className={style.graphContainer} ref={containerRef}></div>;
};

export default HomePageSubjectGraphLegendContainer;
