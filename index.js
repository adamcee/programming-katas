const { ZERO } = require('./integer-frames.js');
const {
    PIPE,
    SPACE,
    UNDERSCORE
} = require('./ocr-characters.js');

console.log('hello world'); // TODO - delete


console.log('ZERO IS ', JSON.stringify(ZERO));

/*
 * isInteger
 * Returns true if the frame represents some integer, false if not.
 * NOTE: We should not access this directly, but write wrappers for it.
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

/**
 * TESTS
 * TODO: Once prototyping is done write real unit tests. For now this is fine.
 */

/**
 * isZero()
 */
function testComparisonFunction(comparisonFunction, goodFrame, badFrame) {
    console.log(`${comparisonFunction.name} identifies positive - expect true`, comparisonFunction(goodFrame));
    console.log(`${comparisonFunction.name} identifies negative - expect false`, comparisonFunction(badFrame));
}

testComparisonFunction(
    isZero,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [PIPE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [PIPE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],

);
