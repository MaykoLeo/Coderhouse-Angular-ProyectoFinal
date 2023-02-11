import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {
  cursos: Curso[] = [
    {
      nombre: 'React', comision: '2378', profesor: 'Jose'
    },
    {
      nombre: 'Angular', comision: '3354', profesor: 'Luis'
    },
    {
      nombre: 'Vue', comision: '3951', profesor: 'Mario'
    },
    {
      nombre: 'Javascript', comision: '1984', profesor: 'Alberto'
    },
    {
      nombre: 'NodeJS', comision: '3864', profesor: 'Juan'
    },
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones']
}
