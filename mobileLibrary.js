"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (value) {
        this.name = value;
    };
    MobileLibrary.prototype.geLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (value) {
        this.location = value;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (value) {
        this.mobiles = value;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (value) {
        this.totalPrice = value;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles:");
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].print();
        }
        console.log("Price overall: ${this.getTotalPrice()}");
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].getPrice();
        }
        this.setTotalPrice(total);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
