// String
let nome: string = 'Gustavo';
console.log(nome);

// Number
let age: number = 26;
console.log(age);

// Boolean
let myHobbies: boolean = true;
console.log(myHobbies);

// Tipos explícitos
let myAge: number;
myAge = 26;
console.log(typeof myAge);

// Array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

// Tuplas
let district: [string, number] = ['Rua Luiz Spinelli', 936];
console.log(district);

// Enums
enum Color {
    Grey,
    Green = 100,
    Blue = 10,
    Orange,
    Yellow,
    Red = 100
};

let myColor: Color = Color.Grey;
console.log(myColor);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);

// Any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', year: 2022 };
console.log(car);

// Funções
function myName(): string {
    return nome;
};

console.log(myName());

function hi(): void {
    console.log('Oi');
};

hi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
};

console.log(multiplicar(2, 4));

// Tipo função
let calculation: (x: number, y: number) => number;
calculation = multiplicar;

console.log(calculation(5, 5));

// Objetos
let user: {name: string, age: number} = {
    name: 'Gustavo',
    age: 26
};

console.log(user);

user = {
    name: 'Karen',
    age: 21
};

console.log(user);

// Desafio
const employees: { 
    nameEmployees: string[], 
    score: (hours: number) => string
} = {
    nameEmployees: ['Gustavo', 'Karen'],
    score (hour: number): string {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário!';
    }
};

console.log(employees.nameEmployees);
console.log(employees.score(8));

// Alias
type employee = {
    nameEmployees: string[],
    score: (h: number) => string
};

const emplooyes2: employee = {
    nameEmployees: ['Thiago', 'Sonia'],
    score(hour): string {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário!';
    }
};

console.log(emplooyes2.nameEmployees);
console.log(emplooyes2.score(9));

// Union types
let nota: string | number = 10;
console.log(`Minha nota é: ${nota}`);

nota = '20';
console.log(`Minha nota é: ${nota}`);

// Chegando tipos
let value = 15;
if (typeof value === 'number') console.log('É um number !');
else console.log(value);

// Never - Vai terminar com um erro ou vai ficar em um loop infinito
function failure(msg: string): never {
    throw new Error(msg);
}

const product = {
    name: 'Sabão',
    price: 10,
    validateProduct() {
        if(!this.name == null || this.name.trim().length === 0) failure('Nome inválido!');
        if(this.price <= 0) failure('Preço inválido!');
    }
};

console.log(product.validateProduct());

let height = 12;

let heightOptional: null | number = 12;
heightOptional = null;

type Contact = {
    name: string,
    tel1: string,
    tel2: string | null
};

const contact1: Contact = {
    name: 'Gustavo',
    tel1: '98765432',
    tel2: null
};

console.log(contact1.name, contact1.tel1, contact1.tel2);

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
};

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor;
    }
};

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
};

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);