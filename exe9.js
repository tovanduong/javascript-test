const order = {
    'cart': [
        { id: 1, name: "ao dai", amount: 5, price: 100000 },
        { id: 2, name: "ao coc", amount: 2, price: 200000 },
        { id: 3, name: "quan dai", amount: 3, price: 150000 },
        { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    'customer': 'Name',
    'address': '12 Giai Phong Street'
};

const initAcc = {
    totalOfMoney:0,
    totalOfAmount:0
}
const a = order.cart.reduce((acc,curr)=>{
    acc.totalOfMoney += curr.price
    acc.totalOfAmount += curr.amount
    return acc
},initAcc)
console.log(a)