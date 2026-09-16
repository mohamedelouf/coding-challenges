function digits(num) {
 let result=[];
let text= String(num);
​
for(let i=0; i<text.length;i++){
  for(let j=i+1 ;j<text.length;j++){
    let sum = Number(text[i])+Number(text[j])
    result.push(sum)
  }
}
return result;
​
}