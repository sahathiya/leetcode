var isUgly = function(n) {
    if(n<=0)  return false
    const factor=[2,3,5]
    for(let a of factor){
        while(n%a==0){
            n=n/a
        }
    }
    return n===1
};
const n = 14

console.log(isUgly(n))