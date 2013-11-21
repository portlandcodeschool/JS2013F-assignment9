module.exports.insertAt = function(arr, index, item) {

  arr.splice(index, 0, item);
  
}

module.exports.alphabetSorter = function(a, b) {
  if (typeof a === "string") {
    a = a.toString().toLowerCase();
  }

  if (typeof b === "string") {
    b = b.toString().toLowerCase();
  }

  if (a < b)
    return -1;
  if (a > b)
    return 1;
  if (a === b)
    return 0;

}

module.exports.itsInThere = function(arr, item) {

  for (var i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
      return true;
    }
  }

  return false;
}