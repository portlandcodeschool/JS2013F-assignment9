module.exports.insertAt = function(arr, index, item) {

	if (index < arr.length - 1) { 
		arr.splice(index, 0, item);
	} else {
		arr[index] = item;
	}	
}

module.exports.alphabetSorter = function(a, b) {

	if (typeof a === "string") {
  		
  		a = a.toLowerCase();
  	}

	if (typeof b === "string") {
  		
  		b = b.toLowerCase();
  	}

	if (a !== b) {
		
		return a < b ? -1 : 1;
	} else {
		
		return 0;
	}
}

module.exports.itsInThere = function(arr, item) {
	var existence = false;

	if (typeof item === 'object') {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i].__proto__ == item.__proto__) {
				existence = true;
			}
		};
	} else {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === item) {
				existence = true;
			}
		};
	}	

	return existence;
  
}