import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  http = inject(HttpClient);

  productAdd(title: string, price: string, description: string, category: string) {
    const newProduct = {
      title: title,
      price: parseFloat(price),
      description: description,
      image: 'https://i.pravatar.cc',
      category: category,
    };

    this.http.post('https://fakestoreapi.com/products', newProduct)
      .subscribe(response => {
        console.log(response);
      });
  }
}
