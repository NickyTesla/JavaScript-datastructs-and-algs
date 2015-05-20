// Augments the BFS to check whether a graph is bipartite aka can be
// colored using two colors.  Nodes that touch cannot be the same color.


Graph.prototype.twoColor = function() {
  var processed = [], discovered = [],  queue = [], parent = [], that = this;

  var bipartite = true, color = [];


  for(i = 0; i < this.nvertices; i++) {
    processed[i] = discovered[i] = false;
    parent[i] = -1;
  }


  for (var j = 0; j < this.nvertices; j++) {
    color[j] = null;
  }

  for (var k = 0; k < this.nvertices; k++) {
      if (discovered[k] == false) {
        color[k] = "white";
        search(k)
      }
  }

  return color;

  function search(start) {
    queue.push(start);
    discovered[start] = true;

    while (queue.length > 0) {
      var currentNode = queue.shift();
      var adj = that.adjList[currentNode];
      processEarly(currentNode);
      processed[currentNode] = true;

      while (adj !== null) {

        var successor = adj.vtx;

        if ((processed[successor] === false) || this.directed) {
          processEdge(currentNode, successor);
        }

        if (discovered[successor] === false) {
          queue.push(successor);
          discovered[successor] = true;
          parent[successor] = currentNode;
        }
        adj = adj.next;
      }
      processLate(currentNode)
    }
  }

  /////// customize what happens as you're traversing the graph
  ////by using these functions
  function processEarly(vtx) {
    console.log("processed vertex ", vtx);
  };

  function processLate(vtx) {
  };

  function processEdge(vtx1, vtx2) {
    if (color[vtx1] === color[vtx2]) {
      bipartite = false;
      console.log("warning not bipartite");
    }

    color[vtx2] = complement(color[vtx1]);
  };

  function complement(color) {
    if (color === "white") {
      return "black";
    } else if (color === "black") {
      return "white"
    }

    return null;
  };
}
