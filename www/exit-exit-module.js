(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exit-exit-module"],{

/***/ "./src/app/exit/exit.module.ts":
/*!*************************************!*\
  !*** ./src/app/exit/exit.module.ts ***!
  \*************************************/
/*! exports provided: ExitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitPageModule", function() { return ExitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exit.page */ "./src/app/exit/exit.page.ts");







var routes = [
    {
        path: '',
        component: _exit_page__WEBPACK_IMPORTED_MODULE_6__["ExitPage"]
    }
];
var ExitPageModule = /** @class */ (function () {
    function ExitPageModule() {
    }
    ExitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exit_page__WEBPACK_IMPORTED_MODULE_6__["ExitPage"]]
        })
    ], ExitPageModule);
    return ExitPageModule;
}());



/***/ }),

/***/ "./src/app/exit/exit.page.html":
/*!*************************************!*\
  !*** ./src/app/exit/exit.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exit/exit.page.scss":
/*!*************************************!*\
  !*** ./src/app/exit/exit.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXQvZXhpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/exit/exit.page.ts":
/*!***********************************!*\
  !*** ./src/app/exit/exit.page.ts ***!
  \***********************************/
/*! exports provided: ExitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitPage", function() { return ExitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExitPage = /** @class */ (function () {
    function ExitPage() {
        navigator['app'].exitApp();
    }
    ExitPage.prototype.ngOnInit = function () {
    };
    ExitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exit',
            template: __webpack_require__(/*! ./exit.page.html */ "./src/app/exit/exit.page.html"),
            styles: [__webpack_require__(/*! ./exit.page.scss */ "./src/app/exit/exit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExitPage);
    return ExitPage;
}());



/***/ })

}]);
//# sourceMappingURL=exit-exit-module.js.map