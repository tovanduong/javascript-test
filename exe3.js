//3. Find pairs of elements whose sum is equal to a given number
const array4 = [1, 7, 9, 2, 5, 3,11, 8];
const sum = 10;

function findPairs(array, sum) {
  // Sort the array in ascending order.
  array.sort((a, b) => a - b);

  // Initialize two pointers, left and right, to the beginning and end of the array, respectively.
  let left = 0;
  let right = array.length - 1;
  let result = [];
  // While left < right:
  while (left < right) {
    if (array[left] + array[right] === sum) {
      result.push([array[left], array[right]]);
      left++;
      right--;
    } else if (array[left] + array[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

console.log(findPairs(array4, 10));
