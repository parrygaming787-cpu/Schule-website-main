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
  'Neue Radwege in der Innenstadt sind jetzt freigegeben.',
  'Sommerfest im Park: 15. August mit Live-Musik und Essen.',
  'Bewerbungen beim Karrieretag: Jetzt Plätze sichern!',
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
