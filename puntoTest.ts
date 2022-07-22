import { Punto } from "./Punto";

let punto = new Punto(7, 5);
let punto2 = new Punto(8, 1);
let punto3 = new Punto(3, 5);
let punto4 = new Punto(-8, 2);
let punto5 = new Punto(-1, -7);
let punto6 = new Punto(5, -8);

console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(punto2));
console.log(punto.calcularCuadrante());
console.log(punto6.calcularMasCercano([punto, punto2, punto3, punto4, punto5]));