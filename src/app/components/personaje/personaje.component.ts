import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Personaje } from '../../models/pokemons/personajes.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule, MatCardModule, MatGridListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css',
})
export class PersonajeComponent {
  // Cuando moleste por inicializar una variable
  @Input() personaje!: Personaje;
}
