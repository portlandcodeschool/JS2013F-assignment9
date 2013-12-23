function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function isTwo (num) {

	return num === 2;
}

function randomTwenties () {

	return Math.floor(Math.random() * 10) + 20;
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.isTwo = isTwo;
module.exports.randomTwenties = randomTwenties;