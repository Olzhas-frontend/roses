const addAddressBtn = document.getElementById('add-adress-btn');
let addressList = [];

const addAddress = (e) => {
	e.preventDefault();

	const userAdress = document.getElementById('user-address');
	const userApartment = document.getElementById('apartment');
	const userEntrance = document.getElementById('entrance');
	const userfloor = document.getElementById('floor');
	const addressObj = {
		address: userAdress.value,
		apartment: userApartment.value,
		entrance: userEntrance.value,
		floor: userfloor.value,
	};
	addressList.push(addressObj);
	localStorage.setItem('adress', JSON.stringify(addressList));

	userAdress.value = '';
	userApartment.value = '';
	userEntrance.value = '';
	userfloor.value = '';
};

if (addAddressBtn) addAddressBtn.addEventListener('click', addAddress);
