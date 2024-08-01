import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { Product } from '../../models/pokemons/product.model';
import { ProductComponent } from '../../components/product/product.component';
import { CardComponent } from '../../components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { Personaje } from '../../models/pokemons/personajes.model';

@Component({
  selector: 'app-crud-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    TableComponent,
    ProductComponent,
    CardComponent,
    MatButtonModule
  ],
  templateUrl: './crud-page.component.html',
  styleUrl: './crud-page.component.css'
})
export default class CrudPageComponent implements OnInit{
  title = 'crud';
  http = inject(HttpClient);
  personajes: Personaje[] = [];

  ngOnInit() {
    this.http
      .get<Personaje[]>('http://apimarvelrivals.test/api/personajes/all')
      .subscribe((data) => {
        this.personajes = data;
      });
  }
  goToAdd(){
    window.location.href = '/crudAdd';
  }
}
