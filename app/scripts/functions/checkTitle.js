const checkTitle = (title) => {
	const authTitle = document.querySelector('.auth__title');
	return title === 'sign-up' ? (authTitle.textContent = 'Регистрация') : (authTitle.textContent = 'Войти');
};
