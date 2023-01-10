const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
let articulos =[];
for(const product of products){
   if(product.includes('Camiseta')){
    articulos.push(product);
   };

}

console.log(articulos);