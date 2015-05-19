function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middle = Math.floor(arr.length/2);
  var left = arr.slice(0,middle);
  var right = arr.slice(middle);

  return merge(mergesort(left), mergesort(right));
}


function merge(left, right) {
  var merged = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] < right[0] ? merged.push(left.shift()) :
                         merged.push(right.shift());
  }
  return merged.concat(left).concat(right);
}
