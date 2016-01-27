import test from 'ava';
import isPointerInside from './index.es5';

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

test('should return true if inside the parent', t => {
  const pointer = {pageX: 75, pageY: 75};
  t.true(isPointerInside(parent, pointer));
  t.false(isPointerInside(children, pointer));
});

test('should return true if inside the children', t => {
  const pointer = {pageX: 175, pageY: 175};
  t.false(isPointerInside(parent, pointer));
  t.true(isPointerInside(children, pointer));
});

test('should return true if inside the both', t => {
  const pointer = {pageX: 125, pageY: 125};
  t.true(isPointerInside(parent, pointer));
  t.true(isPointerInside(children, pointer));
});

test('should return false if outside', t => {
  const pointer = {pageX: 0, pageY: 0};
  t.false(isPointerInside(parent, pointer));
  t.false(isPointerInside(children, pointer));
});
