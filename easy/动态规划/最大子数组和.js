/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }
    let pre = 0, maxnum = nums[0]
    nums.forEach((x)=>{
        pre = Math.max(x,pre+x)
        maxnum = Math.max(maxnum,pre)
    })
    return maxnum
};