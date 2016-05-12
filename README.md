<big><h1 align="center">raabbajam-calculator</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/raabbajam-calculator">
    <img src="https://img.shields.io/npm/v/raabbajam-calculator.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/raabbajam/raabbajam-calculator">
    <img src="https://img.shields.io/coveralls/raabbajam/raabbajam-calculator.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/raabbajam/raabbajam-calculator">
    <img src="https://img.shields.io/travis/raabbajam/raabbajam-calculator.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/raabbajam-calculator">
    <img src="http://img.shields.io/npm/dm/raabbajam-calculator.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/raabbajam/raabbajam-calculator.svg">
    <img src="https://david-dm.org/raabbajam/raabbajam-calculator.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/raabbajam/raabbajam-calculator/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/raabbajam-calculator.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
Calculate infix expression of number and operator
</big></p>


## Install

```sh
npm i -S raabbajam-calculator
```

## Usage

```js
import calculate from 'raabbajam-calculator';

const text = '5 + ((1 + 2) * 4) - 3';
const result = calculate(text);
const expectedResult = 14;
assert.equal(result, expectedResult, 'return result');
```

## License

MIT © [Raabb Ajam](http://github.com/raabbajam)

[npm-url]: https://npmjs.org/package/raabbajam-calculator
[npm-image]: https://img.shields.io/npm/v/raabbajam-calculator.svg?style=flat-square

[travis-url]: https://travis-ci.org/raabbajam/raabbajam-calculator
[travis-image]: https://img.shields.io/travis/raabbajam/raabbajam-calculator.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/raabbajam/raabbajam-calculator
[coveralls-image]: https://img.shields.io/coveralls/raabbajam/raabbajam-calculator.svg?style=flat-square

[depstat-url]: https://david-dm.org/raabbajam/raabbajam-calculator
[depstat-image]: https://david-dm.org/raabbajam/raabbajam-calculator.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/raabbajam-calculator.svg?style=flat-square
