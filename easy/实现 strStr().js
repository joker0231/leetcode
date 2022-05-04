/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let i
    if(needle.length>haystack.length){
        return -1
    }
    for(i = 0;i<haystack.length;i++){
        for(j = 0;j<needle.length;j++){
            if(j == needle.length-1&&haystack[i+j] == needle[j]){
                return i
            }else if(haystack[i+j]!=needle[j]){
                break
            }
        }
    }
    return -1
};