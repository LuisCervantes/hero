
import { HeroListComponent } from './../hero-list/hero-list.component';
import { HeroFormComponent } from './../hero-form/hero-form.component';
import {Transition} from "@uirouter/angular";

/** States */
export const mainState = { 
  name: 'main', 
  url: '/main',  
  component: HeroListComponent 
}; 

export const editorState = {
  name: 'editHero',
  url: '/editHero/:heroId',
  component: HeroFormComponent,
};