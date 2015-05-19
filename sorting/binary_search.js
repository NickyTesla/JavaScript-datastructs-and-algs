//takes a sorted array as a parameter


function binarySearch(arr, target, low, high) {
  if (high < low) {
    return -1;
  }

  var middle = Math.floor((low+high) / 2);
    return middle;
  } else if (arr[middle] > target) {
    return binarySearch(arr, target, low, middle -1);
  } else {
    return binarySearch(arr, target, middle + 1, high);
  }
}


function countOccurences(arr, target, low, high) {
  if (high < low) {
    return -1;
  }

  var middle = Math.floor((low+high) / 2);

  if (arr[middle] === target) {

    var count = 1, right = middle+1, left = middle -1;
    while(arr[right] === target) {
      count++;
      right++;
    }
    while(arr[left] === target) {
      count++;
      left--;
    }
    return count;

  } else if (arr[middle] > target) {
    return binarySearch(arr, target, low, middle -1);
  } else {
    return binarySearch(arr, target, middle + 1, high);
  }
}
