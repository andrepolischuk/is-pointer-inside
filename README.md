# is-pointer-inside [![Build Status][travis-image]][travis-url]

> Check if pointer is inside the element

## Install

```sh
npm install --save is-pointer-inside
```

## Usage

```js
import isPointerInside from 'is-pointer-inside';

document.addEventListener('mousemove', event => {
  const el = document.querySelector('.hello');
  isPointerInside(el, event); // true if pointer inside the el
}, false);
```

## API

### isPointerInside(element, event)

Return true if pointer inside the `element`.

#### element

Type: `element`

DOM element.

#### event

Type: `object`

Pointer event object with `pageX` and `pageY` props.

## Related

* [coordinates][coordinates] — calculate relative coordinates
* [global-offset][global-offset] — element global offset
* [is-pointer-near][is-pointer-near] — check if pointer is near the element

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-pointer-inside
[travis-image]: https://travis-ci.org/andrepolischuk/is-pointer-inside.svg?branch=master

[coordinates]: https://github.com/andrepolischuk/coordinates
[global-offset]: https://github.com/andrepolischuk/global-offset
[is-pointer-near]: https://github.com/andrepolischuk/is-pointer-near
