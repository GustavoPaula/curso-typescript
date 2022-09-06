interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any;
    saudar(sobrenome: string): void;
};

const saudarComOla = (pessoa: Humano): void => {
    console.log(`Olá, ${pessoa.nome}`);
};

const mudarNome = (pessoa: Humano): void => {
    pessoa.nome = 'Joana';
};

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.80 });
pessoa.saudar('Skywalker');

// Usando Classes...
class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date;
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    };
};

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface função
interface FuncaoCalculo {
    (a: number, b: number): number
};

const potencia: FuncaoCalculo = (base: number, exp: number): number => {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};

console.log(potencia(3, 10));

// Herança
interface A {
    a(): void;
};

interface B {
    b(): void;
};

interface ABC extends A, B {
    c(): void;
};

class RealA implements A {
    a(): void {};
};

class RealB implements B {
    b(): void {};
};

class RealABC implements A, B {
    a(): void {};
    b(): void {};
    c(): void{};
};

abstract class AbstrataABD implements A, B {
    a(): void {};
    b(): void {};
    abstract d(): void;
};

