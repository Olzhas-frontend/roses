const closeElementByOverlayClick = (el) => {
	if (overlay) {
		overlay.addEventListener('click', (e) => {
			if (e.target.classList.contains('overlay')) {
				el.classList.remove('active');
				body.classList.remove('dis-scroll');
				body.style.paddingRight = '0px';
				overlay.classList.remove('active');
			}
		});
	}
};
