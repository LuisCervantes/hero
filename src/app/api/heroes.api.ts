import { Hero } from './../core/hero';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'https://udem.herokuapp.com/heroes';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getEmptyImg (): string {
    let img =  Math.trunc(Math.random()*1000)%2===0?"1":"2"
    return "../src/img/empty" + img + ".png";
  }

}

