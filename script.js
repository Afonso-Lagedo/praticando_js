function ask(){
    var value = prompt("Enter value");
    //prompt return string, then 
    switch(Number(value)){
        case 1: alert("Juice");break;
        case 2: alert("Water");break;
        case 3: alert("Ice cream");break;
        case 4: alert("Call waiter");break;
        default: alert("Invalid number");break;
    }
}