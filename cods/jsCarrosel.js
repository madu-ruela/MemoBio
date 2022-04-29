const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

let prox = 0;
const container = document.querySelector(".testeCarrosel");
const card = `
<div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS4D04XbJPmPFWIvVh4YLHLnoV3bIk2x5rjgtZzxqJrxDdlJo-QjcHClpjLXOsSuqMA0&usqp=CAU">
    <h3>Nome</h3>
    <p>depoimento....depoimento....depoimento....depoimento....</p>
</div>`;

const arrayDeExibicao = [];
for (let i = 0; i < 4; i++) {
    arrayDeExibicao.push(card);
}

function exibir() {
    container.innerHTML = "";
    if (prox < 0) {
        prox = 0;
        container.innerHTML += arrayDeExibicao[prox];
        return;
    }
    if (prox > arrayDeExibicao.length - 1) {
        prox = arrayDeExibicao.length - 1;
        container.innerHTML += arrayDeExibicao[prox];
        return;
    }
    //   container.innerHTML = arrayDeExibicao[prox];
    const arrayDeExibicaoAtual = arrayDeExibicao.slice(prox, prox + 3);
    arrayDeExibicaoAtual.forEach((item) => {
        container.innerHTML += item;
    });
}

btnAnterior.addEventListener("click", () => {
    prox--;
    exibir();
});

btnProximo.addEventListener("click", () => {
    prox++;
    exibir();
});

exibir();
