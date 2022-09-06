function logarClasse(constructor: Function) {
    console.log(constructor);
};

function decoratorVazio(_: Function) {};

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio;
};

function decorator(obj: { a: string, b?: number }) {
    return (_: Function): void => {
        console.log(obj.a + ' ' + obj.b);
    }
};

type Construtor = { new(...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
    console.log('Carregado');

    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        };
    };
};

//new Eletrodomestico();

//@logarClasse
//@logarClasseSe(true)
//@decorator({ a:'Teste', b: 123 })
//@logarObjeto
interface Eletrodomestico {
    imprimir?(): void;
};

@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('Novo...');
    };
};

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this);
    };
};

//const eletro = new Eletrodomestico();
//eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
 
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    };
};
 
function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);

            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Usuário não é administrador');
            };
        };
    };
};

new MudancaAdministrativa().critico();

class ContaCorrente {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    };

    @congelar
    sacar(valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        };
    };

    @congelar
    getSaldo() {
        return this.saldo;
    };
};

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

/* cc.getSaldo = function() {
    return this['saldo'] + 7000;
}; */

console.log(cc.getSaldo());

// Decorator freeza
function congelar(algo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
    console.log(algo);
    console.log(nomeMetodo);
    descritor.writable = false;
};

