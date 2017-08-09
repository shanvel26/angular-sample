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
var CounterComponent = (function () {
    // public cnt: Observable<any>;
    function CounterComponent(_store) {
        var _this = this;
        this._store = _store;
        _store.select('counter').subscribe(function (state) {
            _this.text = state.text;
            console.log('state=', _this.text);
        });
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.increment = function () {
        console.log('increment called...');
        // console.log(this._store)
        this._store.dispatch({ type: 'ADD_TEXT', payload: 'Shanmugavel S' });
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<button (click)=\"increment()\">Increment</button>\n\t\t<div>Current Count: {{ counter | async }}</div>\n\t\t<button (click)=\"decrement()\">Decrement</button>\n\n\t\t<button (click)=\"reset()\">Reset Counter</button>\n\t\t<div>From other comp: {{text}}</div>\n\t"
    }),
    __metadata("design:paramtypes", [store_1.Store])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map