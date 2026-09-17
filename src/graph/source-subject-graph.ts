import { type Subject, Syllabus } from '../data/syllabus';
import { type NavigateFunction } from 'react-router';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import type cytoscape from 'cytoscape';

export class SourceSubjectGraph {

  static getGraphSubjects(syllabus: Syllabus, currentlyViewingSubject: Subject): Subject[] {
    const queue: Subject[] = [currentlyViewingSubject];
    const result: Subject[] = [];

    function includes(subject: Subject): boolean {
      return queue.includes(subject) || result.includes(subject);
    }

    while (queue.length > 0) {
      queue[0].highlyRecommendedPrerequisiteIds.forEach((highlyRecommendedPrerequisiteId) => {
        const highlyRecommendedPrerequisite: Subject = syllabus.get(highlyRecommendedPrerequisiteId);
        if (!includes(highlyRecommendedPrerequisite)) {
          queue.push(highlyRecommendedPrerequisite);
        }
      });
      queue[0].recommendedPrerequisiteIds.forEach((recommendedPrerequisiteId) => {
        const recommendedPrerequisite: Subject = syllabus.get(recommendedPrerequisiteId);
        if (!includes(recommendedPrerequisite)) {
          queue.push(recommendedPrerequisite);
        }
      });
      syllabus.subjects.forEach((subject) => {
        if (subject.recommendedSuccessorIds.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        }
      });
      result.push(queue.shift()!);
    }

    return result;
  }

  static initialize(
    container: HTMLDivElement, 
    syllabus: Syllabus, 
    currentlyViewingSubject: Subject,
    navigate: NavigateFunction
  ): void {
    const subjects: Subject[] = SourceSubjectGraph.getGraphSubjects(syllabus, currentlyViewingSubject);
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subjectGraph = new SubjectGraph(
      container, 
      elements, 
      currentlyViewingSubject.id, 
      false,
      navigate
    );
  }

}
