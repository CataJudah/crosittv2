AOS.init({
    duration: 1000,
    once: true
});

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

// window.addEventListener("scroll", function () {
//     const header = document.querySelector("header");
//     header.classList.toggle("scrolled", window.scrollY > 50);
// });

// === CAROUSEL

const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
	const scrollWidth = container.scrollWidth;
	let isScrollingPaused = false;

	window.addEventListener("load", () => {
		self.setInterval(() => {
			if (isScrollingPaused) {
				return;
			}
			const first = container.querySelector(".partner-logo");

			if (!isElementInViewport(first)) {
				container.appendChild(first);
				container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
			}
			if (container.scrollLeft !== scrollWidth) {
				container.scrollTo(container.scrollLeft + 1, 0);
			}
		}, 15);
	});

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return rect.right > 0;
	}

	// function pauseScrolling() {
	// 	isScrollingPaused = true;
	// }

	// function resumeScrolling() {
	// 	isScrollingPaused = false;
	// }
	// const allArticles = container.querySelectorAll(".partner-logo");
	// for (let article of allArticles) {
	// 	article.addEventListener("mouseenter", pauseScrolling);
	// 	article.addEventListener("mouseleave", resumeScrolling);
	// }
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