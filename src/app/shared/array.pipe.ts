import { Hero } from './../core/hero';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {
  transform(value: Object): Array<Hero> {
    let result =[];
    let index = 1;
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        var element = value[key];
        element._id = index++;
        result.push(element);
      }
    }
    return result;
  }
}