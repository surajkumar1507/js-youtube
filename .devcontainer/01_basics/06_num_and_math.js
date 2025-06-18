const score = 400

const balance = new Number(100) // number data types
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber = 123.8966
console.log(othernumber.toPrecision(4));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

//*******************Math**************************
console.log(Math);
console.log(Math.round(4.3))
console.log(Math.max(1, 2, 5, 9, 6 , 7))
console.log(Math.random()*10)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)
