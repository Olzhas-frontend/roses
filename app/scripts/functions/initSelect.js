document.addEventListener('DOMContentLoaded', () => {
	ItcCustomSelect.create('#select-1', {
		name: 'sort',
		targetValue: 'По популярности',
		options: [
			['По алфавиту', 'По алфавиту'],
			['По популярности', 'По популярности'],
			['По убыванию цены', 'По убыванию цены'],
			['По возрастанию цены', 'По возрастанию цены'],
		],
	});

	const timeSelects = document.querySelectorAll('.basket-form__time-select');
	timeSelects.forEach((select) => {
		ItcCustomSelect.create(select, {
			name: 'select-time',
			targetValue: '19:30',
			options: [
				['11:00-12:00', '11:00-12:00'],
				['12:00-13:00', '12:00-13:00'],
				['13:00-14:00', '13:00-14:00'],
				['14:00-15:00', '14:00-15:00'],
				['15:00-16:00', '15:00-16:00'],
				['16:00-17:00', '16:00-17:00'],
				['17:00-18:00', '17:00-18:00'],
				['18:00-19:00', '18:00-19:00'],
				['19:00-20:00', '19:00-20:00'],
			],
		});
	});
});
