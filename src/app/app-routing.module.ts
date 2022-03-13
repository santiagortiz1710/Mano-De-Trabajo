import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './Components/home/home.component';
import { PerfilEmpleadorComponent } from './Components/perfil-empleador/perfil-empleador.component';


const routes: Routes = [
  {path: 'Perfilempleador', component: PerfilEmpleadorComponent },
  {path: '', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
