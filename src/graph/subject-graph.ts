import { type NavigateFunction } from 'react-router';
import cytoscape from 'cytoscape';

export class SubjectGraph {

  static style: cytoscape.StylesheetJson = [
    {
      selector: 'node',
      style: {
        'width': 17,
        'height': 17,
        'backgroundColor': '#3b3b4c',
        'label': 'data(name)',
        'font-size': 10,
        'text-margin-y': -1,
        'text-background-color': '#f4f4ff',
        'text-background-opacity': 0.75,
        'text-background-shape': 'roundrectangle',
        'text-background-padding': '1'
      }
    },
    {
      selector: 'node.currentlyViewing',
      'style': {
        'width': 25,
        'height': 25,
        'shape': 'round-rectangle',
        'backgroundColor': '#030363'
      }
    },
    {
      selector: 'edge',
      'style': {
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    },
    {
      selector: 'edge.highlyRecommendedPrerequisite',
      'style': {
        'width': 5,
        'line-color': '#bb0044',
        'target-arrow-color': '#bb0044'
      }
    },
    {
      selector: 'edge.recommendedPrerequisite',
      'style': {
        'width': 2,
        'line-color': '#666688',
        'target-arrow-color': '#666688'
      }
    },
    {
      selector: 'edge.recommendedSuccessor',
      'style': {
        'width': 2,
        'line-color': '#666688',
        'line-style': 'dotted',
        'target-arrow-color': '#666688'
      }
    }
  ];

  static layout: cytoscape.LayoutOptions = {
    name: 'cose',
    animate: false
  };

  static initialize(
    container: HTMLDivElement, 
    elements: cytoscape.ElementDefinition[],
    currentlyViewingSubjectId: string | null,
    canClickCurrentlyViewingSubjectNode: boolean,
    navigate: NavigateFunction
  ): void {
    const cy = cytoscape({
      container: container,
      elements: elements,
      style: SubjectGraph.style,
      layout: SubjectGraph.layout
    });
    const zoomLevel = cy.zoom();
    const maxZoomLevel = 2;
    cy.zoom({
      level: zoomLevel > maxZoomLevel ? maxZoomLevel : zoomLevel,
      position: { x: 0, y: 0 }
    });
    cy.maxZoom(maxZoomLevel);
    cy.center();

    cy.on('tap', 'node', (event) => {
      const node: cytoscape.SingularData = event.target;
      const subjectNumbering: string = node.id();

      function navigateToSubjectPage(subjectNumbering: string): void {
        navigate(`/subjects/${subjectNumbering}`);
        window.scrollTo(0, 0);
      }

      if (canClickCurrentlyViewingSubjectNode) {
        navigateToSubjectPage(subjectNumbering);
      } else {
        if (subjectNumbering !== currentlyViewingSubjectId) {
          navigateToSubjectPage(subjectNumbering);
        }
      }
    });
  }

}
