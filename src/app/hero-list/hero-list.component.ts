import { ArrayPipe } from './../shared/array.pipe';

import { Component, OnInit } from '@angular/core';
import { HeroService } from './../api/heroes.api';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Hero} from './../core/hero';
import * as HeroActions from "./../store/actions/hero";

interface AppState {
  heroes: Hero[];
}

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.scss' ],
  providers: [ArrayPipe]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  heroesStore:  Observable<any>;
  emptyImg: string = this.heroService.getEmptyImg();
  constructor(
    private heroService: HeroService, 
    private store:Store<AppState>,
    private arrayPipe: ArrayPipe) { 

    this.heroesStore = this.store.select('heroes');
  }

  ngOnInit() {
    this.heroesStore.subscribe(heroes => {
      if(!heroes || heroes.length === 0){
        this.getHeroes();
      }
    });
  };

  loadHeroes(heroes: Hero[]){
    this.store.dispatch(new HeroActions.UploadHeroes(heroes));
  };
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.loadHeroes(this.arrayPipe.transform(heroes))
      );
  };

  
}
