var test         = require('tape');
var romnum       = require('../romnum');
var conditionals = require('./solutions/conditionals');
var loops        = require('./solutions/loops');
var arrays        = require('./solutions/arrays');

test('Example test', function (t) {
  t.equal(5, 5);

  t.notEqual(2, 1);

  t.end();
});

test('Another example test', function (t) {
  t.plan(2);

  t.equal("Blah", "Blah");

  setTimeout(function () {
    t.notEqual("Hello", "World");
  }, 500);

});

test('should convert decimals to roman numerals', function (t) {
  t.equal(romnum.decimalToRoman(7), "VII");

  t.equal(romnum.decimalToRoman(1998), "MCMXCVIII");

  t.end();
});

test('should convert roman numerals to decimals', function (t) {
  t.equal(romnum.romanToDecimal("VII"), 7);

  t.equal(romnum.romanToDecimal("MCM"), 1900);

  t.end();
});

test('should return true if given an even number', function (t) {
  t.equal(conditionals.isEven(4), true);

  t.end();
});

test('should return false if given an odd number', function (t) {
  t.equal(conditionals.isEven(3), false);

  t.end();
});

test('should return true if passed "beep"', function (t) {

  t.equal(conditionals.isBeep('beep'), true);
  t.equal(conditionals.isBeep('boop'), false);

  t.end();
});

test('should calculate factorial', function (t) {

  // golden path!
  t.equal(loops.factorial(5), 120);
  t.equal(loops.factorial(10), 3628800);

  // Edge cases
  t.equal(loops.factorial(0), 1);
  t.equal(loops.factorial(-1), undefined);
  t.equal(loops.factorial(1.5), undefined);

  t.end();
  
});

test('should capitalize every other letter', function (t) {
  
  // golden path
  t.equal(loops.capitalizeEveryOther("hello"), "hElLo");
  t.equal(loops.capitalizeEveryOther("Don't Taze Me, Bro!"), "dOn'T tAzE mE, bRo!");

  // weird cases
  t.equal(loops.capitalizeEveryOther(""), "");
  t.equal(loops.capitalizeEveryOther("a"), "a");
  t.equal(loops.capitalizeEveryOther("//10//abc////d e"), "//10//aBc////D e");

  t.end();

});

test('should capitalize vowels', function (t) {

  t.equal(loops.capitalizeVowels("hello"), "hEllO");
  t.equal(loops.capitalizeVowels("Don't Taze Me, Bro!"), "DOn't TAzE ME, BrO!");

  t.equal(loops.capitalizeVowels(""), "");
  t.equal(loops.capitalizeVowels("a"), "A");
  t.equal(loops.capitalizeVowels("//10//abc////d e"), "//10//Abc////d E");

  t.end();
});

test('should return true if passed a palindrone', function (t) {

  t.equal(loops.isPalindrome("wow"), true, "wow");
  t.equal(loops.isPalindrome("MaggieSmith"), false, "MaggieSmith");
  t.equal(loops.isPalindrome("12345432"), false, "12345432");


  t.equal(loops.isPalindrome("a"), true, "a");
  t.equal(loops.isPalindrome(""), true, "empty string");
  t.equal(loops.isPalindrome(" 2 3 4 3 2 "), true, " 2 3 4 3 2 ");

  t.end();
});

test('should insert an object at a given array index', function (t) {

  var array1 = [1, 2, 3];
  var array2 = ['a', 'b', 'c'];

  arrays.insertAt(array1, 1, 2.5);
  t.deepEqual(array1, [1, 2.5, 2, 3]);

  arrays.insertAt(array2, 5, 'Bleep');
  t.deepEqual(array2, ['a', 'b', 'c', undefined, 'Bleep']);

  t.end();
});

test('sort a list alphabetically', function (t) {
  
  var array1 = ['zebra', 'cat', 'Aardvark', 'Lion', 'kangaroo', 'elephant'];
  var array2 = ['zebra', 'zebra', 'zebra', 'zebra', 'bobcat'];
  var array3 = ['tigers', 1, 2, 3, {name: 'steve'}, true, false, 'lion']
 
  array1.sort(arrays.alphabetSorter);
  t.deepEqual(array1, ['Aardvark', 'cat', 'elephant', 'kangaroo', 'Lion', 'zebra']);

  array2.sort(arrays.alphabetSorter);
  t.deepEqual(array2, ['bobcat', 'zebra', 'zebra', 'zebra', 'zebra']);

  array3.sort(arrays.alphabetSorter);
  t.deepEqual(array3, ['lion', 'tigers', 1, 2, 3, {name: 'steve'}, true, false]);

  t.end();

});

test('test for the presence of item in an array', function (t) {

  var array1 = [1, 2, 3, 4, 5, 6];
  var array2 = ['lions', 'tigers', 'bears'];
  //var array3 = [{name: 'Steve'}, {name: 'Brian'}, {name: 'Alfonso'}];

  t.deepEqual(arrays.itsInThere(array1, 3), true);
  t.deepEqual(arrays.itsInThere(array2, 'obama'), false);
  //t.deepEqual(arrays.itsInThere(array3, {name: 'Brian'}), true);

  t.end();
  
}); 