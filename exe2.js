//2. Find 2 elements with the greatest sum in an array
const array3 = [3, 4, 8, 9, 12];
function findTwoMaxNumbers(array) {
    let max1 = array[0];
    let max2 = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max1) {
            max2 = max1;
            max1 = array[i];
        } else if (array[i] > max2) {
            max2 = array[i];
        }
    }
    return [max1, max2];
}