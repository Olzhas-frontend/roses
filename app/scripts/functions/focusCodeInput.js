const codeInputs = document.querySelectorAll('.auth__field');

codeInputs.forEach((input) => {
	input.addEventListener('keyup', () => {
		if (input.value !== '' && input.value.match(/\d/)) {
			if (input.nextElementSibling) {
				input.nextElementSibling.focus();
			}
		}
	});
});
