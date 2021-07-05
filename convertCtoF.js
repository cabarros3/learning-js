function convertToFahrenheit(value) {
  let fahrenheit = value * 1.8 + 32;
  console.log(fahrenheit);
}

let result = convertToFahrenheit(prompt('Celsius: '));
console.log(result);
