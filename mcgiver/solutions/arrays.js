module.exports.insertAt = function(arr, index, item) {

// This function doesn't need to return anything, but rather modify
// the passed array in place.
//This should not be a splice method, instead we shoudl build a loop
// for (i ; ; )
// result.splice(index, null, item);

    for (i=0  ;i < arr.length; i++) {
        if (arr[i] == arr[index]) {
            arr.splice(index, 0, item);
            break;
        }
        else if (typeof arr[index] == 'undefined') {
            arr[index] = item;
            break;
        }
    }
    
return arr;

}

module.exports.alphabetSorter = function(a, b) {
  // This is the comparator function that will be passed
  // into array.prototype.sort(). It should return a negative number
  // if a comes before b alphabetically, a positive number if b comes
  // before a and 0 if there's a tie

}

module.exports.itsInThere = function(arr, item) {
  
}