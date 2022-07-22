"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(${this.x},${this.y})";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (value) {
        this.x = value;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (value) {
        this.y = value;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Number(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed());
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var dist = Number(Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2)).toFixed());
        return dist;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = -1;
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        for (var i = 0; i < puntos.length; i++) {
            for (var j = 0; j < puntos.length - i - 1; i++) {
                if (this.calcularDistancia(puntos[j]) > this.calcularDistancia(puntos[j + 1])) {
                    var lejano = puntos[j];
                    puntos[j] = puntos[j + 1];
                    puntos[j + 1] = lejano;
                }
            }
        }
    };
    return Punto;
}());
exports.Punto = Punto;
