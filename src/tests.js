const {
    ONE,
    ZERO,
} = require('./valid-frames.js');

const {
    PIPE,
    SPACE,
    UNDERSCORE
} = require('./ocr-characters.js');

const {
    isOne,
    isZero,
} = require('./frame-comparisons.js');

/**
 * TESTS
 * TODO: Once prototyping is done write real unit tests with a test runner/framework. For now this is fine.
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

testComparisonFunction(
    isOne,
    // good
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [SPACE, SPACE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],

);
