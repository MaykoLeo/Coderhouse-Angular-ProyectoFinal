import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'buscarAlumno'
})
export class BuscarAlumnoPipe implements PipeTransform {

  transform(alum: Alumno[], buscar: string): Alumno[] {
    return alum.filter((alum) => {
      return alum.alumno.apellido.toLowerCase().includes(buscar.toLowerCase())
    });
  }
}
