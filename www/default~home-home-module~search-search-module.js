(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~search-search-module"],{

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n\r\n    <ion-title style=\"text-align: center;font-size: 15px;padding-left: 1px;\">\r\n      <strong>FIQUE CALMO! PEÇA AJUDA - 192</strong>\r\n    </ion-title>\r\n    <ion-icon (click)=\"openBusca()\" name=\"search\" slot=\"end\" style=\"width: 40px;height: 30px;margin-right: 15px\">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='6' *ngFor=\"let topico of topicosApp\" (click)=\"openTopico(topico.titulo, topico.icon)\">\r\n        <ion-card style=\"height: 175px;padding-top: 0px;\">\r\n          <ion-img style=\"margin-top: 0px;width: 165px;height: 100px; margin-left: auto; margin-right: auto;\"\r\n            [src]=\"topico.icon\"></ion-img>\r\n\r\n          <ion-card-header style=\"padding-top: 5px;\">\r\n            <ion-card-title\r\n              style=\"text-align: center;font-size: 15px;font-family: 'Comic Sans MS', cursive, sans-serif;\">\r\n              {{topico.titulo}}\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --color: #FFFF;\n  --background: rgb(248, 63, 63);\n  height: 70px; }\n\nion-card-content {\n  overflow: hidden;\n  white-space: normal; }\n\nion-card-title {\n  text-overflow: ellipsis;\n  font-family: \"Comic Sans MS\", cursive, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJBRkFFTERFT0xJVkVJUkFCQUhJXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJpbWVpcm9zU29jb3Jyb3Mvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQThDO0VBQzlDLGNBQVE7RUFDUiw4QkFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx1QkFBdUI7RUFDdkIsaURBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcclxuICAtLWNvbG9yOiAjRkZGRjtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDgsIDYzLCA2Myk7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG5cclxufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(file, router, actionSheetController) {
        this.file = file;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.topicosApp = [];
        this.isItemAvailable = false; // initialize the items with false
        this.getList();
        HomePage_1.topicosTotais = this.topicosApp;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openTopico = function (titulo, icone) {
        this.router.navigate(['/blank', { name: titulo, icon: icone }]);
    };
    HomePage.searchTopico = function (titulo) {
        var icone;
        for (var i = 0; i < this.topicosTotais.length; i++) {
            if (this.topicosTotais[i].titulo == titulo) {
                icone = this.topicosTotais[i].icon;
            }
        }
        return icone;
    };
    HomePage.prototype.openBusca = function () {
        this.router.navigate(['/search']);
    };
    HomePage.prototype.getList = function () {
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
    };
    HomePage.prototype.presentActionOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Opções',
                            buttons: [{
                                    text: 'Editar',
                                    role: 'destructive',
                                    icon: 'create',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Excluir',
                                    icon: 'trash',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.liberarSubMenus = function () {
    };
    // gera uma cor aleatória em hexadecimal
    HomePage.prototype.gera_cor = function () {
        var hexadecimais = '0123456789ABCDEF';
        var cor = '#';
        // Pega um número aleatório no array acima
        for (var i = 0; i < 6; i++) {
            //E concatena à variável cor
            cor += hexadecimais[Math.floor(Math.random() * 16)];
        }
        return cor;
    };
    var HomePage_1;
    HomePage = HomePage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~search-search-module.js.map