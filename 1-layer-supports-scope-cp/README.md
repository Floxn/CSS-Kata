# Coding Kata
## Setup
1. `npm i`
2. `npm run dev`

## Ziel vom Coding Kata
Ziel ist es neue CSS Techniken zu lernen und erste Erfahrungen damit zu sammeln.

## Aufgaben
1. Arbeite mit Custom Properties und definiere sie mit @property 
    * definiere die Custom Properties in `src/_properties.css`
    * definiere eine CP für: 
      * border-size
      * border-color
      * border-style
      * padding-size
      * margin-size
      * background-color
      * font-color
    * Benutze die definierten Custom Properties in der `src/components/album/index.jsx` Komponente
    * Die zweite Liste von `.albums` soll aus nur 3 Spalten bestehen.
    * **NOCH IRGENDWAS MIT VERERBUNG ALS AUFGABE**
2. @scope: Kopiere die Album Komponente und verwende @scope um den Style nur auf die Album Komponente anzuwenden.
   * Verwende @scope in der .css Datei der Album Komponente
     * gib dem ersten img eine farbige outline
     * gib dem zweiten img eine andere farbige outline
     * gib nur der ersten `h2` eine Farbe
   * Verwende @scope in der .jsx als style der Album Komponente und gib jeder `h2` eine random Farbe `${colors[Math.floor(Math.random() * colors.length)]`
   * Wo ist nun der Unterschied zwischen den beiden Varianten?
3. @Layer: **HIER FEHLT MIR DIE IDEE ZU EINER AUFGABE**
   * importiere die `src/_layer.css` in die `src/App.jsx` und schau was passiert
4. @supports: Erstelle ein einfaches Carousel mit Hilfe der aktuellen Möglichkeiten in Chrome 135 ([Doku hier](https://developer.chrome.com/blog/carousels-with-css?ref=dailydev)). Das Carousel soll aber nur bei Browsern angewendet werden, das diese Funktionaltät unterstützt. Für alle anderen Browser soll es ein Fallback geben. Das Fallback soll einfach ein Grid er Items mit 4 Spalten sein.
   * benutze die vorbereite Komponente `Carousel` in `src/components/Carousel.jsx`

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
