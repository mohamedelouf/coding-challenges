function loneliest(number) {
let text=String(number).split('').map(Number);
let rightSum =0;let leftSum=0;let lonelinessVal1=Infinity;let lonelinessVal=Infinity;let count=0;
if(text.includes(1)){
for(let i=0; i<text.length;i++){
    for(let j=1;j<=text[i];j++){
     if(i+j<text.length) {  
      rightSum +=text[i+j] }}
    for(let x=i; x>0;x--){
      if(count<text[i]){
        leftSum += text[x-1]
        count++ }
      else{
        break; }}
if(text[i]===1){
    if(rightSum+leftSum<lonelinessVal1)
        lonelinessVal1=rightSum+leftSum; }
  else{
  if(rightSum+leftSum<lonelinessVal)
        lonelinessVal=rightSum+leftSum; }    
​
    leftSum=0;rightSum=0;count=0;}
​
if(lonelinessVal1<=lonelinessVal){
return true;
}else{
    return false;}}
else{
return false;}}