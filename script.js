var area = document.getElementById('area');

function enter(){
    var name = prompt("Enter name");

    if(name === '' || name === null){
        alert("OPS");
        area.innerHTML = "Enter name"
    }else{
        area.innerHTML = "Hello" + name + " ";

        let btnExit = document.createElement("button");//create button 
        btnExit.innerText = "Exit";//text nutton
        btnExit.onclick = exit;//call function exit
        area.appendChild(btnExit);//add button in div area
    }
}

function exit(){
    alert("bye");
    area.innerHTML = "BYE";
}

//####continue functions part2
function avarage(n1, n2) { //use function in console!
    var m=(n1+n2)/2;

    if (m>=7){
        console.log("Approved: " +m);
    }else if(m<7){
        console.log("Disapproved: " +m)
    }

}