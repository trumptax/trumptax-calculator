# Trumptax Calculator

[![npm][npm-image]][npm-url]

This is a tiny module to calculate the current tax burden of Donald Trump's
lifestyle, such as maintaining a residence in New York City, and regular trips
to Mar-a-Lago.

## Usage:

```js
import { calculate, usdollars } from 'trumptax-calculator';

// Print the tax burden as of right now:
console.log(usdollars(calculate()));

// Print the tax burden as of a specific date:
console.log(usdollars(calculate(new Date('Jan 21 2017 12:00:00 EST'))));
```

[npm-image]: https://img.shields.io/npm/v/trumptax-calculator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trumptax-calculator
