const phoneMaskInputs = document.querySelectorAll('input[type="tel"]');

const masksOptions = {
	phone: {
		mask: '+{7} (000) 000-00-00',
	},
};

for (const item of phoneMaskInputs) {
	new IMask(item, masksOptions.phone);
}
