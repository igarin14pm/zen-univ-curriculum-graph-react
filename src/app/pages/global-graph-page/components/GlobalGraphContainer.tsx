import { type NavigateFunction, useNavigate } from 'react-router';
import { type RefObject, useEffect, useRef } from 'react';
import { type Subject, type Syllabus } from '../../../../data/syllabus';
import { GlobalGraph } from '../../../../graph/global-graph';
import style from './GlobalGraphContainer.module.css';

interface GlobalGraphContainerProps {
  syllabus: Syllabus;
  searchParams: URLSearchParams;
}

const GlobalGraphContainer = ({ syllabus, searchParams }: GlobalGraphContainerProps): React.JSX.Element => {
  // `URLSearchParams` から `Subject` を取得
  const subjectSearchParam: string | null = searchParams.get('subject');
  let subject: Subject | null = null;
  if (subjectSearchParam != null && syllabus.has(subjectSearchParam)) {
    subject = syllabus.get(subjectSearchParam);
  };

  // グラフを描画
  const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (containerRef.current == null) { return; }
    const globalGraph = new GlobalGraph(
      containerRef.current,
      syllabus,
      subject,
      navigate
    );

    return () => {
      globalGraph.destroy();
    };
  }, [syllabus, subject, subject?.id, navigate]);

  return <div className={style.container} ref={containerRef}></div>;
};

export default GlobalGraphContainer;
