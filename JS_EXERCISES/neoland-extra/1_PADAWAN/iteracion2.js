const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const modifiedSchedule = [];
let fruitIndex = 0; 
/* for (const food of foodSchedule) {
    if(food.isVegan){
        modifiedSchedule.push(food);
    }else{ 
        let fruitIndex = 0; 
        food.name = fruits[fruitIndex];
        fruitIndex+=1;
        food.isVegan = true;
        modifiedSchedule.push(food);    
    }
} */
//MAS SIMPLIFICADO
for (const food of foodSchedule) {
    if(!food.isVegan){
        food.name = fruits[fruitIndex];
        fruitIndex+=1;
        food.isVegan = true;
    }
        modifiedSchedule.push(food);    
}
console.log(modifiedSchedule);