import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarAlumnoModalComponent } from '../editar-alumno-modal/editar-alumno-modal.component';
import { BuscarAlumnoPipe } from "src/app/pipes/buscar-alumno.pipe";
import { usuario } from '../../models/usuario';



@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {
  buscar!: string;
  alumnos: Alumno[] = [
    {
      alumno: {
        nombre: 'Jose',
        apellido: 'Paez',
        correo: 'jose@gmail.com',
        estado: true,
        fechaRegistro: new Date(2022, 6, 3),
      },
      curso: 'React',
      comision: '2378'
    },
    {
      alumno: {
        nombre: 'Luis',
        apellido: 'Fernandez',
        correo: 'Luis@gmail.com',
        estado: true,
        fechaRegistro: new Date(2023, 0, 28),
      },
      curso: 'Angular',
      comision: '3354'
    },
    {
      alumno: {
        nombre: 'Mario',
        apellido: 'Ramos',
        correo: 'Mario@gmail.com',
        estado: false,
        fechaRegistro: new Date(2021, 10, 16),
      },
      curso: 'Vue',
      comision: '3951'
    },
    {
      alumno: {
        nombre: 'Alberto',
        apellido: 'Diaz',
        correo: 'Alberto@gmail.com',
        estado: false,
        fechaRegistro: new Date(2022, 8, 2),
      },
      curso: 'Javascript',
      comision: '1984'
    },
    {
      alumno: {
        nombre: 'Juan',
        apellido: 'Merlo',
        correo: 'Juan@gmail.com',
        estado: true,
        fechaRegistro: new Date(2022, 11, 24),
      },
      curso: 'Javascript',
      comision: '3864'
    },

  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos)
  columnas: string[] = ['nombre', 'curso', 'comision', 'estado', 'acciones']

  constructor(
    private dialog: MatDialog,
    private buscarAlum: BuscarAlumnoPipe,
  ) {

  }


  openModal(alumnos: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoModalComponent, {
      data: alumnos,
    });
  }


  applyFilter() {
    this.dataSource.data = this.buscarAlum.transform(this.alumnos, this.buscar);
  }
}
