const grade = document.querySelector('#grade')
const cor = document.querySelector('#cor')
const btnLimpa = document.querySelector('#btnLimpa')
const corFundo = document.querySelector('#corFundo')

function criaGrade() {
	for (var i = 0; i < 289; i++) {
		grade.innerHTML += `<div class="caixa quadro${i + 1}"></div>`
	}
}
criaGrade()

const caixas = document.querySelectorAll('.caixa')

btnLimpa.addEventListener('click', () => {
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = '#fff'
	}
})


let mouse = 'mouseover'
grade.addEventListener(mouse, function(e) {
	if (e.target.classList.contains('caixa')) {
		e.target.style.backgroundColor = cor.value
	}
})


function preencheFundo() {
	caixas.forEach(preencheFundo)
	function preencheFundo(item, index) {
	  caixas[index].style.backgroundColor = corFundo.value
	}
}

function mudaForma() {
	caixas.forEach(mudaForma)
	function mudaForma(item, index) {
	  caixas[index].style.borderRadius = '3px'
	}
}

mudaForma()
