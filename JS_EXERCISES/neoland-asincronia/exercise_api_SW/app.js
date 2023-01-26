
 
const nextBtn = document.querySelector("#nextBtn");
const previousBtn = document.querySelector("#prevBtn");

previousBtn.disabled = true;

let pageNum = 1;

const getCreatures = async () => {
    const data = await fetch (`https://starwars-databank.vercel.app/creatures?page=${pageNum}&limit=10`);
    const json = await data.json();
    const creatures = json.creatures;
    mapCreatures(creatures);
};

const mapCreatures = (creatures) => {
    const mappedCreatures = creatures.map((creature) => ({
        name: creature.name,
        image: creature.image,
        description: creature.description,
    }));
    printCreatures(mappedCreatures);
};

const printCreatures = (creatures) => {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    for (const creature of creatures) {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        <h2>${creature.name}</h2>
        <img src=${creature.image} alt =${creature.name}/>
        <p>${creature.description}</p>`;

        container.appendChild(figure);
    }
};

getCreatures();

nextBtn.addEventListener("click", (ev) => {
    pageNum++;
    if (pageNum >1) {
        previousBtn.disabled = false;
        getCreatures();
    };
    if (pageNum >= 9) {
        nextBtn.disabled = true;
    }
    
});
