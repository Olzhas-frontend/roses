//= ../_vars.js
//= closeElByOverlayClick.js

const cartModal = document.querySelector('.cart-modal');
const cartBtn = document.querySelector('.cart-btn');
const cartModalBtnClose = document.querySelector('.cart-modal__btn-close');

const showModal = () => {
	cartModal.classList.add('active');
	overlay.classList.add('active');
	body.classList.add('dis-scroll');
};

const hideModal = () => {
	cartModal.classList.remove('active');
	overlay.classList.remove('active');
	body.classList.remove('dis-scroll');
};

if (cartBtn) {
	cartBtn.addEventListener('click', (e) => {
		e.preventDefault();
		cartModalList.children.length === 0 ? hideModal() : showModal();
	});
}

if (cartModalBtnClose) {
	cartModalBtnClose.addEventListener('click', (e) => {
		e.preventDefault();
		hideModal();
	});
}

closeElementByOverlayClick(cartModal);
