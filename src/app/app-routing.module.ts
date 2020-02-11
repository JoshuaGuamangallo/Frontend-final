import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {HomeComponent} from './home/home.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import {SolicitudComponent} from './solicitud/solicitud.component';
import {ConvenioComponent} from './convenio/convenio.component';
import {EntidadComponent} from './entidad/entidad.component';
import {TutorComponent} from './tutor/tutor.component';
import {EstudiaejeComponent} from './estudiaeje/estudiaeje.component';
import {CalificacionComponent} from './calificacion/calificacion.component';
import {UnibeComponent} from './unibe/unibe.component';
import {InicioComponent} from './inicio/inicio.component';
import {MatriculacionComponent} from './matriculacion/matriculacion.component';
import {ContactoComponent} from './contacto/contacto.component';
import {InstitucionComponent} from './institucion/institucion.component';
import {DocumentacionComponent} from './documentacion/documentacion.component';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {
    path: BaseComponent.URL, component: BaseComponent,
    children: [
      {path: EstudianteComponent.URL, component: EstudianteComponent}, {
        path: SolicitudComponent.URL,
        component: SolicitudComponent
      }, {path: ConvenioComponent.URL, component: ConvenioComponent}, {
        path: EntidadComponent.URL,
        component: EntidadComponent
      }, {path: TutorComponent.URL, component: TutorComponent}, {
        path: EstudiaejeComponent.URL,
        component: EstudiaejeComponent
      }, {path: CalificacionComponent.URL, component: CalificacionComponent}, {
        path: UnibeComponent.URL,
        component: UnibeComponent
      }, {path: InicioComponent.URL, component: InicioComponent},
      {path: MatriculacionComponent.URL, component: MatriculacionComponent},
      {path: ContactoComponent.URL, component: ContactoComponent},
      {path: InstitucionComponent.URL, component: InstitucionComponent},
      {path: DocumentacionComponent.URL, component: DocumentacionComponent},
      {path: SeguimientoComponent.URL, component: SeguimientoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
