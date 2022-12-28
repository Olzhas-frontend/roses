const clearCart = () => {
	products = [];

	const cartProductsItem = document.querySelectorAll('.js-cart-item');
	cartProductsItem.forEach((item) => item.remove());

	price = 0;
	cartCount.textContent = '0 ₽';
	sidebarProductCountEl.textContent = '0 товаров';
	printFullPrice();
	printPriceOtherPage();

	additionBtn.forEach((btn) => btn.classList.remove('in-active'));

	localStorage.setItem('products', JSON.stringify(products));
};

const clearCartBtn = document.querySelector('.js-clear-cart');
if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
