/* Page d'accueil en français : à la première visite, bascule vers l'anglais ou l'espagnol selon la langue du navigateur.
   Un choix fait avec le sélecteur de langue est mémorisé et respecté ; aucune bascule quand on arrive depuis une autre page du site. */
(function () {
  try {
    var ref = document.referrer, saved = localStorage.getItem('lang');
    if (ref && new URL(ref).origin === location.origin) return;
    var want = saved;
    if (!want) {
      var l = ((navigator.languages && navigator.languages[0]) || navigator.language || '').slice(0, 2).toLowerCase();
      want = l === 'fr' ? 'fr' : l === 'es' ? 'es' : 'en';
    }
    if (want === 'en' || want === 'es') location.replace(want + '.html' + location.hash);
  } catch (e) { /* stockage ou URL indisponible : la page reste en français */ }
})();
