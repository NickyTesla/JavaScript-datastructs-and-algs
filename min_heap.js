function MinHeap() {
  this.elements = [];
};

MinHeap.prototype.parent = function(idx) {
  if (idx === 0) {
    return null;
  }

  return Math.floor((idx + 1)/2) - 1;
};

MinHeap.prototype.youngChild = function(idx) {
  return ((idx+1) * 2) - 1
};


MinHeap.prototype.insert = function(element) {
  this.elements.push(element);
  this.bubbleUp(this.elements.length - 1);
};

MinHeap.prototype.bubbleUp = function(idx) {
  var parentIndex = this.parent(idx),
      temp;

  if (parentIndex === null) {  //aka at root of the heap, so no parent.
    return;
  }
  if (this.elements[parentIndex] > this.elements[idx]) {  //perform the swap
    temp = this.elements[parentIndex];
    this.elements[parentIndex] = this.elements[idx];
    this.elements[idx] = temp

    this.bubbleUp(parentIndex);
  }
};

MinHeap.prototype.makeHeap = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
};

MinHeap.prototype.extractMin = function() {
  var min = null,
      last;

  if (this.elements.length > 0) {
    min = this.elements[0];
    last = this.elements.pop();
    this.elements[0] = last;
    this.bubbleDown(0);
  }

  return min;
};

MinHeap.prototype.bubbleDown = function(idx) {
  var childIndex = this.youngChild(idx),
      minIndex = idx,
      temp;

  for (var i = 0; i <= 1; i++) {
    if (childIndex + i <= this.elements.length) {
      if (this.elements[minIndex] > this.elements[childIndex + i]) {
        minIndex = childIndex + i;
      }
    }
  }

  if (minIndex !== idx) {
    temp = this.elements[minIndex];
    this.elements[minIndex] = this.elements[idx];
    this.elements[idx] = temp

    this.bubbleDown(minIndex);
  }
};
