const {
    ONE,
    TWO,
    THREE,
    ZERO,
} = require('./valid-frames.js');

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
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals ZERO
 */
function isZero(frame) {
    return isValidFrameFor(frame, ZERO);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals ONE
 */
function isOne(frame) {
    return isValidFrameFor(frame, ONE);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals TWO
 */
function isTwo(frame) {
    return isValidFrameFor(frame, TWO);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals THREE
 */
function isThree(frame) {
    return isValidFrameFor(frame, THREE);
}

module.exports = {
    isZero,
    isOne,
    isTwo,
    isThree,
};
