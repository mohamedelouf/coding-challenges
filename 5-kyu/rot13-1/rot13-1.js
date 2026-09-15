function rot13(message){
​
let result="";
for(let char of message){
 let letterCode=char.charCodeAt(0);
  
  if(letterCode>=65 && letterCode<=90){
    result+= String.fromCharCode((letterCode-65 + 13)%26+65)
  }
  else if(letterCode>=97 && letterCode<=122){
        result+= String.fromCharCode((letterCode-97 + 13)%26+97)
    }
    else{
        result+=char
    }}
    return result;
}
​