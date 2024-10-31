//448
var findDisappearedNumbers = function(nums) {
    const expectedset=new Set()
    for(i=1;i<=nums.length;i++){
        expectedset.add(i)
    }
    const actualset=new Set(nums)
    const filterelements=[...expectedset].filter(item=>!actualset.has(item))
        return filterelements
    };
const nums=[4,3,2,7,8,2,3,1]
    console.log(findDisappearedNumbers(nums));
    