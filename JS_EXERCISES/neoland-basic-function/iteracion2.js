const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Captain M.', 'Spiderman'];

function findLongestWord (param){
  let cadenaLarga = "";// hay que definirla en la funcion para poder retornarla tambien aqui. 
  //Mejor no dar valor 0

 for (const avenger of avengers) {
  
     if(avenger.length > cadenaLarga.length){// si la palabra en la que esta es mayor que ""(de cadenaLarga)
      cadenaLarga = avenger; // coges y cadenaLarga toma el valor avenger (en el que esta el bucle en ese momento)
     }  // pasa al siguiente y compara, da igual si es igual de larga porque nos interesaría la primera solo en este caso.
   }
 //return cadenaLarga;
 console.log(cadenaLarga);// hay que hacer el return en el ambito solo de la funcion.
};

findLongestWord( avengers);

