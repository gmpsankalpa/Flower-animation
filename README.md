# Peonies for Jenny

A little surprise in three screens: a personal greeting with falling petals, a playful question, and three blush pink peonies blooming among animated grass.

## Preview

Open `index.html` in a browser, or run a local server from this directory:

```sh
python3 -m http.server 8077 --bind 127.0.0.1
```

Visit http://127.0.0.1:8077. No application dependencies or build step are needed to view the site.

## Experience

- “Hi Jenny!” → **click here** opens the question.
- Both **Aidan** answers open the garden. **No one** opens a popup; close it with **OK** or Escape to try again.
- Each peony has 36 petals in four overlapping rings, unfolding from the outside inward. The original grass and foliage grow and sway around them.
- The experience is silent. Reduced-motion preferences disable falling petals, use gentler petal unfolding, and limit garden movement to one cycle. The grass and flowers still grow into view. Use **Replay bloom** to watch the reveal again.
- The layout supports phones and desktops. Opening `FLORES.html` directly starts the garden reveal.

## Editing

The greeting and questionnaire use `index.html`, `css/style.css`, `css/petals.css`, and `js/greeting.js`. The garden uses `FLORES.html`, `scss/main.scss`, and `js/main.js`.

Garden styles are authored in SCSS. After editing them, regenerate the committed CSS and source map with:

```sh
npx --yes sass scss/main.scss css/main.css
```

The petal arrangement and unfolding delays are defined in `js/main.js`. Keep animation transforms on the petals separate from the placement transforms so unfolding preserves the layered bloom.

## Credits

Adapted from [gmpsankalpa/Flower-animation](https://github.com/gmpsankalpa/Flower-animation). Original grass and foliage animations retained. See [LICENSE](./LICENSE).
