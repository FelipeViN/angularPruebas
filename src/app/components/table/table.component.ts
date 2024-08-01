import { Component, Input, OnInit, inject } from '@angular/core';
import { Personaje } from '../../models/pokemons/personajes.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  http = inject(HttpClient);
  @Input() personajes: Personaje[] = [];
  displayedColumns: string[] = [
    'heroname',
    'hero_img',
    'name',
    'role',
    'description',
    'primaryAtack',
    'pA_img',
    'secondaryAtack',
    'sA_img',
    'Ability_1',
    'a1_img',
    'Ability_2',
    'a2_img',
    'Ability_3',
    'a3_img',
    'UltimateAbility',
    'a4_img',
    'actions'
  ];
  dataSource!: MatTableDataSource<Personaje>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.personajes);
    this.fetchPersonajes();
  }

  fetchPersonajes() {
    this.http.get<Personaje[]>('http://apimarvelrivals.test/api/personajes/all')
      .subscribe((data) => {
        this.dataSource.data = data;
      });
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePersonaje(personaje: Personaje) {
    this.http.delete(`http://apimarvelrivals.test/api/personajes/destroy/${personaje.id}`)
      .subscribe(response => {
        console.log(response);
        this.dataSource.data = this.dataSource.data.filter(p => p.id !== personaje.id);
      });
  }

  updatePersonaje() {
    let heronameInput = document.getElementById('idHeroname') as HTMLInputElement;
    let heroImgInput = document.getElementById('idHeroImg') as HTMLInputElement;
    let nameInput = document.getElementById('idName') as HTMLInputElement;
    let roleInput = document.getElementById('idRole') as HTMLInputElement;
    let descInput = document.getElementById('idDescription') as HTMLInputElement;
    let primaryAttackInput = document.getElementById('idPrimaryAttack') as HTMLInputElement;
    let paImgInput = document.getElementById('idPAImg') as HTMLInputElement;
    let secondaryAttackInput = document.getElementById('idSecondaryAttack') as HTMLInputElement;
    let saImgInput = document.getElementById('idSAImg') as HTMLInputElement;
    let ability1Input = document.getElementById('idAbility1') as HTMLInputElement;
    let a1ImgInput = document.getElementById('idA1Img') as HTMLInputElement;
    let ability2Input = document.getElementById('idAbility2') as HTMLInputElement;
    let a2ImgInput = document.getElementById('idA2Img') as HTMLInputElement;
    let ability3Input = document.getElementById('idAbility3') as HTMLInputElement;
    let a3ImgInput = document.getElementById('idA3Img') as HTMLInputElement;
    let ultimateAbilityInput = document.getElementById('idUltimateAbility') as HTMLInputElement;
    let a4ImgInput = document.getElementById('idA4Img') as HTMLInputElement;

    let updatedPersonaje = {
      heroname: heronameInput.value,
      hero_img: heroImgInput.value,
      name: nameInput.value,
      role: roleInput.value,
      description: descInput.value,
      primaryAtack: primaryAttackInput.value,
      pA_img: paImgInput.value,
      secondaryAtack: secondaryAttackInput.value,
      sA_img: saImgInput.value,
      Ability_1: ability1Input.value,
      a1_img: a1ImgInput.value,
      Ability_2: ability2Input.value,
      a2_img: a2ImgInput.value,
      Ability_3: ability3Input.value,
      a3_img: a3ImgInput.value,
      UltimateAbility: ultimateAbilityInput.value,
      a4_img: a4ImgInput.value,
    };

    let selectedPersonaje = this.selectedPersonaje;

    if (selectedPersonaje) {
      this.http.put(`http://apimarvelrivals.test/api/personajes/update/${selectedPersonaje.id}`, updatedPersonaje)
        .subscribe(response => {
          console.log(response);
          let index = this.dataSource.data.findIndex(p => p.id === selectedPersonaje.id);
          if (index !== -1) {
            this.dataSource.data[index] = { ...selectedPersonaje, ...updatedPersonaje };
            this.dataSource._updateChangeSubscription(); 
          }
        });
    }
  }

  addPersonaje() {
    let heronameInput = document.getElementById('idHeroname') as HTMLInputElement;
    let heroImgInput = document.getElementById('idHeroImg') as HTMLInputElement;
    let nameInput = document.getElementById('idName') as HTMLInputElement;
    let roleInput = document.getElementById('idRole') as HTMLInputElement;
    let descInput = document.getElementById('idDescription') as HTMLInputElement;
    let primaryAttackInput = document.getElementById('idPrimaryAttack') as HTMLInputElement;
    let paImgInput = document.getElementById('idPAImg') as HTMLInputElement;
    let secondaryAttackInput = document.getElementById('idSecondaryAttack') as HTMLInputElement;
    let saImgInput = document.getElementById('idSAImg') as HTMLInputElement;
    let ability1Input = document.getElementById('idAbility1') as HTMLInputElement;
    let a1ImgInput = document.getElementById('idA1Img') as HTMLInputElement;
    let ability2Input = document.getElementById('idAbility2') as HTMLInputElement;
    let a2ImgInput = document.getElementById('idA2Img') as HTMLInputElement;
    let ability3Input = document.getElementById('idAbility3') as HTMLInputElement;
    let a3ImgInput = document.getElementById('idA3Img') as HTMLInputElement;
    let ultimateAbilityInput = document.getElementById('idUltimateAbility') as HTMLInputElement;
    let a4ImgInput = document.getElementById('idA4Img') as HTMLInputElement;

    let newPersonaje = {
      heroname: heronameInput.value,
      hero_img: heroImgInput.value,
      name: nameInput.value,
      role: roleInput.value,
      description: descInput.value,
      primaryAtack: primaryAttackInput.value,
      pA_img: paImgInput.value,
      secondaryAtack: secondaryAttackInput.value,
      sA_img: saImgInput.value,
      Ability_1: ability1Input.value,
      a1_img: a1ImgInput.value,
      Ability_2: ability2Input.value,
      a2_img: a2ImgInput.value,
      Ability_3: ability3Input.value,
      a3_img: a3ImgInput.value,
      UltimateAbility: ultimateAbilityInput.value,
      a4_img: a4ImgInput.value,
    };

    this.http.post<Personaje>('http://apimarvelrivals.test/api/personajes/store', newPersonaje)
      .subscribe(response => {
        console.log(response);
        this.dataSource.data = [...this.dataSource.data, response];
        this.dataSource._updateChangeSubscription(); 
      });
  }

  selectedPersonaje!: Personaje;

  selectPersonaje(personaje: Personaje) {
    this.selectedPersonaje = personaje;

    let heronameInput = document.getElementById('idHeroname') as HTMLInputElement;
    let heroImgInput = document.getElementById('idHeroImg') as HTMLInputElement;
    let nameInput = document.getElementById('idName') as HTMLInputElement;
    let roleInput = document.getElementById('idRole') as HTMLInputElement;
    let descInput = document.getElementById('idDescription') as HTMLInputElement;
    let primaryAttackInput = document.getElementById('idPrimaryAttack') as HTMLInputElement;
    let paImgInput = document.getElementById('idPAImg') as HTMLInputElement;
    let secondaryAttackInput = document.getElementById('idSecondaryAttack') as HTMLInputElement;
    let saImgInput = document.getElementById('idSAImg') as HTMLInputElement;
    let ability1Input = document.getElementById('idAbility1') as HTMLInputElement;
    let a1ImgInput = document.getElementById('idA1Img') as HTMLInputElement;
    let ability2Input = document.getElementById('idAbility2') as HTMLInputElement;
    let a2ImgInput = document.getElementById('idA2Img') as HTMLInputElement;
    let ability3Input = document.getElementById('idAbility3') as HTMLInputElement;
    let a3ImgInput = document.getElementById('idA3Img') as HTMLInputElement;
    let ultimateAbilityInput = document.getElementById('idUltimateAbility') as HTMLInputElement;
    let a4ImgInput = document.getElementById('idA4Img') as HTMLInputElement;

    heronameInput.value = personaje.heroname;
    heroImgInput.value = personaje.hero_img;
    nameInput.value = personaje.name;
    roleInput.value = personaje.role;
    descInput.value = personaje.description;
    primaryAttackInput.value = personaje.primaryAtack;
    paImgInput.value = personaje.pA_img;
    secondaryAttackInput.value = personaje.secondaryAtack;
    saImgInput.value = personaje.sA_img;
    ability1Input.value = personaje.Ability_1;
    a1ImgInput.value = personaje.a1_img;
    ability2Input.value = personaje.Ability_2;
    a2ImgInput.value = personaje.a2_img;
    ability3Input.value = personaje.Ability_3;
    a3ImgInput.value = personaje.a3_img;
    ultimateAbilityInput.value = personaje.UltimateAbility;
    a4ImgInput.value = personaje.a4_img;
  }
}
