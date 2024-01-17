# TWO SUM

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

> Input: nums = [2,7,11,15], target = 9
> Output: [0,1]
> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

> Input: nums = [3,2,4], target = 6
> Output: [1,2]

Example 3:

> Input: nums = [3,3], target = 6
> Output: [0,1]

Constraints:

-   2 <= nums.length <= 104
-   -109 <= nums[i] <= 109
-   -109 <= target <= 109
-   Only one valid answer exists.

## Topics

`Array` `Hash Table`

## tags

Difficulty : `Easy`  
Time Taken : `5 mins`

## Submission

```javascript
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
```

**NOTE**
原先使用兩回圈時間複雜度是 O(n^2)
後續使用 hash table 可以將時間複雜度縮減為 O(n)

```javascript
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
```

## Solution

```javascript
var twoSum = function (nums, target) {
    const numToIndex = new Map(); // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the Map
        numToIndex.set(nums[i], i);
    }

    throw new Error('No solution found');
};
```
