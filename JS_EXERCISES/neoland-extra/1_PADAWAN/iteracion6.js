const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
const tipoDeProducto = () =>{
for (const product of products) {
    product.sellCount> 20? goodProducts.push(product.name) :
    badProducts.push(product.name);
    };
return `Good products: ${goodProducts}.
Bad products: ${badProducts}.`
};
console.log(tipoDeProducto(products));