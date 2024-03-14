// Fibonacci calculator

console.log("Fibonacci")

function calcular(limite){
  let fib = [0, 1]

  while(fib[fib.length - 1] <= limite){
    let nextFib = fib[fib.length - 1] + fib[fib.length - 2]
    fib.push(nextFib)
  }

  return fib
}


// verificar
function verificar(num, sequencia){
  return sequencia.includes(num)
}

const numero = prompt("Digite um número para calcular:")
const num = parseInt(numero)

const sequencia = calcular(num)

const pertence = verificar(num, sequencia)

// resultado

if(pertence){
  alert(`O número ${num} pertence à sequência.`)
} else {
  alert(`O número ${num} não pertence à sequência.`)
}
