const productsBtn = document.querySelectorAll('.product__btn');
const cartModalList = document.querySelector('.cart-modal__list');
const cartCount = document.querySelector('.cart-btn__count');
const sidebarProductCountEl = document.querySelector('.js-product-length');
const basketList = document.querySelector('.main-basket__list');
const cartFullPrice = document.querySelector('.user-actions__cart-price');
const cartModalFullPrice = document.querySelector('.cart-modal__price');
const sidebarTotalPriceEl = document.querySelector('.basket-sidebar__total-price');
const priceOfTotalProducts = document.querySelector('.basket-sidebar__value--price');
const additionBtn = document.querySelectorAll('.basket__slider-btn');

let price = 0;
let products = [];

const randomId = () => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	return (
		alphabet[Math.floor(Math.random() * alphabet.length)] +
		Math.floor(100000000 + Math.random() * 900000000)
	);
};

const declOfNum = (n, text_forms) => {
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 == 1) {
		return text_forms[0];
	}
	return text_forms[2];
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const summFullPrice = (currentPrice) => {
	return (price += currentPrice);
};

const diffFullPrice = (currentPrice) => {
	return (price -= currentPrice);
};

const printFullPrice = () => {
	cartModalFullPrice.textContent = `${normalPrice(price)} ₽`;
	cartFullPrice.textContent = `${normalPrice(price)} ₽`;
};

const printPriceOtherPage = () => {
	sidebarTotalPriceEl.textContent = `${normalPrice(price)} ₽`;
	priceOfTotalProducts.textContent = `${normalPrice(price)} ₽`;
};

const countProducts = (cartCountEl, sidebarCountEl) => {
	if (localStorage.getItem('products')) {
		let productLength = JSON.parse(localStorage.getItem('products')).length;
		cartCountEl.textContent = productLength;

		if (sidebarCountEl) {
			sidebarCountEl.textContent = `${productLength} ${declOfNum(productLength, [
				'товар',
				'товара',
				'товаров',
			])}`;
		}
	}
};

const deleteProduct = (item, prodId) => {
	if (!basketList) {
		document
			.querySelector(`.product[data-product-id="${prodId}"]`)
			.querySelector('.product__btn')
			.classList.remove('in-active');
	}

	let priceStr = item.querySelector('.price-product').textContent;
	let normalPrice = parseInt(priceWithoutSpaces(priceStr));

	diffFullPrice(normalPrice);
	let storageProducts = JSON.parse(localStorage.getItem('products'));
	item.remove();
	let products = storageProducts.filter((product) => product.id !== prodId);
	localStorage.setItem('products', JSON.stringify(products));

	printFullPrice();
};

const renderCartProduct = (id, img, title, price, quantity = 1) => {
	return `
		<li class="cart-modal__item js-cart-item">
			<article class="cart-modal__product modal-product cart-product" data-id="${id}">
				<img class="modal-product__img" src="${img}" alt="">
				<div class="modal-product__info">
					<h3 class="modal-product__title">${title}</h3>
					<span class="modal-product__id">Артикул: ${id}</span>
					<div class="modal-product__count">
						<div class="modal-product__stepper stepper">
							<button class="stepper__btn stepper__btn--up btn-reset">+</button>
							<div class="stepper__field">
								<input type="text" value="${quantity}" maxlength="3" class="stepper__input">
							</div>
							<button class="stepper__btn stepper__btn--down stepper__btn--disabled btn-reset">-</button>
						</div>
						<span class="modal-product__price price-product">${normalPrice(quantity * price)} ₽</span>
					</div>
				</div>
				<button class="modal-product__btn btn-reset js-delete-product">
					<svg class="">
						<use xlink:href="images/sprites/sprite-mono.svg#close-alt"></use>
					</svg>
				</button>
			</article>
		</li>
	`;
};

const renderBasketProduct = (id, img, title, price, quantity = 1) => {
	return `
		<li class="main-basket__item js-cart-item">
			<article class="main-basket__product basket-product cart-product" data-id="${id}">
				<img class="basket-product__img" src="${img}" alt="">
				<div class="basket-product__info">
					<h3 class="basket-product__title">
						<a class="basket-product__link" href="#">${title}</a>
					</h3>
					<span class="basket-product__id">Артикул: ${id}</span>
				</div>
				<div class="basket-product__stepper stepper">
					<button class="stepper__btn stepper__btn--down stepper__btn--disabled btn-reset">-</button>
					<div class="stepper__field">
						<input type="text" value="${quantity}" maxlength="3" class="stepper__input">
					</div>
					<button class="stepper__btn stepper__btn--up btn-reset">+</button>
				</div>
				<span class="basket-product__price price-product">${normalPrice(quantity * price)}₽</span>
				<button class="basket-product__delete-btn btn-reset js-delete-product">
					<svg class="">
						<use xlink:href="images/sprites/sprite-mono.svg#close-alt"></use>
					</svg>
				</button>
			</article>
		</li>
	`;
};

const countTotalSumm = () => {
	if (localStorage.getItem('products')) {
		products = JSON.parse(localStorage.getItem('products'));
		for (const { price: priceProduct, quantity } of products) {
			price += priceProduct * quantity;
		}
		return price;
	}
};

const updateStorage = (productsList, id, img, title, price, quantity) => {
	const productObj = {
		id,
		img,
		title,
		price,
		quantity: 1,
	};

	productsList.push(productObj);

	localStorage.setItem('products', JSON.stringify(productsList));
};

const deleteProductByClick = () => {
	const productDeleteBtn = document.querySelectorAll('.js-delete-product');

	productDeleteBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			let id = e.target.closest('.cart-product').dataset.id;

			deleteProduct(e.target.closest('.js-cart-item'), id);
			countProducts(cartCount, sidebarProductCountEl);

			if (basketList) {
				printPriceOtherPage();

				const cartModalProduct = document.querySelector(`.cart-product[data-id="${id}"]`);
				cartModalProduct.remove();
			}

			if (cartModalList.children.length < 1 || basketList.children.length < 1) {
				price = 0;
				printFullPrice();
				printPriceOtherPage();

				additionBtn.forEach((btn) => btn.classList.remove('in-active'));
			}
		});
	});
};

const initialState = (parent, template, firstCartPriceEl, secondCartPriceEl) => {
	if (localStorage.getItem('products')) {
		products = JSON.parse(localStorage.getItem('products'));
		for (const { id, img, title, price, quantity } of products) {
			parent?.insertAdjacentHTML('afterbegin', template(id, img, title, price, quantity));

			if (quantity === 1) {
				parent?.querySelector('.stepper__btn--down').classList.add('stepper__btn--disabled');
			} else {
				parent?.querySelector('.stepper__btn--down').classList.remove('stepper__btn--disabled');
			}
		}
		countProducts(cartCount);

		if (firstCartPriceEl && secondCartPriceEl) {
			firstCartPriceEl.textContent = `${normalPrice(price)} ₽`;
			secondCartPriceEl.textContent = `${normalPrice(price)} ₽`;
		}
	}
};

productsBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let parent = self.closest('.product');

		let id = parent.dataset.productId;
		let img = parent.querySelector('.product__images-item img').getAttribute('src');
		let title = parent.querySelector('.product__title').textContent;
		let priceStr = parent.querySelector('.product__price-current').textContent;

		let normalPrice = parseInt(priceWithoutSpaces(priceStr));

		summFullPrice(normalPrice);
		printFullPrice();
		cartModalList.insertAdjacentHTML('afterbegin', renderCartProduct(id, img, title, normalPrice));
		countProducts(cartCount);

		updateStorage(products, id, img, title, normalPrice, 1);

		self.classList.add('in-active');
	});
});

countTotalSumm();
initialState(cartModalList, renderCartProduct, cartFullPrice, cartModalFullPrice);
initialState(basketList, renderBasketProduct, sidebarTotalPriceEl, priceOfTotalProducts);
deleteProductByClick();
if (basketList) countProducts(cartCount, sidebarProductCountEl);

const productsEL = document.querySelectorAll('.flowers-delivery .product');

if (productsEL.length > 1) {
	document.querySelectorAll('.cart-product').forEach((el) => {
		let id = el.dataset.id;
		document
			.querySelector(`.product[data-product-id="${id}"]`)
			.querySelector('.product__btn')
			.classList.add('in-active');
	});
}
