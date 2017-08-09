"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    text: 'Shan',
};
var AddTextAction = (function () {
    function AddTextAction(payload) {
        this.payload = payload;
        this.type = 'ADD_TEXT';
    }
    return AddTextAction;
}());
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    console.log('called reducer...', action.type);
    switch (action.type) {
        case 'ADD_TEXT':
            return Object.assign({}, state, {
                text: action.payload
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getCounter = function (state) { return state.text; };
//# sourceMappingURL=counter.reducer.js.map