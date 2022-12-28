const starRatingsItem = document.querySelectorAll('.form__rating-icon');
const starRatingsCount = document.querySelector('.form__rating-count');
const starsArray = Array.from(starRatingsItem);
let currentRating = 0;

starsArray.forEach((star, index) => {
	star.addEventListener('click', (e) => {
		for (let i = 0; i < starsArray.length; i++) {
			starsArray[i].style.fill = '#d0d2d7';
		}
		colorStar(index);
		currentRating = index + 1;
		starRatingsCount.innerHTML = currentRating;
	});
});

const colorStar = (n) => {
	if (n < 0) return;
	starsArray[n].style.fill = '#ffa500';
	colorStar(n - 1);
};
