"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        // sample data to start app
        this.amount = 100.29;
        this.allyMonths = 12;
        this.allyRate = 1;
        this.allyDays = 30;
        this.total = 0;
    }
    AppComponent.prototype.outComeYearly = function () {
        this.total = this.amount * this.allyRate / 100;
        return this.total;
    };
    AppComponent.prototype.outComeMonthly = function () {
        this.total = this.amount * this.allyRate / 100 / this.allyMonths;
        return this.total;
    };
    AppComponent.prototype.outComeDaily = function () {
        this.total = this.amount * this.allyRate / 100 / this.allyMonths / this.allyDays;
        return this.total;
    };
    AppComponent.prototype.outComeSemi = function () {
        this.total = this.amount * this.allyRate / 100 / 2;
        return this.total;
    };
    AppComponent.prototype.outComeQuarterly = function () {
        this.total = this.amount * this.allyRate / 100 / 2 / 2;
        return this.total;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bank-interest-app',
            templateUrl: './home.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map