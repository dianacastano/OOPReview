import { Punto } from "./Punto";
import { Triangulo } from "./triangulo";

let punto = new Punto(1, 1);
let punto2 = new Punto(2, 1);
let punto3 = new Punto(4, 5);

let triangulo = new Triangulo(punto, punto2, punto3);

console.log(triangulo.calcularLongitudLados(punto, punto2, punto3));