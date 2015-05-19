function HashTable() {
  this.const = 37;
  this.table = new Array(137);
  this.addChains();
}

HashTable.prototype.addChains = function() {
  for (var i = 0, n = this.table.length; i < n; i++) {
    this.table[i] = [];
  }
}


HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0, n = key.length; i < n; i++) {
    total = this.const * total + key.charCodeAt(i);
  }
  total = total % this.table.length;

  if (total < 0) {
    total = total + this.table.length - 1;
  }

  return total;

}

HashTable.prototype.put = function(key, data) {
  var pos = this.hash(key);
  var index = 0;

  if (this.table[pos][index] === undefined) {
    this.table[pos][index] = key;
    this.table[pos][index+1] = data;
    }
     else {
    while (this.table[pos][index] !== undefined) {
      index++;
    }
    this.table[pos][index] = key;
    this.table[pos][index+1] = data;
  }
}

HashTable.prototype.get = function(key) {
  var index = 0;
  var pos = this.hash(key);
  while (this.table[pos][index] !== key) {
    index += 2;
  }
  return this.table[pos][index+1];
}


HashTable.prototype.show = function() {
  for (var i = 0, n = this.table.length; i < n; i++) {
    if (this.table[i].length > 0) {
      console.log("bin "+ i+ ": " + this.table[i]);
    }
  }
}
