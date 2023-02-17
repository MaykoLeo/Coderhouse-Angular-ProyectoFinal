import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EditarAlumnoModalComponent } from './components/editar-alumno-modal/editar-alumno-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoApellidoNombrePipe } from './pipes/formato-apellido-nombre.pipe';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { LetraTamanioDirective } from './directives/letra-tamanio.directive';
import { EstadoEstiloDirective } from './directives/estado-estilo.directive';
import { BuscarAlumnoPipe } from './pipes/buscar-alumno.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentAreaComponent,
    EditarAlumnoModalComponent,
    FormatoApellidoNombrePipe,
    BooleanoATextoPipe,
    LetraTamanioDirective,
    EstadoEstiloDirective,
    BuscarAlumnoPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
