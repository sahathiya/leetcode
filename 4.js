//137

var singleNumber = function(nums) {
    const sort=nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i+=3){
        if(sort[i]!==sort[i+1]){
            return sort[i]
        }
    }

};

nums = [2,2,3,2]
console.log(singleNumber(nums))