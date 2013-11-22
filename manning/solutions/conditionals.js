function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;