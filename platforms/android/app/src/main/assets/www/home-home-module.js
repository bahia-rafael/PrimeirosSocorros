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

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>PRIMEIROS SOCORROS</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='6'>\r\n        <ion-card>\r\n          <img src=\"assets/parada_cardiorrespiratoria.jpg\" />\r\n          <ion-card-header>\r\n            <ion-card-title>Parada Cardiorrespiratória</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Inconsciência, ausência de movimentos respiratórios e batimentos cardíacos.\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size='6'>\r\n        <ion-card style=\"height: 324.188px\">\r\n          <img style=\"width: 145px\" src=\"assets/desobstrucao_vias_aereas.jpg\" />\r\n          <ion-card-header>\r\n\r\n            <ion-card-title>Desobstrução das Vias Aéreas</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Dificuldade Respiratória, ansiedade, Ronco – Queda de língua, gorgolejo – Sangue, saliva e vômito, pequenos\r\n            objetos, Prótese e dentes, cianose\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size='6'>\r\n        <ion-card style=\"height: 324.188px\">\r\n          <img style=\"width: 145px\" src=\"assets/convulsao.jpg\" />\r\n          <ion-card-header>\r\n            <ion-card-title>Convulsão</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos\r\n            músculos, Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres (urina e/ou fezes\r\n            soltas), Esquecimento.\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size='6'>\r\n        <ion-card style=\"height: 324.188px\">\r\n          <img style=\"width: 145px\" src=\"assets/epilepsia.jpg\" />\r\n          <ion-card-header>\r\n\r\n            <ion-card-title>Epilepsia</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Inconsciência, Queda abrupta da vitima, Salivação abundante e vômito, Contração brusca e involuntária dos\r\n            músculos, Enrijecimento da mandíbula, travando os dentes, Relaxamento dos esfíncteres (urina e/ou fezes\r\n            soltas), Esquecimento.\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --background: #fe3d3d;\n  --color: var(--ion-color-primary-contrast, #fff); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJhZmFcXERvY3VtZW50c1xcR2l0SHViXFxQcmltZWlyb3NTb2NvcnJvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBOEM7RUFDOUMscUJBQWE7RUFDYixnREFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLCBHYWRnZXQsIHNhbnMtc2VyaWY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmUzZDNkO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtcclxufVxyXG4iXX0= */"

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
    }
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