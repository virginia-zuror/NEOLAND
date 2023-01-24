//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.


const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const printInDocument = (albums) => {
  const container = document.querySelector("#app");
  for (const album of albums) {
  container.innerHTML += `
      <ul>
      <li>${album}</li>
      </ul>`;
  }
}

printInDocument(albums);