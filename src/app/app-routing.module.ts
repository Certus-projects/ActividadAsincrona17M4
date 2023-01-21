import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoComponent } from './principal/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
