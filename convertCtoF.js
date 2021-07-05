// Convert Celsius to Fahrenheit

function convertToFahrenheit(value) {
  return value * 1.8 + 32;
}

let result = convertToFahrenheit(prompt("Celsius: "));
console.log(`o valor em Fahrenheit é: ${result}`);
