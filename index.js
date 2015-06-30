
/**
 * Module dependencies
 */

import offset from 'global-offset';

/**
 * Expose detection
 *
 * @param {Element} el
 * @param {Object} event
 * @return {Boolean}
 * @api public
 */

export default (el, {pageX, pageY}) => {
  const {left, top} = offset(el);
  const {offsetWidth, offsetHeight} = el;
  return pageX >= left && pageX <= left + offsetWidth &&
    pageY >= top && pageY <= top + offsetHeight;
};
