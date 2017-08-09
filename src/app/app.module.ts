import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { CounterComponent } from './counter.component';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from "@ngrx/store";
import { compose } from '@ngrx/core';

import {metaReducer} from "./index";
import { reducer } from './counter.reducer';

import { combineReducers} from "@ngrx/store";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({'counter': reducer}),
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    CounterComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})

export class AppModule { }
