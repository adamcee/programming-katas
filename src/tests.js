const {
    PIPE,
    SPACE,
    UNDERSCORE
} = require('./ocr-characters.js');

const {
    isZero,
    isOne,
    isTwo,
    isThree,
    isFour,
    isFive,
    isSix,
    //isSeven,
    //isEight,
    //isNine,
} = require('./frame-comparisons.js');

/**
 * TESTS
 * TODO: Once prototyping is done write real unit tests with a test runner/framework. For now this is fine.
 */

/**
 * isZero()
 */
function testComparisonFunction(comparisonFunction, goodFrame, badFrame) {
    console.log('---'); // newline

    // Sanity check - that goodFrame looks as expected, which helps
    // ensure correct data.
    console.log('Test matching on: ');
    goodFrame.forEach(row =>
        console.log(row.join(""))
    );
    console.log('');

    // Expect true
    const goodFrameMatch = comparisonFunction(goodFrame);

    console.log(`${comparisonFunction.name} identifies matching frame: `, goodFrameMatch);

    if (!goodFrameMatch) {
        console.log('-- ERROR -- failed to match correct frame.');
    }

    // Expect false (we flip to true for test readability purposes).
    const badFrameCatch = !comparisonFunction(badFrame);

    console.log(`${comparisonFunction.name} fails identification for non-matching frame: `, badFrameCatch);

    if (!badFrameCatch) {
        console.log('-- ERROR -- failed to catch bad frame.');
    }
}

testComparisonFunction(
    isZero,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [PIPE, SPACE, PIPE],
        [PIPE, UNDERSCORE, PIPE],
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

testComparisonFunction(
    isTwo,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [SPACE, UNDERSCORE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],

);

testComparisonFunction(
    isThree,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [SPACE, UNDERSCORE, PIPE],
        [SPACE, UNDERSCORE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

testComparisonFunction(
    isFour,
    // good
    [
        [SPACE, SPACE, SPACE],
        [PIPE, UNDERSCORE, PIPE],
        [SPACE, SPACE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

testComparisonFunction(
    isFive,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [PIPE, UNDERSCORE, SPACE],
        [SPACE, UNDERSCORE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

testComparisonFunction(
    isSix,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [PIPE, UNDERSCORE, SPACE],
        [PIPE, UNDERSCORE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

/**
testComparisonFunction(
    isSeven,
    // good
    [
        [SPACE, UNDERSCORE, SPACE],
        [PIPE, UNDERSCORE, SPACE],
        [PIPE, UNDERSCORE, PIPE],
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

testComparisonFunction(
    isEight,
    // good
    [
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);

testComparisonFunction(
    isNine,
    // good
    [
    ],
    // bad
    [
        [SPACE, SPACE, SPACE],
        [SPACE, SPACE, PIPE],
        [PIPE, UNDERSCORE, SPACE],
    ],
);
 **/
