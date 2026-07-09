import { type Subject, Syllabus } from '../data/syllabus';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import cytoscape from 'cytoscape';

export class TargetSubjectGraph {

  static getGraphSubjects(currentlyViewingSubject: Subject): Subject[] {
    const queue: Subject[] = [currentlyViewingSubject];
    const result: Subject[] = [];

    function includes(subject: Subject): boolean {
      return queue.includes(subject) || result.includes(subject);
    }

    while (queue.length > 0) {
      queue[0].recommendedSuccessors.forEach((recommendedSuccessorId) => {
        const recommendedSuccessor: Subject = Syllabus.getSubjectById(recommendedSuccessorId);
        if (!includes(recommendedSuccessor)) {
          queue.push(recommendedSuccessor);
        }
      });
      Syllabus.mockSubjects.forEach((subject) => {
        if (subject.highlyRecommendedPrerequisites.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        } else if (subject.recommendedPrerequisites.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        }
      });
      result.push(queue.shift()!);
    }

    return result;
  }

  static initialize(container: HTMLDivElement, currentlyViewingSubject: Subject): void {
    const subjects: Subject[] = TargetSubjectGraph.getGraphSubjects(currentlyViewingSubject);
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    SubjectGraph.initialize(container, elements);
  }

}
