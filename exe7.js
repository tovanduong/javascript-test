
function getFrequencyObject(array) {
    // Create a new empty object to store the frequency of each element in the given array.
    const frequencyObject = {};

    // Iterate over the given array and count the frequency of each element.
    for (const element of array) {
        if (frequencyObject[element] === undefined) {
            frequencyObject[element] = 1;
        } else {
            frequencyObject[element]++;
        }
    }

    // Return the frequency object.
    return frequencyObject;
}

const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];

const frequencyObject = getFrequencyObject(myArr);

console.log(frequencyObject);