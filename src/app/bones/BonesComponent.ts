import { Component } from '@angular/core';


@Component({
  selector: 'bones',
  template: `
  <ul class="breadcrumb">
  <li><a routerLinkActive="active" 
  routerLink="/home">Home</a></li>
  <li>bones</li>
</ul>`,
})
export class BonesComponent {
}
