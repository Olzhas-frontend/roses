const promoCodeBtn = document.querySelectorAll('.promo-code__btn');

promoCodeBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		let parent = btn.closest('.promo-code');
		let promoCodeValue = parent.querySelector('.promo-code__input').getAttribute('placeholder');
		navigator.clipboard.writeText(promoCodeValue);
	});
});
