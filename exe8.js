const arr1 = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];


const convertData = (array, key) => 
  array.reduce((acc, curr) => {
    if(acc[curr[key]]){
      acc[curr[key]] = [...acc[curr[key]],curr]
    }else {
      acc[curr[key]] = [curr];
    }
    return acc;
  }, {});
console.log(convertData(arr1,"make"))