// Código JavaScript do projeto

const botao = document.querySelector(".botao-navegacao");
const menu = document.querySelector(".navegacao");

botao.addEventListener("click", function () {
  menu.classList.toggle("aberto");
  botao.classList.toggle("aberto");
});

const form = document.querySelector("#form-jogador");

if (form) {
  const erro = document.querySelector("#erro");
  let jogadores = [];

  function carregar() {
    try {
      jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    } catch (e) {
      jogadores = [];
    }
  }

  function salvar() {
    try {
      localStorage.setItem("jogadores", JSON.stringify(jogadores));
      return true;
    } catch (e) {
      return false;
    }
  }

  function mostrarJogador(jogador) {
  const destino = document.getElementById(jogador.posicao);
  if (!destino) {
    console.error("Não existe elemento com id:", jogador.posicao);
    return;
  }

  const card = document.createElement("article");
  card.classList.add("jogador");

  const img = document.createElement("img");
  img.src = jogador.foto;
  img.alt = "Foto de " + jogador.nome;

  const titulo = document.createElement("h4");
  titulo.textContent = jogador.nome;

  const camisa = document.createElement("p");
  camisa.textContent = "Número: " + jogador.numero;

  const remover = document.createElement("button");
  remover.type = "button";
  remover.classList.add("btn-remover");
  remover.textContent = "Remover";

  remover.addEventListener("click", function () {
    if (!confirm("Remover " + jogador.nome + " do elenco?")) {
      return;
    }
    jogadores = jogadores.filter(function (j) {
      return j.id !== jogador.id;
    });
    salvar();
    card.remove();
  });

  card.append(img, titulo, camisa, remover);
  destino.appendChild(card);
  }
  carregar();
  jogadores.forEach(mostrarJogador);

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const posicao = document.querySelector("#posicao").value;
    const numero = document.querySelector("#numero").value;
    const arquivo = document.querySelector("#foto").files[0];

    if (nome === "" || posicao === "" || numero === "" || !arquivo) {
      erro.textContent = "Preencha nome, posição, número e foto.";
      return;
    }

    if (numero < 1 || numero > 99) {
      erro.textContent = "O número deve estar entre 1 e 99.";
      return;
    }

    if (arquivo.size > 300 * 1024) {
      erro.textContent = "A foto deve ter no máximo 300 KB.";
      return;
    }

    const leitor = new FileReader();

    leitor.onload = function () {
      const jogador = {
        id: Date.now(),
        nome: nome,
        numero: numero,
        posicao: posicao,
        foto: leitor.result
      };
      jogadores.push(jogador);

      if (!salvar()) {
        jogadores.pop();
        erro.textContent = "Sem espaço para salvar. Use uma foto menor.";
        return;
      }

      mostrarJogador(jogador);
      erro.textContent = "";
      form.reset();
    };

    leitor.readAsDataURL(arquivo);
  });
}