import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const routerLink : Routes = [
  {path:"", component:HomeComponent},
  {path:"about-link", component:AboutComponent},
  {path:"contact-link", component:ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerLink),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
