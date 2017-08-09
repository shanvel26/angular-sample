"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var ngrx_store_logger_1 = require("ngrx-store-logger");
var counter = require("./counter.reducer");
var core_1 = require("@ngrx/core");
var store_1 = require("@ngrx/store");
exports.reducers = {
    counter: counter.reducer
};
var developmentReducer = core_1.compose(ngrx_store_logger_1.storeLogger(), store_1.combineReducers)(exports.reducers);
function metaReducer(state, action) {
    return developmentReducer(state, action);
}
exports.metaReducer = metaReducer;
exports.getCounterState = function (state) { return state.counter; };
exports.getCounterText = reselect_1.createSelector(exports.getCounterState, counter.getCounter);
//# sourceMappingURL=index.js.map