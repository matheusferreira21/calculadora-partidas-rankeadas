let quantidadeVitorias = 100
let quantidadeDerrotas = 6

let saldo = (saldoVitorias(quantidadeVitorias,quantidadeDerrotas))
let classificacao = rankHeroi(saldo)

console.log("O Herói tem de saldo de " + saldo +" está no nível de "+ classificacao)

function saldoVitorias(quantidadeVitorias, quantidadeDerrotas){
    let saldoVitoria = quantidadeVitorias - quantidadeDerrotas
    return saldoVitoria
}

function rankHeroi(saldoVitoria){
    rank = ""
    if(saldoVitoria < 10){
        rank = "Ferro"
    }
    if(saldoVitoria > 10 && saldoVitoria <= 20){
        rank = "Bronze"
    }
    if(saldoVitoria > 20 && saldoVitoria <= 50){
        rank = "Prata"
    }
    if(saldoVitoria > 50 && saldoVitoria <= 80){
        rank = "Ouro"
    }
    if(saldoVitoria > 80 && saldoVitoria <= 90){
        rank = "Diamante"
    }
    if(saldoVitoria > 90 && saldoVitoria <= 100){
        rank = "Lendário"
    }
    if(saldoVitoria > 101){
        rank = "Imortal"
    }
    return rank
}
