import { ArrayPipe } from './../shared/array.pipe';
import { HeroService } from './../api/heroes.api';
import { Observable } from 'rxjs/Observable';
import { UIRouter } from '@uirouter/angular';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Hero } from './../core/hero';
import { GetHeroService } from './../core/getHero.service';
import { Transition } from '@uirouter/angular';
import * as HeroActions from "./../store/actions/hero";

interface AppState {
  heroes: Hero[];
}


@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
  providers: [ArrayPipe]
})
export class HeroFormComponent implements OnInit {
  hero: Hero;
  heroesStore: Observable<Hero[]>;

  constructor(private trans: Transition,
    private getHeroService: GetHeroService,
    private heroService: HeroService,
    private arrayPipe: ArrayPipe,
    private store: Store<AppState>) {

    this.heroesStore = this.store.select('heroes');
  }

  ngOnInit() {
    this.heroesStore.subscribe(heroes => {
      if (!heroes || heroes.length === 0) {
        this.heroService.getHeroes()
          .subscribe(heroes => {
            this.loadHeroes(heroes);
            let id = this.trans.params().heroId;
            this.hero = this.getHeroService.getHero(id);
          }
          );
      }else{
        
        let id = this.trans.params().heroId;
        this.hero = this.getHeroService.getHero(id);
      }
    })

  };
  loadHeroes(heroes: Hero[]) {
    this.store.dispatch(new HeroActions.UploadHeroes(this.arrayPipe.transform(heroes)));
  };

  saveHero(hero: Hero) {
    this.store.dispatch(new HeroActions.EditHero(hero));
  };

}
