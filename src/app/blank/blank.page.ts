import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {

  arquivoTexto: any;

  icon: string;

  topicoEscolhido = {
    titulo: null,
    definicao: null,
    sintomas: null,
    textoAdicional: null,
    atendimento: null,
  };

  arquivoTotal: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    let id = this.definirTopico(this.route.snapshot.paramMap.get('name'));

    this.icon = this.route.snapshot.paramMap.get('icon');

    var parser, xmlDoc;

    if (this.arquivoTotal == null) {
      this.http.get('assets/texto.txt', { responseType: 'text' })
        .subscribe(texto => {
          parser = new DOMParser();
          xmlDoc = parser.parseFromString(texto, "text/xml");

          var totais = xmlDoc.getElementsByTagName("totais")[0];

          this.guardarCarregamento(totais);

          var topico = totais.getElementsByTagName("topico")[id - 1];

          this.armazenarTopicos(topico);
        });
    } else {
      var totais = this.arquivoTotal.getElementsByTagName("totais")[0];

      this.guardarCarregamento(totais);

      var topico = totais.getElementsByTagName("topico")[id - 1];

      this.armazenarTopicos(topico);
    }
  }

  guardarCarregamento(xml: any) {
    this.arquivoTotal = xml;
  }

  definirTopico(name: string): number {

    var indice;

    switch (name) {
      case "Parada Cardíaca":
        indice = 1;
        break;
      case "Desobstrução das vias aéreas":
        indice = 2;
        break;
      case "Convulsão":
        indice = 3;
        break;
      case "Epilepsia":
        indice = 4;
        break;
      case "Desmaio":
        indice = 5;
        break;
      case "Corpo Estranho nos Olhos":
        indice = 6;
        break;
      case "Intoxicações e Envenenamentos (Pele)":
        indice = 7;
        break;
      case "Intoxicações e Envenenamentos (Aspiração)":
        indice = 8;
        break;
      case "Intoxicãções e Envenenamentos (Ingestão)":
        indice = 9;
        break;
      case "Queimaduras: 1° Grau":
        indice = 10;
        break;
      case "Queimaduras: 2° Grau (Superficial)":
        indice = 11;
        break;
      case "Queimaduras: 2° Grau (Profunda)":
        indice = 12;
        break;
      case "Queimaduras: 3° Grau":
        indice = 13;
        break;
      case "Queimaduras Elétricas":
        indice = 14;
        break;
      case "Insolação":
        indice = 15;
        break;
      case "Intermação":
        indice = 16;
        break;
      case "Hemorragia Externa":
        indice = 17;
        break;
      case "Hemorragia Interna":
        indice = 18;
        break;
      case "Hemorragia Nasal":
        indice = 19;
        break;
      case "Traumatismo Cranio encefálico":
        indice = 20;
        break;
      case "Trauma de Face":
        indice = 21;
        break;
      case "Trauma Ocular":
        indice = 22;
        break;
      case "Trauma Raquimedular":
        indice = 23;
        break;
      case "Trauma Torácico":
        indice = 24;
        break;
      case "Trauma Abdominal":
        indice = 25;
        break;
      case "Trauma Músculo Esquelético":
        indice = 26;
        break;
      case "Animais Peçonhentos (Cobras)":
        indice = 27;
        break;
      case "Animais Peçonhentos (Aranhas)":
        indice = 28;
        break;
      case "Transporte de acidentados (Uma pessoa)":
        indice = 29;
        break;
      case "Transporte de acidentados (Duas Pessoas)":
        indice = 30;
        break;
      case "Transporte de acidentados (Três Pessoas)":
        indice = 31;
        break;
      case "Transporte de acidentados (Quatro Pessoas)":
        indice = 32;
        break;
    }

    return indice;
  }

  armazenarTopicos(topico: any) {

    this.topicoEscolhido.titulo = topico.getElementsByTagName("titulo")[0].textContent;
    this.topicoEscolhido.definicao = topico.getElementsByTagName("definicao")[0].textContent;
    this.separarSintomas(topico.getElementsByTagName("sintomas")[0].textContent);
    this.topicoEscolhido.textoAdicional = topico.getElementsByTagName("textoAdicional")[0].textContent;
    this.separarAtendimento(topico.getElementsByTagName("atendimento")[0].textContent);

  }

  separarAtendimento(atendimento: any) {

    var res = atendimento.split(";");

    var ol = document.createElement("ol");

    ol.style.textTransform = 'capitalize';

    for (var i = 0; i < res.length; i++) {

      var li = document.createElement("li");

      li.innerText = res[i];

      li.style.marginTop = "7px";

      ol.appendChild(li);
    }

    document.getElementsByName("atendimento")[0].appendChild(ol);
  }

  separarSintomas(sintomas: any) {

    var res = sintomas.split(";");

    var ul = document.createElement("ul");

    ul.style.textTransform = 'capitalize';

    for (var i = 0; i < res.length; i++) {

      var li = document.createElement("li");

      li.style.marginTop = "7px";

      li.innerText = res[i];

      ul.appendChild(li);
    }

    document.getElementsByName("sintomas")[0].appendChild(ul);
  }

  ngOnInit() {
  }

}
