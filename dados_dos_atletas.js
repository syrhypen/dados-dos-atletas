//Aluno: Lucas Gabriel da Silva Cruz
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort(function(a, b){ return a - b });
        //console.log(notasOrdenadas)

        let notasValidas = notasOrdenadas.slice(1, 4);
        
        let soma = 0;
        notasValidas.forEach(function(nota){
            soma = soma + nota;
        });
        //console.log()
        return soma / notasValidas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}
//console.log(obtemMediaValida)
/////////////////////////////////////////// TESTE //////////////////////////////////////////////////////////////
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
//console.log(`Nome: ${atleta.obtemNomeAtleta()}`) por algum motivo não esta funcionando, mas reescrevi do zero e então funcionou.
// Pesquisei e utilizei o comando ".toLocaleString('pt-BR', {minimumFractionDigits: 0,maximumFractionDigits: 3})" para adptar a leitura dos números para PT-BR e funcionou...
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
console.log(`Peso: ${atleta.obtemPesoAtleta().toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
})} kg`);
console.log(`Altura: ${atleta.altura.toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
})} metros`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC().toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
})}`);
// Para reulstar em uma virgula ao inves de ponto, e 3 digitos decimais. 
console.log(`Média válida: ${atleta.obtemMediaValida().toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
})}`);