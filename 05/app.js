const numbers = [1, 2, 3, 4, 5, 6, 7];
const parzyste = numbers.filter(el => el%2==0);
const suma = parzyste.reduce((accumulator, el)=>accumulator+el);
console.log(suma);