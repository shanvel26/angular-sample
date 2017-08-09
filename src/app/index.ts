import { createSelector } from 'reselect';
import {storeLogger} from 'ngrx-store-logger';

import * as counter from './counter.reducer';
import {compose} from "@ngrx/core";
import { combineReducers, State } from '@ngrx/store';
import {state} from "@angular/core";

export interface AppState {
  counter: counter.State
}

export const reducers = {
  counter: counter.reducer
}

const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}

export const getCounterState = (state: AppState) => state.counter;
export const getCounterText = createSelector(getCounterState, counter.getCounter);

