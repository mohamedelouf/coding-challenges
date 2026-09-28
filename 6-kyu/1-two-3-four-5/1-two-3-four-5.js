function conv(num){
  const words = {
  0: "zero", 1: "one",2: "two",3: "three",4: "four", 5: "five",6: "six",7: "seven",8: "eight",9: "nine"};
let text=String(num)
let result="";
  for(let i=0 ; i<text.length;i++){
    if(text.length%2===0){
   if(Number(text[i])%2===0){
        for(let j=0;j<(i+1);j++){
           let itration =Math.floor(j/words[text[i]].length)
           let x=j%words[text[i]].length
           if(itration%2===0){
            result += words[text[i]][x];
           }else{
            result += words[text[i]][x].toUpperCase()
           }} }else{
        result+=text[i]}} 
    else{
  if(Number(text[i])%2 !=0){
       for(let j=0;j<(i+1);j++){
           let itration =Math.floor(j/words[text[i]].length)
           let x=j%words[text[i]].length
           if(itration%2===0){
            result += words[text[i]][x].toUpperCase();
           }else{
            result += words[text[i]][x]
           }}}else{
        result+=text[i] }}}
return result;}