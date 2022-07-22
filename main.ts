import { Punto } from "./Punto";
import { Triangulo } from "./triangulo";

let punto = new Punto(9, 3);
let punto2 = new Punto(5, 2);
let punto3 = new Punto(7, 5);

let triangulo = new Triangulo(punto, punto2, punto3);

console.log(triangulo.calcularLongitudLados(punto, punto2, punto3));