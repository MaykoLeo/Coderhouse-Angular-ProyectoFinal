import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarAlumnoModalComponent } from '../editar-alumno-modal/editar-alumno-modal.component';



@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {
  alumnos: Alumno[] = [
    {
      nombre: 'Jose', curso: 'React', comision: '2378'
    },
    {
      nombre: 'Luis', curso: 'Angular', comision: '3354'
    },
    {
      nombre: 'Mario', curso: 'Vue', comision: '3951'
    },
    {
      nombre: 'Alberto', curso: 'Javascript', comision: '1984'
    },
    {
      nombre: 'Juan', curso: 'NodeJS', comision: '3864'
    },
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos)
  columnas: string[] = ['nombre', 'curso', 'comision', 'acciones']

  constructor(
    private dialog: MatDialog
  ) {

  }

  openModal(alumnos: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoModalComponent, {
      data: alumnos,
    });

  }
}
