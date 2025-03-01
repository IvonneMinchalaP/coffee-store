import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { MainPageComponent } from 'src/app/components/main-page/main-page.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { ClientsModifyComponent } from './components/clients/clients-modify/clients-modify.component';
import { ClientsOptionsComponent } from './components/clients/clients-options/clients-options.component';
import { AddProductsComponent } from './components/Inventary/products/add-products/add-products.component';
import { ModifyProductsComponent } from './components/Inventary/products/modify-products/modify-products.component';
import { ProductsViewComponent } from './components/Inventary/products/products-view/products-view.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ProductsDetailsComponent } from './components/Inventary/products/products-details/products-details.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  /* Authentication */
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  /* Rutas usuario ADM */
  { path: 'adm-users', component: UsersListComponent },
  /* Rutas Producto */
  {path: 'adm-productos/add', component: AddProductsComponent},
  {path: 'adm-productos/view', component: ProductsViewComponent},
  {path: 'adm-productos/modify', component:ModifyProductsComponent},
  /* Rutas Cliente */
  { path: 'account', component: ClientsOptionsComponent },
  { path: 'edit-user', component: ClientsModifyComponent },

  { path: 'carrito', component:  ComprasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
