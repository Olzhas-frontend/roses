const gallery = document.querySelectorAll('.gallery__slider-item'),
	previewBox = document.querySelector('.preview-box'),
	previewImg = previewBox.querySelector('img'),
	closeIcon = previewBox.querySelector('.icon'),
	currentImg = previewBox.querySelector('.current-img'),
	totalImg = previewBox.querySelector('.total-img'),
	shadow = document.querySelector('.shadow'),
	prevBtn = document.querySelector('.prev'),
	nextBtn = document.querySelector('.next');

let activeSlidesIndex = 0;

gallery.forEach((el, idx) => {
	el.addEventListener('click', () => {
		previewBox.classList.add('show');
		//checkBtn(idx);
		setCurrentImg(el, idx);
		totalImg.textContent = gallery.length;
	});
});

nextBtn.addEventListener('click', () => {
	if (activeSlidesIndex < gallery.length - 1) {
		activeSlidesIndex++;
	} else {
		activeSlidesIndex = 0;
	}
	changeImg(activeSlidesIndex);
});

prevBtn.addEventListener('click', () => {
	if (activeSlidesIndex > 0) {
		activeSlidesIndex--;
	} else {
		activeSlidesIndex = gallery.length - 1;
	}
	changeImg(activeSlidesIndex);
});

const changeImg = (index) => {
	previewImg.src = gallery[index].querySelector('img').src;
	currentImg.textContent = activeSlidesIndex + 1;
};

const setCurrentImg = (el, idx) => {
	let url = el.querySelector('img').src;
	previewImg.src = url;
	activeSlidesIndex = idx;

	currentImg.textContent = idx + 1;
};

const checkBtn = (idx) => {
	prevBtn.style.display = 'block';
	nextBtn.style.display = 'block';
	if (idx >= gallery.length - 1) {
		nextBtn.style.display = 'none';
	}
	if (idx < 1) {
		prevBtn.style.display = 'none';
	}
};

closeIcon.addEventListener('click', () => {
	previewBox.classList.remove('show');
});
