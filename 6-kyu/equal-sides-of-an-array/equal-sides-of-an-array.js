function findEvenIndex(arr) {
 let totalSum=0;
 let rightSum=0;
 let leftSum=0;
 for(let num of arr){  
    totalSum += num;
 }
 for(let i=0;i<arr.length;i++){
​
     rightSum=totalSum-leftSum-arr[i];
     if(rightSum===leftSum){
       return i;
     }
     leftSum += arr[i];
 }
    return -1;}