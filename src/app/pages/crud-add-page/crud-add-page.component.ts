import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-crud-add-page',
  standalone: true,
  imports: [CardComponent, NavbarComponent],
  templateUrl: './crud-add-page.component.html',
  styleUrl: './crud-add-page.component.css'
})
export default class CrudAddPageComponent {

}
