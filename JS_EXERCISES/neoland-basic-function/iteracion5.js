const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord() {
    let totalSum=0;
for (const element of mixedElements){
   if(element === ''){
     let caracteres;
     caracteres=caracteres.parseInt(element.length);
     totalSum += caracteres;
    }else{
        totalSum += element
    }; 
        console.log(totalSum);
    }
    
return totalSum;


}


averageWord(mixedElements)
