import { type Subject, type Syllabus } from '../data/syllabus';
import { type NavigateFunction } from 'react-router';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import type cytoscape from 'cytoscape';

export class GlobalGraph {

  subjectGraph: SubjectGraph;

  constructor(
    container: HTMLDivElement,
    syllabus: Syllabus,
    currentlyViewingSubject: Subject | null,
    navigate: NavigateFunction
  ) {
    const subjects: Subject[] = syllabus.subjects;
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    const currentlyViewingSubjectId: string | null = currentlyViewingSubject == null ? null : currentlyViewingSubject.id;
    this.subjectGraph = new SubjectGraph(
      container, 
      elements, 
      currentlyViewingSubjectId, 
      true,
      navigate
    );
  }

  destroy(): void {
    this.subjectGraph.destroy();
  }

}
