import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'facilities', component: FacilitiesComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
