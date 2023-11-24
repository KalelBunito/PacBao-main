const numeros = [5,6,8,17,20]
const numerosImpares = numeros.filter(num => num % 2 ===1)
console.log(numerosImpares)

const notas = [85, 92, 78, 90, 88, 99]

let somaNotas = 0

for(var i = 0; i < notas.length;i++){
    console.log(somaNotas += notas[i])
}
let media = somaNotas / notas.length
console.log(media)

function divisao(t,k){
    return t/k
}
var resultado = divisao(350,5)
console.log(resultado)

var retorno = function(a,b,c){
    return a*b*c
}
console.log(retorno(10,2,3))

let soma = (k,l) => k + l

console.log(soma(10,5))