# Ocean of Books

- [x] Author: [Mejanur Rahman](https://www.github.com/mrmezan06)

- [x] Version: 1.0.0

- [x] License: MIT

## Description

This is a simple web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the MongoDB database to store the reading list. The application is built using the MERN stack. The application is deployed on Heroku. The application is live at [https://ocean-book.herokuapp.com/](https://ocean-book.herokuapp.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Utility Function For Number Conversion

- [x] Built-in Library

```js
Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
}).format(2500);
```

- [x] Custom Function

```js
const formatCash = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

console.log(formatCash(1235000));
```

- [x] Seperated with commas

```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

- [x] Seperated with commas and test

```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function test(x, expect) {
  const result = numberWithCommas(x);
  const pass = result === expect;
  console.log(`${pass ? "✓" : "ERROR ====>"} ${x} => ${result}`);
  return pass;
}

let failures = 0;
failures += !test(0, "0");
failures += !test(100, "100");
failures += !test(1000, "1,000");
failures += !test(10000, "10,000");
failures += !test(100000, "100,000");
failures += !test(1000000, "1,000,000");
failures += !test(10000000, "10,000,000");
if (failures) {
  console.log(`${failures} test(s) failed`);
} else {
  console.log("All tests passed");
}
```

```css
.as-console-wrapper {
  max-height: 100% !important;
}
```

## Installation

To install the application follow the instructions below:

```bash
git clone
cd client
npm install
```

## Usage

To use the application follow the instructions below:

```bash
npm start
```

## Contributing

If you would like to contribute it, you can follow these guidelines for how to do so. Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

- [x] (This README was generated with ❤️ by [readme-md-generator]()
