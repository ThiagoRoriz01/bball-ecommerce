import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegatasComponent } from './regatas/regatas.component';
import { AppComponent } from './app.component';
import { TenisComponent } from './tenis/tenis.component';
import { JaquetasComponent } from './jaquetas/jaquetas.component';
import { MeiasComponent } from './meias/meias.component';
import { HomeComponent } from './home/home.component';
import { BermudasComponent } from './bermudas/bermudas.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { Chinelosomponent } from './chinelos/chinelos.component';
import { BolasComponent } from './bolas/bolas.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { BonesComponent } from './bones/bones.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bones',
    component: BonesComponent,
},
{
  path: "bolas",
  component: BolasComponent
},
{
  path:"acessorios",
  component: AcessoriosComponent
},
{
  path: "tenis",
  component: TenisComponent
},
{
  path: "chinelos",
  component: Chinelosomponent
},
{
  path:"meias",
  component: MeiasComponent
},
{
  path:"regatas",
  component: RegatasComponent
},
{
  path:"bermudas",
  component: BermudasComponent
},
{
  path:"jaquetas",
  component: JaquetasComponent
},
{
  path:"camisetas",
  component: CamisetasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
