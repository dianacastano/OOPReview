"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var triangulo_1 = require("./triangulo");
var punto = new Punto_1.Punto(1, 1);
var punto2 = new Punto_1.Punto(2, 1);
var punto3 = new Punto_1.Punto(4, 5);
var triangulo = new triangulo_1.Triangulo(punto, punto2, punto3);
console.log(triangulo.calcularLongitudLados(punto, punto2, punto3));
