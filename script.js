//find: returns only the first result

let list = [5,3,"Afonso", 2,"Felipe"];

let result = list.find((item)=>{
    return item === "Afonso"
})

//console.log(result);


//filter return all
let names = ["Afonso", "Rafaela", "Felipe", "Ana"];

let result2 = names.filter((item)=>{
    return item.length >=5
});

console.log(result2);