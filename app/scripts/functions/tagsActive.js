const tags = document.querySelectorAll('.catalog-tags__item');
const tagsClose = document.querySelectorAll('.catalog-tags__icon');

tags.forEach((tag) => {
	tag.addEventListener('click', (e) => {
		const self = e.target;
		if (self.classList.contains('catalog-tags__item')) self.classList.add('active');
	});
});

tagsClose.forEach((el) => {
	el.addEventListener('click', (e) => {
		const self = e.target.closest('.catalog-tags__item');

		if (!self) return;
		self.classList.remove('active');
	});
});
