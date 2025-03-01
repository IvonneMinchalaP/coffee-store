import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatRow } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/entities/products';
import { AddProductsComponent } from '../add-products/add-products.component';
import { DeleteProductsComponent } from '../delete-products/delete-products.component';
import { ModifyProductsComponent } from '../modify-products/modify-products.component';
import { ProductsService } from 'src/app/services/products/products.service';
import { DataSource } from '@angular/cdk/collections';
import { ProductsDetailsComponent } from '../products-details/products-details.component';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {

  //Filtro de Busqueda
  filter: any;

  //Datos
  dataSource: Product[] = [];
  displayedColumns: string[] = ['Codigo', 'Nombre', 'Precio', 'Categoria', 'Estado', 'Descripcion', 'Botones'];

  constructor(private productsService: ProductsService, private dialog: MatDialog) {
    this.dataSource = this.productsService.getDatos();
  };
  openDialogAdd(){
    this.openDialogAdd();
    
  }

  openProductModify(element: Product) {
    this.dialog.open(ModifyProductsComponent, {
      width: '50%',
      data: {
        Product: element
      }
    });
  }

  openProductDelete(element: Product) {
    this.dialog.open(DeleteProductsComponent, {
      width: '50%',
      data: {
        Product: element
      }
    });
  }

  Searcher() {
   this.dataSource= this.filter;
  }
 

  OpenProductAdd(){

  }
  openProductdDetail(element: Product){
    this.dialog.open(ProductsDetailsComponent,
      )

  }

 
}
