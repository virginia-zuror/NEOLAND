/* Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. */
const swap = (array, indexA, indexB) =>{
    let result = [...array];
    if(indexA === indexB || indexA < 1|| indexB < 1 ||indexA > array.length || indexB > array.length || typeof(indexA) === 'string' || typeof(indexB) === 'string'){
        let resultWrong = `Debes introducir 2 números diferentes entre 1 y ${array.length}`;
        return resultWrong;
    } else{
        result[indexA-1] = array [indexB-1], result[indexB-1] = array[indexA-1];
        
        return result; 
        } 
};

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
console.log(swap(array, 1,2));

