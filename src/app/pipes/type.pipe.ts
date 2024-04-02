import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
  standalone: true
})
export class TypePipe implements PipeTransform {

  transform(value: number): string {
    if(value == 1) return 'PERRO'
    else if(value == 2) return 'GATO'
    else return 'HAMSTER'
  }

}
