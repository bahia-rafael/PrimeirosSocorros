import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complementares',
  templateUrl: './complementares.page.html',
  styleUrls: ['./complementares.page.scss'],
})
export class ComplementaresPage implements OnInit {

  topicosApp: any = [];

  queimaduras: any = [
    {
      "id": 17,
      "titulo": "1° Grau",
      "icon": "assets/img/Queimaduras de 1° Grau.PNG"
    },
    {
      "id": 19,
      "titulo": "2° Grau (Superficial)",
      "icon": "assets/img/Queimaduras de 2° Grau (Superficial).png"
    },
    {
      "id": 18,
      "titulo": "2° Grau (Profunda)",
      "icon": "assets/img/Queimaduras de 2° Grau (Profunda).PNG"
    },
    {
      "id": 20,
      "titulo": "3° Grau",
      "icon": "assets/img/Queimaduras de 3° Grau.PNG"
    }
  ];

  envenenamentos: any = [
    {
      "id": 13,
      "titulo": "Aspiração",
      "icon": "assets/img/Intoxicações e Envenenamentos (Aspiração).png"
    },
    {
      "id": 14,
      "titulo": "Ingestão",
      "icon": "assets/img/veneno.png"
    },
    {
      "id": 15,
      "titulo": "Pele",
      "icon": "assets/img/Intoxicações e Envenenamentos (Pele).png"
    }
  ];

  calor: any = [
    {
      "id": 7,
      "titulo": "Insolação",
      "icon": "assets/img/Insolacao.PNG"
    },
    {
      "id": 8,
      "titulo": "Intermação",
      "icon": "assets/img/Intermacao.png"
    }
  ]

  hemorragias: any = [
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
    }
  ]

  traumas: any = [
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
  ]

  animais: any = [
    {
      "id": 1,
      "titulo": "Aranhas e insetos",
      "icon": "assets/img/Aranhas.png"
    },
    {
      "id": 2,
      "titulo": "Cobras",
      "icon": "assets/img/Animais Peçonhentos (Cobras).png"
    }
  ];

  transporte: any = [
    {
      "id": 25,
      "titulo": "Uma pessoa",
      "icon": "assets/img/uma_pessoa.PNG"
    },
    {
      "id": 22,
      "titulo": "Duas Pessoas",
      "icon": "assets/img/duas_pessoas.PNG"
    },
    {
      "id": 24,
      "titulo": "Três Pessoas",
      "icon": "assets/img/tres_pessoas.PNG"
    },
    {
      "id": 23,
      "titulo": "Quatro Pessoas",
      "icon": "assets/img/quatro_pessoas.PNG"
    }
  ];

  tituloPage: string;

  static topicosTotais: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {

    this.tituloPage = this.route.snapshot.paramMap.get('name');

    let nome = this.definirComplemento(this.tituloPage);

  }

  public static searchTopico(titulo: string): string {

    let topicos: any = [
      {
        "id": 17,
        "titulo": "1° Grau",
        "icon": "assets/img/Queimaduras de 1° Grau.PNG"
      },
      {
        "id": 19,
        "titulo": "2° Grau (Superficial)",
        "icon": "assets/img/Queimaduras de 2° Grau (Superficial).png"
      },
      {
        "id": 18,
        "titulo": "2° Grau (Profunda)",
        "icon": "assets/img/Queimaduras de 2° Grau (Profunda).PNG"
      },
      {
        "id": 20,
        "titulo": "3° Grau",
        "icon": "assets/img/Queimaduras de 3° Grau.PNG"
      },
      {
        "id": 13,
        "titulo": "Aspiração",
        "icon": "assets/img/Intoxicações e Envenenamentos (Aspiração).png"
      },
      {
        "id": 14,
        "titulo": "Ingestão",
        "icon": "assets/img/veneno.png"
      },
      {
        "id": 15,
        "titulo": "Pele",
        "icon": "assets/img/Intoxicações e Envenenamentos (Pele).png"
      },
      {
        "id": 7,
        "titulo": "Insolação",
        "icon": "assets/img/Insolacao.PNG"
      },
      {
        "id": 8,
        "titulo": "Intermação",
        "icon": "assets/img/Intermacao.png"
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
      },
      {
        "id": 1,
        "titulo": "Aranhas e insetos",
        "icon": "assets/img/Aranhas.png"
      },
      {
        "id": 2,
        "titulo": "Cobras",
        "icon": "assets/img/Animais Peçonhentos (Cobras).png"
      },
      {
        "id": 25,
        "titulo": "Uma pessoa",
        "icon": "assets/img/uma_pessoa.PNG"
      },
      {
        "id": 22,
        "titulo": "Duas Pessoas",
        "icon": "assets/img/duas_pessoas.PNG"
      },
      {
        "id": 24,
        "titulo": "Três Pessoas",
        "icon": "assets/img/tres_pessoas.PNG"
      },
      {
        "id": 23,
        "titulo": "Quatro Pessoas",
        "icon": "assets/img/quatro_pessoas.PNG"
      }
    ]

    var icone;

    for (var i = 0; i < topicos.length; i++) {
      if (topicos[i].titulo == titulo) {
        icone = topicos[i].icon;
      }
    }

    return icone;
  }

  openBusca() {
    this.router.navigate(['/search']);
  }

  openTopico(titulo: string, icone: string) {
    this.router.navigate(['/blank', { name: titulo, icon: icone }]);
  }

  callEmergencia() {

    var mobileNumber = '192';

    window.open("tel:" + mobileNumber);

  }

  ngOnInit() {
  }

  definirComplemento(name: string) {

    switch (name) {
      case 'Queimaduras':
        this.topicosApp = this.queimaduras;
        break;
      case 'Traumas':
        this.topicosApp = this.traumas;
        break;
      case 'Transporte de acidentados':
        this.topicosApp = this.transporte;
        break;
      case 'Hemorragias':
        this.topicosApp = this.hemorragias;
        break;
      case 'Animais Peçonhentos':
        this.topicosApp = this.animais;
        break;
      case 'Emergências relacionadas ao calor':
        this.topicosApp = this.calor;
        break;
      case 'Intoxicações e Envenenamentos':
        this.topicosApp = this.envenenamentos;
        break;
    }
  }

}
