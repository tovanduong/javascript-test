// myMap
Array.prototype.myMap = function (callback) {
  const newResults = [];
  for (const element of this) {
    newResults.push(callback(element));
  }
  return newResults;
};

// myFilter
Array.prototype.myFilter = function (callback) {
  const newResults = [];
  for (const element of this) {
    if (callback(element)) {
      newResults.push(element);
    }
  }
  return newResults;
};

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (const element of this) {
    accumulator = callback(accumulator, element);
  }
  return accumulator;
};

// myMap
const arr = [1, 2, 3, 4, 5];
const newMappedArr = arr.myMap((element) => element * 2);
console.log(newMappedArr);

// myFilter
const newFilteredArr = arr.myFilter((element) => element % 2 === 0);
console.log(newFilteredArr);

// myReduce
const sum = arr.myReduce((accumulator, element) => accumulator + element, 0);
console.log(sum);
