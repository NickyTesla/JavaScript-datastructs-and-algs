function bubbleSort(arr) {
  var sorted = false;
  while (!sorted) {

    sorted = true;

    for(var i = 0, n = arr.length - 1; i < n; i++) {

      if (arr[i] > arr[i+1]) {
        var temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }

    }
  }

  return arr;

}
