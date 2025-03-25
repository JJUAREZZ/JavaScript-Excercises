const dollars = ["32$", "15$", "45$", "10%"];

// Map

// forma manual
let prices = [];
for(let i = 0; i < dollars.length; i++){
    prices.push(parseInt(dollars[i]));
}

// Forma zoomer con for each
prices = [];
for (const dollar of dollars){
    prices.push(parseInt(dollar));
}

// map de verdad
prices = []
prices = dollars.map(dollar => parseInt(dollar));

// Filter

// Filter manual
let expensive = [];
for(const price of prices){
    if(price > 20){
        expensive.push(price);
    }
}

// Filter de verdad
expensive = prices.filter(price => price > 20);

// Reduce -> agarrar varios elementos y reducirlos a un solo valor
let sum = 0;    
for(price of prices){
    sum += price;
}

// Reduce de verdad
sum = expensive.reduce((acc, price) => acc + price, 0);

// todo junto
const total = dollars
    .map(dollar => parseInt(dollar))
    .filter(price => price > 20)
    .reduce((acc, price) => acc + price, 0);

console.log(total);

// filter y reduce


