import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { ProductsComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
   
   { path: 'login',component :LoginComponent  },
   { path: '',component :RegistreComponent  },
   { path: 'products', component: ProductsComponent },
   { path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
