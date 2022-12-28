const showBtnOnSlideChange = (slider, btn) => {
	let realIndex = slider.realIndex;
	if (realIndex === 0) {
		btn.classList.remove('active');
	} else {
		btn.classList.add('active');
	}
};

const introMainSlider = new Swiper('.main-slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const introProdutSlider = new Swiper('.intro__product-slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
});

const productImagesSlider = new Swiper('.product__images', {
	slidesPerView: 'auto',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
const flowersDeliverySliderBtn = document.querySelector('.flowers-delivery__slider .swiper-button-prev');
const flowersDeliverySlider = new Swiper('.flowers-delivery__slider', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	on: {
		slideChange: function () {
			showBtnOnSlideChange(this, flowersDeliverySliderBtn);
		},
	},
});

const bestOffersSliderprevBtn = document.querySelector('.best-offers__slider .swiper-button-prev');
const bestOffersSlider = new Swiper('.best-offers__slider', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	on: {
		slideChange: function () {
			showBtnOnSlideChange(this, bestOffersSliderprevBtn);
		},
	},
});

const noveltieSliderprevBtn = document.querySelector('.novelties__slider .swiper-button-prev');
const noveltieSlider = new Swiper('.novelties__slider', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	on: {
		slideChange: function () {
			showBtnOnSlideChange(this, noveltieSliderprevBtn);
		},
	},
});

const gallerySlider = new Swiper('.gallery__slider', {
	slidesPerView: 4,
	loop: true,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const reviewsSlider = new Swiper('.reviews__slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const productSliderThumbnail = new Swiper('.single-product__thumbnail', {
	spaceBetween: 14,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});

const productSliderMain = new Swiper('.single-product__slider', {
	thumbs: {
		swiper: productSliderThumbnail,
	},
});

const recomendationsSliderBtn = document.querySelector('.recomendations__slider .swiper-button-prev');
const recomendationsSlider = new Swiper('.recomendations__slider', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	on: {
		slideChange: function () {
			showBtnOnSlideChange(this, recomendationsSliderBtn);
		},
	},
});

const watchedBeforeSliderBtn = document.querySelector('.watched-fefore__slider .swiper-button-prev');
const watchedBeforeSlider = new Swiper('.watched-before__slider', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
	on: {
		slideChange: function () {
			showBtnOnSlideChange(this, watchedBeforeSliderBtn);
		},
	},
});

const basktetTabsSlider = new Swiper('.basket__slider', {
	slidesPerView: 4,
	spaceBetween: 15,
	navigation: {
		nextEl: '.swiper-button-next',
	},
	observer: true,
	observeSlideChildren: true,
	observeParents: true,
});
