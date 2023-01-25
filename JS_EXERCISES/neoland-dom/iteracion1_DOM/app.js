//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const myBtn = document.querySelector(".showme")
console.log(myBtn);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const myH1= document.querySelector("#pillado")
console.log(myH1);

//1.3 Usa querySelector para mostrar por consola todos los p
const myP = document.querySelectorAll("p")
console.log(myP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const myPokemonClass = document.querySelectorAll(".pokemon")
for (const item of myPokemonClass) {
    
    console.log(item.innerHTML);
}

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const myDataFunction = document.querySelectorAll("[data-function]");
for (const item of myDataFunction) {
    
    console.log(item.innerHTML);
}


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const thirdCharacter = myDataFunction[2].innerHTML;
console.log(thirdCharacter);


