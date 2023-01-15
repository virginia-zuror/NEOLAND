const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  /* function finderName(param) {
    nameFinder.includes(param)? console.log(nameFinder.includes(param), nameFinder.indexOf(param)): console.log(nameFinder.includes(param));
     } */
// EN ARROW Y TERNARIO

     const finderName = (name) => {
      let resultado;
       nameFinder.includes(name)? resultado = `${nameFinder.includes(name)} ${nameFinder.indexOf(name)}` : resultado = `${nameFinder.includes(name)}`;
      console.log(resultado);
      return resultado;
      
       }
  
       finderName('marc');