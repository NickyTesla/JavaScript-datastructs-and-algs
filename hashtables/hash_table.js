function HashTable () {
  this.table = new Array(137);
  this.const = 37;
}

HashTable.prototype.hash = function(key) {

  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += this.const * total + key.charCodeAt(i);
  }
  total = total % this.table.length;

  if (total < 0) {
    total += this.table.length -1 ;
  }

  return parseInt(total);
}


HashTable.prototype.put = function(key, data) {
  var pos = this.hash(key);
  this.table[pos] = data;
}

HashTable.prototype.get = function(key) {
  return this.table[this.hash(key)];
}


HashTable.prototype.showdata = function() {
  for(var i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log("bin " + i+ ": " + this.table[i]);
    }
  }
}
