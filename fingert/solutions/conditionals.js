function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function makeTwo (num) {
	
	if (num % 2 == 0){
		return true;
	} else {
		return false;
	}
}

function twenThir (num) {
	
     num = (Math.floor(Math.random() * 20)) + Math.floor(Math.random() * num);
    	if (num < 20 || num > 30){
        while (num < 20 || num > 30) {
        	 num = (Math.floor(Math.random() * 20)) + Math.floor(Math.random() * 7);
        	 if (num >= 20 && num <= 30){
        	 	return true;
        	 }
        	}
    } else{
    	return true;
    }
}


module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.makeTwo = makeTwo;
module.exports.twenThir = twenThir;