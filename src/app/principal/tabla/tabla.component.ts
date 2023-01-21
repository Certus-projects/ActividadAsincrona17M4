import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  constructor(private router: Router) {}
  products = [
    {
      id: 1,
      codigo: 1,
      descripcion: 'Galletas',
      precioCompra: 10,
      precioVenta: 15,
      ganancia: 5,
      existencia: 100,
    },
    {
      id: 2,
      codigo: 2,
      descripcion: 'Chocolates',
      precioCompra: 20,
      precioVenta: 25,
      ganancia: 5,
      existencia: 100,
    },
    {
      id: 3,
      codigo: 3,
      descripcion: 'Caramelos',
      precioCompra: 30,
      precioVenta: 35,
      ganancia: 5,
      existencia: 100,
    },
  ];

  editar(product: any) {
    this.router.navigate(['edit', JSON.stringify(product)]);
  }
}
