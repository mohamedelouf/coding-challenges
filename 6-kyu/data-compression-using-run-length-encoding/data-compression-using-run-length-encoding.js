function encode(input) {
 let result = "";
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
        count++;
    } else {
        result += count + input[i];
        count = 1;
    }
}
    return result;
}
​
function decode(input) {
  let result="";
  let count='';      
  for(let i = 0 ; i<input.length ; i++){
      if(!isNaN(input[i])){
        count+=input[i];  
      }  
      else {
        let val=Number(count);