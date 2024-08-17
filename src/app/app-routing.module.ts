import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './Teachers/seller/seller.component';
import { WelcomepageComponent } from './Teachers/welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-page',
    component:SellerComponent
  },
  {
    path: 'welcomepage',
    component: WelcomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
