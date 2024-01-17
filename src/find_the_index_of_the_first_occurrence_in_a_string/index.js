/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const match = haystack.match(needle);

    return match ? match.index : -1;
};

export default strStr;
