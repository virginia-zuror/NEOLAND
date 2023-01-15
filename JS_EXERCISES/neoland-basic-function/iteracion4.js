const numbers = [12, 21, 38, 5, 45, 37, 6];
/* function average(param) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  let average = sum / numbers.length;

  console.log(average);
} */
// EN ARROW Y PARA CUALQUIER ARRAY

const average = (params) => {
  let sum = 0;
  for (const param of params) {
    sum += param;
  }

  let average = sum / params.length;
  console.log(average);
  return average;
}

average(numbers);
