//Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.

function getDuplicateElements(array) {
    const frequencyMap = {};
  
    for (const element of array) {
      if (frequencyMap[element] === undefined) {
        frequencyMap[element] = 1;
      } else {
        frequencyMap[element]++;
      }
    }
    const duplicateElements = [];
    for (const [key, value] of Object.entries(frequencyMap)) {
      if (value > 1) {
        duplicateElements.push(Number(key));
      }
    }
    return duplicateElements;
  }

  const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];

const duplicateElements = getDuplicateElements(arr1);

console.log(duplicateElements);