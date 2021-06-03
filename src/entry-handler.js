const NUM_FRAMES_IN_ENTRY = 9;

/**
 * THIS FUNCTION HAS DESTRUCTIVE SIDE EFFECTS on the `entry` param.
 *
 * @param {Entry} entry
 * @return {Frame}
 *         Get a frame (3x3 array of characters) from our rows of data
 */
function spliceLeadingFrame(entry) {
    return entry.map(row => row.splice(0,3));
}

function chunkEntryIntoFrames(entry) {
    // We don't need the blank line at the end of an entry for anything, get rid of it.
    entry.pop();

    const frames = [];

    for(let i = 1; i <= NUM_FRAMES_IN_ENTRY; i++) {
        const frame = spliceLeadingFrame(entry);
        frames.push(frame);
    }

    return frames;
}

module.exports = {
    chunkEntryIntoFrames,
}
