const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

const totalSales = () =>{
    let sum = 0;
    for (const product of products) {
        sum += product.sellCount;
    };
    return sum;
};

console.log(totalSales(products));