document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const counter = new Counter({
      version: "v2",
      accessToken: "ut_ZDQTgh00QHkid6XIc9xQx0EaDuSTqt8oFlfO7ZY7" // ← usa il tuo token completo qui
    });

    counter.up("skigamedev-home").then(res => {
      document.getElementById("visit-count").innerText = res.value;
    }).catch(err => {
      console.error("Errore nel contatore", err);
      document.getElementById("visit-count").innerText = "—";
    });
  });
</script>


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
