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