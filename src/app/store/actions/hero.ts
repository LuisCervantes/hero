
import {Action} from '@ngrx/store';
import {Hero} from './../../core/hero'

export const UPDALOAD_HEROES = '[Heroes] upload';
export const EDIT_HERO = '[Hero] edit';

export class UploadHeroes  implements Action{
    readonly type = UPDALOAD_HEROES;
    constructor(public payload: Hero[]){}
}

export class EditHero implements Action{
    readonly type = EDIT_HERO;
    constructor(public payload: Hero){}
}

export type All =
UploadHeroes | EditHero;