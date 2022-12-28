const showAddress = () => {
	const addAddressListEl = document.querySelector('.address-book__list');
	if (localStorage.getItem('adress')) {
		addressList = JSON.parse(localStorage.getItem('adress'));
		for (const { address, entrance } of addressList) {
			addAddressListEl.insertAdjacentHTML('afterbegin', renderAddress(address, entrance));
		}
	}
};

const renderAddress = (address, entrance) => {
	return `
		<li class="address-book__item">
			<label class="custom-checkbox custom-checkbox--fill">
				<input type="checkbox" class="custom-checkbox__field">
				<span class="custom-checkbox__content">
				</span>
			</label>
			<div class="address-book__info">
				<span class="address-book__name">${address}</span>
				<span class="address-book__entrance">Подъезд ${entrance}</span>
			</div>
			<button class="address-book__edit-btn btn-reset">
				<svg class="">
					<use xlink:href="images/sprites/sprite-multi.svg#pencil"></use>
				</svg>
			</button>
		</li>
	`;
};

showAddress();
