function findEvenIndex(arr) {
let rigthtSum=0;
let leftSum=0;
for(let i= 0; i<arr.length ;i++){
    if(i===0){
        let sum1=0;
        for(let j=1;j<arr.length;j++){
          sum1+=arr[j];}
        if(sum1===0){
            return i;}}
    else{
        for(let x=i+1;x<arr.length;x++){
            rigthtSum +=arr[x];  }
        for(let m=i-1;m>=0;m--){
            leftSum +=arr[m];  }
  
    if(rigthtSum===leftSum){
         return i;}       
        rigthtSum=0;
        leftSum=0;}}
    return -1;}