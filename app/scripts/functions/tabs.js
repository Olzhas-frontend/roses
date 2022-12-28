const tabs = (parent) => {
	const tabControlParent = document.querySelector(parent);
	const tabsControls = document.querySelectorAll(`${parent} .tabs-control__item`);
	const tabsContents = document.querySelectorAll(`${parent} .tabs-content__item`);

	if (tabControlParent) {
		tabControlParent.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs-control__item')) {
				const tabsPath = e.target.dataset.pathTab;
				tabsControls.forEach((el) => {
					el.classList.remove('is-active');
				});
				document.querySelector(`[data-path-tab="${tabsPath}"]`).classList.add('is-active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContents.forEach((el) => {
			el.classList.remove('tabs-content__item--active');
		});
		document.querySelector(`[data-target-tab="${path}"]`).classList.add('tabs-content__item--active');
	};
};
tabs('.account__wrapper');
tabs('.auth__wrapper');
tabs('.basket__tabs');
tabs('.basket__info');
