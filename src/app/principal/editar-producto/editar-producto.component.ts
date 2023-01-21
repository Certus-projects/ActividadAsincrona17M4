import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent {
  constructor(private rutaActiva: ActivatedRoute) {}
  cat = this.rutaActiva.snapshot.params['id'];
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
  currentProduct: any;
  ngOnInit(): void {
    this.currentProduct = this.products.find((product) => {
      return product.id == this.cat;
    });
  }

  updateProduct() {
    console.log(this.currentProduct);
  }
}
