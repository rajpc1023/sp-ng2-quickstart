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
var Greeting = (function () {
    function Greeting() {
        this.person = 'John';
    }
    Greeting = __decorate([
        core_1.Component({
            selector: 'greeting',
            template: "\n<label for=\"person-name\">Enter your name here: </label>\n<input type=\"text\" id=\"person-name\" [(ngModel)]=\"person\">\n<hr>\n<h2>Hello, {{ person }}!</h2>"
        }), 
        __metadata('design:paramtypes', [])
    ], Greeting);
    return Greeting;
}());
exports.Greeting = Greeting;
//# sourceMappingURL=greeting.component.js.map