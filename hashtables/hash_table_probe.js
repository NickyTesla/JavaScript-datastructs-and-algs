function HashTable() {
  this.table = new Array(137);
  this.values = [];
  this.const = 37;
}


HashTable.prototype.put = function(key, data) {
  var pos = this.hash(key);
  while (this.table[pos] !== undefined) {
    pos++;
  }
  this.table[pos] = key;
  this.values[pos] = data;
}

HashTable.prototype.get = function(key) {
  var pos = this.hash(key);
  while (this.table[pos] !== undefined) {
    if (this.table[pos] === key) {
      return this.values[pos];
    }
    pos++;
  }

  return undefined;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0, n = key.length; i < n; i++) {
    total += this.const * total + key.charCodeAt(i);
  }
  total = total % this.table.length;

  if (total < 0 ) {
    total += this.table.length -1 ;
  }
  return total;
}

HashTable.prototype.show = function() {
  for (var i = 0, n = this.table.length; i < n; i++) {
    if (this.table[i] !== undefined) {
      console.log("bin "+ i+ ": " + this.table[i]);
    }
  }
}
