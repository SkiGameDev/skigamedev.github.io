document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// ID univoco del tuo sito o pagina
const counterKey = "SkiGameDev";

// Richiesta a CounterAPI
fetch("https://api.counterapi.dev/v1/hit/" + counterKey + "?token=ut_ZDQTgh00QHkid6XIc9xQx0EaDuSTqt8oFlfO7ZY7")
  .then(r => r.json())
  .then(data => {
    document.getElementById("visit-count").innerText = data.value;
  })
  .catch(() => {
    document.getElementById("visit-count").innerText = "–";
  });

// Caricamento notizie da JSON
fetch('news.json')
  .then(res => res.json())
  .then(news => {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';

    news.forEach(item => {
      const date = new Date(item.date).toLocaleDateString('it-IT');
      const article = document.createElement('div');
      article.className = 'news-item';
      article.innerHTML = `
        <h3>${item.title}</h3>
        <p class="date">${date}</p>
        <p>${item.text}</p>
        <a href="${item.url}" class="share-button" target="_blank">Condividi</a>
      `;
      newsList.appendChild(article);
    });
  })
  .catch(() => {
    document.getElementById('news-list').innerText = "Errore nel caricamento notizie.";
  });
