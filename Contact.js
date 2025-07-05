const roFlag = document.getElementById('roFlag');
	const enFlag = document.getElementById('enFlag');
	let currentLanguage = 'ro';

	function translatePage(targetLang) {
		const elementsToTranslate = document.querySelectorAll('[data-ro], [data-en]');

		if (targetLang === 'en') {
			elementsToTranslate.forEach(element => {
				if (element.dataset.en !== undefined) {
					element.textContent = element.dataset.en;
				}
			});
			document.documentElement.lang = 'en';
			currentLanguage = 'en';
			enFlag.style.display = 'none';
			roFlag.style.display = 'inline-block';
		} else {
			elementsToTranslate.forEach(element => {
				if (element.dataset.ro !== undefined) {
					element.textContent = element.dataset.ro;
				}
			});
			document.documentElement.lang = 'ro';
			currentLanguage = 'ro';
			enFlag.style.display = 'inline-block';
			roFlag.style.display = 'none';
		}
	}

	enFlag.addEventListener('click', () => translatePage('en'));
	roFlag.addEventListener('click', () => translatePage('ro'));

	if (currentLanguage === 'ro') {
		enFlag.style.display = 'inline-block';
		roFlag.style.display = 'none';
	} else {
		enFlag.style.display = 'none';
		roFlag.style.display = 'inline-block';
}