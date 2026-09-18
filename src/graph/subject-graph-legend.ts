import { SubjectGraph } from './subject-graph';
import cytoscape from 'cytoscape';

export class SubjectGraphLegend {
  
  static elements: cytoscape.ElementDefinition[] = [
    {
      data: {
        id: 'subject',
        name: '科目'
      },
      position: {
        x: 0,
        y: 0
      }
    },
    {
      data: {
        id: 'highly-recommended-prerequisite-source'
      },
      position: {
        x: 0,
        y: 50
      }
    },
    {
      data: {
        id: 'highly-recommended-prerequisite-target'
      },
      position: {
        x: 150,
        y: 50
      }
    },
    {
      data: {
        id: 'highly-recommended-prerequisite-edge',
        name: '前提科目（強く推奨）',
        source: 'highly-recommended-prerequisite-source',
        target: 'highly-recommended-prerequisite-target'
      },
      classes: ['highlyRecommendedPrerequisite']
    },
    {
      data: {
        id: 'recommended-prerequisite-source'
      },
      position: {
        x: 0,
        y: 100
      }
    },
    {
      data: {
        id: 'recommended-prerequisite-target'
      },
      position: {
        x: 150,
        y: 100
      }
    },
    {
      data: {
        id: 'recommended-prerequisite-edge',
        name: '前提科目（推奨）',
        source: 'recommended-prerequisite-source',
        target: 'recommended-prerequisite-target'
      },
      classes: ['recommendedPrerequisite']
    },
    {
      data: {
        id: 'recommended-successor-source',
      },
      position: {
        x: 0,
        y: 150
      }
    },
    {
      data: {
        id: 'recommended-successor-target',
      },
      position: {
        x: 150,
        y: 150
      }
    },
    {
      data: {
        id: 'recommended-successor-edge',
        name: '後継科目（推奨）',
        source: 'recommended-successor-source',
        target: 'recommended-successor-target'
      },
      classes: ['recommendedSuccessor']
    }
  ];

  static layout: cytoscape.LayoutOptions = {
    name: 'preset'
  };

  cy: cytoscape.Core;
  
  constructor(container: HTMLDivElement) {
    this.cy = cytoscape({
      container: container,
      elements: SubjectGraphLegend.elements,
      style: SubjectGraph.style,
      layout: SubjectGraphLegend.layout
    });
    const zoomLevel = this.cy.zoom();
    const maxZoomLevel = 2;
    this.cy.zoom({
      level: zoomLevel > maxZoomLevel ? maxZoomLevel : zoomLevel,
      position: { x: 0, y: 0 }
    });
    this.cy.maxZoom(maxZoomLevel);
    this.cy.center();
  }

  destroy(): void {
    this.cy.destroy();
  }

}
