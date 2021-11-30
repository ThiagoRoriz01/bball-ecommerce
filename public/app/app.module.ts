import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BonesComponent } from './bones/bones.component';
import { BolasComponent } from './bolas/bolas.component';
import {MatBreadcrumbModule} from "mat-breadcrumb";
import { HomeComponent } from './home/home.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { TenisComponent } from './tenis/tenis.component';
import { Chinelosomponent } from './chinelos/chinelos.component';
import { MeiasComponent } from './meias/meias.component';
import { RegatasComponent } from './regatas/regatas.component';
import { BermudasComponent } from './bermudas/bermudas.component';
import { JaquetasComponent } from './jaquetas/jaquetas.component';
import { CamisetasComponent } from './camisetas/camisetas.component';



@NgModule({
  declarations: [
    AppComponent,
    BonesComponent,
    BolasComponent,
    HomeComponent,
    AcessoriosComponent,
    TenisComponent,
    Chinelosomponent,
    MeiasComponent,
    RegatasComponent,
    BermudasComponent,
    JaquetasComponent,
    CamisetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
