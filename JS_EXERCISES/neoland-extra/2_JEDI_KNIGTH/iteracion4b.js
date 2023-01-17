
let index;
const findArrayIndex = (array,text) => {
   array2 = [...array];// si no lo compio, el valor final de resultado me devuelve el array todo en mayusculas y es mejor que sea el original.
    for (let i=0; i< array2.length; i++) {
        array2[i] = array2[i].toUpperCase();
        index= array2.indexOf(text);
    };
    
     return index;

}

const removeItem = (array, text) =>{
    text = text.toUpperCase();      
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

console.log(removeItem(mainCharacters, "aNaKiN"));
console.log(removeItem(lotrCities, "moRia"));

