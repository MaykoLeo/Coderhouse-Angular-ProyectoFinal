import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';
import { usuario } from '../models/usuario';


@Pipe({
  name: 'formatoApellidoNombre'
})
export class FormatoApellidoNombrePipe implements PipeTransform {

  transform(formatoNombre: string, nombre: string, apellido: string): string {
    let res: string;

    res = `${apellido} ${nombre}`

    return res;
  }

}
