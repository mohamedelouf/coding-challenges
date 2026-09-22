        count++ }
      else{
        break;
      }}
if(text[i]===1){
    if(rightSum+leftSum<lonelinessVal1)
        lonelinessVal1=rightSum+leftSum;
  }
  else{
  if(rightSum+leftSum<lonelinessVal)
        lonelinessVal=rightSum+leftSum;
  }    
​
    leftSum=0
    rightSum=0
    count=0;
}
​
if(lonelinessVal1<=lonelinessVal){
return true;
}else{
    return false;
}
​
}
​
else{
return false;
}
​
}