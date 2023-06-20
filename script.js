function threeSum(nums) {
// write your code here
let obj={}
    nums=nums.sort((a,b)=>a-b)
    // console.log(nums)
    for(let start=0;start<nums.length;start++){
        let right=nums.length-1
        let left=start+1
        while(left<right){
            if(nums[left]+nums[right]+nums[start]==0){
                // console.log(start,left,right)
                // arr.push([nums[start],nums[left],nums[right]])
                obj[[nums[start],nums[left],nums[right]]]=[nums[start],nums[left],nums[right]]
                left++
                right--
            }else if(nums[left]+nums[right]+nums[start]>0){
                right--
            }else if(nums[left]+nums[right]+nums[start]<0){
                left++
            }
        }
    }
     return (Object.values(obj))
};
  


module.exports = threeSum;
