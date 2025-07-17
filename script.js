document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


fetch('news.json')
  .then(res => res.json())
  .then(news => {
    const latest = news[0];
    const date = new Date(latest.date).toLocaleDateString('it-IT');
    document.getElementById('latest-news').innerHTML = `
      <div class="news-item">
        <h3>${latest.title}</h3>
        <p class="date">${date}</p>
        <p>${latest.text}</p>
        <a href="${latest.url}" class="share-button" target="_blank">Visualizza</a>
      </div>`;
  });
