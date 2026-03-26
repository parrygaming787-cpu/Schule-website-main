// JS: Sidebar öffnen und schließen
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('sidebarToggle');
const closeButton = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}

openButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// JS: News wechseln automatisch
const newsList = [
  'Neue Elektromodelle jetzt verfügbar – 20% Rabatt!',
  'Sommer-Special: Probefahrt gratis bei allen Modellen.',
  'Wartungsservice erweitert: Jetzt auch Elektroautos.',
];
const newsBox = document.getElementById('newsBox');
let currentNews = 0;

function showNews(index) {
  newsBox.textContent = newsList[index];
}

showNews(currentNews);
setInterval(() => {
  currentNews = (currentNews + 1) % newsList.length;
  showNews(currentNews);
}, 4000);

// Tabs für Modelle
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// Modal für Modelldetails
const modal = document.getElementById('modelModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const detailsButtons = document.querySelectorAll('.details-btn');

const modelDetails = {
  modell1: {
    title: 'Kompaktwagen A',
    img: 'assets/modell1.png',
    price: 'Ab 18.000 €',
    specs: ['Motor: 1.0L Benzin', 'Leistung: 75 PS', 'Verbrauch: 5.5L/100km', 'Sicherheit: 5 Sterne Euro NCAP'],
    description: 'Der ideale Stadtflitzer mit modernen Features und niedrigem Verbrauch.'
  },
  modell2: {
    title: 'Kompaktwagen B',
    img: 'assets/modell2.png',
    price: 'Ab 22.000 €',
    specs: ['Motor: Elektro 100 kW', 'Reichweite: 300 km', 'Ladezeit: 30 min (80%)', 'Umweltfreundlich'],
    description: 'Zukunftssicher mit Elektroantrieb und hoher Effizienz.'
  },
  modell3: {
    title: 'Familienwagen X',
    img: 'assets/modell3.png',
    price: 'Ab 25.000 €',
    specs: ['Motor: 1.5L Diesel', 'Sitzplätze: 5+2', 'Kofferraum: 500L', 'Familienfreundlich'],
    description: 'Perfekt für Familienausflüge mit viel Platz und Komfort.'
  },
  modell4: {
    title: 'Familienwagen Y',
    img: 'assets/modell4.png',
    price: 'Ab 28.000 €',
    specs: ['Motor: 2.0L Allrad', 'Sitzplätze: 7', 'Anhängelast: 2000kg', 'Robust'],
    description: 'Allradantrieb für alle Wetterlagen und Abenteuer.'
  },
  modell5: {
    title: 'Luxusmodell Z',
    img: 'assets/modell5.png',
    price: 'Ab 50.000 €',
    specs: ['Motor: 3.0L V6', 'Leistung: 300 PS', 'Luxusausstattung', 'Premium-Interieur'],
    description: 'Höchster Komfort und Leistung für anspruchsvolle Fahrer.'
  }
};

detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = button.parentElement.getAttribute('data-model');
    const details = modelDetails[model];
    modalBody.innerHTML = `
      <h2>${details.title}</h2>
      <img src="${details.img}" alt="${details.title}" style="width: 100%; max-width: 300px; height: auto; margin: 1rem 0;">
      <p><strong>Preis:</strong> ${details.price}</p>
      <p>${details.description}</p>
      <h3>Spezifikationen:</h3>
      <ul>
        ${details.specs.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
      <button class="btn">Jetzt anfragen</button>
    `;
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Galerie Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
