const modal = new GraphModal();

const phoneInput = document.getElementById('sigin-in-phone');
const recieveCodeBtn = document.getElementById('recieve-code-btn');
const changeCodeBtn = document.querySelector('.auth__change-btn');
const authCodeEl = document.querySelector('.auth__code span');

if (recieveCodeBtn) {
	recieveCodeBtn.addEventListener('click', (e) => {
		const phoneValue = phoneInput.value;
		e.preventDefault();
		if (/\+([0-9]{0,11})/.test(phoneInput.value)) {
			modal.close('sign-in');
			modal.open('confirm-phone');
			authCodeEl.textContent = phoneValue;
		}
	});
}

if (changeCodeBtn) {
	changeCodeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		modal.close('confirm-phone');
		modal.open('sign-in');
	});
}
