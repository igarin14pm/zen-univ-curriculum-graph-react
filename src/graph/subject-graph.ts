import { type NavigateFunction } from 'react-router';
import cytoscape from 'cytoscape';

export class SubjectGraph {

  static style: cytoscape.StylesheetJson = [
    {
      selector: 'node, edge',
      style: {
        'transition-property': 'opacity',
        'transition-duration': 100
      }
    },
    {
      selector: 'node',
      style: {
        'width': 17,
        'height': 17,
        'backgroundColor': '#3b3b4c',
        'label': 'data(name)',
        'font-size': 7.5,
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
    },
    {
      selector: '.semitransparent',
      'style': {
        'opacity': 0.15,
        'z-index': -1
      }
    }
  ];

  static layout: cytoscape.LayoutOptions = {
    name: 'cose',
    animate: false,
    componentSpacing: 100,
    gravity: 300,
    idealEdgeLength: 1,
    nodeRepulsion: 500000
  };

  cy: cytoscape.Core;

  constructor(
    container: HTMLDivElement,
    elements: cytoscape.ElementDefinition[],
    currentlyViewingSubjectId: string | null,
    canClickCurrentlyViewingSubjectNode: boolean,
    navigate: NavigateFunction
  ) {
    this.cy = cytoscape({
      container: container,
      elements: elements,
      style: SubjectGraph.style,
      layout: SubjectGraph.layout
    });
    const zoomLevel = this.cy.zoom();
    const maxZoomLevel = 2;
    this.cy.zoom({
      level: zoomLevel > maxZoomLevel ? maxZoomLevel : zoomLevel,
      position: { x: 0, y: 0 }
    });
    this.cy.maxZoom(maxZoomLevel);
    this.cy.center();

    this.cy.on('tap', 'node', (event) => {
      const node: cytoscape.SingularData = event.target;
      const subjectId: string = node.id();

      function navigateToSubjectPage(subjectId: string): void {
        navigate(`/subjects/${subjectId}`);
        window.scrollTo(0, 0);
      }

      if (canClickCurrentlyViewingSubjectNode) {
        navigateToSubjectPage(subjectId);
      } else {
        if (subjectId !== currentlyViewingSubjectId) {
          navigateToSubjectPage(subjectId);
        }
      }
    });

    const highlightRelatedSubjects = (event: cytoscape.EventObject): void => {
      const allNodesAndEdges: cytoscape.Collection = this.cy.$('node, edge');
      allNodesAndEdges.addClass('semitransparent');

      const node: cytoscape.SingularData = event.target;
      const relatedNodesAndEdges: cytoscape.Collection[] = this.filterRelatedNodesAndEdges(node.id());
      relatedNodesAndEdges.forEach((nodeOrEdge) => {
        nodeOrEdge.removeClass('semitransparent');
      });
    };

    const highlightAllSubjects = (): void => {
      const allNodesAndEdges: cytoscape.Collection = this.cy.$('node, edge');
      allNodesAndEdges.removeClass('semitransparent');
    };

    this.cy.on('mouseover', 'node', (event) => {
      highlightRelatedSubjects(event);
    });

    this.cy.on('mouseout', 'node', () => {
      highlightAllSubjects();
    });

    this.cy.on('touchstart', 'node', (event) => {
      highlightRelatedSubjects(event);
    });

    this.cy.on('touchend', 'node', () => {
      highlightAllSubjects();
    });

    this.cy.on('cxttapstart', 'node', () => {
      highlightAllSubjects();
    });

  }

  filterRelatedNodesAndEdges(nodeId: string): cytoscape.Collection[] {
    const ids: string[] = [];

    const pushIncomingNodeEdgeIds = (id: string): void => {
      if (ids.includes(id)) { return; }
      ids.push(id);
      const collection: cytoscape.Collection = this.cy.$(`#${id}`);
      collection.forEach((element) => {
        if (element.isNode()) {
          const node = element as cytoscape.NodeSingular;
          const incomingEdges: cytoscape.EdgeCollection = this.cy.$(`edge[target = "${node.id()}"]`);
          incomingEdges.forEach((edge) => {
            pushIncomingNodeEdgeIds(edge.id());
          });
        }
        if (element.isEdge()) {
          const edge = element as cytoscape.EdgeSingular;
          const sourceNode: cytoscape.NodeSingular = edge.source();
          pushIncomingNodeEdgeIds(sourceNode.id());
        }
      });
    };

    const pushOutgoingNodeEdgeIds = (id: string): void => {
      if (ids.includes(id)) { return; }
      ids.push(id);
      const collection: cytoscape.Collection = this.cy.$(`#${id}`);
      collection.forEach((element) => {
        if (element.isNode()) {
          const node = element as cytoscape.NodeSingular;
          const outgoingEdges: cytoscape.EdgeCollection = this.cy.$(`edge[source = "${node.id()}"]`);
          outgoingEdges.forEach((edge) => {
            pushOutgoingNodeEdgeIds(edge.id());
          });
        }
        if (element.isEdge()) {
          const edge = element as cytoscape.EdgeSingular;
          const targetNode: cytoscape.NodeSingular = edge.target();
          pushOutgoingNodeEdgeIds(targetNode.id());
        }
      });
    };

    ids.push(nodeId);

    const incomingEdges = this.cy.$(`edge[target = "${nodeId}"]`);
    incomingEdges.forEach((edge) => {
      pushIncomingNodeEdgeIds(edge.id());
    });

    const outgoingEdges = this.cy.$(`edge[source = "${nodeId}"]`);
    outgoingEdges.forEach((edge) => {
      pushOutgoingNodeEdgeIds(edge.id());
    });

    const result = ids.map((id) => this.cy.$(`#${id}`));
    return result;
  }

  destroy(): void {
    this.cy.destroy();
  }
  
}
