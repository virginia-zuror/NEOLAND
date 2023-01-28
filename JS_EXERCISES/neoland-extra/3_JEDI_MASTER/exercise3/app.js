/* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". */

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div = document.querySelector("[data-function = printHere]");
const ul = document.createElement("ul");
div.appendChild(ul); 
for (const place of places) {
   /*  const li = document.createElement("li");
    const text = document.createTextNode(place);
    li.appendChild(text);
    ul.appendChild(li);*/

    ul.innerHTML += `
       <li>${place}</li>`;
}
