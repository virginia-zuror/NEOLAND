const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];
  const peliculaPequena = [];
  const peliculaMediana = [];
  const peliculaGrande = [];
const peliculasPorDuracion = ()=>{
  for (const movie of movies) {
    if (movie.durationInMinutes <= 100) {
        peliculaPequena.push(movie.name);        
    }else if(movie.durationInMinutes > 200){
        peliculaGrande.push(movie.name);
    }else{
        peliculaMediana.push(movie.name);
    };
    };    
    return `Peliculas cortas: ${peliculaPequena}.
    Peliculas medianas: ${peliculaMediana}.
    Peliculones: ${peliculaGrande}.`;
}
console.log(peliculasPorDuracion(movies));
  