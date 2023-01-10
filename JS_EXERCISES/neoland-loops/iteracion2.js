const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];


alumns.forEach((alumns)=> {
    if(alumns.T1 == true && alumns.T2 == true){
    alumns.isAproved = true;
    }else if(alumns.T1 == true && alumns.T3 == true){
       alumns.isAproved = true;
    }else if(alumns.T2 ==true && alumns.T3 == true){
       alumns.isAproved = true;
    }else{
        alumns.isAproved = false;
    }
})

console.log(alumns);