
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampReset (){ //para quando lampada estiver quebrada
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn (){
    if ( !lampReset() ) {
        lamp.src = './lampada1.jpg';
    }
}

function lampOff(){
    if ( !lampReset() ) {   
        lamp.src = './lamapda2.jpg';
    }
}

function lampBroken(){ //Quebra a lampada quando passa com mouse por cima
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener ('click', lampOn); //Liga lampada no botão
turnOff.addEventListener ('click', lampOff); //Desliga lampada no botão
lamp.addEventListener('dblclick', lampBroken);