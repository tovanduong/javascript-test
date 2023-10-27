
//5 Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
function getDuplicateElements(arr1, arr2) {
    const duplicateElements = new Set();
    for (const element of arr1) {
        if (arr2.includes(element)) {
            duplicateElements.add(element);
        }
    }
    const uniqueDuplicateElements = [...duplicateElements];
    return uniqueDuplicateElements;
}

const duplicateElements = getDuplicateElements(arr1, arr2);
console.log(duplicateElements)