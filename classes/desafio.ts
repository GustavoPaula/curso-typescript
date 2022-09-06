// Exercício 1 - Classe
class Moto {
    constructor(public nome: string, public velocidade: number = 0){};

    public buzinar(): void {
        console.log('Toooooot!');
    };

    public acelerar(delta: number): number {
        return this.velocidade += delta;
    };
};

const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0){};
};

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura;
    };
};

const retangulo = new Retangulo(5, 7);
retangulo.base = 5;