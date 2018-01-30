import { OrdinalPipe } from './shared/ordinal.pipe';
import { ArrayPipe } from './shared/array.pipe';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Store, StoreModule} from '@ngrx/store';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent }         from './app.component';
import { HeroListReducer } from "./store/reducers/hero-list";
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroService } from './api/heroes.api';
import {UIRouterModule} from "@uirouter/angular";
import { HeroDetailComponent } from './hero-list/hero/hero.component';
import {mainState, editorState} from './core/route.states';
import {GetHeroService} from './core/getHero.service';
import {uiRouterConfigFn} from './core/route.config';

let INITIAL_STATES =  [mainState, editorState];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({heroes: HeroListReducer}),
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroFormComponent,
    AppComponent,
    OrdinalPipe,
    ArrayPipe
  ],
  providers: [ HeroService, GetHeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
