var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]
var element = 'foo'
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

