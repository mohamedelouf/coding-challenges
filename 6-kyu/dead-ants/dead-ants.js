deadAntCount = function(ants) {
  
let result ="";
let deadLetter="";
  
  if (!ants ) {
    return 0;
}
for(let i=0; i<ants.length;i++){
  let str= ants.slice(i,i+3);
   if(str==="ant"){
    i+=2;
   }
   else {
    deadLetter+=ants[i];
   }
}
​
result = deadLetter.replace(/[. ]/g, "");
  
let a = 0;
let n = 0;
let t = 0;