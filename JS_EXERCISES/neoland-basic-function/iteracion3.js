const numbers = [1, 2, 3, 5, 45, 37, 58];

/* function sumAll(param) {
    let result;
        for(let i=0; i< numbers.length; i++){
            result = numbers[i];
            result+= result; 
            console.log(result);
        }
        
        
} */
// EN ARROW Y PARA CUALQUIER ARRAY
const sumAll = (param)=> {
    let result;
        for(let i=0; i< param.length; i++){
            result = param[i];
            result+= result; 
            }
        console.log(result);
        return result;       
}

sumAll(numbers);