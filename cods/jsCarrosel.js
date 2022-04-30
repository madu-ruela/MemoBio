const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

let prox = 0;
const container = document.querySelector(".testeCarrosel");
const card = `
<div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS4D04XbJPmPFWIvVh4YLHLnoV3bIk2x5rjgtZzxqJrxDdlJo-QjcHClpjLXOsSuqMA0&usqp=CAU">
    <h3>Nome</h3>
    <p>depoimento.... depoimento.... depoimento... .depoimento....</p>
</div>`;

const arrayDeExibicao = [];

for (let i = 0; i < 5; i++) {
  arrayDeExibicao.push(card);
}

function escreverCardNoHtml(ateOnde = 1) {
  const arrayDeExibicaoAtual = arrayDeExibicao.slice(prox, prox + ateOnde);
  arrayDeExibicaoAtual.forEach((item) => {
    container.innerHTML += item;
  });
}

function exibir() {
  container.innerHTML = "";
  if (prox < 0) {
    prox = 0;
    if (arrayDeExibicao.length < 2) {
      escreverCardNoHtml(2);
      return;
    }
    escreverCardNoHtml(3);
    return;
  }
  if (prox > arrayDeExibicao.length - 1) {
    prox = arrayDeExibicao.length - 1;
    escreverCardNoHtml();
    return;
  }
  escreverCardNoHtml(3);
}

btnAnterior.addEventListener("click", () => {
  prox--;
  exibir();
  console.log(prox);
});

btnProximo.addEventListener("click", () => {
  prox++;
  exibir();
  console.log(prox);
});

exibir();
