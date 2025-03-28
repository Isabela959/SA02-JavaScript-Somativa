const turnOn = document.getElementById ( 'turnOn' ); //a váriavel vai ter o mesmo id que o botão.
const turnOff = document.getElementById ( 'turnOff' );
const trocar = document.getElementById ( 'trocar' );
const lamp = document.getElementById ( 'lamp' ); //a variavel vai ter o mesmo id que a imagem.

//Função de pegar o endereço da imagem e trocar pela ligada.
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

//Função de pegar o endereço da imagem e trocar pela desligada
function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/lampadas_acesa.png';
    }
}

//Função de pegar o endereço da imagem e trocar pela quebrada.
function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/lampadas_apagada.png';
    }
}

//Função de pegar o endereço da imagem e trocar pela lâmpada nova.
function lampBroken () {
    lamp.src = './img/lampadas_quebrada.png';
}

function lamptrocar () {
    lamp.src = './img/lampadas_apagada.png';
}

//Quando tiver um clique no botão de ligar, executar função de ligar lâmpada.
turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
trocar.addEventListener ( 'click', lamptrocar );