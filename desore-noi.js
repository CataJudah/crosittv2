document.addEventListener('DOMContentLoaded', () => {
    const ani = [
      { an: "2013", text: "CrossIt ia naștere în București." },
      { an: "2014", text: "Primii clienți locali și crearea echipei." },
      { an: "2015", text: "Parteneriat strategic global." },
      { an: "2016", text: "Investiții în infrastructură internă." },
      { an: "2017", text: "Certificări internaționale obținute." },
      { an: "2018", text: "Extindere în leasing IT." },
      { an: "2019", text: "Creștere semnificativă a echipei." },
      { an: "2020", text: "Furnizor principal enterprise." },
      { an: "2021", text: "Adaptare post-pandemie." },
      { an: "2022", text: "Diversificare a portofoliului." },
      { an: "2023", text: "100+ proiecte livrate." },
      { an: "2024", text: "Focus pe AI și cloud." },
      { an: "2025", text: "Inovație și scalare globală." },
    ];
  
    let index = 0;
    const anEl = document.getElementById("anCurent");
    const descriereEl = document.getElementById("descriereAn");
  
    function afiseaza() {
      anEl.textContent = ani[index].an;
      descriereEl.textContent = ani[index].text;
    }
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      index = (index - 1 + ani.length) % ani.length;
      afiseaza();
    });
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      index = (index + 1) % ani.length;
      afiseaza();
    });
  
    afiseaza();
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