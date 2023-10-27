//1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [3, 4, 8, 9, 12];

function findElementSameArray(array1, array2) {
    const newArr = array1.filter(el => array2.includes(el))

    return newArr
}