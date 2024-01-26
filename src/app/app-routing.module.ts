import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { ProductsComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateComponent } from './update/update.component';
import { DataUsersComponent } from './data-users/data-users.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
   
   { path: 'login',component :LoginComponent  },
   { path: 'registre',component :RegistreComponent  },
   { path: 'products', component: ProductsComponent },
   { path: '', component:HomeComponent},
   { path: 'newProduct', component:NewProductComponent  },
   { path: 'updateProduct/:id', component:UpdateComponent},
   { path: 'dataUsers' , component:DataUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
