var mensagem = "Olá";
mensagem = "Olá Julio, bora estudar!!!";
console.log(mensagem);

// //alert(mensagem);

// // Objetos

// var aluno1 = {
//     matricula: 4781161,
//     nome:"julio Barros Carvalho",
//     curso: 'Bootcamp igti',
//     ativo: true
// };

// console.log(aluno1.nome);

// aluno1.dataNascimento = '12/12/54';

// console.log(aluno1);

// delete aluno1.dataNascimento;
// console.log(aluno1);

// // Arrays

// var frutas = [ 'Banana', 'Laranja', 'Maçã'];

// console.log(frutas);
// console.log(frutas[0]);

// imprimeOla();

function imprimeOla() {
    console.log('função olá');
}

// imprimeOla();

function soma(op1, op2) {
    return op1 + op2;
}

// if, else

function maior(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

function menor(a, b, c) {
    var r = (a < b && a < c) ? a : (b < a && b < c) ? b : c;
    return r;
}

// switch

function formataMes(mes) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
    }
}

function formataMes2(mes) {
    switch (mes) {
        case 1:
            console.log("Janeiro");
            break
        case 2:
             console.log("Fevereiro");
            break
        case 3:
            console.log("Março");
            break
        case 4:
            console.log("Abril");
            break
        case 5:
            console.log("Maio");
            break
        case 6:
            console.log("Junho");
            break
        case 7:
            console.log("Julho");
            break
        case 8:
            console.log("Agosto");
            break
        case 9:
            console.log("Setembro");
            break
        case 10:
            console.log("Outubro");
            break
        case 11:
            console.log( "Novembro");
            break
        case 12:
            console.log("Dezembro");
            break
    }
}

function contadorWhile() {
    var contador = 1;
    while(contador <= 10) {
        console.log(contador);
        contador++
    }
}

function contadorDoWhile() {
    var contador = 1;
    do {
        console.log(contador);
        contador++;
    } while(contador <= 10)
}

function contadorFor() {
    for (var contador = 1; contador <= 10; contador++) {
        console.log(contador);
    }
}

function contadorForBreakContinue() {
    for (var contador = 1; contador <= 20; contador++) {
        if (contador === 5) {
            continue;
        } if (contador === 15) {
            break;
        } 
        console.log(contador);
    }
}

// Teste de Palíndromo (palavra igual de tras para frente)

/* palavras de teste: 
    'aba'   -> é palíndromo
    'radar'   -> é palíndromo
    'xyzzyx'   -> é palíndromo
    'bola'   -> não é palíndromo
    'abcddcb'   -> não é palíndromo
    ' '   -> é palíndromo
    'x'   -> é palíndromo
*/
function palindromo(s) {
    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
        if(s.charAt(i) != s.charAt(j)) {
            console.log( s + " não é palindromo")
            return;
        }
    }
    console.log(s + " é palíndromo");
}

// objetos 

function Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = function() {
        return this.altura * this.largura;
    }
}

// Arrow function

var somaV2 = (a, b) => {
    return a + b;
}

var somaV3 = (a, b) => a + b;

function RetanguloV2(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = () => this.altura * this.largura;
    }

var r1 = new RetanguloV2(5, 6);

// Manipulação de Arquivos

//1. for ... of
function percorrerArray () {
    for (let i = 0; i < arrayExemplo.length; i++) {
        arrayExemplo[i]
        console.log(arrayExemplo[i])
    }
}

function percorrerArray2 () {
    for (let item of arrayExemplo) {
        console.log(item.idade)
    }
}

//2. forEach
function percorrerArray3 () {
    arrayExemplo.forEach((item, index) => {
        console.log(`${index}: ${item.dataCadastro}`);
    });
}

//3. map (concatenar itens em novo array)
function percorrerArray4 () {
    let concatenado = arrayExemplo.map((item) => 
        "Situação de Cadastro: " + item.cadastrado 
        + " ," + item.dataCadastro)
    return concatenado;
}

//4. filter
function percorrerArray5 () {
    let cadastrados = arrayExemplo
        .filter((item) => item.cadastrado == true)
//        .map((item) => item.nome);
    return cadastrados;
}

//5. find (busca primeiro objeto do array com a especificação)
function percorrerArray6 () {
    let semCadastro = arrayExemplo.find((item) => item.cadastrado == false);
    return semCadastro;
}

//6. sort (comparação de itens de array e ordenação)
function percorrerArray7 () {
    arrayExemplo.sort((i1, i2) => {
    if (i1.idade < i2.idade) {
        return -1;
    } else if (i1.idade > i2.idade) {
        return 1;
    } else {
        return 0;
    }
});
//chamar a função antes de chamar o arrayExemplo pelo console
}

// promises

// Async await

// tratamento de erros

console.log("fim do Programa");