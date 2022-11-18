const grade = document.querySelector('#grade')
const cor = document.querySelector('#cor')


function criaGrade() {
	for (var i = 0; i < 100; i++) {
		grade.innerHTML += `<div class="caixa quadro${i + 1}"></div>`
	}
}
criaGrade()
grade.addEventListener('click', function(e) {
	if (e.target.classList.contains('caixa')) {
		e.target.style.backgroundColor = cor.value
	}
})