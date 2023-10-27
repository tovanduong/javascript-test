//4 Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
const array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
//using set
function getUniqueElementsUsingSet(array) {
    const uniqueElements = new Set();
    for (const element of array) {
        uniqueElements.add(element);
    }
    return [...uniqueElements];
}
console.log(getUniqueElementsUsingSet(array));

//not using set
function getUniqueElementsWithoutSet(array) {
    const uniqueElements = [];
    for (const element of array) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}
console.log(getUniqueElementsWithoutSet(array));
