(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>PRIMEIROS SOCORROS</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (ionchange)=\"handleInput()\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-list>\r\n      <ion-row>\r\n        <ion-col size='6' *ngFor=\"let topico of topicosApp\">\r\n          <ion-card style=\"height: 300px;\">\r\n            <img src=\"assets/default.jpg\" />\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 15px\">{{topico.title}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              {{topico.definicao}}\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --background: #fe3d3d;\n  --color: var(--ion-color-primary-contrast, #fff); }\n\nion-card-content {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\nion-card-title {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --color: darkgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJhZmFcXERvY3VtZW50c1xcR2l0SHViXFxQcmltZWlyb3NTb2NvcnJvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBOEM7RUFDOUMscUJBQWE7RUFDYixnREFBUSxFQUFBOztBQUdWO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLDhDQUE4QztFQUM5QyxpQkFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLCBHYWRnZXQsIHNhbnMtc2VyaWY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmUzZDNkO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcclxuICAtLWNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.topicosApp = [];
        this.isItemAvailable = false; // initialize the items with false
        this.searchbar = document.querySelector('ion-searchbar');
        this.getList();
    }
    HomePage.prototype.handleInput = function (event) {
        var _this = this;
        var query = event.target.value.toLowerCase();
        requestAnimationFrame(function () {
            _this.topicosApp.forEach(function (item) {
                var shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.getList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
                return (item);
            });
        }
    };
    HomePage.prototype.getList = function () {
        this.topicosApp = [
            {
                title: 'Animais Peçonhentos',
                definicao: 'Animais peçonhentos são aqueles que produzem peçonha (veneno) e têm condições naturais para injetá-la em presas ou predadores. Essa condição é dada naturalmente por meio de dentes modificados, aguilhão, ferrão, quelíceras, cerdas urticantes, nematocistos entre outros.',
                sintomas: 'Dor, Eritema, Inchaço, Febre, Dor de cabeça.',
                icon: 'home'
            },
            {
                title: 'Convulsão',
                definicao: 'Expressão clinica decorrente de uma descarga elétrica anormal e excessiva do tecido cerebral.',
                sintomas: 'Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos músculos, ' +
                    'Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres(urina e/ ou fezes soltas), ' +
                    'Esquecimento.',
                icon: 'exit'
            },
            {
                title: 'Corpo Estranho nos Olhos',
                definicao: 'É a introdução acidental de poeira, grãos diversos etc. na cavidade dos glóbulos oculares.',
                sintomas: 'Dor, Ardência, Vermelhidão, Lacrimejamento',
                icon: 'exit'
            }, {
                title: 'Desmaio',
                definicao: 'É a perda súbita e temporária da consciência e da força muscular, geralmente devido à diminuição de oxigênio e da irrigação sanguínea no cérebro, tendo como causas: hipoglicemia, fator emocional, dor extrema, ambiente confinado etc.',
                sintomas: 'Tontura, Sensação de mal estar, Pulso rápido e fraco, Respiração presente de ritmos variados, ' +
                    'Tremor nas sobrancelhas, Pele fria, pálida e úmida, Inconsciência superficial.',
                icon: 'exit'
            }, {
                title: 'Desobstrução das Vias Aéreas',
                definicao: 'As vias aéreas podem ser obstruídas por objetos, próteses, fluídos com sangue, saliva e vômitos.',
                sintomas: 'Dificuldade Respiratória, Ansiedade, Ronco – '
                    + 'Queda de língua, Gorgolejo – Sangue, saliva e vômito, Pequenos objetos, Prótese e dentes' +
                    'Cianose',
                icon: 'exit'
            },
            {
                title: 'Epilepsia',
                definicao: 'Doença neurológica que se caracteriza por crises convulsivas espontânea recorrentes.',
                sintomas: 'Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos músculos, ' +
                    'Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres(urina e/ ou fezes soltas), ' +
                    'Esquecimento.',
                icon: 'exit'
            }, {
                title: 'Ferimentos Externos',
                definicao: 'São lesões que acometem as estruturas superficiais ou profundas do organismo com grau de sangramento, laceração e contaminação variável.',
                sintomas: 'Dor e edema local, Sangramento, Laceração em graus variáveis, Contaminação se não adequadamente tratado.',
                icon: 'exit'
            },
            {
                title: 'Hemorragia Externa',
                definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
                sintomas: 'Sangramento visível, Nível de consciência variável decorrente da perda sanguínea, Palidez de pele e mucosa.',
                icon: 'exit'
            },
            {
                title: 'Hemorragia Interna',
                definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
                sintomas: 'Sangramento geralmente não visível, Nível de consciência variável dependente da intensidade e local do sangramento, Sangramento pela urina, ' +
                    'Sangramento pelo ouvido, Dor com rigidez abdominal, Pele fria e pegajosa, Vômitos ou tosse com sangue.',
                icon: 'exit'
            },
            {
                title: 'Hemorragia Nasal',
                definicao: 'É a perda de sangue devido ao rompimento de um vaso sanguíneo (artérias, veias e capilares). Toda hemorragia deve ser controlada imediatamente.',
                sintomas: 'Sangramento nasal visível.',
                icon: 'exit'
            },
            {
                title: 'Insolação',
                definicao: 'Ocorre devido à ação direta dos raios solares sobre o indivíduo.',
                sintomas: 'Temperatura do corpo elevada,  Pele quente, avermelhada e seca, Diferentes níveis de consciência, ' +
                    'Desidratação, Dor de cabeça, náuseas e tontura.',
                icon: 'exit'
            },
            {
                title: 'Intermação',
                definicao: 'Ocorre devido à ação do calor em lugares fechados e não arejados (nas fundições, padarias, caldeiras etc.) intenso trabalho muscular.',
                sintomas: 'Temperatura do corpo elevada, Pele quente, avermelhada e seca, Diferentes níveis de consciência, ' +
                    'Falta de ar, Desidratação, Dor de cabeça, náuseas e tontura, Insuficiência respiratória.',
                icon: 'exit'
            },
            {
                title: 'Intoxicações e envenenamentos',
                definicao: 'O envenenamento ou intoxicação resulta da penetração de substância tóxica/nociva no organismo através da pele, aspiração e ingestão.',
                sintomas: 'Dor e sensação de queimação nas vias de penetração e sistemas correspondentes, Hálito com odor estranho, ' +
                    'Sonolência, confusão mental, alucinações e delírios, estado de coma, Lesões cutâneas, Náuseas e vômitos, ' +
                    'Alterações da respiração e do pulso.',
                icon: 'exit'
            }, {
                title: 'Parada Cardiorrespiratória',
                definicao: 'É a ausência das funções vitais, movimentos respiratórios e batimentos cardíacos. A ocorrência isolada de uma delas só existe em curto espaço de tempo; a parada de uma acarreta a parada da outra.',
                sintomas: 'Inconsciência, ausência de movimentos respiratórios e batimentos cardíacos.',
                icon: 'exit'
            }, {
                title: 'Queimaduras 1º Grau',
                definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
                sintomas: 'Atinge somente a epiderme, Dor local e vermelhidão da área atingida.',
                icon: 'exit'
            },
            {
                title: 'Queimaduras 2º Grau (<20%)',
                definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
                sintomas: 'Atinge a epiderme e a derme, Apresenta dor local, vermelhidão e bolhas d’água, Tecidos úmidos minando fluídos.',
                icon: 'exit'
            },
            {
                title: 'Queimaduras 2º Grau (>20%)',
                definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
                sintomas: 'Atinge a epiderme e a derme, Apresenta dor local, vermelhidão e bolhas d’água, Tecidos úmidos minando fluídos.',
                icon: 'exit'
            },
            {
                title: 'Queimaduras 3º Grau',
                definicao: 'É uma lesão produzida no tecido de revestimento do organismo, por agentes térmicos, elétricos, produtos químicos, irradiação ionizante e animais peçonhentos.',
                sintomas: 'Atinge a epiderme, derme e alcança os tecidos mais profundos, podendo chegar até o osso. Terminais nervosos mortos. ' +
                    'Pele com textura e aparência de couro ou cera.',
                icon: 'exit'
            }, {
                title: 'Queimaduras elétricas',
                definicao: 'Choque Elétrico é o fenômeno da passagem da corrente elétrica pelo corpo quando em contato com partes energizadas. Podendo ocasionar parada cardiorrespiratória,queimaduras e lesões traumáticas.',
                sintomas: 'Parada cardiorrespiratória, Queimaduras e lesões Traumáticas.',
                icon: 'exit'
            },
            {
                title: 'Trauma Abdominal',
                definicao: 'Pode-se destacar como lesões mais freqüentes: a ruptura de baço ou fígado, lesão renal, lesão da coluna lombar, lesão pancreática e lesão de grandes vasos abdominais.',
                sintomas: 'A ruptura de baço ou fígado, lesão renal, lesão da coluna lombar, lesão pancreática e lesão de grandes vasos abdominais.',
                icon: 'exit'
            }, {
                title: 'Trauma de face',
                definicao: 'Os fragmentos ósseos e o sangue podem provocar obstruções nas vias aéreas no caso de traumas de face.',
                sintomas: 'Os fragmentos ósseos e o sangue podem provocar obstruções nas vias aéreas no caso de traumas de face.',
                icon: 'exit'
            }, {
                title: 'Trauma Músculo Esquelético',
                definicao: 'O trauma é o resultado de uma força externa composta de um impacto negativo sobre o corpo. Algumas lesões podem ser resultados de certas condições clínicas o no processo de envelhecimento do corpo.',
                sintomas: 'Dor local intensa, Dificuldade em movimentar a região afetada, Hematoma, ' +
                    'Deformidade da articulação, Inchaço.',
                icon: 'exit'
            }, {
                title: 'Trauma Ocular',
                definicao: 'No caso de trauma ocular com objeto empalado, não remover o objeto, cubra o olho bom e estabilize o objeto.',
                sintomas: 'No caso de trauma ocular com objeto empalado, não remover o objeto, cubra o olho bom e estabilize o objeto',
                icon: 'exit'
            },
            {
                title: 'Trauma Raquimedular',
                definicao: 'As lesões da coluna vertebrais mal conduzidas podem produzir lesões graves e irreversíveis de medula, com comprometimento neurológico definitivo (tetraplégica ou paraplegia).',
                sintomas: 'Dor, Formigamento, Pênis ereto, Perda do controle esfincteriano(urina e/ou fezes soltas), Queimação (ou paralisia) nas pernas e nos braços.',
                icon: 'exit'
            }, {
                title: 'Trauma Torácico',
                definicao: 'Avaliação física: DeFaFI, Observar também cianose, agitação e palidez, Imobilizar a vítima, ' +
                    'Encaminhar para emergência.',
                sintomas: 'Avaliação física: DeFaFI, Observar também cianose, agitação e palidez, Imobilizar a vítima, ' +
                    'Encaminhar para emergência.',
                icon: 'exit'
            }, {
                title: 'Traumas',
                definicao: 'É uma situação de lesão corporal provocada por agentes externos que causam repercussão locais ou sistêmicas dependendo da região afetada.',
                sintomas: 'Perda de pulso, Dificuldade ou Perda da capacidade de respiração, Diminuição ou perda de consciência ou Sangramento em grande escala.',
                icon: 'exit'
            }, {
                title: 'Traumatismo Crânio Encefálico',
                definicao: 'Equimose atrás da orelha e ao redor dos olhos, Pupilas diferentes, Dor de cabeça intensa, ' + 'Desorientação, Alteração na responsividade, Crises convulsivas, Distúrbios visuais.',
                sintomas: 'Equimose atrás da orelha e ao redor dos olhos, Pupilas diferentes, Dor de cabeça intensa, ' + 'Desorientação, Alteração na responsividade, Crises convulsivas, Distúrbios visuais.',
                icon: 'exit'
            }
        ];
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map