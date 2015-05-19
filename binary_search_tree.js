function BSTNode(item) {
  this.item = item;
  this.left = null;
  this.right = null;
  this.parent = null;
}


BSTNode.prototype = {

  search: function(item) {

    if (this.item === item) {
      return this;
    }

    if (item < this.item) {
      return this.left && this.left.search(item);
    } else {
      return this.right && this.right.search(item);
    }
  },

  insert: function(item) {

    if (item < this.item) {

      if (!this.left) {
        this.left = new BSTNode(item);
        this.left.parent = this;
      } else {
        this.left.insert(item);
      }

    } else {

      if (!this.right) {
        this.right = new BSTNode(item);
        this.right.parent = this;
      } else {
        this.right.insert(item);
      }

    }
  },

  min: function() {
    var min = this;
    while (min.left !== null) {
      min = min.left;
    }
    return min;
  },

  max: function() {
    var max = this;
    while (max.right !== null) {
      max = max.right;
    }
    return max;
  },

  traverse: function() {
    if (this !== null) {
      if (this.left) {
        this.left.traverse();
      }
      console.log(this.item);
      if (this.right) {
        this.right.traverse();
      }
    }
  },

  remove: function(item) {
    var toRemove = this.search(item), replacement;
    if (!toRemove) {
      return null;
    }

    if (toRemove.left === null && toRemove.right === null) {
      if (toRemove.item < toRemove.parent.item) {
        toRemove.parent.left = null;
      } else {
        toRemove.parent.right = null;
      }
      return;
    }

    if (toRemove.left && toRemove.right) {
      replacement = toRemove.right.min();
      toRemove.item = replacement.item
      if (replacement.item < replacement.parent.item) {
        replacement.parent.left = null;
      } else {
        replacement.parent.right = null;
      }

      return;
    }

    if (toRemove.left) {
      toRemove.left.parent = toRemove.parent;
      if (toRemove.item > toRemove.parent.item) {
        toRemove.parent.right = toRemove.left;
      } else {
        toRemove.parent.left = toRemove.left;
      }
      return;
    }

    if (toRemove.right) {
      toRemove.right.parent = toRemove.parent;
      if (toRemove.item > toRemove.parent.item) {
        toRemove.parent.right = toRemove.right;
      } else {
        toRemove.parent.left = toRemove.right;
      }
      return;
    }
  }

}
