# colorkind

_Simple, colorblind-friendly color palettes for data visualization._

[![npm size](https://badges.formidable.com/size/npm/colorkind/dist/index.js?gzip=true)](https://www.runpkg.com/?colorkind)
[![npm version](https://badge.fury.io/js/colorkind.svg)](https://www.npmjs.com/package/colorkind)

## Usage

Colorkind exports a default pallette of 7 colors (Paul Tol's 'bright' pallette). You can also choose the number of colors you need, between 2 and 12, or by pallette name. Colorkind is designed to be _very_ light, just exporting the colors themselves; hence, each pallette is a separate import.

```js
const pallette = require("colorkind"); // ["#4477AA", "#EE6677", ... ] default 7-color pallette
// import by number of colors
const pallette = require("colorkind/dist/2"); // [ "#004488", "#DDAA33" ] 2-color pallette
const pallette = require("colorkind/dist/12"); // [ "#332288", "#117733", ... ] 12-color pallette
// import by pallette name
const pallette = require("colorkind/dist/tol-light"); // [ "#77AADD", "#EE8866", ... ] Paul Tol's 'light' pallette
```

## Available pallettes

| Import path                              | Colors | Description                         |
| ---------------------------------------- | ------ | ----------------------------------- |
| `colorkind`                              | 7      | Paul Tol's 'bright' theme           |
| `colorkind/dist/2`                       | 2      | Paul Tol's 'high contrast' theme    |
| `colorkind/dist/3`                       | 3      | Paul Tol's 'high contrast' theme    |
| `colorkind/dist/4`                       | 4      | Paul Tol's 'bright' theme           |
| `colorkind/dist/5`                       | 5      | Paul Tol's 'bright' theme           |
| `colorkind/dist/6`                       | 6      | Paul Tol's 'bright' theme           |
| `colorkind/dist/7`                       | 7      | Paul Tol's 'bright' theme           |
| `colorkind/dist/8`                       | 8      | Paul Tol's 'light' theme            |
| `colorkind/dist/9`                       | 9      | Paul Tol's 'light' theme            |
| `colorkind/dist/10`                      | 10     | Paul Tol's 'muted' theme            |
| `colorkind/dist/11`                      | 11     | Paul Tol's legacy qualitative theme |
| `colorkind/dist/12`                      | 12     | Paul Tol's legacy qualitative theme |
| `colorkind/dist/tol-high-contrast`       | 3      | Paul Tol's 'high contrast' theme    |
| `colorkind/dist/tol-bright`              | 7      | Paul Tol's 'bright' theme           |
| `colorkind/dist/tol-light`               | 9      | Paul Tol's 'light' theme            |
| `colorkind/dist/tol-muted`               | 10     | Paul Tol's 'muted' theme            |
| `colorkind/dist/tol-legacy`              | 12     | Paul Tol's legacy qualitative theme |
| `colorkind/dist/tol-discrete-rainbow/2`  | 2      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/3`  | 3      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/4`  | 4      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/5`  | 5      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/6`  | 6      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/7`  | 7      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/8`  | 8      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/9`  | 9      | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/10` | 10     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/11` | 11     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/12` | 12     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/13` | 13     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/14` | 14     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/15` | 15     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/16` | 16     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/17` | 17     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/18` | 18     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/19` | 19     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/20` | 20     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/21` | 21     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/22` | 22     | Paul Tol's 'discrete rainbow' theme |
| `colorkind/dist/tol-discrete-rainbow/23` | 23     | Paul Tol's 'discrete rainbow' theme |
