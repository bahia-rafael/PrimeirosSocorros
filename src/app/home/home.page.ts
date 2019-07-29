import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topicosApp: any = [];

  static topicosTotais: any;

  isItemAvailable = false; // initialize the items with false

  constructor(private file: File, private router: Router, public actionSheetController: ActionSheetController) {

    this.getList();

    HomePage.topicosTotais = this.topicosApp;

  }

  openTopico(titulo: string, icone: string) {
    this.router.navigate(['/blank', { name: titulo, icon: icone }]);
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
        "titulo": "Animais Peçonhentos (Aranhas)",
        "icon": "assets/img/Animais Peçonhentos (Aranhas e Insetos).PNG"
      },
      {
        "id": 2,
        "titulo": "Animais Peçonhentos (Cobras)",
        "icon": "assets/img/Animais Peçonhentos (Cobras).PNG"
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
        "icon": "assets/img/Desmaio.png"
      },
      {
        "id": 6,
        "titulo": "Desobstrução das vias aéreas",
        "icon": "assets/img/Desobstrução das vias aéreas.PNG"
      },
      {
        "id": 7,
        "titulo": "Insolação",
        "icon": "assets/img/Emergências relacionadas ao calor (Insolação).png"
      },
      {
        "id": 8,
        "titulo": "Intermação",
        "icon": "assets/img/Intermação.PNG"
      },
      {
        "id": 9,
        "titulo": "Epilepsia",
        "icon": "assets/img/Epilepsia.PNG"
      },
      {
        "id": 10,
        "titulo": "Hemorragia Externa",
        "icon": "assets/img/Hemorragia Externa.png"
      },
      {
        "id": 11,
        "titulo": "Hemorragia Interna",
        "icon": "assets/img/hemorragia_interna.png"
      },
      {
        "id": 12,
        "titulo": "Hemorragia Nasal",
        "icon": "assets/img/hemorragia_nasal.png"
      },
      {
        "id": 13,
        "titulo": "Intoxicações e Envenenamentos (Aspiração)",
        "icon": "assets/img/Intoxicações e Envenenamentos (Aspiração).png"
      },
      {
        "id": 14,
        "titulo": "Intoxicãções e Envenenamentos (Ingestão)",
        "icon": "assets/img/veneno.png"
      },
      {
        "id": 15,
        "titulo": "Intoxicações e Envenenamentos (Pele)",
        "icon": "assets/img/Intoxicações e Envenenamentos (Pele).png"
      },
      {
        "id": 16,
        "titulo": "Parada Cardíaca",
        "icon": "assets/img/parada_cardiaca.PNG"
      },
      {
        "id": 17,
        "titulo": "Queimaduras: 1° Grau",
        "icon": "assets/img/Queimaduras de 1° Grau.PNG"
      },
      {
        "id": 19,
        "titulo": "Queimaduras: 2° Grau (Superficial)",
        "icon": "assets/img/Queimaduras de 2° Grau (Superficial).png"
      },
      {
        "id": 18,
        "titulo": "Queimaduras: 2° Grau (Profunda)",
        "icon": "assets/img/Queimaduras de 2° Grau (Profunda).PNG"
      },
      {
        "id": 20,
        "titulo": "Queimaduras: 3° Grau",
        "icon": "assets/img/Queimaduras de 3° Grau.PNG"
      },
      {
        "id": 21,
        "titulo": "Queimaduras Elétricas",
        "icon": "assets/img/Queimaduras Elétricas.PNG"
      },
      {
        "id": 25,
        "titulo": "Transporte de acidentados (Uma pessoa)",
        "icon": "assets/img/uma_pessoa.PNG"
      },
      {
        "id": 22,
        "titulo": "Transporte de acidentados (Duas Pessoas)",
        "icon": "assets/img/duas_pessoas.PNG"
      },
      {
        "id": 24,
        "titulo": "Transporte de acidentados (Três Pessoas)",
        "icon": "assets/img/tres_pessoas.PNG"
      },
      {
        "id": 23,
        "titulo": "Transporte de acidentados (Quatro Pessoas)",
        "icon": "assets/img/quatro_pessoas.PNG"
      },
      {
        "id": 26,
        "titulo": "Trauma Abdominal",
        "icon": "assets/img/Trauma Abdominal.PNG"
      },
      {
        "id": 27,
        "titulo": "Trauma de Face",
        "icon": "assets/img/trauma_face.PNG"
      },
      {
        "id": 28,
        "titulo": "Trauma Músculo Esquelético",
        "icon": "assets/img/Trauma Músculo Esquelético.png"
      },
      {
        "id": 29,
        "titulo": "Trauma Ocular",
        "icon": "assets/img/trauma_ocular.png"
      },
      {
        "id": 30,
        "titulo": "Trauma Raquimedular",
        "icon": "assets/img/Trauma Raquimedular.PNG"
      },
      {
        "id": 31,
        "titulo": "Trauma Torácico",
        "icon": "assets/img/Trauma Torácico.png"
      },
      {
        "id": 32,
        "titulo": "Traumatismo Cranio encefálico",
        "icon": "assets/img/Traumatismo Cranio encefálico.PNG"
      }
    ];
  }


  async presentActionOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Editar',
        role: 'destructive',
        icon: 'create',
        handler: () => {

        }
      }, {
        text: 'Excluir',
        icon: 'trash',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  liberarSubMenus() {

  }

  // gera uma cor aleatória em hexadecimal
  gera_cor() {
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';

    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++) {
      //E concatena à variável cor
      cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }
}
