import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEmpleadorComponent } from './Components/perfil-empleador/perfil-empleador.component';


const routes: Routes = [
  {path: 'Perfilempleador', component: PerfilEmpleadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
