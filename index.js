import offset from 'global-offset';

export default function isPointerInside(el, { pageX, pageY }) {
  const { left, top } = offset(el);
  const { offsetWidth, offsetHeight } = el;

  return pageX >= left && pageX <= left + offsetWidth &&
    pageY >= top && pageY <= top + offsetHeight;
}
