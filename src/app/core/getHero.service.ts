import { Hero } from './../core/hero';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
interface AppState {
    heroes: Hero[];
}

@Injectable()
export class GetHeroService {

    heroes: any;
    constructor(private store: Store<AppState>) {
        this.store.select('heroes').subscribe(heroes => this.heroes = heroes)
    }

    /** GET heroes from the server */
    getHero(id): Hero {
        let heroes = this.formatArray(this.heroes);
        let hero: Hero = new Hero();
       heroes.forEach(element => {
            if(element._id == id){
                hero = element;
            }
        });;
        return hero;
    }
   
    formatArray(val){
        let result =[];
        let index = 1;
        for (var key in val) {
          if (val.hasOwnProperty(key)) {
            var element = val[key];
            element._id = index++;
            result.push(element);
          }
        }
        return result;
      }
}

