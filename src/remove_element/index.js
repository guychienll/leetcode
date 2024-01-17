// const removeElement = (nums, val) => {
//     let count = nums.length;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums[i] = '_';
//             count--;
//         }
//     }

//     nums.sort();
//     return count;
// };

function removeElement(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }

    console.log(nums);
    return count;
}

export default removeElement;
