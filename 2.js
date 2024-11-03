//268


var missingNumber = function(nums) {
    const a=new Set()
    for(i=0;i<=nums.length;i++){
        a.add(i)
    }
    const b=new Set(nums)
   const c= [...a].filter(item=>!b.has(item))
   
   const missingElement = c[c.length - 1];
   return missingElement
};

const nums=[3,0,1]
console.log(missingNumber(nums))