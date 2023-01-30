/* 2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando 
async-await. */
  const runTimeOut = async() => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log("Hola")
  }
runTimeOut(); 




 
/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */
const getCharacters = async () =>{
    const data = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await data.json()
    
    console.log(characters);
}

getCharacters();
 