import { type Subject } from '../data/syllabus'; 
import cytoscape from 'cytoscape';

export class SubjectNodeEdgeConverter {

  static convertToNodes(subjects: Subject[], currentlyViewingSubject: Subject | null): cytoscape.ElementDefinition[] {
    return subjects.map((subject) => {
      const classNames: string[] = [];
      if (subject.id === currentlyViewingSubject?.id) {
        classNames.push('currentlyViewing');
      }
      return {
        data: {
          id: subject.id,
          name: subject.name
        },
        classes: classNames
      };
    });
  }

  static convertToEdges(subjects: Subject[]): cytoscape.ElementDefinition[] {
    
    const edges: cytoscape.ElementDefinition[] = [];
    
    function hasNodes(id1: string, id2: string): boolean {
      const id1Result: boolean = subjects.some((subject) => subject.id === id1);
      const id2Result: boolean = subjects.some((subject) => subject.id === id2);
      return id1Result && id2Result;
    }

    function edgeAlreadyExists(sourceId: string, targetId: string): boolean {
      return edges.some((edge) => edge.data.source === sourceId && edge.data.target === targetId);
    }
    
    subjects.forEach((subject) => {
      subject.highlyRecommendedPrerequisites.forEach((sourceId) => {
        if (hasNodes(sourceId, subject.id)) {
          edges.push({
          data: {
            id: `${sourceId}_${subject.id}`,
            source: sourceId,
            target: subject.id
          },
          classes: ['highlyRecommendedPrerequisite']
        });
        }
      });
    });
    subjects.forEach((subject) => {
      subject.recommendedPrerequisites.forEach((sourceId) => {
        if (hasNodes(sourceId, subject.id) && !edgeAlreadyExists(sourceId, subject.id)) {
          edges.push({
            data: {
              id: `${sourceId}_${subject.id}`,
              source: sourceId,
              target: subject.id
            },
            classes: ['recommendedPrerequisite']
          });
        }
      });
    });
    subjects.forEach((subject) => {
      subject.recommendedSuccessors.forEach((targetId) => {
        if (hasNodes(subject.id, targetId) && !edgeAlreadyExists(subject.id, targetId)) {
          edges.push({
            data: {
              id: `${subject.id}_${targetId}`,
              source: subject.id,
              target: targetId
            },
            classes: ['recommendedSuccessor']
          });
        }
      });
    });
    return edges;
  }

  static convert(subjects: Subject[], currentlyViewingSubject: Subject | null): cytoscape.ElementDefinition[] {
    const nodes: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convertToNodes(subjects, currentlyViewingSubject);
    const edges: cytoscape.ElementDefinition[] = SubjectNodeEdgeConverter.convertToEdges(subjects);
    return [...nodes, ...edges];
  }

}
