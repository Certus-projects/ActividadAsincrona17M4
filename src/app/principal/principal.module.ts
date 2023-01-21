import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    TablaComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    TablaComponent,
    EditarProductoComponent
  ]
})
export class PrincipalModule { }
