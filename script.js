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

