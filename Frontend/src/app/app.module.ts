import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeacherLoginRegisterComponent } from './Teachers/TeachersAuth/teacherLoginRegister.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WelcomepageComponent } from './Teachers/welcomepage/welcomepage.component';
import { ReversePipe } from './Teachers/TeachersAuth/teacherLoginRegister.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeacherLoginRegisterComponent,
    HomeComponent,
    WelcomepageComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
