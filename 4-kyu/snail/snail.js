function snail(array) {
  let topRow= 0;
let bottomRow = array.length-1;
let leftCol=0;
let rightCol=array[0].length-1;
const result=[];
​
if(array.length === 0 || array[0].length === 0){
  return []; 
}
​
while(leftCol<=rightCol && topRow <= bottomRow){
// from left to right
  for(let col = leftCol; col<=rightCol; col++){
​
      result.push(array[topRow][col]);
  }
​
   topRow++;
​
   //from top to down
   for(let row=topRow;row <=bottomRow ; row++){
       result.push(array[row][rightCol])