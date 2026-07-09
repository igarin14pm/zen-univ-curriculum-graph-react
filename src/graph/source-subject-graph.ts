import { type Subject, Syllabus } from '../data/syllabus';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import type cytoscape from 'cytoscape';

export class SourceSubjectGraph {

  static getGraphSubjects(currentlyViewingSubject: Subject): Subject[] {
    const queue: Subject[] = [currentlyViewingSubject];
    const result: Subject[] = [];

    function includes(subject: Subject): boolean {
      return queue.includes(subject) || result.includes(subject);
    }

    while (queue.length > 0) {
      queue[0].highlyRecommendedPrerequisites.forEach((highlyRecommendedPrerequisiteId) => {
        const highlyRecommendedPrerequisite: Subject = Syllabus.getSubjectById(highlyRecommendedPrerequisiteId);
        if (!includes(highlyRecommendedPrerequisite)) {
          queue.push(highlyRecommendedPrerequisite);
        }
      });
      queue[0].recommendedPrerequisites.forEach((recommendedPrerequisiteId) => {
        const recommendedPrerequisite: Subject = Syllabus.getSubjectById(recommendedPrerequisiteId);
        if (!includes(recommendedPrerequisite)) {
          queue.push(recommendedPrerequisite);
        }
      });
      Syllabus.mockSubjects.forEach((subject) => {
        if (subject.recommendedSuccessors.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        }
      });
      result.push(queue.shift()!);
    }

    return result;
  }

  static initialize(container: HTMLDivElement, currentlyViewingSubject: Subject): void {
    const subjects: Subject[] = SourceSubjectGraph.getGraphSubjects(currentlyViewingSubject);
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    SubjectGraph.initialize(container, elements);
  }

}
