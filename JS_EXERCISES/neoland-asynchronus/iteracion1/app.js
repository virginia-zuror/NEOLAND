// 1.1
/*  fetch ('https://api.agify.io?name=michael')
.then(response => response.json())
.then(data => console.log(data)); 
  */
//1.2

/* const baseUrl= 'https://api.nationalize.io';
	
const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");  
   
    const getResults = async () => {
        const data = await fetch(`${baseUrl}?name=${input.value}`);
        const json = await data.json();
        const results = json.country ;
        
        for (const result of results) {
            console.log(result.country_id);
         container.innerHTML += `
        <p>${result.country_id}</p>
        <p>${result.probability}</p>`    //ejercicio 1.2
       
        }
        };

    button.addEventListener("click", (ev) => {  
        getResults();
    });   */
       



/* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/
/* const baseUrl= 'https://api.nationalize.io';
	
const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");  

    const getResults = async () => {
        
        const data = await fetch(`${baseUrl}?name=${input.value}`);
        const json = await data.json();
        const results = json.country ;
      
        const created = document.createElement("p");
        created.setAttribute("id", `"${input.value}"`);

        for (const result of results) {
            let i = results.length-1;   
             
            if(result == results[0]){
                created.innerHTML += `El nombre ${input.value} tiene un ${result.probability} % de probabilidad de ser de ${result.country_id},`
            }else if(result == results[i]){
                created.innerHTML += ` y un ${result.probability} % de probabilidad de ser de ${result.country_id}.
                `;   
            }else{ 
                created.innerHTML += ` un ${result.probability} % de probabilidad de ser de ${result.country_id},`;
           }    
        }
        
        container.appendChild(created);
    };

button.addEventListener("click", (ev) => {  
    
   
    getResults();
});   */
    

/*1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */
const baseUrl= 'https://api.nationalize.io';
	
const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");  

    const getResults = async () => {
        
        const data = await fetch(`${baseUrl}?name=${input.value}`);
        const json = await data.json();
        const results = json.country ;

        
      
        const created = document.createElement("p");
        created.setAttribute("id", `"${input.value}"`);
          container.innerHTML += `
        <article>
        <button>X</button>
        </article> `;
        
        for (const result of results) {
            let i = results.length-1;   

            if(result == results[0]){
                created.innerHTML += `El nombre ${input.value} tiene un ${result.probability} de probabilidad de ser de ${result.country_id},`
            }else if(result == results[i]){
                created.innerHTML += ` y un ${result.probability} de probabilidad de ser de ${result.country_id}.
                `;   
            }else{ 
                created.innerHTML += ` un ${result.probability} de probabilidad de ser de ${result.country_id},`;
           };    
        };   
        const article = document.querySelector("article")   
        
        article.appendChild(created);
        
        
    }

button.addEventListener("click", (ev) => {     
    getResults();

}); 

//falta casi todo del ultimo






    



