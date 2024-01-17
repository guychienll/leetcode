# VALID PALINDROME

<code style="color:white; background:green"> SUCCESS </code>

## Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

> Input: s = "A man, a plan, a canal: Panama"
> Output: true
> Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

> Input: s = "race a car"
> Output: false
> Explanation: "raceacar" is not a palindrome.

Example 3:

> Input: s = " "
> Output: true
> Explanation: s is an empty string "" after removing non-alphanumeric characters.
> Since an empty string reads the same forward and backward, it is a palindrome.

## Topics

`Two Pointers` `String`

## tags

Difficulty : `Easy`  
Time Taken : `7 mins`

## Submission

```javascript
const isPalindrome = (s) => {
    const _s = s.replace(/(\s|[^\w]|_)/g, '');

    return (
        _s.toLocaleLowerCase() ===
        _s.toLocaleLowerCase().split('').reverse().join('')
    );
};
```

## Solution

```javascript
const isASCII = (char) => {
    return /^[a-zA-Z0-9]$/.test(char);
};

const isPalindrome = (s) => {
    const _s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // 看到非 ASCII 就看下個指標
        if (!isASCII(_s[left])) {
            left++;
            continue;
        }

        // 看到非 ASCII 就看下個指標
        if (!isASCII(_s[right])) {
            right--;
            continue;
        }

        // 皆是 ASCII 就比較左右是否是同字元，比到左右重疊
        if (_s[left] === _s[right]) {
            left++;
            right--;
            continue;
        }

        // 如果當中有任一沒有相同就會跳出迴圈，回傳 false
        return false;
    }

    return true;
};
```
