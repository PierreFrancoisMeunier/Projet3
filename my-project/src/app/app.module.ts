import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HumainsComponent } from './humains/humains.component';
import { HomeComponent } from './home/home.component';


export const ROUTES : Routes = [
  {path:'humains',component: HumainsComponent },
  {path:'home',component: HomeComponent },
  {path:'',component: HomeComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HumainsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
