const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const userAges = () =>{
    let answerChild= [];
    let answerAdult = [];
    for (const user of users) {
        if (user.years < 18){
            answerChild.push(user.name); 
        }else{
            answerAdult.push(user.name);
        }
       
    }
    return `Usuarios menores de edad: ${answerChild}. Usuarios mayores de edad: ${answerAdult}`;
  }

  console.log(userAges(users));