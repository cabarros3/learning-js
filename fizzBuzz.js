//fizbuzz
// Divisível por 3 => 'fizz'
// Divisível por 5 => 'buzz'
// Divisível por 5 e 3 => 'fizzbuzz'
// se não for um número => 'Não é um número'
// se não for divisível nem por 3 e nem por 5 => entrada

let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "Não é um número";
  if (entrada % 3 === 0 && entrada % 5 === 0) return "FizzBuzz";
  if (entrada % 3 === 0) return "Fizz";
  if (entrada % 5 === 0) return "Buzz";

  return entrada;
}
