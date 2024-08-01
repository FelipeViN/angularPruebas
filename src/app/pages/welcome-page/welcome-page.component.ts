import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/pokemons/product.model';
import { ProductComponent } from '../../components/product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    ProductComponent,
    MatGridListModule,
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export  default class WelcomePageComponent implements OnInit{
  title = 'welcome';
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
