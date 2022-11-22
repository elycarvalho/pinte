const grade = document.querySelector('#grade')
const cor = document.querySelector('#cor')
const btnLimpa = document.querySelector('#btnLimpa')
const corFundo = document.querySelector('#corFundo')
const cliqueMouse = document.querySelector('#cliqueMouse')
let mouse = 'mouseover'

function criaGrade() {
	for (var i = 0; i < 340; i++) {
		grade.innerHTML += `<div class="caixa quadro${i + 1}"></div>`
	}
}
criaGrade()
mudaMouse()

const caixas = document.querySelectorAll('.caixa')

btnLimpa.addEventListener('click', () => {
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = '#fff'
	}
})

var x = 0
function mudaMouse() {
	mudaMouse2('break')
    grade.addEventListener('click', function(e) {
	    if (e.target.classList.contains('caixa')) {
		e.target.style.backgroundColor = cor.value
	    }
    })
}

function mudaMouse2() {
    grade.addEventListener('mouseover', function(e) {
	    if (e.target.classList.contains('caixa')) {
		e.target.style.backgroundColor = cor.value
	    }
    })
}

	
	/*if(cliqueMouse.value == 'passar') {mouse = 'mouseover'}
		console.log('mouse: ' + mouse)
	grade.addEventListener(mouse)
	//console.log('cliqueMouse: ' + cliqueMouse.value)*/


/*grade.addEventListener('click', function(e) {
	if (e.target.classList.contains('caixa')) {
		e.target.style.backgroundColor = cor.value
	}
})*/


function preencheFundo() {
	grade.style.backgroundColor = corFundo.value
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = corFundo.value
	}
}

function preenche() {
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = preencher.value
	}
}

function mudaForma() {
	caixas.forEach(mudaForma)
	function mudaForma(item, index) {
	  caixas[index].style.borderRadius = '3px'
	}
}

mudaForma()
