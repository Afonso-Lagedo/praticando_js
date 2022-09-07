// setInterval: run function from time to time infinitely

function action(){
    document.write("Run SetInterval...</br>");
}

//setInterval(action, 2000);//1000=1s

//with anonymous function
/*var EXEMPLO =*/
/*setInterval(()=>{
    document.write("Run SetInterval Anonymous...</br>");
}, 500);
*/

// for stoped: in console: clearInterval(EXEMPLO)

setTimeout(action,3000);//run the function after the break
