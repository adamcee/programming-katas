const {
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
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
    console.log('frame:');
    console.log(frame);
    console.log('validFrame:');
    console.log(validFrame);
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


/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals FOUR
 */
function isFour(frame) {
    return isValidFrameFor(frame, FOUR);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals FIVE
 */
function isFive(frame) {
    return isValidFrameFor(frame, FIVE);
}


/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals SIX
 */
function isSix(frame) {
    const isValid = isValidFrameFor(frame, SIX);
    if (!isValid) {
        // do our stuff
        const isEight = isEight(frame);
    }
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals SEVEN
 */
function isSeven(frame) {
    return isValidFrameFor(frame, SEVEN);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals EIGHT
 */
function isEight(frame) {
    return isValidFrameFor(frame, EIGHT);
}

/*
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals NINE
 */
function isNine(frame) {
    return isValidFrameFor(frame, NINE);
}

module.exports = {
    isZero,
    isOne,
    isTwo,
    isThree,
    isFour,
    isFive,
    isSix,
    isSeven,
    isEight,
    isNine,
};
