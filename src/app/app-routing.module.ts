import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherLoginRegisterComponent } from './Teachers/TeachersAuth/teacherLoginRegister.component';
import { WelcomepageComponent } from './Teachers/welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'teachers-page',
    component:TeacherLoginRegisterComponent
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
