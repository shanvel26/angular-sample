import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import * as fromRoot from './index';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE } from './counter.action';

@Component({
	selector: 'my-app',
	template: `
		<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
		<div>From other comp: {{text}}</div>
	`
})

export class CounterComponent implements OnInit {
	private text: string;
	// public cnt: Observable<any>;

	constructor(private _store: Store<fromRoot.AppState>) {
		_store.select('counter').subscribe((state) => {
			this.text = state.text;
			console.log('state=', this.text)
		})
	}

  ngOnInit() {
    
  }

	increment(){
		console.log('increment called...');
		// console.log(this._store)
		this._store.dispatch({ type: 'ADD_TEXT', payload: 'Shanmugavel S' });



	}
}
