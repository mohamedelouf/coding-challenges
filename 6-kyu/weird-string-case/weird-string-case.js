function toWeirdCase(string){
  
let words = string.split(" ");
  
for(let i=0;i<words.length;i++){
  let result=""
  
  for(let j=0;j<words[i].length;j++){
    if(j % 2 === 0){
      result += words[i][j].toUpperCase();
     
    }
    else{
       result += words[i][j].toLowerCase()
      
    }
  }
  words[i] = result;
  
}
return words.join(" ")
}
​