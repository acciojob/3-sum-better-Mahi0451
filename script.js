function threeSum(arr) {
// write your code here
 let start = i+1,end = arr.length -1;
 while(start < end){
       const sum = arr[i]+arr[start]+arr[end];
     if(sum === 0){
         ans.push([arr[i],arr[start],arr[end]]);
         start++;
         end--;
         while(start<end && arr[start]===arr[start-1]) start++;
         while(start<end && arr[end]=== arr[end+1])end-=1;
     }
     else if(sum < 0) start++;
     else if(sum>0) end--;
     }
}
return ans;
};	
  


module.exports = threeSum;
