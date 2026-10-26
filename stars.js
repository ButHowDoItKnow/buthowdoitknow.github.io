// Starfield: a seeded scatter so the sky looks the same on every visit; about a third of the stars twinkle.
(function () {
  var svg = document.getElementById('stars');
  if (!svg) return;
  var seed = 7;
  function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  var ns = 'http://www.w3.org/2000/svg';
  svg.setAttribute('viewBox', '0 0 1000 1000');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  for (var i = 0; i < 170; i++) {
    var c = document.createElementNS(ns, 'circle');
    var big = rand() < 0.08;
    c.setAttribute('cx', (rand() * 1000).toFixed(1));
    c.setAttribute('cy', (rand() * 1000).toFixed(1));
    c.setAttribute('r', (big ? 1.8 + rand() : 0.6 + rand() * 0.9).toFixed(2));
    var o = (0.35 + rand() * 0.6).toFixed(2);
    c.style.opacity = o;
    if (rand() < 0.35) {
      c.setAttribute('class', 'tw');
      c.style.setProperty('--o', o);
      c.style.setProperty('--t', (3 + rand() * 4).toFixed(1) + 's');
      c.style.setProperty('--d', (rand() * 5).toFixed(1) + 's');
    }
    svg.appendChild(c);
  }
})();
