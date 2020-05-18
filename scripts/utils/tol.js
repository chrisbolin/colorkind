// colors from
// https://personal.sron.nl/~pault/data/tol_colors.py
// https://personal.sron.nl/~pault/data/colourschemes.pdf

const descriptions = {
  highContrast: "Paul Tol's 'high contrast' theme",
  bright: "Paul Tol's 'bright' theme",
  light: "Paul Tol's 'light' theme",
  muted: "Paul Tol's 'muted' theme",
  legacy: "Paul Tol's legacy qualitative theme",
  discrete: "Paul Tol's 'discrete rainbow' theme",
};

const qualitative = {
  // Tol: "my default colour scheme for qualitative data is the bright scheme"
  bright: [
    "#4477AA",
    "#EE6677",
    "#228833",
    "#CCBB44",
    "#66CCEE",
    "#AA3377",
    "#BBBBBB",
  ],
  highContrast: ["#004488", "#DDAA33", "#BB5566"],
  vibrant: [
    "#EE7733",
    "#0077BB",
    "#33BBEE",
    "#EE3377",
    "#CC3311",
    "#009988",
    "#BBBBBB",
  ],
  muted: [
    "#CC6677",
    "#332288",
    "#DDCC77",
    "#117733",
    "#88CCEE",
    "#882255",
    "#44AA99",
    "#999933",
    "#AA4499",
    "#DDDDDD",
  ],
  light: [
    "#77AADD",
    "#EE8866",
    "#EEDD88",
    "#FFAABB",
    "#99DDFF",
    "#44BB99",
    "#BBCC33",
    "#AAAA00",
    "#DDDDDD",
  ],
  // https://www.r-bloggers.com/the-paul-tol-21-color-salute/
  legacy: [
    "#332288",
    "#117733",
    "#6699cc",
    "#ddcc77",
    "#999933",
    "#cc6677",
    "#aa4466",
    "#882255",
    "#aa4499",
    "#44aa99",
    "#661100",
    "#88ccee",
  ],
};

function makeDiscrete() {
  const colors = [
    "#E8ECFB",
    "#D9CCE3",
    "#D1BBD7",
    "#CAACCB",
    "#BA8DB4",
    "#AE76A3",
    "#AA6F9E",
    "#994F88",
    "#882E72",
    "#1965B0",
    "#437DBF",
    "#5289C7",
    "#6195CF",
    "#7BAFDE",
    "#4EB265",
    "#90C987",
    "#CAE0AB",
    "#F7F056",
    "#F7CB45",
    "#F6C141",
    "#F4A736",
    "#F1932D",
    "#EE8026",
    "#E8601C",
    "#E65518",
    "#DC050C",
    "#A5170E",
    "#72190E",
    "#42150A",
  ];
  const colorIndexesByNumber = [
    [9, 25],
    [9, 17, 25],
    [9, 14, 17, 25],
    [9, 13, 14, 17, 25],
    [9, 13, 14, 16, 17, 25],
    [8, 9, 13, 14, 16, 17, 25],
    [8, 9, 13, 14, 16, 17, 22, 25],
    [8, 9, 13, 14, 16, 17, 22, 25, 27],
    [8, 9, 13, 14, 16, 17, 20, 23, 25, 27],
    [8, 9, 11, 13, 14, 16, 17, 20, 23, 25, 27],
    [2, 5, 8, 9, 11, 13, 14, 16, 17, 20, 23, 25],
    [2, 5, 8, 9, 11, 13, 14, 15, 16, 17, 20, 23, 25],
    [2, 5, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25],
    [2, 5, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 27],
    [2, 4, 6, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 27],
    [2, 4, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 27],
    [2, 4, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 26, 27],
    [1, 3, 4, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 26, 27],
    [1, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25, 26, 27],
    [
      1,
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      20,
      22,
      24,
      25,
      26,
      27,
    ],
    [
      1,
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      20,
      22,
      24,
      25,
      26,
      27,
      28,
    ],
    [
      0,
      1,
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      20,
      22,
      24,
      25,
      26,
      27,
      28,
    ],
  ];

  return colorIndexesByNumber.map((indexes) =>
    indexes.map((index) => colors[index])
  );
}

module.exports = { qualitative, discrete: makeDiscrete(), descriptions };
