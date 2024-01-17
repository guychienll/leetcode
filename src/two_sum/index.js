const twoSum = (nums, target) => {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                output = output.concat([i, j]);
            }
        }
    }
    return output;
};

export default twoSum;
