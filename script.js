var mass;
var height;
var imc;
var result;

function calc(event){
    event.preventDefault();//for no refresh

    mass = document.getElementById('mass').value;
    height = document.getElementById('height').value;

    imc = mass / (height * height);

    result = document.getElementById('result');

    if(imc < 17){
        result.innerHTML='<br/> Very low, IMC: '+imc.toFixed(2);
    }else if(imc>17 && imc <=18.49){
        result.innerHTML='<br/> Low, IMC: '+imc.toFixed(2);
    }else if(imc>18.5 && imc<24.99){
        result.innerHTML='<br/> Normal, IMC: '+imc.toFixed(2);
    }else if(imc>25 && imc<29.99){
        result.innerHTML='<br/> Above, IMC: '+imc.toFixed(2);
    }else if(imc>=30){
        result.innerHTML='<br/>Far above, IMC: '+imc.toFixed(2);
    }

    document.getElementById('mass').value='';
    document.getElementById('height').value='';
}