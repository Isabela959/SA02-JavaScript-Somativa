const turnOn = document.getElementById ( 'turnOn' ); //a váriavel vai ter o mesmo id que o botão.
const turnOff = document.getElementById ( 'turnOff' );//a váriavel vai ter o mesmo id que o botão.
const trocar = document.getElementById ( 'trocar' );//a váriavel vai ter o mesmo id que o botão.
const lamp = document.getElementById ( 'lamp' ); //a váriavel vai ter o mesmo id que a imagem.

// Verifica se a URL da imagem da lâmpada contém a palavra "quebrada"
// Se for maior que -1 = quebrada || Se for menor que -1 = não está quebrada
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

//Função de pegar o endereço da imagem e trocar pela acesa.
function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/lampadas_acesa.png';
    }
}

// Verifica se a lampada não está quebrada, para assim apagá-la.
function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/lampadas_apagada.png';
    }
}

//Função de pegar o endereço da imagem e trocar pela lâmpada quebrada.
function lampBroken () {
    lamp.src = './img/lampadas_quebrada.png';
}

//Função de pegar o endereço da imagem e trocar pela lâmpada apagada.
function lamptrocar () {
    lamp.src = './img/lampadas_apagada.png';
}


turnOn.addEventListener ( 'click', lampOn );//Quando tiver um clique no botão de ligar, executar função de ligar lâmpada.
turnOff.addEventListener ( 'click', lampOff ); //Quando tiver um clique no botão de desligar, executar função de apagar lâmpada.
lamp.addEventListener ( 'dblclick', lampBroken ); //Quando clicar duas vezes na lâmpada, ela é quebrada
trocar.addEventListener ( 'click', lamptrocar );//Quando tiver um clique no botão de trocar, executar função de trocar lâmpada.