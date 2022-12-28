const stepperInput = document.querySelectorAll('.stepper__input');
const stepperBtnUp = document.querySelectorAll('.stepper__btn--up');
const stepperBtnDown = document.querySelectorAll('.stepper__btn--down');
const stepperBtnS = document.querySelectorAll('.stepper__btn');

const isNotApple = () => {
	if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		return false;
	}
	return true;
};

const allowNumbersOnly = (e) => {
	var code = e.which ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
		e.preventDefault();
	}
};

const removeDisabledClass = (count, btnDown) => {
	if (count === 1) {
		btnDown.classList.add('stepper__btn--disabled');
	} else {
		btnDown.classList.remove('stepper__btn--disabled');
	}
};

const checkDeviceIsNotApple = (device, target) => {
	if (device) {
		target.style.width = `${target.value.length + 1}ex`;
	} else {
		target.style.width = `${target.value.length + 2}ex`;
	}
};

stepperBtnS.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		const self = e.target;
		const parent = self.parentNode;
		const btnDown = parent.querySelector('.stepper__btn--down');
		const input = parent.querySelector('.stepper__field input');
		let val = parent.querySelector('.stepper__field input').value;

		if (self.classList.contains('stepper__btn--up')) {
			val++;
		} else {
			val--;
		}
		removeDisabledClass(val, btnDown);
		input.value = val;
		checkDeviceIsNotApple(isNotApple, input);
	});
});

const diffSummPrice = (str, price) => {
	return str === 'up' ? summFullPrice(price) : diffFullPrice(price);
};

const countPrice = (dir, target) => {
	const self = target;
	const parentID = target.closest('.cart-product').dataset.id;
	const parent = self.closest('.cart-product');
	const priceEl = parent.querySelector('.price-product');
	const input = parent.querySelector('input').value;

	if (localStorage.getItem('products')) {
		const storageProducts = localStorage.getItem('products');
		const productsList = JSON.parse(storageProducts);

		for (const item of productsList) {
			if (parentID === item.id) {
				priceEl.textContent = normalPrice(+input * item.price) + ' ₽';
				cartModalFullPrice.textContent = normalPrice(diffSummPrice(dir, item.price) + ' ₽');
			}
		}
	}
	cartFullPrice.textContent = `${normalPrice(price)} ₽`;

	if (basketList) {
		sidebarTotalPriceEl.textContent = `${normalPrice(price)} ₽`;
		priceOfTotalProducts.textContent = `${normalPrice(price)} ₽`;
	}

	increaseProduct(self);
};

const changeValue = (el) => {
	const replace = (parent) => {
		const cartModalProductInput = parent.querySelector('.stepper__input');
		const cartModalProductPriceEl = parent.querySelector('.price-product');
		cartModalProductInput.value = thisParent.querySelector('.stepper__input').value;
		cartModalProductPriceEl.textContent = thisParent.querySelector('.price-product').textContent;
		const stepperBtnDown = parent.querySelector('.stepper__btn--down');

		removeDisabledClass(+cartModalProductInput.value, stepperBtnDown);
	};

	const thisParent = el.parentNode.closest('.cart-product');
	const thisParentID = thisParent.dataset.id;
	let cartModalProduct = document.querySelector(`.cart-modal__product[data-id="${thisParentID}"]`);

	if (thisParent.classList.contains('main-basket__product')) {
		replace(cartModalProduct);
	} else {
		cartModalProduct = document.querySelector(`.main-basket__product[data-id="${thisParentID}"]`);

		replace(cartModalProduct);
	}
};

stepperBtnUp.forEach((el) =>
	el.addEventListener('click', (e) => {
		countPrice('up', e.target);
		changeValue(e.target);
	})
);
stepperBtnDown.forEach((el) =>
	el.addEventListener('click', (e) => {
		countPrice('down', e.target);
		changeValue(e.target);
	})
);

stepperInput.forEach((el) => {
	el.addEventListener('keyup', (e) => {
		let self = e.currentTarget;
		const parent = self.closest('.stepper');
		const btnDown = parent.querySelector('.stepper__btn--down');

		if (self.value === '0') {
			self.value = 1;
		}

		checkDeviceIsNotApple(isNotApple, self);

		let count = +self.value;

		removeDisabledClass(count, btnDown);
	});

	el.addEventListener('keypress', (e) => {
		allowNumbersOnly(e);
	});

	el.addEventListener('change', (e) => {
		let self = e.currentTarget;
		const parent = self.closest('.stepper');
		const btnDown = parent.querySelector('.stepper__btn--down');

		if (!self.value) {
			self.value = 1;
		}

		let count = +self.value;
		removeDisabledClass(count, btnDown);
	});
});
