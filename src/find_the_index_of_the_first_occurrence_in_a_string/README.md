# FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING

<code style="color:white; background:green"> SUCCESS </code>

## Description

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

> Input: haystack = "sadbutsad", needle = "sad"
> Output: 0
> Explanation: "sad" occurs at index 0 and 6.
> The first occurrence is at index 0, so we return 0.

Example 2:

> Input: haystack = "leetcode", needle = "leeto"
> Output: -1
> Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

## Topics

`String` `Two Pointers` `String Matching`

## tags

Difficulty : `Easy`  
Time Taken : `2 mins`

## Submission

```javascript
var strStr = function (haystack, needle) {
    const match = haystack.match(needle);

    return match ? match.index : -1;
};
```

```javascript
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};
```

> **NOTE**  
> 可以理解為 solution 幾乎就等於 indexOf 的實作了
> 兩個 pointer i , j 快慢指標題目

## Solution

```javascript
var strStr = function (haystack, needle) {
    let result = -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] !== needle[0]) {
            continue;
        }

        let found = true;

        for (let j = 1; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            result = i;
            break;
        }
    }

    return result;
};
```
