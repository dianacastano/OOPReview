"use strict";
exports.__esModule = true;
var mobile2_1 = require("./mobile2");
var nokia3210 = new mobile2_1.Mobile2("Nokia3210", "3210", "Nokia", "128MB", "Negro", false, 0, 50);
var iphone3g = new mobile2_1.Mobile2("Iphone3g", "i3g", "Apple", "16GB", "Blanco", false, 0, 150);
var galaxy10 = new mobile2_1.Mobile2("Galaxy 10", "GT-I900", "Samsung", "16GB", "Rosa", false, 0, 250);
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
nokia3210.is5G = true; // muestra un error porque se le han cambiado los atributos
nokia3210.cameraNumber = 4; // para poderlo hacer deberiamos llamar un metodo setter y getter
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
var arr = [nokia3210, iphone3g, galaxy10];
for (var i = 0; i < arr.length; i++) {
    arr[i].print();
}
