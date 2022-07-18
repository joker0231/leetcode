var merge = function(nums1, m, nums2, n) {
    let arr1 = m == 0 ? [] : nums1.slice(0,m)
    let arr2 = n == 0 ? [] : nums2.slice(0,n)
    let result = arr1.concat(arr2).sort((a,b)=>a-b)
    return result
};

merge(nums1 = [0], m = 0, nums2 = [1], n = 1)