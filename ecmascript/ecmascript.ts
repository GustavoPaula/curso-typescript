// Let & Const
let seraQuePode = '?';
console.log(seraQuePode);

let estaFrio = true;

if(estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
};

const cpf: string = '123.456.000-99';
//cpf = '789.101.132-78';
console.log(cpf);

// Arrow Function
function somar(n1: number, n2: number): number {
    return n1 + n2;
};

console.log(somar(5, 3));

const subtrair = (n1: number, n2: number): number => {
    return n1 + n2;
};

console.log(subtrair(5, 3));

const saudacao = () => console.log('Olá!');

const falarCom = (pessoa: string) => console.log(`Olá! ${pessoa}`);
falarCom('Gustavo');

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ['Gustavo, Karen'];
const turmaB: string[] = ['Thiago, Sônia', ...turmaA];
console.log(turmaB);

const retornarArray = (...args: number[]): number[] => {
    return args;
};

console.log(retornarArray(1,2,4,6,8));

// Desafio
// Exercicio 1
const dobro = (valor: number): number => valor * 2;
console.log(dobro(2));

// Exercicio 2
const dizerOla = (nome: string = 'Pessoa'): void => {
    console.log(`Olá, ${nome}`);
};

dizerOla();
dizerOla('Anna');

// Exercicio 3
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Exercicio 4
const array: number[] = [55, 20, ...nums];
console.log(array);

// Exercicio 5
const notas: number[] = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(n1, n2, n3);

// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 };
const { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);