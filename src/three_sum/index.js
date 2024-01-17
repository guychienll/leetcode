// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
const threeSum = (nums) => {
    const target = 0;
    const output = {};

    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    const arr = [nums[i], nums[j], nums[k]];
                    output[arr] = arr;
                }
            }
        }
    }

    return Object.values(output);
};

export default threeSum;
