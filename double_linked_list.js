function Node(item) {
  this.item = item;
  this.next = null;
  this.prev = null;
};

function LinkedList() {
  this.head = null;
  this.length = 0;
}

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

  add: function(item) {
    var newNode = new Node(item);

    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;

    this.length++;
  },

  delete: function(item) {
    var toDelete = this.find(item),
        prev = toDelete.prev;

    prev.next = toDelete.next;

    this.length--;
  },

  display: function() {
   var currNode = this.head;
   
   if (currNode) {
     console.log(currNode.item);
   }

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
}
