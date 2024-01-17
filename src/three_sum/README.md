# THREE SUM

<code style="color:white; background:red"> FAILED </code>

## Description

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

> Input: nums = [-1,0,1,2,-1,-4]
> Output: [[-1,-1,2],[-1,0,1]]
> Explanation:
> nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
> nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
> nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
> The distinct triplets are [-1,0,1] and [-1,-1,2].
> Notice that the order of the output and the order of the triplets does not matter.

Example 2:

> Input: nums = [0,1,1]
> Output: []
> Explanation: The only possible triplet does not sum up to 0.

Example 3:

> Input: nums = [0,0,0]
> Output: [[0,0,0]]
> Explanation: The only possible triplet sums up to 0.

Constraints:

-   3 <= nums.length <= 3000
-   -105 <= nums[i] <= 105

## Topics

`Array` `Two Pointers` `Sorting`

## tags

Difficulty : `Medium`  
Time Taken : `Over 30 mins`

## Submission

```javascript
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
```

**NOTE**
Over Time Limit 時間複雜度 O(n^3) 跑不過測試

## Solution

```javascript
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let answer = [];

    if (nums.length < 3) {
        return answer;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let low = i + 1;
        let high = nums.length - 1;
        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high];
            if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++;
            } else {
                answer.push([nums[i], nums[low], nums[high]]);
                let lastLowOccurrence = nums[low];
                let lastHighOccurrence = nums[high];

                while (low < high && nums[low] === lastLowOccurrence) {
                    low++;
                }

                while (low < high && nums[high] === lastHighOccurrence) {
                    high--;
                }
            }
        }
    }
    return answer;
};
```
