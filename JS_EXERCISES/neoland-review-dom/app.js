/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const myUl = document.createElement("ul");
for (const country of countries) {
    const myLi = document.createElement("li");
    const countryWord = document.createTextNode(country);
    myLi.appendChild(countryWord);
    myUl.appendChild(myLi);
}
document.body.appendChild(myUl);



/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const erase = document.querySelector(".fn-remove-me");
document.body.removeChild(erase);


/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const newUl = document.createElement("ul");
for (const car of cars) {
	const carWord = document.createTextNode(car);
	const newLi = document.createElement("li");
	newLi.appendChild(carWord);
	newUl.appendChild(newLi);
	
}
const container = document.querySelector("[data-function= 'printHere']");

container.appendChild(newUl);


/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
 const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const myDiv = document.createElement("div");
myDiv.setAttribute("id", "photos");
const ul = document.createElement("ul");
ul.setAttribute("class", "fotoDef");
let li;//la declaro fuera del bucle porque me hace falta en el ultimo ejercicio
for (const country2 of countries2) {
	li = document.createElement("li");
	li.setAttribute("class", "element");
	const myTitle = document.createElement("h4");
	const img = document.createElement("img");
	img.setAttribute("src", country2.imgUrl);
		
	const title = document.createTextNode(country2.title);
	
	myTitle.appendChild(title);
	li.appendChild(myTitle);
	li.appendChild(img);
	ul.appendChild(li);
}

myDiv.appendChild(ul);
document.body.appendChild(myDiv);




/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

//lo comento para no entrar en conflicto con el ultimo ejercicio

/* const myButton = () => {
	document.body.innerHTML += 
	'<button id="btn">Click</button>';
};

myButton();

const remove = document.querySelector("#btn");
remove.addEventListener("click",(ev)=>{
	 const divPhotos = document.querySelector("#photos"); 
	 if (divPhotos.childNodes.length>0) {//mientras haya hijos en div
		divPhotos.removeChild(divPhotos.lastElementChild);
	 }else{//en caso de dar click y no haber mas elementos en el div saca alert.
		alert("No hay más elementos para eliminar")
	 }
}
); */


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

//Hacemos un boton por cada li:
const liElements = document.querySelectorAll(".element");//cojo todos los elemento li con clase element
	for(let i=0; i<liElements.length; i++){
	liElements[i].setAttribute("id",i);
	const btn = document.createElement("button");//por cada li hago un boton
	btn.setAttribute("class", i);
	const btnText= document.createTextNode("Click");
	btn.appendChild(btnText);
	liElements[i].appendChild(btn);//anido el boton en li

}
//cada li tiene un id que coincide con el class de su boton



const allElements = document.querySelectorAll(".element");
for (let i=0;i< allElements.length; i++){
	allElements[i].querySelector("button").addEventListener("click", (ev)=>{
		ul.removeChild(allElements[i]);
	})
}
//no hacia falta crear atributos en boton ni seguir el orden de lista