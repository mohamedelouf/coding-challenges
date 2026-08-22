const complete = str => {
let result="";
for(let i=1;i<=str.length;i++){
 const add = str.slice(0, i).split('').reverse().join('');
  result=str + add;
​
  if(result === result.split('').reverse().join(''))
    return result;
 }
};