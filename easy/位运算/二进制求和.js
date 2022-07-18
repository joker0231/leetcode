/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = []
    let temp = 0
    for(i = a.length-1,j = b.length-1;i>=0 || j>=0;i--,j--){
        let num1 = a[i] ? parseInt(a[i]) : 0
        let num2 = b[j] ? parseInt(b[j]) : 0
        let sum = num1+num2+temp
        if(sum>=2){
            temp = 1
            str = sum-2
            result.unshift(str.toString())
        }else{
            result.unshift(sum.toString())
            temp = 0
        }
    }
    if(temp!=0){
        result.unshift("1")
    }
    return result.join('')
};

addBinary("101111","10")