additionBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		const parent = btn.closest('.basket__slider-item');

		const additionElPriceEl = parent.querySelector('.basket__slider-price');
		const additionPrice = parseInt(additionElPriceEl.textContent);

		if (!btn.classList.contains('in-active')) {
			btn.classList.add('in-active');
			summFullPrice(additionPrice);
		} else {
			btn.classList.remove('in-active');
			diffFullPrice(additionPrice);
		}

		sidebarTotalPriceEl.textContent = `${normalPrice(price)} ₽`;
	});
});
