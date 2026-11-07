// Código JavaScript do projeto

const botao = document.querySelector(".botao-navegacao");
const menu = document.querySelector(".navegacao");

botao.addEventListener("click", function () {
  menu.classList.toggle("aberto");
  botao.classList.toggle("aberto");
});