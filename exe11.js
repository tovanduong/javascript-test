const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
};

function getUniqueElements(deps) {
  const uniqueElements = new Set();
  for (const key in deps) {
    const array = deps[key];
    const flattenedArray = array.reduce((acc, element) => {
      if (Array.isArray(element)) {
        return acc.concat(element.flat());
      } else {
        return acc.concat([element]);
      }
    }, []);
    for (const element of flattenedArray) {
      uniqueElements.add(element);
    }
  }

  const uniqueElementsArray = [...uniqueElements];
  return uniqueElementsArray;
}

console.log(getUniqueElements(deps)); // [1, 2, 3, 12, 323, 5, 8, 14, 79, 64, 105]
