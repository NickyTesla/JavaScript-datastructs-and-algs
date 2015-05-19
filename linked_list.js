function Node(item) {
  this.item = item;
  this.next = null;
};

function LinkedList() {
  this.head = null;
  this.length = 0;
};


LinkedList.prototype = {

  find: function(item) {
    var currNode = this.head;

    while (currNode.item !== item) {
      currNode = currNode.next;
      if (currNode === null) {
        return null;
      }
    }

    return currNode;
  },

  add: function(newItem) {
    var newNode = new Node(newItem);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  },

  delete: function(item) {
    var toDelete = this.find(item),
        prev = this.findPrevious(item);

    prev.next = toDelete.next;
    this.length--;
  },

  findPrevious: function(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && currNode.next.item !== item) {
      currNode = currNode.next;
    }

    return currNode;

  },

  display: function() {

   var currNode = this.head;
   console.log(currNode.item);
   while (!(currNode.next == null)) {
     console.log(currNode.next.item);
     currNode = currNode.next;
   }
   return;
  },

  toArray: function() {
    var result = [],
        current = this.head;

    while (current) {
      result.push(current.item);
      current = current.next;
    }

    return result;
  },

  toString: function() {
    return this.toArray().toString();
  }
};
