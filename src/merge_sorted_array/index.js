const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n);

    if (m + n === 0) {
        nums1.splice(0, nums1.length);
        return;
    }

    if (m === 0) {
        nums1.splice(0, nums1.length, ...nums2);
        return;
    }

    if (m + n === 1) {
        nums1.splice(0, nums1.length, ...[...nums1, ...nums2]);
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] > nums1[j] && nums2[i] < nums1[j + 2]) {
                nums1.splice(j + 1, 0, nums2[i]);
                break;
            } else if (nums2[i] < nums1[j]) {
                nums1.splice(0, 0, nums2[i]);
                break;
            } else {
                nums1.splice(nums1.length, 0, nums2[i]);
                break;
            }
        }
    }

    nums1.sort((a, b) => a - b);
};

export default merge;
