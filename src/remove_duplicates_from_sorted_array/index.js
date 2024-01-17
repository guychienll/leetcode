/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const arr = [];
    let count = 0;
    for (const num of nums) {
        if (arr.includes(num)) {
            count++;
        } else {
            arr.push(num);
        }
    }

    for (let i = 0; i < count; i++) {
        arr.push('_');
    }

    nums.splice(0, nums.length, ...arr);
};

export default removeDuplicates;
