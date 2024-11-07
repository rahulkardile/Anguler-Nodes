import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: true
})
export class PowerPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return Math.pow(value, args[0]);
  }

}
