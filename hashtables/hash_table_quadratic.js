function HashTable() {
  this.table = new Array(137);
  this.const = 37;
  this.values = [];
}

HashTable.prototype.put = function(key, data) {
  var pos = this.hash(key),
      i = 1;

  while (this.table[pos] !== undefined) {
    pos = pos + (i*i)
    i++;
  }
  this.table[pos] = key;
  this.values[pos] = data;
}

HashTable.prototype.get = function(key) {
  var pos = this.hash(key),
      i = 1;

  while (this.table[pos] !== undefined) {
    if (this.table[pos] === key) {
      return this.values[pos];
    }
    pos = pos + (i*i);
    i++;
  }
  return undefined;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0, n = key.length; i < n; i++) {
    total = this.const * total + key.charCodeAt(i);
  }
  total = total % this.table.length;

  if (total < 0) {
    total += this.table.length - 1;
  }

  return total;
}

HashTable.prototype.show = function() {

}
