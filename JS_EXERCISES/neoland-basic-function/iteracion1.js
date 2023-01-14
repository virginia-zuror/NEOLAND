/* function sum(numberOne , numberTwo) {
  if(numberOne > numberTwo){
    console.log(numberOne); 
    return numberOne;
  }else if(numberTwo>numberOne){
    console.log(numberTwo);
    return numberTwo;
  }else{
    return null
    console.log(null);
  }
} 

sum(1,5)*/


// COMO ARROW FUNCTION

const sumArrow = (numberOne, numberTwo)=>{
  if(numberOne > numberTwo){
    console.log(numberOne); 
    return numberOne;
  }else if(numberTwo>numberOne){
    console.log(numberTwo);
    return numberTwo;
  }else{
    console.log(null);
    return null;
  }
}

sumArrow('d', 4);

