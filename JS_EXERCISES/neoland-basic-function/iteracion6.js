const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  /* function removeDuplicates(param) {

    const copia = [];
    
    duplicates.forEach(word => {        
       if(!copia.includes(word)){
        copia.push(word)
       }
    });
    console.log(copia);
}; */
// EN ARROW
const removeDuplicates = () => {
  const copia = [];
  duplicates.forEach(word => {        
    if(!copia.includes(word)){
      copia.push(word);
    }
  });
  console.log(copia);
  return copia;
};
   
  removeDuplicates(duplicates)