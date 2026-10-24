// Each flower has four overlapping rings, from broad outer petals to a full center.
const rings = [
  { count: 12, width: 10.5, height: 11, radius: 1.1 },
  { count: 10, width: 8.6, height: 8.8, radius: 0.6 },
  { count: 8, width: 6.5, height: 6.7, radius: 0.3 },
  { count: 6, width: 4.1, height: 4.5, radius: 0 }
];

document.querySelectorAll('.peony').forEach((bloom, flowerIndex) => {
  let petalIndex = 0;
  rings.forEach((ring, ringIndex) => {
    for (let i = 0; i < ring.count; i++) {
      const placement = document.createElement('span');
      placement.className = 'peony__placement';
      const angle = i * (360 / ring.count) + ringIndex * 23 + flowerIndex * 13;
      placement.style.cssText = `--angle:${angle}deg;--radius:${ring.radius}vmin;--width:${ring.width * (1 + Math.sin(i * 2.4) * 0.07)}vmin;--height:${ring.height * (1 + Math.cos(i * 1.8) * 0.08)}vmin;--delay:${2.5 + flowerIndex * 0.4 + petalIndex * 0.1}s;--layer:${ringIndex};--tilt:${Math.sin(i * 3) * 9}deg`;
      const petal = document.createElement('span');
      petal.className = `peony__petal peony__petal--${ringIndex}`;
      placement.append(petal);
      bloom.append(placement);
      petalIndex++;
    }
  });
});

// Reset CSS timelines so a fresh visit, replay, or restored page starts at growth.
function replayGarden() {
  document.body.classList.add('container', 'is-resetting');
  // Flush the removed animations before recreating their initial, paused frames.
  void document.body.offsetWidth;
  document.body.classList.remove('is-resetting');
  void document.body.offsetWidth;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.remove('container'));
  });
}

document.querySelector('.replay-bloom').addEventListener('click', replayGarden);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) replayGarden();
});

// Build every petal before releasing the existing grass and stem animations.
replayGarden();
