// const twoSum = (nums, target) => {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         output = output.concat([i, j]);
//       }
//     }
//   }
//   return output;
// };

const twoSum = (nums, target) => {
  let output = [];
  let isFound = false;
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const remains = target - nums[i];
    const targetIndex = hashMap.get(remains);
    if (i !== targetIndex && !!targetIndex && !isFound) {
      output = output.concat([i, targetIndex]);
      isFound = true;
    }
  }
  return output;
};

export default twoSum;
