//deconstruct object
/*
let person = {
    name: "Afonso",
    job: "dev"
};

const {name} = person;

console.log(name);

const {name:namePerson} = person;
console.log(namePerson);
*/

//deconstruct array

let names = ["Afonso", "Felipe", "Rafaela"];

let {0:test} = names;

console.log(test);

let [test2, test3] = names;

console.log(test2);
console.log(test3);