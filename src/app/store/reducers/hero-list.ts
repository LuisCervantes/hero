import * as HeroActions from "./../actions/hero";
import {Hero} from "./../../core/hero";
import {Action} from '@ngrx/store';

export type Actions = HeroActions.All;

const defaultState: Hero[] = [];

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}


const editState = (state, data) => {
    let newData= [...state];
    newData.forEach(element => {
        if(element.id === data.id){
            element = data;
        }
    });
    return Object.assign({}, state, newData);
}

export function HeroListReducer(state: Hero[] = defaultState, action: Action){
switch (action.type) {
    case HeroActions.UPDALOAD_HEROES:
        return newState(state, action.payload);

    case HeroActions.EDIT_HERO:
        return editState(state, action.payload);
    default:
        break;
}
}