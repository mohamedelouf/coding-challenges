function autocomplete(input, dictionary){
  input = input.replace(/[^a-z]/gi ,'')
  
  let result = dictionary.filter(word =>
    word.toLowerCase().startsWith(input.toLowerCase()));
  
 return result.slice(0, 5);
}