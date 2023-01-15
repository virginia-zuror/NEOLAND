function findArrayIndex(param, text) {
    let found;
    param.includes(text)? found = `La palabra ${text} es la ${(param.indexOf(text)+1)}º en la lista`: found = `${text} no existe en la lista`;
    return found;

}

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const prueba = ['Playa', 'Montaña', 'Selva', 'Sabana', 'Bosque']

console.log(findArrayIndex(prueba, 'Bosque'));
