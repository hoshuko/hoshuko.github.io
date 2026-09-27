/* Vitrines en mouvement : onglets de format des vidéos promo, mémorisation de la langue choisie. */
(() => {
  'use strict';
  document.querySelectorAll('.proj').forEach(el => {
    const id = el.id, lang = el.dataset.lang;
    const box = el.querySelector('.vbox'), video = el.querySelector('video'), note = el.querySelector('.vnote');
    const tabs = [...el.querySelectorAll('.vtabs button')];
    tabs.forEach(b => b.addEventListener('click', () => {
      const f = b.dataset.f;
      tabs.forEach(x => x.setAttribute('aria-selected', String(x === b)));
      video.pause();
      box.dataset.f = f;
      video.poster = `assets/video/${id}-${f}-${lang}.jpg`;
      video.src = `assets/video/${id}-${f}-${lang}.mp4`;
      video.setAttribute('aria-label', b.dataset.label);
      note.textContent = b.dataset.note;
    }));
  });
  // un choix de langue explicite l'emporte ensuite sur la langue du navigateur
  document.querySelectorAll('.lang-switch a').forEach(a => a.addEventListener('click', () => {
    try { localStorage.setItem('lang', a.getAttribute('hreflang')); } catch (e) { /* stockage indisponible */ }
  }));
})();
