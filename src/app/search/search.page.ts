import { ComplementaresPage } from './../complementares/complementares.page';
import { HomePage } from './../home/home.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  @ViewChild('searchInput') inputElement: IonInput;

  ngOnInit() {
  }


  constructor(private keyboard: Keyboard, private router: Router) {
    this.initializeItems();

    setTimeout(() => {
      this.inputElement.setFocus();
    }, 1500);
  }

  onChange(keyCode) {
    this.keyboard.hide();
  }

  searchQuery: string = '';
  items: string[];

  initializeItems() {
    this.items = [
      'Afogamento',
      'Animais Peçonhentos (Aranhas e insetos)',
      'Animais Peçonhentos (Cobras)',
      'Convulsão',
      'Corpo Estranho nos Olhos',
      'Desmaio',
      'Desobstrução das vias aéreas',
      'Insolação',
      'Intermação',
      'Epilepsia',
      'Hemorragia Externa',
      'Hemorragia Interna',
      'Hemorragia Nasal',
      'Intoxicações e Envenenamentos (Aspiração)',
      'Intoxicações e Envenenamentos (Ingestão)',
      'Intoxicações e Envenenamentos (Pele)',
      'Parada Cardíaca',
      'Queimaduras: 1° Grau',
      'Queimaduras: 2° Grau (Profunda)',
      'Queimaduras: 2° Grau (Superficial)',
      'Queimaduras: 3° Grau',
      'Queimaduras Elétricas',
      'Transporte de acidentados (Uma pessoa)',
      'Transporte de acidentados (Duas Pessoas)',
      'Transporte de acidentados (Três Pessoas)',
      'Transporte de acidentados (Quatro Pessoas)',
      'Trauma Abdominal',
      'Trauma de Face',
      'Trauma Músculo Esquelético',
      'Trauma Ocular',
      'Trauma Raquimedular',
      'Trauma Torácico',
      'Traumatismo Cranio encefálico'
    ];
  }

  openTopico(titulo: string) {

    var icone;

    if (titulo.includes('Queimaduras: ')) {

      titulo = titulo.replace("Queimaduras: ", "");
      icone = ComplementaresPage.searchTopico(titulo);

    } else if (titulo.includes("Intoxicações e Envenenamentos (")) {

      titulo = titulo.replace("Intoxicações e Envenenamentos (", "").replace(")", "");
      icone = ComplementaresPage.searchTopico(titulo);

    } else if (titulo.includes('Animais Peçonhentos (')) {

      titulo = titulo.replace('Animais Peçonhentos (', "").replace(")", "");
      icone = ComplementaresPage.searchTopico(titulo);

    } else if (titulo.includes("Transporte de acidentados (")) {

      titulo = titulo.replace("Transporte de acidentados (", "").replace(")", "");
      icone = ComplementaresPage.searchTopico(titulo);

    } else {
      icone = HomePage.searchTopico(titulo);

      if (icone == null) {
        icone = ComplementaresPage.searchTopico(titulo);
      }
    }

    this.router.navigate(['/blank', { name: titulo, icon: icone }]);
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