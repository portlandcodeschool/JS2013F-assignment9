function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function passVal (val) {

  return (val === 2);
}

function randomNumber () {

  return (Math.random() * 10) + 20;
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.passVal = passVal;
module.exports.randomNumber = randomNumber;