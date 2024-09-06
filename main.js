/* 
Técnica:

1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, 9 
b) 2, 4, 8, 16, 32, 64, 128 
c) 0, 1, 4, 9, 16, 25, 36, 49 
d) 4, 16, 36, 64, 100 
e) 1, 1, 2, 3, 5, 8, 13 
f) 2,10, 12, 16, 17, 18, 19, 20


5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

*/

//Questão 1
function calcularFibonacci(entrada) {
  if (entrada < 0) return false;

  let a = 0;
  let b = 1;
  let temporario;

  while (b <= entrada) {
    if (b === entrada || a === entrada) {
      return true;
    }
    temporario = a;
    a = b;
    b = temporario + b;
  }

  return false;
}

const numero = 5;

if (calcularFibonacci(numero)) {
  console.log(`O número ${numero} faz parte da sequência de fibonacci.`);
} else {
  console.log(`O número ${numero} não faz parte da sequência de fibonacci.`);
}

//Questão 2
function verificarString(string) {
  const lowerString = string.toLowerCase();
  let count = 0;

  for (let index = 0; index < lowerString.length; index++) {
    if (lowerString[index] === "a") {
      count++;
    }
  }
  if (count > 0) {
    console.log(`A string tem ${count} na palavra.`);
  } else {
    console.log("A palavra não possui a letra a.");
  }
}

verificarString("Brinco");

//Questão 3
function somaDeNumeros(indice) {
  let soma = 0;
  let k = 1;

  do {
    k += 1;
    soma += k;
  } while (k < indice);
  console.log(`O total da soma é ${soma}`);
}

somaDeNumeros(12);
