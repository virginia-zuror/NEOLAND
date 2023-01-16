
let index;
const findArrayIndex = (array,text) => {
    
    for (const item of array) {
        array['item'].toUpperCase('item');//ERROR NO SE PONE EL ITEM EN MAYUSCULAS
       array[item].includes(text)?
        index= array.indexOf(text):
        index = `El segundo argumento no existe en el array`
    };
    return index;
}

const removeItem = (array, text) =>{
    text = text.toUpperCase();
    
    console.log(text);
    
    findArrayIndex(array, text);
    array.splice(index,1);
    return array;
}



const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

const lotrCities = [
    "Minas-tirith",
    "Rivendel",
    "Moria",
    "Bree",
    "Hobbiton"
]

console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(lotrCities, "Moria"));

