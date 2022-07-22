"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.print = function () {
        for (var prop in this) {
            switch (prop) {
                case "name":
                    console.log("The characteristics of the mobile ".concat(this.name, " are: \n"));
                    break;
                case "model":
                case "trademark":
                case "sdSize":
                case "color":
                case "is5G":
                case "cameraNumber":
                case "price":
                    console.log("".concat(prop, ": ").concat(eval("this." + prop)));
                    break;
            }
        }
        console.log("");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
