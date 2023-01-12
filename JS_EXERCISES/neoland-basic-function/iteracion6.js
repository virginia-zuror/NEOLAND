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
  function removeDuplicates(param) {

    const copia = [];
    
    duplicates.forEach(word => {        
       if(!copia.includes(word)){
        copia.push(word)
       }
    });
    console.log(copia);
};
   
  removeDuplicates(duplicates)