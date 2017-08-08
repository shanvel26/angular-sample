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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var counter_1 = require("./counter");
var CounterComponent = (function () {
    function CounterComponent(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    CounterComponent.prototype.increment = function () {
        this.store.dispatch({ type: counter_1.INCREMENT });
    };
    CounterComponent.prototype.decrement = function () {
        this.store.dispatch({ type: counter_1.DECREMENT });
    };
    CounterComponent.prototype.reset = function () {
        this.store.dispatch({ type: counter_1.RESET });
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<button (click)=\"increment()\">Increment</button>\n\t\t<div>Current Count: {{ counter | async }}</div>\n\t\t<button (click)=\"decrement()\">Decrement</button>\n\n\t\t<button (click)=\"reset()\">Reset Counter</button>\n\t"
    }),
    __metadata("design:paramtypes", [store_1.Store])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map