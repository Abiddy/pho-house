// Hero film: autoplay, soft fade on loop, and stillness for reduced-motion visitors.
(function () {
  var film = document.querySelector(".ig-hero__film");
  var fade = document.querySelector(".ig-hero__fade");
  if (!film) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { film.pause(); return; }
  var p = film.play(); if (p && p.catch) p.catch(function () {});
  film.addEventListener("timeupdate", function () {
    if (!film.duration || !fade) return;
    fade.classList.toggle("is-on", film.duration - film.currentTime < 0.7);
  });
  film.addEventListener("ended", function () {
    film.currentTime = 0;
    var q = film.play(); if (q && q.catch) q.catch(function () {});
    setTimeout(function () { if (fade) fade.classList.remove("is-on"); }, 120);
  });
})();
document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
// Dish carousel: arrows, dots and active-slide tracking.
(function () {
  var root = document.querySelector(".ig-carousel");
  if (!root) return;
  var track = root.querySelector(".ig-carousel__track");
  var slides = Array.prototype.slice.call(root.querySelectorAll(".ig-slide"));
  var dots = Array.prototype.slice.call(root.querySelectorAll(".ig-carousel__dot"));
  var current = 0;
  function go(i) {
    i = (i + slides.length) % slides.length;
    var s = slides[i];
    track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.clientWidth) / 2, behavior: "smooth" });
  }
  function mark(i) {
    current = i;
    slides.forEach(function (s, k) { s.classList.toggle("is-active", k === i); s.setAttribute("aria-hidden", k === i ? "false" : "true"); });
    dots.forEach(function (d, k) { d.classList.toggle("is-on", k === i); d.setAttribute("aria-current", k === i ? "true" : "false"); });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting && e.intersectionRatio > 0.6) mark(slides.indexOf(e.target)); });
  }, { root: track, threshold: [0.6] });
  slides.forEach(function (s) { io.observe(s); });
  root.querySelector(".ig-carousel__btn--prev").addEventListener("click", function () { go(current - 1); });
  root.querySelector(".ig-carousel__btn--next").addEventListener("click", function () { go(current + 1); });
  dots.forEach(function (d, k) { d.addEventListener("click", function () { go(k); }); });
  root.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(current + 1); if (e.key === "ArrowLeft") go(current - 1); });
  mark(0);
})();
