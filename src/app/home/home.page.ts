import { ExitPage } from './../exit/exit.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topicosApp: any = [];

  static topicosTotais: any;

  isItemAvailable = false; // initialize the items with false

  constructor(private callNumber: CallNumber, private platform: Platform, private file: File, private router: Router, public actionSheetController: ActionSheetController) {

    this.getList();

    HomePage.topicosTotais = this.topicosApp;

    this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });

  }

  callEmergencia() {

    var mobileNumber = '192';

    window.open("tel:" + mobileNumber);

    // this.callNumber.callNumber("192", false)
    //   .then(res => console.log('Launched dialer!', res))
    //   .catch(err => console.log('Error launching dialer', err));

  }
  
  openTopico(titulo: string, icone: string) {
    if (titulo == 'Queimaduras' || titulo == 'Traumas' || titulo == 'Transporte de acidentados' || titulo == 'Animais Peçonhentos' || titulo == 'Emergências relacionadas ao calor' || titulo == 'Hemorragias' || titulo == 'Intoxicações e Envenenamentos') {
      this.router.navigate(['/complementares', { name: titulo }]);
    } else {
      this.router.navigate(['/blank', { name: titulo, icon: icone }]);
    }
  }

  public static searchTopico(titulo: string): string {

    var icone;

    for (var i = 0; i < this.topicosTotais.length; i++) {
      if (this.topicosTotais[i].titulo == titulo) {
        icone = this.topicosTotais[i].icon;
      }
    }

    return icone;
  }

  openBusca() {
    this.router.navigate(['/search']);
  }

  getList() {

    this.topicosApp = [
      {
        "id": 1,
        "titulo": "Afogamento",
        "icon": "assets/img/afogamento.png"
      },
      {
        "id": 2,
        "titulo": "Animais Peçonhentos",
        "icon": "assets/img/Aranhas.png"
      },
      {
        "id": 3,
        "titulo": "Convulsão",
        "icon": "assets/img/convulsao.PNG"
      },
      {
        "id": 4,
        "titulo": "Corpo Estranho nos Olhos",
        "icon": "assets/img/Corpo Estranho nos Olhos.PNG"
      },
      {
        "id": 5,
        "titulo": "Desmaio",
        "icon": "assets/img/desmaio.png"
      },
      {
        "id": 6,
        "titulo": "Desobstrução das vias aéreas",
        "icon": "assets/img/Desobstrução das vias aéreas.PNG"
      },
      {
        "id": 7,
        "titulo": "Emergências relacionadas ao calor",
        "icon": "assets/img/Insolacao.PNG"
      },
      {
        "id": 8,
        "titulo": "Epilepsia",
        "icon": "assets/img/Epilepsia.PNG"
      },
      {
        "id": 9,
        "titulo": "Hemorragias",
        "icon": "assets/img/hemorragia_interna.png"
      },
      {
        "id": 10,
        "titulo": "Intoxicações e Envenenamentos",
        "icon": "assets/img/veneno.png"
      },
      {
        "id": 11,
        "titulo": "Parada Cardíaca",
        "icon": "assets/img/parada_cardiaca.PNG"
      },
      {
        "id": 12,
        "titulo": "Queimaduras",
        "icon": "assets/img/Queimaduras de 3° Grau.PNG"
      },
      {
        "id": 13,
        "titulo": "Queimaduras Elétricas",
        "icon": "assets/img/Queimaduras Elétricas.PNG"
      },
      {
        "id": 14,
        "titulo": "Transporte de acidentados",
        "icon": "assets/img/transporte.png"
      },
      {
        "id": 15,
        "titulo": "Traumas",
        "icon": "assets/img/Trauma Músculo Esquelético.png"
      }
    ];
  }
}
