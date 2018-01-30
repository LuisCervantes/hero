import { OrdinalPipe } from './../../shared/ordinal.pipe';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../../core/hero'; 
import { HeroService } from './../../api/heroes.api';
interface AppState {
  heroes: Hero[];
}
@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [OrdinalPipe]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  emptyUrl: string = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png';
  emptyImg: string = this.heroService.getEmptyImg();
  
  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
  }

}
