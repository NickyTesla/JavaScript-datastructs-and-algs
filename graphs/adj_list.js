// taken pretty much explicitly from Skiena
function Graph(nvertices, directed) {
  this.adjList = [];
  this.degree = [];
  this.nvertices = nvertices;
  this.nedges = 0;
  this.directed = directed;

  for (var i = 0; i < nvertices; i++) {
    this.adjList[i] = null;
    this.degree[i] = 0;
  }
}

function EdgeNode(vtx, weight) {
  this.vtx = vtx;
  this.weight = weight;
  this.next = null;
}


Graph.prototype.insertEdge = function(vtx1, vtx2, directed) {
  var directed = directed || this.directed;

  var node2 = new EdgeNode(vtx2, null);
  node2.next = this.adjList[vtx1];
  this.adjList[vtx1] = node2;
  this.degree[vtx1]++;

  if (directed === false) {
    this.insertEdge(vtx2, vtx1, true)
  } else {
    this.nedges++;
  }

}



Graph.prototype.show = function() {
  for (var i = 0; i < this.adjList.length; i++) {
    var edge = this.adjList[i];
    var line = ""
    while (edge !== null) {
      line += edge.vtx;
      edge = edge.next;
    }
    console.log(line);
  }
}
