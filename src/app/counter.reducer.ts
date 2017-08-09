import {Action} from '@ngrx/store';

export interface State {
  text: string,
}

export const initialState: State = {
  text: 'Shan',
};


class AddTextAction implements Action {
  type = 'ADD_TEXT';
  constructor(public payload: Object) {}
}

export function reducer(state = initialState, action: AddTextAction): State {
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

export const getCounter = (state: State) => state.text;
