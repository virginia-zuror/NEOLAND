/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const myBtn = document.querySelector("#btnToClick");
myBtn.addEventListener("click",(ev) => {
    console.log(ev);
}
);

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
 const focus = document.querySelector(".focus");
focus.addEventListener("input", (ev) =>{
console.log(ev.data);
}) 

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
const inputEvent = document.querySelectorAll("input");
for (const item of inputEvent) {
    item.addEventListener ("input", (ev) =>{
        console.log(ev.data);
    })
}
 