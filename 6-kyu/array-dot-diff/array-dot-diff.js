function arrayDiff(a, b) {
 let result=[];
for(let i =0 ; i<a.length; i++){
  let found=false;
  for(let j=0; j<b.length; j++){
    if(a[i] === b[j]){
       found =true;
       break; }}
  if(!found){
    result.push(a[i])}}
    
  return result;
  
}