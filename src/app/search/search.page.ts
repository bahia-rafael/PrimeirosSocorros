import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
  
  ngOnInit() {
  }


  constructor() {
    this.initializeItems();
  }

  searchQuery: string = '';
  items: string[];

  initializeItems() {
    this.items = [
      'Animais Peçonhentos',
      'Convulsão',
      'Corpo Estranho nos Olhos',
      'Desmaio',
      'Desobstrução das Vias Aéreas',
      'Epilepsia',
      'Ferimentos Externos',
      'Hemorragia Externa',
      'Hemorragia Interna',
      'Hemorragia Nasal',
      'Insolação',
      'Intermação',
      'Intoxicações e envenenamentos',
      'Parada Cardiorrespiratória',
      'Queimaduras 1º Grau',
      'Queimaduras 2º Grau (<20%)',
      'Queimaduras 2º Grau (>20%)',
      'Queimaduras 3º Grau',
      'Queimaduras elétricas',
      'Trauma Abdominal',
      'Trauma de face',
      'Trauma Músculo Esquelético',
      'Trauma Ocular',
      'Trauma Raquimedular',
      'Trauma Torácico',
      'Traumas',
      'Traumatismo Crânio Encefálico',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}