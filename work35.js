var modal = document.querySelector('.modal');

function toggleModal() {
	if (modal.classList.contains('visible')) {
		modal.classList.remove('visible');
	}
	else {
		modal.classList.add('visible');
	}
}

var clickMe = document.getElementById('clickme');
var close = document.getElementById('close');

clickMe.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);