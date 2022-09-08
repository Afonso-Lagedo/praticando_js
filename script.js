//MAP

let list = ["Afonso", "Felipe", "Rafaela"];

list.map((item, index)=>{
    console.log(`-${item} - ${index}`)
})

//Reduce

let numbers = [5,2,3,1];

let total = numbers.reduce((accumulator, number, index, original)=>{
    console.log(`${accumulator} - total`);
    console.log(`${number} - value current`);
    console.log(`${index} - index current`);
    console.log(`${original} - original array`);
    console.log("================");

    return accumulator += number;
})

console.log(`TOTAL REDUCE: ${total}`)