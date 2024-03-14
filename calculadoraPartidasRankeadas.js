let vitorias = 68
let derrotas = 20

let saldoVitorias = resultadoBatalha(vitorias, derrotas)

let nivel

if (vitorias <= 10){
    nivel = "Ferro"
} else if (vitorias > 10 && vitorias <=20){
    nivel = "Bronze"
} else if (vitorias > 20 && vitorias <=50){
    nivel = "prata"
} else if (vitorias > 50 && vitorias <=80){
    nivel = "Ouro"
} else if (vitorias > 80 && vitorias <=90){
    nivel = "Diamante"
} else if (vitorias > 90 && vitorias <=100){
    nivel = "Lendário"
} else{
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias está no nível de ${nivel}`)

function resultadoBatalha(numGanha, numPerde){
    let saldo = numGanha - numPerde
    return saldo
}