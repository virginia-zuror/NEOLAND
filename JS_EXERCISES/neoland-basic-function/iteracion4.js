const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  let average = sum / numbers.length;

  console.log(average);
}
