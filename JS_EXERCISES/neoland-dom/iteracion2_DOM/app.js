/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const myDiv = document.createElement("div");

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const myP = document.createElement("p");
//console.log(myP);//primero se crean los elementos

const myPInDiv = myDiv.appendChild(myP);//despues se montan
//console.log(myDiv);//pedimos ver el mas externo de los creados para ver el conjunto


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const myDivBucle = document.createElement("div");
for(let i= 0; i< 6; i++){
    const myPBucle = document.createElement("p");//hemos creado el div antes y ahora un p por cada vuelta.
    myDivBucle.appendChild(myPBucle);//antes de salir del bucle lo monta con el div
}


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newP = document.createElement("p");//crea elemento <p></p>
const pContent = document.createTextNode("Soy dinámico!");//crea el contenido texto
newP.appendChild(pContent);// anida el texto al elemento <p></p> creado

document.body.appendChild(newP);//anida el elmento al body del html


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
 const myH2Class = document.querySelectorAll("h2.fn-insert-here");//busca todos los h2 de esa clase
const myH2ClassContent = document.createTextNode('Wubba Lubba dub dub');
for (const item of myH2Class) {
  item.appendChild(myH2ClassContent);
};

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const myUl = document.createElement("ul");//creo la ul

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (const app of apps) {//recorro array
    const myLi = document.createElement("li");//por cada item creo un li
    const appForLi = document.createTextNode(app);//cada item debe transformarse en texto 
    myLi.appendChild(appForLi);//anido el texto en li
    myUl.appendChild(myLi);//anido el li en el ul
    document.body.appendChild(myUl);//anido el ul en el html
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

    const toEliminate = document.querySelectorAll(".fn-remove-me");//Busca todos los de la clase
        for (const item of toEliminate) {//en el array elaborado
            item.remove();//quita cada elemento
        } 


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

 const findDivs = document.querySelectorAll("div");
for (const item of findDivs) {
    if(!item.hasAttributes("")){//no queremos aquellos div con atributo de clase
        const newPElement = document.createElement("p");
        const newText = document.createTextNode("Voy en medio!");
        newPElement.appendChild(newText);
        item.appendChild(newPElement);
    };  
};  


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/
const myDivsWithClass = document.querySelectorAll(".fn-insert-here");
for (const div of myDivsWithClass) {
    const newPTag = document.createElement("p");
    const ImIn = document.createTextNode("Voy dentro!");
        newPTag.appendChild(ImIn);
        div.appendChild(newPTag);  
};  
