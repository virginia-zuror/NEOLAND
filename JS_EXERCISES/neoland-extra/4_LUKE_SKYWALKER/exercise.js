/* Dado el siguiente javascript filtra los videojuegos por gender = 'Aventura' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'Aventura' en el array .gender. */

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
    {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
];


let aventuraGames = videogames.filter(videogame => {
    return videogame.genders.includes('Aventura');
});

console.log(aventuraGames);


let average=0
for (const game of aventuraGames) {
    average += aventuraGames.reduce((ac, cv) => ac, game.score , 0);
}
average = average/aventuraGames.length;
console.log(average);