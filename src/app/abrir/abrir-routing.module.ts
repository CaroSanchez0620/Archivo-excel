import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeleccionarComponent} from "./seleccionar/seleccionar.component";

const routes: Routes = [{
  path: '',
  children: [
    {path: 'Abrir', component:SeleccionarComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbrirRoutingModule { }
