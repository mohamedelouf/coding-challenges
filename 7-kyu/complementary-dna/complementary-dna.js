function dnaStrand(dna){
  let result =[]
  for(let letter of dna){
  if(letter === "A"){
    result.push("T")}
    else if( letter === "T"){
      result.push("A")
    }
    else if(letter === "G"){
      result.push("C")
    }
    else if(letter === "C"){
      result.push("G")
    }
}
  result=result.join("");
  
  return result;
}