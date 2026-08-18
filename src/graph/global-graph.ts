import { type Subject, type Syllabus } from '../data/syllabus';
import { type NavigateFunction } from 'react-router';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import type cytoscape from 'cytoscape';

export class GlobalGraph {
  static initialize(
    container: HTMLDivElement,
    syllabus: Syllabus,
    currentlyViewingSubject: Subject | null,
    navigate: NavigateFunction
  ) {
    const subjects: Subject[] = syllabus.subjects;
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    const currentlyViewingSubjectId: string | null = currentlyViewingSubject == null ? null : currentlyViewingSubject.id;
    SubjectGraph.initialize(
      container, 
      elements, 
      currentlyViewingSubjectId, 
      true,
      navigate
    );
  }
}
