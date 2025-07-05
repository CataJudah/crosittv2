document.getElementById("toggleButton").addEventListener("click", function () {
  var menu = document.querySelector(".popup-menu"); // Selectează meniul
  var icon = document.getElementById("icon"); // Selectează iconița

  // Verifică dacă meniul este vizibil
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex"; // Afișează meniul
      icon.classList.remove("fa-bars"); // Elimină iconița meniului închis
      icon.classList.add("fa-x"); // Adaugă iconița meniului deschis
    } else {
      menu.style.display = "none"; // Ascunde meniul
      icon.classList.remove("fa-x"); // Elimină iconița meniului deschis
      icon.classList.add("fa-bars"); // Adaugă iconița meniului închis
  }
});

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