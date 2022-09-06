// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
};

console.log(echoMelhorado<string>('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({nome: 'Gustavo', idade: 26}));

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]): void {
    args.forEach(e => console.log(e));
};

imprimir([1,2,3]);
imprimir<number>([1,3,5]);
imprimir<string>(['Gustavo', 'Karen']);

type Aluno = {nome: string, idade: number}
imprimir<Aluno>([
    {nome: 'Gustavo', idade: 26},
    {nome: 'Karen', idade: 21},
    {nome: 'Thiago', idade: 18}
]);

// Tipo genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;

// Classe com generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {};

    abstract exec(): R;
};

class SomaBinaria extends OperacaoBinaria<number, number> {
    exec(): number {
        return this.operando1 + this.operando2;
    };
};

console.log(new SomaBinaria(3, 7).exec());
console.log(new SomaBinaria(30, 345).exec());

/* class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    };

    exec(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca/dia)} dias(s)`;
    };
};

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).exec()); */

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila<T> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    };

    entrar(elemento: T) {
        this.fila.push(elemento);
    };

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0,1);
            return primeiro;
        } else {
            return null
        };
    };

    imprimir() {
        console.log(this.fila);
    };
};

const fila = new Fila<string>('Gustavo', 'Karen', 'Thiago', 'Gabriela');

fila.imprimir();
fila.entrar('Weslley');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({C, V})
// limpar(), imprimir()
type Par<C,V> = { chave: C, valor: V };

class Mapa<C,V> {
    itens: Array<Par<C,V>> = new Array<Par<C,V>>();

    obter(chave: C): Par<C,V> | null {
        const resultado = this.itens.filter(e => e.chave === chave);
        return resultado ? resultado[0] : null;
    };

    colocar(par: Par<C,V>) {
        const encontrado = this.obter(par.chave)
        if(encontrado) encontrado.valor = par.valor;
        else this.itens.push(par);
    };

    limpar() {
        this.itens = new Array<Par<C,V>>();
    };

    imprimir() {
        console.log(this.itens);
    };
};

const mapa = new Mapa<number, string>()
mapa.colocar({ chave:1, valor: 'Pedro' });
mapa.colocar({ chave:2, valor: 'Rebeca' });
mapa.colocar({ chave:3, valor: 'Maria' });
mapa.colocar({ chave:1, valor: 'Gustavo' });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();