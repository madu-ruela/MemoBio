const btnDados = document.querySelector(".btnDados")
const btnEnd = document.querySelector(".btnEndereco")
const btnPagar = document.querySelector(".btnPagamento")
const formDados = document.querySelector(".dadosPessoais")
const formEndereco = document.querySelector(".dadosEndereco")
const formPagamento = document.querySelector(".dadosPagamento")

function toggleForm() {
}


btnDados.addEventListener("click", () => {
	//console.log("dados")
	btnDados.classList.add('active')
	btnEnd.classList.remove('active')
    btnPagar.classList.remove('active')

	formEndereco.classList.remove('active')
	formDados.classList.add('active')
    formPagamento.classList.remove('active')

	toggleForm()
})
btnEnd.addEventListener("click", () => {
	//console.log("endereco")

	btnDados.classList.remove('active')
	btnEnd.classList.add('active')
    btnPagar.classList.remove('active')

	formEndereco.classList.add('active')
	formDados.classList.remove('active')
    formPagamento.classList.remove('active')
    toggleForm()
})

btnPagar.addEventListener("click", () => {

	btnDados.classList.remove('active')
	btnEnd.classList.remove('active')
    btnPagar.classList.add('active')

	formEndereco.classList.remove('active')
	formDados.classList.remove('active')
    formPagamento.classList.add('active')
    toggleForm()
})


// botões de pagamento
const btnBoleto = document.querySelector(".btnBoleto")
const btnPix = document.querySelector(".btnPix")
const btnCredito = document.querySelector(".btnCredito")

const formBoleto = document.querySelector(".formBoleto")
const formPix = document.querySelector(".formPix")
const formCredito = document.querySelector(".formCredito")

btnBoleto.addEventListener("click", () => {
    btnBoleto.classList.add('active')
    btnPix.classList.remove('active')
	btnCredito.classList.remove('active')

    formBoleto.classList.add('active')
    formPix.classList.remove('active')
    formCredito.classList.remove('active')

})

btnPix.addEventListener("click", () => {
    btnBoleto.classList.remove('active')
    btnPix.classList.add('active')
	btnCredito.classList.remove('active')

    formBoleto.classList.remove('active')
    formPix.classList.add('active')
    formCredito.classList.remove('active')
})

btnCredito.addEventListener("click", () => {
    btnBoleto.classList.remove('active')
    btnPix.classList.remove('active')
	btnCredito.classList.add('active')

    formBoleto.classList.remove('active')
    formPix.classList.remove('active')
    formCredito.classList.add("active")
})