import { type Subject, Syllabus } from '../data/syllabus';
import { SubjectGraph } from './subject-graph';
import { SubjectNodeEdgeConverter } from './subject-node-edge-converter';
import cytoscape from 'cytoscape';

export class TargetSubjectGraph {

  static getGraphSubjects(syllabus: Syllabus, currentlyViewingSubject: Subject): Subject[] {
    const queue: Subject[] = [currentlyViewingSubject];
    const result: Subject[] = [];

    function includes(subject: Subject): boolean {
      return queue.includes(subject) || result.includes(subject);
    }

    while (queue.length > 0) {
      queue[0].recommendedSuccessorIds.forEach((recommendedSuccessorId) => {
        const recommendedSuccessor: Subject = syllabus.getSubjectById(recommendedSuccessorId);
        if (!includes(recommendedSuccessor)) {
          queue.push(recommendedSuccessor);
        }
      });
      syllabus.subjects.forEach((subject) => {
        if (subject.highlyRecommendedPrerequisiteIds.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        } else if (subject.recommendedPrerequisiteIds.includes(queue[0].id) && !includes(subject)) {
          queue.push(subject);
        }
      });
      result.push(queue.shift()!);
    }

    return result;
  }

  static initialize(container: HTMLDivElement, syllabus: Syllabus, currentlyViewingSubject: Subject): void {
    const subjects: Subject[] = TargetSubjectGraph.getGraphSubjects(syllabus, currentlyViewingSubject);
    const elements: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convert(subjects, currentlyViewingSubject);
    SubjectGraph.initialize(container, elements);
  }

}
