const greeting = document.querySelector('#greeting');
const question = document.querySelector('#question');
const petalField = document.querySelector('.petal-field');
const dialog = document.querySelector('#answer-dialog');
const noOne = document.querySelector('#no-one');

// A fixed number of decorative petals keeps the animation lightweight.
for (let i = 0; i < 22; i++) {
  const petal = document.createElement('span');
  petal.className = 'falling-petal';
  petal.style.cssText = `--left:${(i * 47.3) % 100}%;--size:${9 + (i % 5) * 3}px;--duration:${13 + (i % 7) * 1.7}s;--delay:${-i * 2.3}s;--drift:${(i % 2 ? 1 : -1) * (35 + i * 4)}px;--opacity:${0.22 + (i % 4) * 0.1}`;
  petalField.append(petal);
}

document.querySelector('#open-question').addEventListener('click', () => {
  greeting.hidden = true;
  question.hidden = false;
  petalField.hidden = true;
  petalField.replaceChildren();
  document.querySelector('#question-title').focus();
});

noOne.addEventListener('click', () => dialog.showModal());
dialog.addEventListener('close', () => noOne.focus());
