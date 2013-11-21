function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function isFirstTest (num){

    return (num === 2);
    
}

function isBetween(){

    var result = 0;
    
    for (i = 0; i < 30; i++) {
        result = Math.floor((Math.random() * 30) +2);
            if (result >= 20 && result <= 30) {
                return result;
            }
    }
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.isFirstTest = isFirstTest;
module.exports.isBetween = isBetween;