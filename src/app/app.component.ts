import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { Product } from './models/pokemons/product.model';
import { ProductComponent } from './components/product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    LoginComponent,
    NavbarComponent,
    PokemonComponent,
    TableComponent,
    ProductComponent,
    MatGridListModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'examenUniad2';
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
