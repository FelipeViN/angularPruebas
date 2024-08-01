import { Component, Input, input } from '@angular/core';
import { Pokemon } from '../../models/pokemons/pokemon.model';
import { CommonModule,NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input() pokemon!: Pokemon;
}
