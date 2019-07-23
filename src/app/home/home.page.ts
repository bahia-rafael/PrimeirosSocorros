import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topicosApp: any = [];

  isItemAvailable = false; // initialize the items with false

  constructor(private router: Router) {
    this.getList();
  }

  openBusca() {
    this.router.navigate(['/search']);
  }

  getList() {
    this.topicosApp = [
      {
        title: 'Animais Peçonhentos',
        definicao: 'Animais peçonhentos são aqueles que produzem peçonha (veneno) e têm condições naturais para injetá-la em presas ou predadores. Essa condição é dada naturalmente por meio de dentes modificados, aguilhão, ferrão, quelíceras, cerdas urticantes, nematocistos entre outros.',
        sintomas: 'Dor, Eritema, Inchaço, Febre, Dor de cabeça.',
        icon: 'assets/snake.png'
      },
      {
        title: 'Convulsão',
        definicao: 'Expressão clinica decorrente de uma descarga elétrica anormal e excessiva do tecido cerebral.',
        sintomas: 'Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos músculos, ' +
          'Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres(urina e/ ou fezes soltas), ' +
          'Esquecimento.',
        icon: 'assets/head.png'
      },
      {
        title: 'Corpo Estranho nos Olhos',
        definicao: 'É a introdução acidental de poeira, grãos diversos etc. na cavidade dos glóbulos oculares.',
        sintomas: 'Dor, Ardência, Vermelhidão, Lacrimejamento',
        icon: 'assets/eye.png'
      }, {
        title: 'Desmaio',
        definicao: 'É a perda súbita e temporária da consciência e da força muscular, geralmente devido à diminuição de oxigênio e da irrigação sanguínea no cérebro, tendo como causas: hipoglicemia, fator emocional, dor extrema, ambiente confinado etc.',
        sintomas: 'Tontura, Sensação de mal estar, Pulso rápido e fraco, Respiração presente de ritmos variados, ' +
          'Tremor nas sobrancelhas, Pele fria, pálida e úmida, Inconsciência superficial.',
        icon: 'assets/sleep.png'
      }, {
        title: 'Desobstrução das Vias Aéreas',
        definicao: 'As vias aéreas podem ser obstruídas por objetos, próteses, fluídos com sangue, saliva e vômitos.',
        sintomas: 'Dificuldade Respiratória, Ansiedade, Ronco – '
          + 'Queda de língua, Gorgolejo – Sangue, saliva e vômito, Pequenos objetos, Prótese e dentes' +
          'Cianose',
        icon: 'assets/nariz.png'
      },
      {
        title: 'Epilepsia',
        definicao: 'Doença neurológica que se caracteriza por crises convulsivas espontânea recorrentes.',
        sintomas: 'Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos músculos, ' +
          'Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres(urina e/ ou fezes soltas), ' +
          'Esquecimento.',
        icon: 'assets/head.png'
      }, {
        title: 'Ferimentos Externos',
        definicao: 'São lesões que acometem as estruturas superficiais ou profundas do organismo com grau de sangramento, laceração e contaminação variável.',
        sintomas: 'Dor e edema local, Sangramento, Laceração em graus variáveis, Contaminação se não adequadamente tratado.',
        icon: 'assets/corte_mao.png'
      },
      {
        title: 'Hemorragia Externa',
        definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
        sintomas: 'Sangramento visível, Nível de consciência variável decorrente da perda sanguínea, Palidez de pele e mucosa.',
        icon: 'assets/default.jpg'
      },
      {
        title: 'Hemorragia Interna',
        definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
        sintomas: 'Sangramento geralmente não visível, Nível de consciência variável dependente da intensidade e local do sangramento, Sangramento pela urina, ' +
          'Sangramento pelo ouvido, Dor com rigidez abdominal, Pele fria e pegajosa, Vômitos ou tosse com sangue.',
        icon: 'assets/default.jpg'
      },
      {
        title: 'Hemorragia Nasal',
        definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
        sintomas: 'Sangramento nasal visível.',
        icon: 'assets/nariz.png'
      },
      {
        title: 'Insolação',
        definicao: 'Ocorre devido à ação direta dos raios solares sobre o indivíduo.',
        sintomas: 'Temperatura do corpo elevada,  Pele quente, avermelhada e seca, Diferentes níveis de consciência, ' +
          'Desidratação, Dor de cabeça, náuseas e tontura.',
        icon: 'assets/sol.png'
      },
      {
        title: 'Intermação',
        definicao: 'Ocorre devido à ação do calor em lugares fechados e não arejados (nas fundições, padarias, caldeiras etc.) intenso trabalho muscular.',
        sintomas: 'Temperatura do corpo elevada, Pele quente, avermelhada e seca, Diferentes níveis de consciência, ' +
          'Falta de ar, Desidratação, Dor de cabeça, náuseas e tontura, Insuficiência respiratória.',
        icon: 'assets/aquecimento.png'
      },
      {
        title: 'Intoxicações e envenenamentos',
        definicao: 'O envenenamento ou intoxicação resulta da penetração de substância tóxica/nociva no organismo através da pele, aspiração e ingestão.',
        sintomas: 'Dor e sensação de queimação nas vias de penetração e sistemas correspondentes, Hálito com odor estranho, ' +
          'Sonolência, confusão mental, alucinações e delírios, estado de coma, Lesões cutâneas, Náuseas e vômitos, ' +
          'Alterações da respiração e do pulso.',
        icon: 'assets/veneno.png'
      }, {
        title: 'Parada Cardiorrespiratória',
        definicao: 'É a ausência das funções vitais, movimentos respiratórios e batimentos cardíacos. A ocorrência isolada de uma delas só existe em curto espaço de tempo; a parada de uma acarreta a parada da outra.',
        sintomas: 'Inconsciência, ausência de movimentos respiratórios e batimentos cardíacos.',
        icon: 'assets/heart.png'
      }, {
        title: 'Queimaduras 1º Grau',
        definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
        sintomas: 'Atinge somente a epiderme, Dor local e vermelhidão da área atingida.',
        icon: 'assets/fire_primeira.png'
      },
      {
        title: 'Queimaduras 2º Grau (<20%)',
        definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
        sintomas: 'Atinge a epiderme e a derme, Apresenta dor local, vermelhidão e bolhas d’água, Tecidos úmidos minando fluídos.',
        icon: 'assets/fire_terceira.png'
      },
      {
        title: 'Queimaduras 2º Grau (>20%)',
        definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
        sintomas: 'Atinge a epiderme e a derme, Apresenta dor local, vermelhidão e bolhas d’água, Tecidos úmidos minando fluídos.',
        icon: 'assets/fire_terceira.png'
      },
      {
        title: 'Queimaduras 3º Grau',
        definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
        sintomas: 'Atinge a epiderme, derme e alcança os tecidos mais profundos, podendo chegar até o osso. Terminais nervosos mortos. ' +
          'Pele com textura e aparência de couro ou cera.',
        icon: 'assets/fire_segunda.png'
      }, {
        title: 'Queimaduras elétricas',
        definicao: 'Choque Elétrico é o fenômeno da passagem da corrente elétrica pelo corpo quando em contato com partes energizadas. Podendo ocasionar parada cardiorrespiratória,queimaduras e lesões traumáticas.',
        sintomas: 'Parada cardiorrespiratória, Queimaduras e lesões Traumáticas.',
        icon: 'assets/eletricidade.png'
      },
      {
        title: 'Trauma Abdominal',
        definicao: 'Pode-se destacar como lesões mais freqüentes: a ruptura de baço ou fígado, lesão renal, lesão da coluna lombar, lesão pancreática e lesão de grandes vasos abdominais.',
        sintomas: 'A ruptura de baço ou fígado, lesão renal, lesão da coluna lombar, lesão pancreática e lesão de grandes vasos abdominais.',
        icon: 'assets/barriga.png'
      }, {
        title: 'Trauma de face',
        definicao: 'Os fragmentos ósseos e o sangue podem provocar obstruções nas vias aéreas no caso de traumas de face.',
        sintomas: 'Os fragmentos ósseos e o sangue podem provocar obstruções nas vias aéreas no caso de traumas de face.',
        icon: 'assets/face.png'
      }, {
        title: 'Trauma Músculo Esquelético',
        definicao: 'O trauma é o resultado de uma força externa composta de um impacto negativo sobre o corpo. Algumas lesões podem ser resultados de certas condições clínicas o no processo de envelhecimento do corpo.',
        sintomas: 'Dor local intensa, Dificuldade em movimentar a região afetada, Hematoma, ' +
          'Deformidade da articulação, Inchaço.',
        icon: 'assets/esqueleto.png'
      }, {
        title: 'Trauma Ocular',
        definicao: 'No caso de trauma ocular com objeto empalado, não remover o objeto, cubra o olho bom e estabilize o objeto.',
        sintomas: 'No caso de trauma ocular com objeto empalado, não remover o objeto, cubra o olho bom e estabilize o objeto',
        icon: 'assets/eye.png'
      },
      {
        title: 'Trauma Raquimedular',
        definicao: 'As lesões da coluna vertebrais mal conduzidas podem produzir lesões graves e irreversíveis de medula, com comprometimento neurológico definitivo (tetraplégica ou paraplegia).',
        sintomas: 'Dor, Formigamento, Pênis ereto, Perda do controle esfincteriano(urina e/ou fezes soltas), Queimação (ou paralisia) nas pernas e nos braços.',
        icon: 'assets/esqueleto.png'
      }, {
        title: 'Trauma Torácico',
        definicao: 'Avaliação física: DeFaFI, Observar também cianose, agitação e palidez, Imobilizar a vítima, ' +
          'Encaminhar para emergência.',
        sintomas: 'Avaliação física: DeFaFI, Observar também cianose, agitação e palidez, Imobilizar a vítima, ' +
          'Encaminhar para emergência.',
        icon: 'assets/peito.png'
      }, {
        title: 'Traumas',
        definicao: 'É uma situação de lesão corporal provocada por agentes externos que causam repercussão locais ou sistêmicas dependendo da região afetada.',
        sintomas: 'Perda de pulso, Dificuldade ou Perda da capacidade de respiração, Diminuição ou perda de consciência ou Sangramento em grande escala.',
        icon: 'assets/default.jpg'
      }, {
        title: 'Traumatismo Crânio Encefálico',
        definicao: 'Equimose atrás da orelha e ao redor dos olhos, Pupilas diferentes, Dor de cabeça intensa, ' + 'Desorientação, Alteração na responsividade, Crises convulsivas, Distúrbios visuais.',
        sintomas: 'Equimose atrás da orelha e ao redor dos olhos, Pupilas diferentes, Dor de cabeça intensa, ' + 'Desorientação, Alteração na responsividade, Crises convulsivas, Distúrbios visuais.',
        icon: 'assets/cranio.png'
      }
    ];
  }

}
