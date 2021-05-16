// integer-frame-comparisons.js
const { ZERO } = require('./integer-frames.js');

/*
 * isInteger
 * Returns true if the frame represents some integer, false if not.
 * IMPORTANT: We should not expose this directly, but write wrappers for it.
 *
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @param  {IntegerFrame} integerFrame
 *         Valid Frame of OCR data representing our integer. We compare the input frame
 *         against this valid frame..
 * @return {Boolean}
 *         Returns true if our OCR equals validFrame
 */
function isInteger(frame, integerFrame) {
    return JSON.stringify(frame) === JSON.stringify(integerFrame)
}

/*
 * isZero
 * Returns true if the frame represents the integer 0, false if not.
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals ZERO
 */
function isZero(frame) {
    return isInteger(frame, ZERO);
}


module.exports = {
    isZero,
};
