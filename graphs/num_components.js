// Uses the BFS implementation on the adjacency list to calculate the
// number of components in a graph.  Compenents being distinct sections
// that are connected (could also be isolated individuals).

Graph.prototype.numComponents = function() {
  var processed = [], discovered = [],  queue = [], parent = [], that = this;
  var components = 0;
  for(i = 0; i < this.nvertices; i++) {
    processed[i] = discovered[i] = false;
    parent[i] = -1;
  }

  for (var j = 0; j < this.nvertices; j++) {
    if (discovered[j] === false) {
      components++;
      search(j);
    }
  }

  return components;

  function search(start) {
    queue.push(start);
    discovered[start] = true;

    while (queue.length > 0) {
      var currentNode = queue.shift();
      var adj = that.adjList[currentNode];
      processed[currentNode] = true;

      while (adj !== null) {

        var successor = adj.vtx;

        if (discovered[successor] === false) {
          queue.push(successor);
          discovered[successor] = true;
          parent[successor] = currentNode;
        }
        adj = adj.next;
      }
    }
  }
}
