//Form validation
const form = document.querySelector('#form');
const ditNavn = document.querySelector('#dit-navn');
const ditMobil = document.querySelector('#dit-mobil');
const dinEmail = document.querySelector('#din-email');
const dinBesked = document.querySelector('#din-besked');
const myBtn = document.querySelector('#my-btn');
const checkCircle = document.querySelectorAll('.check-circle');

form.addEventListener('input', formInput);

function formInput(event) {
	let inputTarget = event.target;

	if (inputTarget.id === 'dit-navn') {
		let nameValue = inputTarget.value;

		if (validateName(nameValue)) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[0].classList.add('fa-regular');
			checkCircle[0].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[0].classList.remove('fa-regular');
			checkCircle[0].classList.remove('fa-circle-check');
		}
	}

	if (inputTarget.id === 'dit-mobil') {
		let isPhoneTrue = validatePhone(ditMobil.value);

		if (isPhoneTrue) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[1].classList.add('fa-regular');
			checkCircle[1].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[1].classList.remove('fa-regular');
			checkCircle[1].classList.remove('fa-circle-check');
		}
	}

	if (inputTarget.id === 'din-email') {
		let isEmailTrue = validateEmail(dinEmail.value);

		if (isEmailTrue) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[2].classList.add('fa-regular');
			checkCircle[2].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[2].classList.remove('fa-regular');
			checkCircle[2].classList.remove('fa-circle-check');
		}
	}

	if (inputTarget.id === 'din-besked') {
		let messageValue = dinBesked.value;
	}
}

//Validate name function
function validateName(ditNavn) {
	return ditNavn.length > 1 ? true : false;
}

//Validate phone function
function validatePhone(phoneNumber) {
	return /^(\+?\d{8,15})$/.test(phoneNumber);
}

//Validate email function
function validateEmail(dinEmail) {
	if (!dinEmail.includes('@') || !dinEmail.includes('.')) return false;

	const snabelIndex = dinEmail.indexOf('@');
	const dotIndex = dinEmail.lastIndexOf('.');

	if (snabelIndex < 1) return false;
	if (dotIndex < snabelIndex + 2) return false;
	if (dotIndex === dinEmail.length - 1) return false;

	return true;
}
