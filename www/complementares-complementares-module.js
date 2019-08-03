(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complementares-complementares-module"],{

/***/ "./src/app/complementares/complementares.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/complementares/complementares.module.ts ***!
  \*********************************************************/
/*! exports provided: ComplementaresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplementaresPageModule", function() { return ComplementaresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complementares_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complementares.page */ "./src/app/complementares/complementares.page.ts");







var routes = [
    {
        path: '',
        component: _complementares_page__WEBPACK_IMPORTED_MODULE_6__["ComplementaresPage"]
    }
];
var ComplementaresPageModule = /** @class */ (function () {
    function ComplementaresPageModule() {
    }
    ComplementaresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_complementares_page__WEBPACK_IMPORTED_MODULE_6__["ComplementaresPage"]]
        })
    ], ComplementaresPageModule);
    return ComplementaresPageModule;
}());



/***/ }),

/***/ "./src/app/complementares/complementares.page.html":
/*!*********************************************************!*\
  !*** ./src/app/complementares/complementares.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <h1 style=\"font-family: 'Comic Sans MS', cursive, sans-serif;text-align: center;font-size: 17px;\">\n      <div><strong>{{tituloPage}}</strong></div>\n    </h1>\n    <ion-icon (click)=\"openBusca()\" name=\"search\" slot=\"end\" style=\"width: 40px;height: 30px;margin-right: 15px\">\n    </ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='6' *ngFor=\"let topico of topicosApp\" (click)=\"openTopico(topico.titulo, topico.icon)\">\n        <ion-card style=\"height: 175px;padding-top: 0px;\">\n          <ion-img style=\"width: 165px;height: 100px; margin-left: auto; margin-right: auto;\"\n            [src]=\"topico.icon\"></ion-img>\n\n          <ion-card-header style=\"padding-top: 5px;\">\n            <ion-card-title\n              style=\"text-align: center;font-size: 15px;font-family: 'Comic Sans MS', cursive, sans-serif;\">\n              <strong>{{topico.titulo}}</strong>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"callEmergencia()\" style=\"--background: red\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/complementares/complementares.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/complementares/complementares.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #FFFF;\n  --background: rgb(248, 63, 63);\n  height: 70px; }\n\nion-card-content {\n  overflow: hidden;\n  white-space: normal; }\n\nion-card-title {\n  text-overflow: ellipsis;\n  font-family: \"Comic Sans MS\", cursive, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxlbWVudGFyZXMvQzpcXFVzZXJzXFxSQUZBRUxERU9MSVZFSVJBQkFISVxcRG9jdW1lbnRzXFxHaXRIdWJcXFByaW1laXJvc1NvY29ycm9zL3NyY1xcYXBwXFxjb21wbGVtZW50YXJlc1xcY29tcGxlbWVudGFyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBUTtFQUNSLDhCQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUtkO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVCQUF1QjtFQUN2QixpREFBaUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZW1lbnRhcmVzL2NvbXBsZW1lbnRhcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tY29sb3I6ICNGRkZGO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ4LCA2MywgNjMpO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/complementares/complementares.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/complementares/complementares.page.ts ***!
  \*******************************************************/
/*! exports provided: ComplementaresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplementaresPage", function() { return ComplementaresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ComplementaresPage = /** @class */ (function () {
    function ComplementaresPage(route, router) {
        this.route = route;
        this.router = router;
        this.topicosApp = [];
        this.queimaduras = [
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
        this.envenenamentos = [
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
        this.calor = [
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
        ];
        this.hemorragias = [
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
        ];
        this.traumas = [
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
        this.animais = [
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
        ];
        this.transporte = [
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
            },
        ];
        this.tituloPage = this.route.snapshot.paramMap.get('name');
        var nome = this.definirComplemento(this.tituloPage);
    }
    ComplementaresPage.prototype.openBusca = function () {
        this.router.navigate(['/search']);
    };
    ComplementaresPage.prototype.openTopico = function (titulo, icone) {
        this.router.navigate(['/blank', { name: titulo, icon: icone }]);
    };
    ComplementaresPage.prototype.callEmergencia = function () {
        var mobileNumber = '192';
        window.open("tel:" + mobileNumber);
    };
    ComplementaresPage.prototype.ngOnInit = function () {
    };
    ComplementaresPage.prototype.definirComplemento = function (name) {
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
    };
    ComplementaresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complementares',
            template: __webpack_require__(/*! ./complementares.page.html */ "./src/app/complementares/complementares.page.html"),
            styles: [__webpack_require__(/*! ./complementares.page.scss */ "./src/app/complementares/complementares.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ComplementaresPage);
    return ComplementaresPage;
}());



/***/ })

}]);
//# sourceMappingURL=complementares-complementares-module.js.map