import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NombreComponent } from './nombre/nombre.component';
import { AngularCommonsModule } from '../layouts/angular-commons.module';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    NoticiasComponent,
    ToolbarComponent,
    NombreComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularCommonsModule
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    NoticiasComponent,
    ToolbarComponent,
    NombreComponent
  ]
})
export class ComponentsModule { }
