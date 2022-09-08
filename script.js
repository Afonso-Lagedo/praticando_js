//Rest Operator

//without
function guests(names){
    //console.log(names);
}

guests("Afonso", "Felipe", "Rafaela");

//with
function guests2(...names){
    //console.log(names);
}
guests2("Afonso", "Felipe", "Rafaela");

//Exemple
function generator(...numbers){
    console.log(numbers);

    const numbersGenerator = Math.floor(Math.random() * numbers.length);
    console.log(numbers[numbersGenerator]);
}

generator(1,4,5,15,19,55,90,34);

