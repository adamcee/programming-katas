const { ZERO } = require('./valid-frames.js');

/*
 * Returns true if the frame represents some valid frame, false if not.
 * IMPORTANT: We should not expose this directly, but write wrappers for it.
 *
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @param  {Frame} validFrame
 *         Valid Frame of OCR data representing some desired character, such as an integer. We compare the input frame
 *         against this valid frame..
 * @return {Boolean}
 *         Returns true if our OCR equals validFrame
 */
function isValidFrameFor(frame, validFrame) {
    return JSON.stringify(frame) === JSON.stringify(validFrame)
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
    return isValidFrameFor(frame, ZERO);
}


module.exports = {
    isZero,
};
