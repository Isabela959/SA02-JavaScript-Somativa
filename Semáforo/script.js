const $lucesDelCirculo = document.querySelectorAll(".luces-circulo"); //Conjunto de circulos coloridos.
let contadorDeLuz = 0; //Inicia no contador zero.

const mostrarLuz = () => {
  $lucesDelCirculo[contadorDeLuz].className = "luces-circulo";
  contadorDeLuz++; //Após a primeira luz aparecer, começa o contador, para que a próxima luz apareça.
  
  if (contadorDeLuz > 5) contadorDeLuz = 0; //Loop de repetição, começa no zero e termina no cinco, fazendo voltar desde o zero e começar tudo de novo.

  const luzActual = $lucesDelCirculo[contadorDeLuz];
  luzActual.classList.add(luzActual.getAttribute("color"));
};
setInterval(mostrarLuz, 2000); //Mostrar a luz a cada 2000 milissegundos, ou a cada 2 segundos.
