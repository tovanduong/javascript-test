function deepCopy(obj) {
  const copy = {...obj};
  for (const key in copy) {
    if (typeof copy[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

const duong = {
    name: "duong",
    age: 25,
    address: {
      street: "my dinh",
      city: "ha noi",
    },
    company: {
      name: "Fsoft",
      address: {
        street: "pham van bach",
        city: "ha noi",
      },
    },
  };
  
  const copy = deepCopy(duong);
  duong.company.address.city="HCM"
  
  console.log(copy, duong)