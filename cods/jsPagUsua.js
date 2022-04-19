
const menu = document.querySelector("#btnMenu")
menu.addEventListener("click", () => {
	const header = document.querySelector(".menuUsuario")
	header.classList.toggle("active")
})