(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar >\r\n    <ion-buttons style=\"margin-top: 20px\" slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-input #searchInput (keypress)=\"onChange($event.keyCode)\" placeholder=\"Busca\" style=\"color:black;--placeholder-color: rgb(65, 65, 65);margin-top: 10px;background-color: beige;width: 90%;border-radius: 10px\" id=\"busca\" (ionChange)=\"getItems($event)\"></ion-input>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\" (click)=\"openTopico(item)\">\r\n      {{ item }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  --color: #FFFF;\n  --background: rgb(248, 63, 63);\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcUkFGQUVMREVPTElWRUlSQUJBSElcXERvY3VtZW50c1xcR2l0SHViXFxQcmltZWlyb3NTb2NvcnJvcy9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQThDO0VBQzlDLGNBQVE7RUFDUiw4QkFBYTtFQUNiLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcclxuICAtLWNvbG9yOiAjRkZGRjtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDgsIDYzLCA2Myk7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../complementares/complementares.page */ "./src/app/complementares/complementares.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");







var SearchPage = /** @class */ (function () {
    function SearchPage(keyboard, router) {
        var _this = this;
        this.keyboard = keyboard;
        this.router = router;
        this.searchQuery = '';
        this.initializeItems();
        setTimeout(function () {
            _this.inputElement.setFocus();
        }, 1500);
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.onChange = function (keyCode) {
        this.keyboard.hide();
    };
    SearchPage.prototype.initializeItems = function () {
        this.items = [
            'Afogamento',
            'Animais Peçonhentos (Aranhas e insetos)',
            'Animais Peçonhentos (Cobras)',
            'Convulsão',
            'Corpo Estranho nos Olhos',
            'Desmaio',
            'Desobstrução das vias aéreas',
            'Insolação',
            'Intermação',
            'Epilepsia',
            'Hemorragia Externa',
            'Hemorragia Interna',
            'Hemorragia Nasal',
            'Intoxicações e Envenenamentos (Aspiração)',
            'Intoxicações e Envenenamentos (Ingestão)',
            'Intoxicações e Envenenamentos (Pele)',
            'Parada Cardíaca',
            'Queimaduras: 1° Grau',
            'Queimaduras: 2° Grau (Profunda)',
            'Queimaduras: 2° Grau (Superficial)',
            'Queimaduras: 3° Grau',
            'Queimaduras Elétricas',
            'Transporte de acidentados (Uma pessoa)',
            'Transporte de acidentados (Duas Pessoas)',
            'Transporte de acidentados (Três Pessoas)',
            'Transporte de acidentados (Quatro Pessoas)',
            'Trauma Abdominal',
            'Trauma de Face',
            'Trauma Músculo Esquelético',
            'Trauma Ocular',
            'Trauma Raquimedular',
            'Trauma Torácico',
            'Traumatismo Cranio encefálico'
        ];
    };
    SearchPage.prototype.openTopico = function (titulo) {
        var icone;
        if (titulo.includes('Queimaduras: ')) {
            titulo = titulo.replace("Queimaduras: ", "");
            icone = _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__["ComplementaresPage"].searchTopico(titulo);
        }
        else if (titulo.includes("Intoxicações e Envenenamentos (")) {
            titulo = titulo.replace("Intoxicações e Envenenamentos (", "").replace(")", "");
            icone = _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__["ComplementaresPage"].searchTopico(titulo);
        }
        else if (titulo.includes('Animais Peçonhentos (')) {
            titulo = titulo.replace('Animais Peçonhentos (', "").replace(")", "");
            icone = _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__["ComplementaresPage"].searchTopico(titulo);
        }
        else if (titulo.includes("Transporte de acidentados (")) {
            titulo = titulo.replace("Transporte de acidentados (", "").replace(")", "");
            icone = _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__["ComplementaresPage"].searchTopico(titulo);
        }
        else {
            icone = _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].searchTopico(titulo);
            if (icone == null) {
                icone = _complementares_complementares_page__WEBPACK_IMPORTED_MODULE_1__["ComplementaresPage"].searchTopico(titulo);
            }
        }
        this.router.navigate(['/blank', { name: titulo, icon: icone }]);
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('searchInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
    ], SearchPage.prototype, "inputElement", void 0);
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map