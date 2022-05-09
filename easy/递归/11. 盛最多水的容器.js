/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let first = 0,last = height.length-1
    let weight = 0
    while(first != last){
        let y = Math.min(height[first],height[last])
        let x = last - first
        weight = Math.max(weight,x*y)
        if(height[first]<height[last]){
            first++
        }else{
            last--
        }
    }
    return weight
};