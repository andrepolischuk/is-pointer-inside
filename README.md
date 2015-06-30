# is-pointer-inside [![Build Status][travis-image]][travis-url]

  > Check if pointer is inside the element

## Install

```sh
npm install --save is-pointer-inside
```

## Usage

```js
var isPointerInside = require('is-pointer-inside');
var el = document.querySelector('.hello');

document.addEventListener('mousemove', function(event) {
  isPointerInside(el, event); // true if pointer inside the el
}, false);
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-pointer-inside
[travis-image]: https://travis-ci.org/andrepolischuk/is-pointer-inside.svg?branch=master
