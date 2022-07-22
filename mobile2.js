"use strict";
exports.__esModule = true;
exports.Mobile2 = void 0;
var Mobile2 = /** @class */ (function () {
    function Mobile2(name, model, trademark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile2.prototype.print = function () {
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
    Mobile2.prototype.getName = function () {
        return this.name;
    };
    Mobile2.prototype.setName = function (value) {
        this.name = value;
    };
    Mobile2.prototype.getModel = function () {
        return this.model;
    };
    Mobile2.prototype.setModel = function (value) {
        this.model = value;
    };
    Mobile2.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile2.prototype.setTrademark = function (value) {
        this.trademark = value;
    };
    Mobile2.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile2.prototype.seSdSize = function (value) {
        this.sdSize = value;
    };
    Mobile2.prototype.getColor = function () {
        return this.color;
    };
    Mobile2.prototype.setColor = function (value) {
        this.color = value;
    };
    Mobile2.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile2.prototype.setIs5G = function (value) {
        this.is5G = value;
    };
    Mobile2.prototype.geCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile2.prototype.setCameraNumber = function (value) {
        this.cameraNumber = value;
    };
    Mobile2.prototype.getPrice = function () {
        return this.price;
    };
    Mobile2.prototype.setPrice = function (value) {
        this.price = value;
    };
    return Mobile2;
}());
exports.Mobile2 = Mobile2;
