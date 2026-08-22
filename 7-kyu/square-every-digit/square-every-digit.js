function squareDigits(num){
let result="";
let str = num.toString();
let squer=0;
​
for(let i=0;i<str.length;i++ ){
  let index=str[i];
  let squer= (Number(index)**2);
  result+=squer;
}
let final=Number(result);
return final;
}