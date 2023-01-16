const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let sum = 0;
let numberOfSounds = 0;
for (const user of users) {
    for (const key in user.favoritesSounds) {
        sum += user.favoritesSounds[key].volume;// KEY ES CADA UNA DE LAS CATEGORIAS DE FAVORITESOUNDS, Y DE ELLAS NOS INTERESA SOLO VOLUME.
        numberOfSounds += 1; // NOS PIDE EL TOTAL DE SONIDOS FAVORITOS DE LOS USUARIOS, COMO NO ES UN ARRAY, EL .LENGTH NO TRABAJA, VAMOS SUMANDO 1 POR CADA SONIDO DEL QUE COJA EL VOLUMEN.
    } 
}
let result = sum / numberOfSounds;
console.log(result);


   
