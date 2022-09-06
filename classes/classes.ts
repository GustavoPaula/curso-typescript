class Data {
    // Público por padrão
    public dia: number;
    public mes: number;
    public ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1979) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    };
};

const aniversario = new Data(6, 9, 1995);
aniversario.dia = 12;
console.log(aniversario);

const casamento = new Data; // Posso emitir os "()"
casamento.dia = 27;
casamento.ano = 2023;
console.log(casamento);

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){

    };
};

const aniversarioEsperto = new DataEsperta(16, 8, 2000);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2025;
console.log(casamentoEsperto);

// Desafio Produto
class Product {
    constructor(public name: string, public price: number, public discount: number = 0) {
     
    };

    public discountPrice(): number {
        return this.price * (1 - this.discount);
    };

    public resume(): string {
        return `${this.name} custa R$${this.discountPrice()} (${this.discount * 100}% off)`;
    };
};

const ps5 = new Product('Playstation 5', 4000, 0.5);
console.log(ps5.resume());

const headset = new Product('Razer', 300);
console.log(headset.resume());

// Modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0; // Não é visível pra fora da classe

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {};

    protected alterarVelocidade(delta: number): number { // Protected será permitido ser transferido como herança para classe filho
        const novaVelocidade: number = this.velocidadeAtual + delta;
        const velocidadeValida: boolean = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        };

        return this.velocidadeAtual;
    };

    public acelerar(): number {
        return this.alterarVelocidade(5);
    };

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
};

// public - Visível pra todo mundo e pode ser transferido como herança
// private - Visível apenas dentro da classe
// protected - Visível dentro da classe e pode ser transferido como herança


const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());

// Herança
class Ferrari extends Carro {
    public acelerar(): number {
        return this.alterarVelocidade(20);
    };

    public frear(): number {
        return this.alterarVelocidade(-15);
    };
};

const f40 = new Ferrari('Ferrari', 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// Atributps e métodos estáticos
class Matematica {
    static PI: number = 3.1416 // Static pertence apenas a classe, não pode instanciar, precisa acessar direto na classe

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio;
    };
};

console.log(Matematica.areaCirc(4));


// Classe abstrata
abstract class Calculation {
    protected result: number = 0;

    abstract exec(...numbers: number[]): void;

    getResult(): number {
        return this.result;
    };
};

class Soma extends Calculation {
    exec(...numbers: number[]): void{
        this.result = numbers.reduce((ac, va) => ac + va);
    };
};

class Mult extends Calculation {
    exec(...numbers: number[]): void {
        this.result = numbers.reduce((ac, va) => ac * va);
    };
};

let c1: Calculation = new Soma();
c1.exec(2, 3, 4, 5);
console.log(c1.getResult());

c1 = new Mult();
c1.exec(2, 3, 4, 5);
console.log(c1.getResult());


// Construtor Privado & Singleton
class Unico {
    private static instance: Unico = new Unico // Utiliza Singleton quando quer ter um controle de instâncias e heranças dos atributos e métodos
    private constructor() {};

    static getInstance(): Unico {
        return Unico.instance;
    };

    agora() {
        return new Date;
    };
};

console.log(Unico.getInstance().agora());

// Somente Leitura
