const increaseProduct = (el) => {
	const parent = el.closest('.cart-product');
	let parentId = parent.dataset.id;
	const input = parent.querySelector('input').value;
	if (localStorage.getItem('products')) {
		const storageProducts = localStorage.getItem('products');
		const productsList = JSON.parse(storageProducts);

		for (const item of productsList) {
			if (parentId === item.id) {
				item.quantity = +input;
			}
		}
		localStorage.setItem('products', JSON.stringify(productsList));
	}
};
