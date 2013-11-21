function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function isFirstTest (num){

    return (num === 2);
    
}

function isBetween (min, max){

    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    }else {
        return min + Math.random() * max;
    }

}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.isFirstTest = isFirstTest;
module.exports.isBetween = isBetween;