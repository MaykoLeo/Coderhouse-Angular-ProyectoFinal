import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-alumno-modal',
  templateUrl: './editar-alumno-modal.component.html',
  styleUrls: ['./editar-alumno-modal.component.css']
})
export class EditarAlumnoModalComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(data.alumno.nombre),
      apellido: new FormControl(data.alumno.apellido),
      curso: new FormControl(data.curso),
      comision: new FormControl(data.comision)
    })
  }
}
