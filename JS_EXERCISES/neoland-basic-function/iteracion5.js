const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

/* function averageWord() {
    let totalSum = 0;
    for (const element of mixedElements){
        if(typeof element === 'string'){
            totalSum += element.length;
        }else{
            totalSum += element;
        }; 
    }
    console.log(totalSum);  
    return totalSum;
}  */

// EN ARROW 
const averageWord = () => {
    let totalSum = 0;
    for (const element of mixedElements){ typeof element === 'string'? totalSum += element.length : totalSum += element};// COMO TERNARIO
    console.log(totalSum);  
    return totalSum;
}


averageWord(mixedElements);
