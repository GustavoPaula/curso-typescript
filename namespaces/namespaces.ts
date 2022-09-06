namespace Geometria {
    export namespace Areas {
        const PI = 3.14;
    
        export const circunferencia = (raio: number) => {
            return PI * Math.pow(raio, 2)
        };
    
        export const retangulo = (base: number, altura: number): number => {
            return base * altura;
        };
    };
};

const PI = 2.99;
console.log(Geometria.Areas.circunferencia(10));
console.log(Geometria.Areas.retangulo(10, 20));
console.log(PI);