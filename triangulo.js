"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    Triangulo.prototype.calcularLongitudLados = function (p1, p2, p3) {
        var lengthLados = [];
        lengthLados.push(p1.calcularDistancia(p2));
        lengthLados.push(p2.calcularDistancia(p3));
        lengthLados.push(p3.calcularDistancia(p1));
        return lengthLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
