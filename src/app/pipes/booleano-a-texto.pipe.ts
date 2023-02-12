import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoATexto'
})
export class BooleanoATextoPipe implements PipeTransform {

  transform(booleano: boolean, ...args: any[]): string {
    if (booleano) {
      return args[0];
    } else {
      return args[1];
    };
  }

}
