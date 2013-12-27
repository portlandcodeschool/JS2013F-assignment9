module.exports.insertAt = function(arr, index, item) {

// This function doesn't need to return anything, but rather modify
// the passed array in place.
	var addition = [];
	for (var i = index; i > arr.length; i--) {
		addition.unshift(undefined);
	}

	arr.splice.apply(arr, [index, 0].concat(addition));
}

module.exports.alphabetSorter = function(a, b) {
  // This is the comparator function that will be passed
  // into array.prototype.sort(). It should return a negative number
  // if a comes before b alphabetically, a positive number if b comes
  // before a and 0 if there's a tie
    
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
   found = false;

  arr.forEach(function (element, index, array) {
    if (element === item)
      found = true;
  });

  return found;
  
}