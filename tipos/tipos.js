// String
var nome = 'Gustavo';
console.log(nome);
// Number
var age = 26;
console.log(age);
// Boolean
var myHobbies = true;
console.log(myHobbies);
// Tipos explícitos
var myAge;
myAge = 26;
console.log(typeof myAge);
// Array
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// Tuplas
var district = ['Rua Luiz Spinelli', 936];
console.log(district);
// Enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Orange"] = 11] = "Orange";
    Color[Color["Yellow"] = 12] = "Yellow";
    Color[Color["Red"] = 100] = "Red";
})(Color || (Color = {}));
;
var myColor = Color.Grey;
console.log(myColor);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);
// Any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', year: 2022 };
console.log(car);
// Funções
function myName() {
    return nome;
}
;
console.log(myName());
function hi() {
    console.log('Oi');
}
;
hi();
function multiplicar(numA, numB) {
    return numA * numB;
}
;
console.log(multiplicar(2, 4));
// Tipo função
var calculation;
calculation = multiplicar;
console.log(calculation(5, 5));
// Objetos
var user = {
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
var employees = {
    nameEmployees: ['Gustavo', 'Karen'],
    score: function (hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário!';
    }
};
console.log(employees.nameEmployees);
console.log(employees.score(8));
var emplooyes2 = {
    nameEmployees: ['Thiago', 'Sonia'],
    score: function (hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário!';
    }
};
console.log(emplooyes2.nameEmployees);
console.log(emplooyes2.score(9));
// Union types
var nota = 10;
console.log("Minha nota \u00E9: ".concat(nota));
nota = '20';
console.log("Minha nota \u00E9: ".concat(nota));
// Chegando tipos
var value = 15;
if (typeof value === 'number')
    console.log('É um number !');
else
    console.log(value);
// Never - Vai terminar com um erro ou vai ficar em um loop infinito
function failure(msg) {
    throw new Error(msg);
}
var product = {
    name: 'Sabão',
    price: 10,
    validateProduct: function () {
        if (!this.name == null || this.name.trim().length === 0)
            failure('Nome inválido!');
        if (this.price <= 0)
            failure('Preço inválido!');
    }
};
console.log(product.validateProduct());
var height = 12;
var heightOptional = 12;
heightOptional = null;
var contact1 = {
    name: 'Gustavo',
    tel1: '98765432',
    tel2: null
};
console.log(contact1.name, contact1.tel1, contact1.tel2);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
