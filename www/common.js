(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-4e92c885.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-4e92c885.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js ***!
  \********************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                router = document.querySelector('ion-router');
                if (!router) return [3 /*break*/, 2];
                if (ev != null) {
                    ev.preventDefault();
                }
                return [4 /*yield*/, router.componentOnReady()];
            case 1:
                _a.sent();
                return [2 /*return*/, router.push(url, direction)];
            case 2: return [2 /*return*/, false];
        }
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-c90aaa66.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-c90aaa66.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js ***!
  \********************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-icon style=\"width: 40px;height: 30px;margin-left: 10px\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n    <ion-title\r\n      style=\"text-align: center;font-size: 15px;padding-right: 0px;font-family: 'Comic Sans MS', cursive, sans-serif;\">\r\n      <strong>FIQUE CALMO! PEÇA AJUDA - 192</strong>\r\n    </ion-title>\r\n    <ion-icon (click)=\"openBusca()\" name=\"search\" slot=\"end\" style=\"width: 40px;height: 30px;margin-right: 10px\">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='6' *ngFor=\"let topico of topicosApp\" (click)=\"openTopico(topico.titulo, topico.icon)\">\r\n        <ion-card style=\"height: 175px;padding-top: 0px;\">\r\n          <ion-img style=\"width: 165px;height: 100px; margin-left: auto; margin-right: auto;\"\r\n            [src]=\"topico.icon\"></ion-img>\r\n\r\n          <ion-card-header style=\"padding-top: 5px;\">\r\n            <ion-card-title\r\n              style=\"text-align: center;font-size: 15px;font-family: 'Comic Sans MS', cursive, sans-serif;\">\r\n              <strong>{{topico.titulo}}</strong>\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"callEmergencia()\" style=\"--background: red\">\r\n        <ion-icon name=\"call\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #FFFF;\n  --background: rgb(248, 63, 63);\n  height: 70px; }\n\nion-card-content {\n  overflow: hidden;\n  white-space: normal; }\n\nion-card-title {\n  text-overflow: ellipsis;\n  font-family: \"Comic Sans MS\", cursive, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJBRkFFTERFT0xJVkVJUkFCQUhJXFxEb2N1bWVudHNcXEdpdEh1YlxcUHJpbWVpcm9zU29jb3Jyb3Mvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBUTtFQUNSLDhCQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUtkO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVCQUF1QjtFQUN2QixpREFBaUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1jb2xvcjogI0ZGRkY7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ4LCA2MywgNjMpO1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuXHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcblxyXG59Il19 */"

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
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");







var HomePage = /** @class */ (function () {
    function HomePage(statusBar, callNumber, platform, file, router, actionSheetController) {
        var _this = this;
        this.statusBar = statusBar;
        this.callNumber = callNumber;
        this.platform = platform;
        this.file = file;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.topicosApp = [];
        this.isItemAvailable = false; // initialize the items with false
        this.statusBar.backgroundColorByHexString('#b6000b');
        this.getList();
        HomePage_1.topicosTotais = this.topicosApp;
        this.platform.backButton.subscribe(function () {
            _this.router.navigate(['/exit']);
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.callEmergencia = function () {
        var mobileNumber = '192';
        window.open("tel:" + mobileNumber);
    };
    HomePage.prototype.openTopico = function (titulo, icone) {
        if (titulo == 'Queimaduras' || titulo == 'Traumas' || titulo == 'Transporte de acidentados' || titulo == 'Animais Peçonhentos' || titulo == 'Emergências relacionadas ao calor' || titulo == 'Hemorragias' || titulo == 'Intoxicações e Envenenamentos') {
            this.router.navigate(['/complementares', { name: titulo }]);
        }
        else {
            this.router.navigate(['/blank', { name: titulo, icon: icone }]);
        }
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
                "titulo": "Afogamento",
                "icon": "assets/img/afogamento.png"
            },
            {
                "id": 2,
                "titulo": "Animais Peçonhentos",
                "icon": "assets/img/animais_principal.png"
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
                "icon": "assets/img/desmaio.png"
            },
            {
                "id": 6,
                "titulo": "Desobstrução das vias aéreas",
                "icon": "assets/img/Desobstrução das vias aéreas.PNG"
            },
            {
                "id": 7,
                "titulo": "Emergências relacionadas ao calor",
                "icon": "assets/img/calor_principal.png"
            },
            {
                "id": 8,
                "titulo": "Epilepsia",
                "icon": "assets/img/Epilepsia.PNG"
            },
            {
                "id": 9,
                "titulo": "Hemorragias",
                "icon": "assets/img/hemorragia_principal.png"
            },
            {
                "id": 10,
                "titulo": "Intoxicações e Envenenamentos",
                "icon": "assets/img/veneno_principal.png"
            },
            {
                "id": 11,
                "titulo": "Parada Cardíaca",
                "icon": "assets/img/parada_cardiaca.PNG"
            },
            {
                "id": 12,
                "titulo": "Queimaduras",
                "icon": "assets/img/queimadura_principal.png"
            },
            {
                "id": 13,
                "titulo": "Queimaduras Elétricas",
                "icon": "assets/img/Queimaduras Elétricas.PNG"
            },
            {
                "id": 14,
                "titulo": "Transporte de acidentados",
                "icon": "assets/img/transporte.png"
            },
            {
                "id": 15,
                "titulo": "Traumas",
                "icon": "assets/img/trauma_principal.png"
            }
        ];
    };
    var HomePage_1;
    HomePage = HomePage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map