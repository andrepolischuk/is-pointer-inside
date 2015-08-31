import isPointerInside from './index';
import assert from 'assert';

const parent = {
  offsetLeft: 50,
  offsetTop: 50,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: null
};

const children = {
  offsetLeft: 50,
  offsetTop: 50,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: parent
};

it('should return true if inside the parent', () => {
  const pointer = {pageX: 75, pageY: 75};
  assert(isPointerInside(parent, pointer) === true);
  assert(isPointerInside(children, pointer) === false);
});

it('should return true if inside the children', () => {
  const pointer = {pageX: 175, pageY: 175};
  assert(isPointerInside(parent, pointer) === false);
  assert(isPointerInside(children, pointer) === true);
});

it('should return true if inside the both', () => {
  const pointer = {pageX: 125, pageY: 125};
  assert(isPointerInside(parent, pointer) === true);
  assert(isPointerInside(children, pointer) === true);
});

it('should return false if outside', () => {
  const pointer = {pageX: 0, pageY: 0};
  assert(isPointerInside(parent, pointer) === false);
  assert(isPointerInside(children, pointer) === false);
});
