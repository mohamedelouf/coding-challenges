function dirReduc(arr){
let ofarr={
  NORTH:"SOUTH",
  north:"south",
  WEST:"EAST",
  west:"east",
  SOUTH:"NORTH",
  south:"north",
  EAST:"WEST",
  east:"west"
}
//solution one 
/*
for(let i=0; i<arr.length;i++){
  if(ofarr[arr[i]] === arr[i+1]){
    arr.splice(i,2);
     i=-1;
  }
}
  return arr;*/
//solution two
​
let stack=[];