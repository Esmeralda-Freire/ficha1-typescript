// 5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.

function soma(a: number, b: number): number{
    return a + b;
}

// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
// se o número for par ou "false" caso contrário.

function isPar(num: number): boolean{
    return num % 2 == 0;
}

// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
// aritmética delas.

function media(n1: number, n2: number, n3: number): number{
    return (n1 + n2 + n3)/3;
}

// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
// pessoa e retorne o índice de massa corporal (IMC) dela.

function imc(peso: number, altura: number): number{
    return peso/(altura * altura);
}

// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.

function calcularDesconto(valor: number, desconto: number): number{
    return (valor * desconto)/100;
}

// 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
// como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
// faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%

function calcularImpostoRenda(salario: number): number {
    if (salario <= 1903.98) {
        return 0;
    } else if (salario <= 2826.65) {
        return (salario - 1903.98) * 0.075;
    } else if (salario <= 3751.05) {
        return (2826.65 - 1903.98) * 0.075 + (salario - 2826.65) * 0.15;
    } else if (salario <= 4664.68) {
        return (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (salario - 3751.05) * 0.225;
    } else {
        return (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (4664.68 - 3751.05) * 0.225 + (salario - 4664.68) * 0.275;
    }
}

// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
// parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
// próximo.

function calcularMediaArredondada(numeros: number[]): number {
    if (numeros.length === 0) {
        return 0;
    }

    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;

    const mediaArredondada = Math.round(media);

    return mediaArredondada;
}

// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
// como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
// presentes nesse número.

function contarDigitosParesImpares(numero: number): string {

    let numeroString = numero.toString()
    let pares = 0
    let impares = 0

    for (let i = 0; i < numeroString.length; i++) {
        const digito = parseInt(numeroString[i], 10)
        if (digito % 2 === 0) {
            pares++;
          } else {
            impares++;
          }
        }
      
        return `pares: ${pares} impares:${impares}`;
      }

// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
// é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e retornar 
// a média das notas de todos os alunos.

type aluno = {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: aluno[]): number {
    if (alunos.length === 0) {
        return 0
    }

    let soma = 0;
    let quantidadeAlunosComNota = 0;

    for (const aluno of alunos) {
        if (typeof aluno.nota === 'number' && !isNaN(aluno.nota)) {
            soma += aluno.nota;
            quantidadeAlunosComNota++;
        }
    }

    if (quantidadeAlunosComNota === 0) {
        return 0;
    }

    const media = soma / quantidadeAlunosComNota;

      return media;
    }

    // 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
// parâmetro e retorne a idade atual.

function calcularIdade(anoNascimento: number): number{

    const idadeAtual = 2023 - anoNascimento

    return idadeAtual;
}

// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
// tabuada desse número de 1 a 10 no console.

function gerarTabuada(numero: number): string {
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    return tabuada;
}

// 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
// 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
// deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
// usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
// utilizadas.

function advinheNumero(): void {
    const numeroAleatorio: number = Math.floor(Math.random() * 100) + 1;

    let numeroTentativas: number = 0;
    let tentativa: number;

    while (true) {
        tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));

        if (isNaN(tentativa)) {
            alert("Por favor, insira um número válido.");
        } else {
            numeroTentativas++;

            if (tentativa < numeroAleatorio) {
                alert("O número é maior. Tente novamente.");
            } else if (tentativa > numeroAleatorio) {
                alert("O número é menor. Tente novamente.");
            } else {
                alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${numeroTentativas} tentativas.`);
                break;
            }
        }
    }
}

// 17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
// parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
// false caso contrário.

function verificarPropriedade(objeto: object, propriedade: string): boolean {
   
    return objeto.hasOwnProperty(propriedade);
  }

// 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
// "margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
// calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
// custo acrescido da margem de lucro e do valor do frete.

function calcularPrecoProduto(valorDeCusto: number, margemDeLucro: number, valorDoFrete: number): string {
    if (typeof valorDeCusto !== 'number' || typeof margemDeLucro !== 'number' || typeof valorDoFrete !== 'number') {
      return "Por favor, forneça valores numéricos válidos.";
    }
  
    if (valorDeCusto < 0 || margemDeLucro < 0 || valorDoFrete < 0) {
      return "Os valores não podem ser negativos.";
    }

    const precoDeVenda = valorDeCusto + (valorDeCusto * (margemDeLucro / 100)) + valorDoFrete;
  
    return `${precoDeVenda}`;
  }

// 19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
// da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
// 'Desenvolvimento'.

function encontrarPalavraMaisLonga(frase: string): string {
    
    const palavras = frase.split(' ');
  
    let palavraMaisLonga = '';
  
    for (const palavra of palavras) {
      if (palavra.length > palavraMaisLonga.length) {
        palavraMaisLonga = palavra;
      }
    }
  
    return palavraMaisLonga;
  }

// 21. Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
// strings que têm mais de 5 caracteres.

function filtrarStringsComMaisDe5Caracteres(arrayDeStrings: string[]): string[] {
    const novoArray = arrayDeStrings.filter(str => str.length > 5);
    return novoArray;
}


// 22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
//     etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

type Livro = {
    titulo: string;
    autor: string;
    ano: number;
};

function filtrarLivrosPorAutor(arrayDeLivros: Livro[], autorDesejado: string): Livro[] {
    const livrosDoAutor = arrayDeLivros.filter(livro => livro.autor === autorDesejado);
    return livrosDoAutor;
}

// 23. Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
// retorne o nome da pessoa mais velha.
type Pessoa = {
    nome: string;
    idade: number;
    genero: string;
}

function encontrarPessoaMaisVelha(arrayDePessoas: Pessoa[]) {
  
    let idadeMaxima = -Infinity;
    let nomeMaisVelho = '';
  
    for (const pessoa of arrayDePessoas) {
      if (pessoa.idade > idadeMaxima) {
        idadeMaxima = pessoa.idade;
        nomeMaisVelho = pessoa.nome;
      }
    }
  
    return nomeMaisVelho;
  }

// 24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
//     modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano
//     específico.

type Carro = {
    marca: string;
    modelo: string;
    ano: number;
}

function filtrarCarrosFabricadosAposAno(arrayDeCarros: Carro[], anoEspecifico: number): Carro[] {
    const carrosFabricadosAposAno = arrayDeCarros.filter(carro => carro.ano > anoEspecifico);
    return carrosFabricadosAposAno;
}

//   25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
// string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".

function inverterString(str: string): string {

    const stringInvertida = str.split('').reverse().join('');
    return stringInvertida;
  }