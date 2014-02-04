module.exports.insertAt = function(arr, index, item) {

  arr.splice(index, 0, item);
  
}

module.exports.alphabetSorter = function(a, b) {
  
  if (typeof a === 'string' && typeof b === 'string') {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  } else if (typeof a === 'string' || typeof b !== 'string') {
    return -1;
  } else if (typeof b === 'string' || typeof b !== 'string') {
    return 1;
  } else {
    return 0;
  }

}

module.exports.itsInThere = function(arr, item) {

  for (var i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
      return true;
    }
  }

  return false;
}