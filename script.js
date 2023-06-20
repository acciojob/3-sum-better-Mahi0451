function threeSum(arr) {
// write your code here
 let res=[]; 
	arr.sort((a,b)=>(a-b))
    for(let i=0;i<arr.length-2;i++){
        //to remove duplicates
        if( i>0 && arr[i]===arr[i-1]) continue;

        let j=i+1; let k=arr.length-1;
        while(j<k){
            let sum = arr[i] + arr[j] + arr[k];
            if(sum===0){
                res.push([arr[i],arr[j],arr[k]]);
                //stop duplicates
                while(arr[j]===arr[j+1]) j++;//or else we end up getting a duplicate triplet
                while(arr[k]===arr[k+1]) k--;//or else we end up getting a duplicate triplet
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
