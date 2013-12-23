module.exports.factorial = function factorial (num) {

  if (num < 0 || num !== Math.floor(num))
    return undefined;

  var result = 1;

  for (/* blank */; num > 1; num--) {
    result *= num;
  }

  return result;
}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {

  var result = "";
  var shouldCapitalizeNext = false;

  for (var i = 0; i < str.length; i++) {
    if (/[\w]/.test(str[i])) {
      if (shouldCapitalizeNext) {
        result += str[i].toUpperCase();
        shouldCapitalizeNext = false;
      } else {
        result += str[i].toLowerCase();
        shouldCapitalizeNext = true;
      }
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {

  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports.isPalindrome = function isPalindrome (str) {
  
  var length = str.length - 1;

  for (var i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i])
      return false;
  }

  return true;
}
