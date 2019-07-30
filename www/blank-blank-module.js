(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-blank-module"],{

/***/ "./src/app/blank/blank.module.ts":
/*!***************************************!*\
  !*** ./src/app/blank/blank.module.ts ***!
  \***************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank.page */ "./src/app/blank/blank.page.ts");







var routes = [
    {
        path: '',
        component: _blank_page__WEBPACK_IMPORTED_MODULE_6__["BlankPage"]
    }
];
var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blank_page__WEBPACK_IMPORTED_MODULE_6__["BlankPage"]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ }),

/***/ "./src/app/blank/blank.page.html":
/*!***************************************!*\
  !*** ./src/app/blank/blank.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <h1\r\n      style=\"font-family: 'Comic Sans MS', cursive, sans-serif;text-align: center;font-size: 17px;\">\r\n      <div><strong>{{topicoEscolhido.titulo}}</strong></div>\r\n    </h1>\r\n    <ion-icon (click)=\"openBusca()\" name=\"search\" slot=\"end\" style=\"width: 40px;height: 30px;margin-right: 15px\">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <img style=\"width: 165px;height: 100px;margin: 5px auto\" src=\"{{icon}}\" />\r\n    <ion-card-header>\r\n      <ion-card-title>Definição</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content name=\"definicao\" style=\"text-align: justify;\">\r\n      {{topicoEscolhido.definicao}}\r\n    </ion-card-content>\r\n    <ion-card-header>\r\n      <ion-card-title>Sintomas</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content name=\"sintomas\" style=\"text-align: justify;\">\r\n    </ion-card-content>\r\n    <ion-card-header>\r\n      <ion-card-title>Atendimento</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content name=\"atendimento\" style=\"text-align: justify;\">\r\n      {{topicoEscolhido.textoAdicional}}\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/blank/blank.page.scss":
/*!***************************************!*\
  !*** ./src/app/blank/blank.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --color: #FFFF;\n  --background: rgb(248, 63, 63);\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxhbmsvQzpcXFVzZXJzXFxSYWZhXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJpbWVpcm9zU29jb3Jyb3Mvc3JjXFxhcHBcXGJsYW5rXFxibGFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBOEM7RUFDOUMsY0FBUTtFQUNSLDhCQUFhO0VBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmxhbmsvYmxhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQmxhY2tcIiwgR2FkZ2V0LCBzYW5zLXNlcmlmO1xyXG4gICAgLS1jb2xvcjogI0ZGRkY7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDgsIDYzLCA2Myk7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/blank/blank.page.ts":
/*!*************************************!*\
  !*** ./src/app/blank/blank.page.ts ***!
  \*************************************/
/*! exports provided: BlankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPage", function() { return BlankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BlankPage = /** @class */ (function () {
    function BlankPage(router, http, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.topicoEscolhido = {
            titulo: null,
            definicao: null,
            sintomas: null,
            textoAdicional: null,
            atendimento: null,
        };
        var id = this.definirTopico(this.route.snapshot.paramMap.get('name'));
        this.icon = this.route.snapshot.paramMap.get('icon');
        var parser, xmlDoc;
        if (this.arquivoTotal == null) {
            this.http.get('assets/texto.txt', { responseType: 'text' })
                .subscribe(function (texto) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(texto, "text/xml");
                var totais = xmlDoc.getElementsByTagName("totais")[0];
                _this.guardarCarregamento(totais);
                var topico = totais.getElementsByTagName("topico")[id - 1];
                _this.armazenarTopicos(topico);
            });
        }
        else {
            var totais = this.arquivoTotal.getElementsByTagName("totais")[0];
            this.guardarCarregamento(totais);
            var topico = totais.getElementsByTagName("topico")[id - 1];
            this.armazenarTopicos(topico);
        }
    }
    BlankPage.prototype.guardarCarregamento = function (xml) {
        this.arquivoTotal = xml;
    };
    BlankPage.prototype.openBusca = function () {
        this.router.navigate(['/search']);
    };
    BlankPage.prototype.definirTopico = function (name) {
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
    };
    BlankPage.prototype.armazenarTopicos = function (topico) {
        this.topicoEscolhido.titulo = topico.getElementsByTagName("titulo")[0].textContent;
        this.topicoEscolhido.definicao = topico.getElementsByTagName("definicao")[0].textContent;
        this.separarSintomas(topico.getElementsByTagName("sintomas")[0].textContent);
        this.topicoEscolhido.textoAdicional = topico.getElementsByTagName("textoAdicional")[0].textContent;
        this.separarAtendimento(topico.getElementsByTagName("atendimento")[0].textContent);
    };
    BlankPage.prototype.separarAtendimento = function (atendimento) {
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
    };
    BlankPage.prototype.separarSintomas = function (sintomas) {
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
    };
    BlankPage.prototype.ngOnInit = function () {
    };
    BlankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.page.html */ "./src/app/blank/blank.page.html"),
            styles: [__webpack_require__(/*! ./blank.page.scss */ "./src/app/blank/blank.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BlankPage);
    return BlankPage;
}());



/***/ })

}]);
//# sourceMappingURL=blank-blank-module.js.map