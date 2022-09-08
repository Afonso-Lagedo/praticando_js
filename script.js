//Spread Operator

//Array
let n1 = [1,2,3];

let n2 = [n1, 4,5];

//spread
let n3 = [...n1,4,5]

/*
console.log(n1);
console.log(n2);
console.log(n3);
*/

//Object

let person = {
    name:"Afonso",
    age:29
}

let newPerson = {
    ...person,
    status:"on"
}

//console.log(newPerson);

//Exemple
function newUser(info){
    let datas = {
        ...info,
        status:"on",
        job:"dev"
    }

    console.log(datas);
}

newUser({name:"Afonso", age:29});