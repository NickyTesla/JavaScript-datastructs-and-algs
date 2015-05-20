Graph.prototype.bfs = function(rootNode) {
  var processed = [], discovered = [],  queue = [], parent = [], that = this;

  for(i = 0; i < this.nvertices; i++) {
    processed[i] = discovered[i] = false;
    parent[i] = -1;
  }

  search(rootNode)

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
  }

  function processLate(vtx) {
  }

  function processEdge(vtx1, vtx2) {
    console.log("processed edge ", vtx1, vtx2);
  }
}
