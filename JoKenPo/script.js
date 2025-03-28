const playerOptionsList = document.querySelectorAll(".player .option"); //Usuário.
const enemyOptionsList = document.querySelectorAll(".enemy .option"); //Máquina.

playerOptionsList.forEach((option) => {
  option.onclick = () => {
    clearOptions(playerOptionsList); //Quando o usuário arrastar o mouse em uma das opções, ira ficar mais aparente.

    option.style.opacity = "1"; //opacidade das opções.
    option.setAttribute("data-selected", true);

    iaEnemy();

    const movePlayer = option.getAttribute("data-value"); //A opção que usuário escolher está armazenada no atributo data-value.
    const moveEnemy = iaEnemy(); //armazena a opção da máquina.

    result(movePlayer, moveEnemy); //Calcula o vencedor da rodada, exibindo o resultado.
  };
});

const iaEnemy = () => {
  const optionRandom = Math.floor(Math.random() * enemyOptionsList.length);
  const optionSelected = enemyOptionsList[optionRandom];

  clearOptions(enemyOptionsList); //Quando a máquina escolher uma das opções, ira ficar mais aparente.

  optionSelected.style.opacity = "1"; //opacidade das opções.
  optionSelected.setAttribute("data-selected", "true");

  return optionSelected.getAttribute("data-value");
};

const clearOptions = (optionsList) => { 
  optionsList.forEach((option) => {
    option.setAttribute("data-selected", "false");
    option.style.opacity = "0.5";
  });
};

const result = (movePlayer, moveEnemy) => {
  const resultElement = document.querySelector(".result-container span"); //Resultado do jogo.

  if (movePlayer === moveEnemy) {
    resultElement.textContent = "Você empatou :|"; //Se o resultado do usuário for igual o da máquina, é empate!
  } else if (
    (movePlayer === "stone" && moveEnemy === "paper") || //O usuário jogar pedra, e a máquina jogar papel.
    (movePlayer === "paper" && moveEnemy === "scissor") || //O usuário jogar papel, e a máquina jogar tesoura.
    (movePlayer === "scissor" && moveEnemy === "stone") //O usuário jogar tesoura e a máquina jogar pedra.
  ) {
    resultElement.textContent = "Você perdeu :("; //Caso for alguma dessas opções, o usuário perdeu.
  } else if (
    (movePlayer === "stone" && moveEnemy === "scissor") || //O usuário jogar pedra, e a máquina jogar tesoura.
    (movePlayer === "paper" && moveEnemy === "stone") || //O usuário jogar papel, e a máquina jogar pedra.
    (movePlayer === "scissor" && moveEnemy === "paper") //O usuário jogar tesoura, e a máquina jogar papel.
  ) {
    resultElement.textContent = "Você ganhou :D"; //Caso for algumas dessas opções, o Usuário venceu.
  }
};
