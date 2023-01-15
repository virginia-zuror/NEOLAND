const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
/*    function repeatCounter(param) {
    let contador=[];
    param.forEach((element) => {
    if(contador[element]){
        contador[element]++;
    }else{
        contador[element]=1;
    }
    
  });
return contador;
} */

//EN ARROW Y TERCIARIO

const repeatCounter = (param) => {
  let contador=[];
  param.forEach((element) => {
  contador[element] ? contador[element]++ : contador[element]=1;
});
return contador;
}
console.log(repeatCounter(counterWords));