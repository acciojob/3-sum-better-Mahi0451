function threeSum(arr) {
// write your code here
 let res=[]; 
	nums.sort((a,b)=>(a-b))
    for(let i=0;i<nums.length-2;i++){
        //to remove duplicates
        if( i>0 && nums[i]===nums[i-1]) continue;

        let j=i+1; let k=nums.length-1;
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum===0){
                res.push([nums[i],nums[j],nums[k]]);
                //stop duplicates
                while(nums[j]===nums[j+1]) j++;//or else we end up getting a duplicate triplet
                while(nums[k]===nums[k+1]) k--;//or else we end up getting a duplicate triplet
                j++;//even if they aren't equal we still incremenet j
                k--;//even if they aren't equal we still decrement k
            }
            else if(sum<0){ //we increase the value of j
                j++;
            }
            else{//if the sum value is more than zero we decrease the value of k
                k--;
            }
        }
    }
    return res;
};
  


module.exports = threeSum;
