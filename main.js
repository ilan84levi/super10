(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"adminForm\">\n\n  <form #myForm=\"ngForm\">\n\n    <input type=\"text\" #email=\"ngModel\" required minlength=\"3\" placeholder=\"email...\" class=\"form-control\"\n      [(ngModel)]=\"admin.email\" name=\"email\"><br>\n\n    <span *ngIf=\"email.errors?.required && email.touched\">email is required</span>\n\n    <span *ngIf=\"email.errors?.minlength && email.touched\">email too short</span>\n\n    <input type=\"text\" #password=\"ngModel\" required minlength=\"3\" placeholder=\"password...\" class=\"form-control\"\n      [(ngModel)]=\"admin.password\" name=\"password\"><br>\n\n    <span *ngIf=\"password.errors?.required && password.touched\">password is required</span>\n\n    <span *ngIf=\"password.errors?.minlength && password.touched\">password too short</span>\n\n    <button [disabled]=\"myForm.form.invalid\" class=\"btn btn-success\" (click)=\"login()\">LOGIN</button>\n\n  </form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-register/customer-register.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-register/customer-register.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>sign up now</h1>\n\n<form #myForm=\"ngForm\">\n\n  <div class=\"example-container\">\n\n    <div class=\"inputsBox\">\n\n      <mat-form-field>\n        <input #cufirstName=\"ngModel\" required minlength=\"2\" matInput placeholder=\"first name\"\n          [(ngModel)]=\"customer.firstName\" name=\"firstName\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input #culastName=\"ngModel\" required minlength=\"2\" matInput placeholder=\"family name\"\n          [(ngModel)]=\"customer.lastName\" name=\"lastName\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input #cuEmail=\"ngModel\" required minlength=\"4\" matInput placeholder=\"EMAIL\" [(ngModel)]=\"customer.email\"\n          name=\"email\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input #cuPassword=\"ngModel\" required minlength=\"4\" matInput placeholder=\"password\"\n          [(ngModel)]=\"customer.password\" name=\"password\">\n      </mat-form-field>\n\n    </div>\n\n    <div class=\"inputsBox\">\n\n      <mat-form-field>\n        <input #cuTel=\"ngModel\" required minlength=\"8\" matInput placeholder=\"TEL\" [(ngModel)]=\"customer.phone\"\n          name=\"phone\">\n      </mat-form-field>\n\n      <span *ngIf=\"cuTel.errors?.required && cuTel.touched\"> Name is required</span>\n      <span *ngIf=\"cuTel.errors?.minlength && cuTel.touched\"> Name too short</span>\n\n      <mat-form-field>\n        <mat-select #cuCity=\"ngModel\" required minlength=\"2\" placeholder=\"select city\" [(ngModel)]=\"customer.city\"\n          name=\"city\">\n          <mat-option value=\"option\" *ngFor=\"let c of cities\" [value]=\"c.name\">{{c.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input #cuStreet=\"ngModel\" required matInput placeholder=\"street\" minlength=\"2\" [(ngModel)]=\"customer.street\"\n          name=\"street\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input #cuHouseNumber=\"ngModel\" required minlength=\"1\" matInput placeholder=\"house number\"\n          [(ngModel)]=\"customer.houseNumber\" name=\"houseNumber\">\n      </mat-form-field>\n\n\n      <br>\n      <button [disabled]=\"myForm.form.invalid\" mat-button class=\"registerBtn\" (click)=\"register()\">register</button>\n\n      <div class=\"errors-container\">\n\n        <span *ngIf=\"cufirstName.errors?.required && cufirstName.touched\"> First Name is required</span>\n        <span *ngIf=\"cufirstName.errors?.minlength && cufirstName.touched\"> First Name too short</span>\n\n        <span *ngIf=\"culastName.errors?.required && culastName.touched\">Last Name is required</span>\n        <span *ngIf=\"culastName.errors?.minlength && culastName.touched\">Last Name too short</span>\n\n        <span *ngIf=\"cuEmail.errors?.required && cuEmail.touched\"> Email is required</span>\n        <span *ngIf=\"cuEmail.errors?.minlength && cuEmail.touched\"> Email too short</span>\n\n        <span *ngIf=\"cuPassword.errors?.required && cuPassword.touched\"> Password is required</span>\n        <span *ngIf=\"cuPassword.errors?.minlength && cuPassword.touched\"> Password too short</span>\n\n        <span *ngIf=\"cuCity.errors?.required && cuCity.touched\"> City is required</span>\n        <span *ngIf=\"cuCity.errors?.minlength && cuCity.touched\"> City too short</span>\n\n        <span *ngIf=\"cuStreet.errors?.required && cuStreet.touched\"> Street is required</span>\n        <span *ngIf=\"cuStreet.errors?.minlength && cuStreet.touched\"> Street too short</span>\n\n        <span *ngIf=\"cuHouseNumber.errors?.required && cuHouseNumber.touched\"> House Number. is required</span>\n        <span *ngIf=\"cuHouseNumber.errors?.minlength && cuHouseNumber.touched\"> House Number. too short</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myFooter\">\n\n  <p>\n    all rights reserved to ILAN LEVI &copy;\n  </p>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myHeader\">\n\n  <div class=\"logoImage\"> </div>\n\n  <div class=\"headerButtons\">\n\n    <a class=\"a-link-btn-login a-link\" routerLink=\"/admin\">ADMIN-LOGIN</a>\n\n    <a class=\"a-link-btn-home a-link\" routerLink=\"/home\">HOME</a>\n\n    <a [ngClass]=\"dynamicShopBtn\" class=\"a-link-btn-shop a-link\" (click)=\"shopNow()\">SHOP</a>\n\n  </div>\n\n  <div class=\"serchInput\">\n\n    <input type=\"text\" placeholder=\"SERCH PRODUCT\" class=\"serchInput\">\n\n  </div>\n\n\n  <div>\n\n    <h6  class=\"h6-customer-wellcome\" [ngClass]=\"dynamicWellcomeCustomer\">HELLO {{currentUser.firstName}} {{currentUser.lastName}}</h6>\n\n  </div>\n\n  <div>\n\n    <h6 class=\"h6-guest-wellcome\" [ngClass]=\"dynamicWellcomeGuest\">Hello Guest</h6>\n\n  </div>\n\n  <div>\n\n    <button [ngClass]=\"dynamicLogOutBtn\" type=\"button\" class=\"btn btn-danger logOut-btn\"\n      (click)=\"logOut()\">LOG-OUT</button>\n\n    <button [ngClass]=\"dynamicLogOutAdminBtn\" type=\"button\" class=\"btn btn-danger logOut-btn-admin\"\n      (click)=\"logOutAdmin()\">LOG-OUT ADMIN</button>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- flex design -->\n<div class=\"container\">\n\n  <div class=\"panel-a panel \">\n\n    <button class=\"btn btn-info resume-hide\" [ngClass]=\"dynamicResume\" (click)=\"sendToStore()\">Resume shopping</button>\n\n    <button class=\"btn btn-info startShoppingBtn\" [ngClass]=\"dynamicStartShopping\" (click)=\"sendToStore()\">Start\n      shopping</button>\n\n    <p class=\"registered-para\" [ngClass]=\"dynamicClass\">Registered?</p>\n\n    <div>\n\n      <span *ngIf=\"customerEmail.errors?.required && customerEmail.touched\">email Input Is Empty</span>\n\n      <span *ngIf=\"customerEmail.errors?.minlength && customerEmail.touched\">email must be at least 4 character\n        long</span><br>\n\n      <span *ngIf=\"customerPassword.errors?.required && customerPassword.touched\">password Input Is Empty</span>\n\n      <span *ngIf=\"customerPassword.errors?.minlength && customerPassword.touched\">password must be at least 4 character\n        long</span>\n\n    </div>\n\n    <form #myForm=\"ngForm\" class=\"form-default-style\" [ngClass]=\"dynamicClassForm\">\n\n      <input required minlength=\"4\" #customerEmail=\"ngModel\" type=\"text\" placeholder=\"email\" class=\"form-control\"\n        [(ngModel)]=\"customer.email\" name=\"email\"><br>\n\n      <input required minlength=\"4\" #customerPassword=\"ngModel\" type=\"text\" placeholder=\"password\" class=\"form-control\"\n        [(ngModel)]=\"customer.password\" name=\"password\"><br>\n\n      <button [disabled]=\"myForm.form.invalid\" class=\"btn btn-success\" (click)=\"customerLogin()\">Login</button>\n\n    </form>\n\n    <a [routerLink]=\"['register']\" [ngClass]=\"dynamicClass\"><b>sign up</b></a>\n\n  </div>\n\n  <div class=\"panel-b panel\">\n\n    <h6>why you should buy in our store?</h6>\n\n    <p>Your online supermarket.\n      Shop fresh. Shop different.\n      Why go to the supermarket when the supermarket can come to you? Browse and shop from thousands of items. From\n      freshly baked morning breads, to late night chocolate cravings, you’ll get it all covered with just a few clicks.\n\n      It’s delivered fresh and fast. A survival plan of sorts! </p>\n\n    <div class=\"supermarketImage\">\n\n    </div>\n\n  </div>\n\n  <div class=\"panel-c panel\" [ngClass]=\"dynamicPanelCMessages\">\n\n    <div class=\"panel-c-supermarketImage\" [ngClass]=\"dynamicHide\">\n\n    </div>\n\n    <div>\n\n      <h6 [ngClass]=\"dynamicTotalPrice\" class=\"h3-TotalPrice\" *ngIf=\"total\">The total price of the cart is: {{total}}\n      </h6>\n\n      <h6 *ngIf=\"customerCartDate\">The cart is from date: {{customerCartDate | date:short }}</h6>\n\n      <h6 *ngIf=\"lastOrder\" class=\"h6-lastorder-hide\" [ngClass]=\"dynamicLastOrder\">your last order: {{lastOrder.date}}\n      </h6>\n\n      <h6 *ngIf=\"messageForNewCustomer\">{{messageForNewCustomer}}</h6>\n\n    </div>\n\n    <h6 [ngClass]=\"dynamicHide\" *ngIf=\"allProducts\">amount of products in our store: {{allProducts.length}} </h6>\n\n    <h6 [ngClass]=\"dynamicHide\" *ngIf=\"allOrders\">amount of orders from our store: {{allOrders.length}}</h6>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header><app-header></app-header></header>\n    <main><router-outlet></router-outlet></main>\n    <footer><app-footer></app-footer></footer>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>PAGE NOT FOUND</h1>\n\n<div class=\"pageNotFound\"></div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin.module": [
		"./src/app/modules/admin.module.ts",
		"default~admin-module~customers-module",
		"admin-module"
	],
	"./customers.module": [
		"./src/app/modules/customers.module.ts",
		"default~admin-module~customers-module",
		"customers-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adminForm {\n  display: -webkit-box;\n  display: flex;\n  width: 300px;\n  margin: auto;\n  margin-top: 25px;\n  background-color: coral;\n  border-radius: 25px;\n}\n\nform {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFkbWluRm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufSIsIi5hZG1pbkZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/admin */ "./src/app/models/admin.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, router, activatedRoute) {
        this.adminService = adminService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.admin = new src_app_models_admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
    }
    AdminComponent.prototype.login = function () {
        this.admin._id = undefined;
        this.admin.firstName = undefined;
        this.admin.lastName = undefined;
        this.adminService.CheckAdmin(this.admin);
    };
    AdminComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-register/customer-register.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/customer-register/customer-register.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: wheat;\n}\n\n.inputsBox > * {\n  width: 40%;\n  margin: 5px;\n}\n\n.registerBtn {\n  background-color: green;\n  width: 200px !important;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nspan {\n  color: red;\n  display: inline-block;\n  margin: 2px;\n}\n\n.errors-container {\n  display: inline;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 16px;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1yZWdpc3Rlci9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3VzdG9tZXItcmVnaXN0ZXJcXGN1c3RvbWVyLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyLXJlZ2lzdGVyL2N1c3RvbWVyLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0U7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQU47O0FER0M7RUFDRyxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItcmVnaXN0ZXIvY3VzdG9tZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoZWF0O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRzQm94ID4gKiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlZ2lzdGVyQnRue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gc3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi5lcnJvcnMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmlucHV0c0JveCA+ICoge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnJlZ2lzdGVyQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZXJyb3JzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/customer-register/customer-register.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/customer-register/customer-register.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRegisterComponent", function() { return CustomerRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/redux/action-type */ "./src/app/redux/action-type.ts");








var CustomerRegisterComponent = /** @class */ (function () {
    function CustomerRegisterComponent(redux, http, customersServics, router) {
        this.redux = redux;
        this.http = http;
        this.customersServics = customersServics;
        this.router = router;
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
    }
    CustomerRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cities = this.customersServics.getCitiesList();
        cities.subscribe(function (city) {
            _this.cities = city;
        });
    };
    CustomerRegisterComponent.prototype.register = function () {
        var _this = this;
        var reg = this.customersServics.addCustomer(this.customer);
        reg.subscribe(function (customer) {
            localStorage.setItem("customerId", JSON.stringify(customer._id));
            localStorage.setItem("customerLoggedIn", "true");
            _this.unsubscribe = _this.redux.subscribe(function () {
                var action = { type: src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_7__["ActionType"].loginCustomer };
                _this.redux.dispatch(action);
            });
            _this.ngOnInit();
            _this.router.navigate(["home"]);
        });
    };
    CustomerRegisterComponent.ctorParameters = function () { return [
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CustomerRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-register/customer-register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-register.component.scss */ "./src/app/components/customer-register/customer-register.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CustomerRegisterComponent);
    return CustomerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myFooter {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  background-color: #673ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxpbGFuXFxEZXNrdG9wXFzXpNeo15XXmden15jXmdedINeq15vXoNeV16og15DXmdec159cXHN1cGVybWFya2V0IDIwMDYxOVxcc3VwZXJtYXJrZXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9vdGVyW19uZ2NvbnRlbnQtaWNlLWMwXSB7XHJcbi8vICAgICBncmlkLWNvbHVtbjogc3BhbiAxMjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIHNlY3Rpb25bX25nY29udGVudC1peGstYzBde1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuLm15Rm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7XHJcbn0iLCIubXlGb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myHeader {\n  padding: 3%;\n  background-color: #673ab7;\n  display: inline-block;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.logoImage {\n  background-image: url(\"/assets/images/shopping-cart-logo.png\");\n  width: 50px;\n  height: 50px;\n  background-position-x: 100%;\n  background-position-y: 100%;\n  background-size: 100%;\n  z-index: 5;\n  background-repeat: no-repeat;\n}\n\n.serchInput {\n  visibility: hidden;\n}\n\n@media (max-width: 900px) {\n  .logoImage {\n    width: 50px;\n    height: 50px;\n    background-position-x: 100%;\n    background-position-y: 100%;\n    background-size: 100%;\n  }\n\n  .logOut-btn {\n    width: 60px;\n    height: 60px;\n    font-size: 12px;\n  }\n\n  .logOut-btn-container {\n    width: 60px;\n    height: 60px;\n    font-size: 12px;\n  }\n}\n\n.headerButtons {\n  font-family: \"Fugaz One\", cursive;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.a-link {\n  margin-left: 5%;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.h6-customer-wellcome,\n.h6-guest-wellcome {\n  position: relative;\n}\n\n.h6-customer-wellcome {\n  visibility: hidden;\n}\n\n.h6-guest-wellcome {\n  visibility: hidden;\n}\n\n.logOut-btn-container {\n  position: relative;\n  right: 40%;\n}\n\n.logOut-btn {\n  visibility: hidden;\n}\n\n.logOut-btn-admin {\n  visibility: hidden;\n}\n\n.logOutAdmin-h6-visible {\n  visibility: visible;\n}\n\n.a-link-btn-shop {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxpbGFuXFxEZXNrdG9wXFzXpNeo15XXmden15jXmdedINeq15vXoNeV16og15DXmdec159cXHN1cGVybWFya2V0IDIwMDYxOVxcc3VwZXJtYXJrZXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNBRjs7QURJQTtFQUNFLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FEUUE7RUFFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0VDTkY7O0VEU0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNORjs7RURTQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ05GO0FBQ0Y7O0FEV0E7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1RGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGNBO0VBQ0UsbUJBQUE7QUNYRjs7QURlQTtFQUNFLGtCQUFBO0FDWkY7O0FEaUJBOztFQUVFLGtCQUFBO0FDZEY7O0FEaUJBO0VBQ0Usa0JBQUE7QUNkRjs7QURpQkE7RUFDRSxrQkFBQTtBQ2RGOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2ZGOztBRGtCQTtFQUNFLGtCQUFBO0FDZkY7O0FEa0JBO0VBQ0ksa0JBQUE7QUNmSjs7QURtQkE7RUFDSSxtQkFBQTtBQ2hCSjs7QURvQkE7RUFDRSxrQkFBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29udGFpbmVyXHJcbi5teUhlYWRlciB7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gbG9nb1xyXG4ubG9nb0ltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zaG9wcGluZy1jYXJ0LWxvZ28ucG5nXCIpO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi8vIHNlcmNoIElucHV0XHJcbi5zZXJjaElucHV0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gd2lkdGggbWF4IC0gNjAwXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAubG9nb0ltYWdlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ091dC1idG4ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubG9nT3V0LWJ0bi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gaGVhZGVyIGJ1dHRvbnMgQ09OVEFJTkVSXHJcbi5oZWFkZXJCdXR0b25zIHtcclxuICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZScsIGN1cnNpdmU7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLy8gIDIgYnV0dG9ucyBvbiBoZWFkZXIgLSBsb2dpbiBhbmQgaG9tZVxyXG4uYS1saW5rIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi8vIEZPUiAgZHluYW1pYyBDTEFTU1xyXG4udmlzaWJsZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLy8gRk9SICBkeW5hbWljIENMQVNTXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi8vIGg2LWN1c3RvbWVyLXdlbGxjb21lIC8gZ3Vlc3QgLSAgY29udGFpbmVyIGRpdidzXHJcbi5oNi1jdXN0b21lci13ZWxsY29tZSxcclxuLmg2LWd1ZXN0LXdlbGxjb21lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oNi1jdXN0b21lci13ZWxsY29tZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaDYtZ3Vlc3Qtd2VsbGNvbWUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIGxvZyBvdXQgYnRuIGNvbnRhaW5lclxyXG4ubG9nT3V0LWJ0bi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNDAlO1xyXG59XHJcblxyXG4ubG9nT3V0LWJ0biB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9nT3V0LWJ0bi1hZG1pbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5sb2dPdXRBZG1pbi1oNi12aXNpYmxle1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuXHJcbi5hLWxpbmstYnRuLXNob3B7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59IiwiLm15SGVhZGVyIHtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zaG9wcGluZy1jYXJ0LWxvZ28ucG5nXCIpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc2VyY2hJbnB1dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sb2dvSW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuXG4gIC5sb2dPdXQtYnRuIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmxvZ091dC1idG4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uaGVhZGVyQnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1Z2F6IE9uZVwiLCBjdXJzaXZlO1xuICBmbGV4OiAxO1xufVxuXG4uYS1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5oNi1jdXN0b21lci13ZWxsY29tZSxcbi5oNi1ndWVzdC13ZWxsY29tZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmg2LWN1c3RvbWVyLXdlbGxjb21lIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaDYtZ3Vlc3Qtd2VsbGNvbWUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sb2dPdXQtYnRuLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDQwJTtcbn1cblxuLmxvZ091dC1idG4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sb2dPdXQtYnRuLWFkbWluIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubG9nT3V0QWRtaW4taDYtdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5hLWxpbmstYnRuLXNob3Age1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/redux/action-type */ "./src/app/redux/action-type.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, redux, http, customerService) {
        this.router = router;
        this.redux = redux;
        this.http = http;
        this.customerService = customerService;
        this.currentUser = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_7__["Customer"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var adminFromSession = JSON.parse(sessionStorage.getItem("isLoggedIn"));
        this.unsubscribe = this.redux.subscribe(function () {
            var adminFromStore = _this.redux.getState().isLoggedIn;
            if (adminFromStore === true || adminFromSession === true) {
                _this.dynamicLogOutAdminBtn = { "logOutAdmin-h6-visible": true, "logOut-btn-admin": false };
            }
            else {
                _this.dynamicLogOutAdminBtn = { "logOutAdmin-h6-visible": false, "logOut-btn-admin": true };
            }
        });
        var customerFromLocal = localStorage.getItem("customerId");
        if (customerFromLocal != null && customerFromLocal != undefined) {
            customerFromLocal = JSON.parse(customerFromLocal);
            var currentCustomer = this.customerService.getCustomer(customerFromLocal);
            this.dynamicLogOutBtn = { "visible": true, "logOut-btn": false, "hidden": false };
            this.dynamicWellcomeCustomer = { "visible": true, "h6-customer-wellcome": false };
            this.dynamicWellcomeGuest = { "hidden": true, "h6-guest-wellcome": true, "visible": false };
            this.dynamicShopBtn = { "visible": true, "a-link-btn-shop": false };
            currentCustomer.subscribe(function (customer) {
                _this.currentUser = customer;
            });
        }
        if (!customerFromLocal) {
            this.dynamicLogOutBtn = { "hidden": true };
            this.dynamicWellcomeGuest = { "hidden": false, "h6-guest-wellcome": false, "visible": true };
            this.dynamicWellcomeCustomer = { "visible": false };
            this.dynamicShopBtn = { "hidden": true, "a-link-btn-shop": true, "visible": false };
        }
        this.homePageUpload();
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.removeItem("customerId");
        localStorage.removeItem("newShoppingCart");
        sessionStorage.removeItem("customerLoggedIn");
        var action = { type: src_app_redux_action_type__WEBPACK_IMPORTED_MODULE_6__["ActionType"].logOutCustomer };
        this.redux.dispatch(action);
        this.dynamicShopBtn = { "hidden": true, "a-link-btn-shop": true, "visible": false };
        this.dynamicWellcomeGuest = { "hidden": false, "h6-guest-wellcome": false, "visible": true };
        this.dynamicLogOutBtn = { "hidden": true, "visible": false };
        this.router.navigate(["/home"]);
        this.dynamicWellcomeCustomer = { "visible": false, "hidden": true };
        this.ngOnInit();
    };
    HeaderComponent.prototype.homePageUpload = function () {
        var _this = this;
        var userFromLocal = localStorage.getItem("customerId");
        userFromLocal = JSON.parse(userFromLocal);
        this.unsubscribe = this.redux.subscribe(function () {
            _this.currentCustomerFromStore = _this.redux.getState().customerLoggedIn;
            if (_this.currentCustomerFromStore === true || userFromLocal) {
                _this.dynamicLogOutBtn = { "visible": true, "logOut-btn": false, "hidden": false };
                _this.dynamicWellcomeCustomer = { "visible": true, "h6-customer-wellcome": false };
                _this.dynamicWellcomeGuest = { "hidden": true, "h6-guest-wellcome": true, "visible": false };
                _this.dynamicShopBtn = { "hidden": false, "visible": true };
            }
            else {
                _this.dynamicLogOutBtn = { "hidden": true };
                _this.dynamicWellcomeGuest = { "visible": true, "h6-guest-wellcome": false, "hidden": false };
                _this.dynamicWellcomeCustomer = { "hidden": true, };
                _this.dynamicShopBtn = { "hidden": true, "a-link-btn-shop": true, "visible": false };
            }
        });
    };
    HeaderComponent.prototype.logOutAdmin = function () {
        sessionStorage.removeItem("isLoggedIn");
        this.dynamicLogOutAdminBtn = { "logOutAdmin-h6-visible": false, "logOut-btn-admin": true };
        this.router.navigate(["/home"]);
    };
    HeaderComponent.prototype.shopNow = function () {
        var customerLoggedIn = JSON.parse(sessionStorage.getItem("customerLoggedIn"));
        if (customerLoggedIn === true) {
            this.router.navigate(["/home/shop"]);
        }
        else {
            this.router.navigate(["/home"]);
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ng2_redux__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 95%;\n  margin: 40px auto 0 auto;\n}\n\n.panel {\n  box-sizing: border-box;\n  width: 30%;\n  padding: 3%;\n  border-radius: 2%;\n  flex-basis: 30%;\n  margin-bottom: 5%;\n}\n\n.panel-a {\n  background-color: chartreuse;\n}\n\n.panel-b {\n  background-color: red;\n}\n\n.panel-c {\n  background-color: darkmagenta;\n}\n\n.supermarketImage {\n  background-image: url('supermarket.jpg');\n  height: 20%;\n  background-position-x: 100%;\n  background-position-y: 100%;\n  background-size: 100%;\n}\n\n.panel-c-supermarketImage {\n  position: relative;\n  left: -10%;\n  background-image: url('supermarket1.jpg');\n  height: 20%;\n  width: 350px;\n  background-position-x: 100%;\n  background-position-y: 100%;\n  background-size: 100%;\n  margin-left: 20px;\n  padding: 5%;\n}\n\n@media (min-width: 1025px) {\n  .container {\n    -webkit-box-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 2%;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    height: 100%;\n    width: 100%;\n  }\n}\n\n@media (max-width: 1024px) {\n  .panel {\n    -webkit-box-flex: 3;\n            flex: 3;\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 2%;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n    height: 100%;\n  }\n\n  .supermarketImage {\n    display: none;\n  }\n\n  .panel-c-supermarketImage {\n    display: none;\n  }\n}\n\n.showForGuest {\n  visibility: visible;\n}\n\n.hideForLoginCustomer {\n  visibility: hidden;\n}\n\n.login-form-hide {\n  visibility: hidden;\n}\n\n.login-form-show {\n  visibility: visible;\n}\n\n.form-default-style {\n  visibility: visible;\n}\n\n.panel-a-afterLogin {\n  background-color: yellow;\n}\n\n.panel-c-hide-element {\n  visibility: hidden;\n}\n\n.resume-shopping {\n  visibility: visible;\n}\n\n.resume-hide {\n  visibility: hidden;\n}\n\n.startShoppingBtn-hide {\n  visibility: hidden;\n}\n\n.startShopping {\n  visibility: visible;\n}\n\nform > span {\n  color: red;\n  text-align: left;\n  position: absolute;\n  margin: 2px;\n}\n\n.totalPrice-h3 {\n  visibility: visible;\n}\n\n.h3-TotalPrice {\n  visibility: hidden;\n}\n\n.h6-dynamicLastOrder {\n  visibility: visible;\n}\n\n.h6-lastorder-hide {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcaWxhblxcRGVza3RvcFxc16TXqNeV15nXp9eY15nXnSDXqteb16DXldeqINeQ15nXnNefXFxzdXBlcm1hcmtldCAyMDA2MTlcXHN1cGVybWFya2V0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLDZCQUFBO0FDREY7O0FES0E7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNGRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UsbUJBQUE7WUFBQSxPQUFBO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNIRjtBQUNGOztBRE9BO0VBQ0U7SUFDRSxtQkFBQTtZQUFBLE9BQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ0xGOztFRFFBO0lBQ0UsYUFBQTtFQ0xGOztFRFFBO0lBQ0UsYUFBQTtFQ0xGO0FBQ0Y7O0FEUUE7RUFDSSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksbUJBQUE7QUNOSjs7QURVQTtFQUNJLHdCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7QUNQSjs7QURVQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmxleCBkZXNpZ25cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgZmxleC1iYXNpczogMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucGFuZWwtYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxufVxyXG5cclxuLnBhbmVsLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnBhbmVsLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmttYWdlbnRhO1xyXG59XHJcblxyXG4vLyAgIC8vIHBhbmVsIGIgaW1hZ2VcclxuLnN1cGVybWFya2V0SW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3N1cGVybWFya2V0LmpwZ1wiKTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLy8gICAvLyBwYW5lbCBjIGltYWdlXHJcbi5wYW5lbC1jLXN1cGVybWFya2V0SW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMTAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3N1cGVybWFya2V0MS5qcGdcIik7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5wYW5lbCB7XHJcbiAgICBmbGV4OiAzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc3VwZXJtYXJrZXRJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWMtc3VwZXJtYXJrZXRJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3dGb3JHdWVzdHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oaWRlRm9yTG9naW5DdXN0b21lcntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0taGlkZXtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tc2hvd3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5mb3JtLWRlZmF1bHQtc3R5bGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vLyBkeW5hbWljIHBhbmVsIEFcclxuLnBhbmVsLWEtYWZ0ZXJMb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnBhbmVsLWMtaGlkZS1lbGVtZW50e1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ucmVzdW1lLXNob3BwaW5ne1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnJlc3VtZS1oaWRle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RhcnRTaG9wcGluZ0J0bi1oaWRle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RhcnRTaG9wcGluZ3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbmZvcm0gPiBzcGFuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50b3RhbFByaWNlLWgze1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmgzLVRvdGFsUHJpY2V7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oNi1keW5hbWljTGFzdE9yZGVye1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmg2LWxhc3RvcmRlci1oaWRle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XG59XG5cbi5wYW5lbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDMlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgZmxleC1iYXNpczogMzAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnBhbmVsLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xufVxuXG4ucGFuZWwtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnBhbmVsLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcbn1cblxuLnN1cGVybWFya2V0SW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9zdXBlcm1hcmtldC5qcGdcIik7XG4gIGhlaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4ucGFuZWwtYy1zdXBlcm1hcmtldEltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9zdXBlcm1hcmtldDEuanBnXCIpO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogNSU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBhbmVsIHtcbiAgICBmbGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zdXBlcm1hcmtldEltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBhbmVsLWMtc3VwZXJtYXJrZXRJbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNob3dGb3JHdWVzdCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRlRm9yTG9naW5DdXN0b21lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxvZ2luLWZvcm0taGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxvZ2luLWZvcm0tc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mb3JtLWRlZmF1bHQtc3R5bGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucGFuZWwtYS1hZnRlckxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4ucGFuZWwtYy1oaWRlLWVsZW1lbnQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5yZXN1bWUtc2hvcHBpbmcge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucmVzdW1lLWhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zdGFydFNob3BwaW5nQnRuLWhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zdGFydFNob3BwaW5nIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuZm9ybSA+IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4udG90YWxQcmljZS1oMyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oMy1Ub3RhbFByaWNlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaDYtZHluYW1pY0xhc3RPcmRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oNi1sYXN0b3JkZXItaGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/shoppingCart */ "./src/app/models/shoppingCart.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var HomeComponent = /** @class */ (function () {
    function HomeComponent(customersService, redux, http, productsService, router) {
        this.customersService = customersService;
        this.redux = redux;
        this.http = http;
        this.productsService = productsService;
        this.router = router;
        this.currentUser = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.customerCartDetails = new src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_7__["ShoppingCart"]();
        this.messageForNewCustomer = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userFromLocal = localStorage.getItem("customerId");
        userFromLocal = JSON.parse(userFromLocal);
        if (userFromLocal) {
            this.dynamicClass = { "showForGuest": false, "hideForLoginCustomer": true };
            this.dynamicClassForm = { "login-form-hide": true, "login-form-show": false, "form-default-style": false };
            this.dynamicHide = { "panel-c-hide-element": true };
            this.dynamicLastOrder = { "h6-dynamicLastOrder": true, "h6-lastorder-hide": false };
            this.loginMessage();
            sessionStorage.setItem("customerLoggedIn", "true");
        }
        else {
            this.dynamicClass = { "showForGuest": true, "hideForLoginCustomer": false };
            this.dynamicClassForm = { "form-default-style": true };
            this.dynamicHide = { "panel-c-hide-element": false };
            this.dynamicTotalPrice = { "totalPrice-h3": true };
            this.dynamicLastOrder = { "h6-dynamicLastOrder": false, "h6-lastorder-hide": true };
        }
        this.homePageUpload();
        var productsFromCollection = this.productsService.GetAllProducts();
        productsFromCollection.subscribe(function (product) {
            _this.allProducts = product;
        });
        var ordersFromCollection = this.productsService.GetAllOrders();
        ordersFromCollection.subscribe(function (order) {
            _this.allOrders = order;
        });
    };
    HomeComponent.prototype.customerLogin = function () {
        var _this = this;
        this.customer._id = undefined;
        this.customer.firstName = undefined;
        this.customer.lastName = undefined;
        this.customer.city = undefined;
        this.customer.houseNumber = undefined;
        this.customer.street = undefined;
        this.customer.phone = undefined;
        this.customersService.checkCredintialsForCustomer(this.customer);
        var userFromLocal = localStorage.getItem("customerId");
        userFromLocal = JSON.parse(userFromLocal);
        this.unsubscribe = this.redux.subscribe(function () {
            var currentUser = _this.redux.getState().isLoggedIn;
            if (currentUser === true || userFromLocal) {
                _this.dynamicClass = { "showForGuest": false, "hideForLoginCustomer": true };
                _this.ngOnInit();
            }
        });
    };
    HomeComponent.prototype.homePageUpload = function () {
        var _this = this;
        this.unsubscribe = this.redux.subscribe(function () {
            var customerFromStore = _this.redux.getState().customerLoggedIn;
            if (customerFromStore === true) {
                _this.dynamicClass = { "showForGuest": false, "hideForLoginCustomer": true };
                _this.dynamicClassForm = { "login-form-hide": true, "login-form-show": false, "form-default-style": false };
                _this.dynamicPanelCMessages = { "panel-a-afterLogin": true };
                _this.dynamicHide = { "panel-c-hide-element": true };
                _this.dynamicLastOrder = { "h6-dynamicLastOrder": true, "h6-lastorder-hide": false };
            }
            else {
                _this.dynamicClass = { "showForGuest": true, "hideForLoginCustomer": false };
                _this.dynamicClassForm = { "form-default-style": true };
                _this.dynamicPanelCMessages = { "panel-a-afterLogin": false };
                _this.dynamicHide = { "panel-c-hide-element": false };
                _this.dynamicTotalPrice = { "totalPrice-h3": true };
                _this.dynamicLastOrder = { "h6-dynamicLastOrder": false, "h6-lastorder-hide": true };
            }
        });
    };
    HomeComponent.prototype.loginMessage = function () {
        var _this = this;
        var cartId = JSON.parse(localStorage.getItem("newShoppingCart"));
        if (cartId) {
            var customerCart = this.customersService.checkForCart();
            customerCart.subscribe(function (items) {
                _this.cartItemsForMessage = items;
                _this.showTotal(_this.cartItemsForMessage);
                _this.dynamicResume = { "resume-shopping": true, "startShopping": false, "resume-hide": false };
                _this.dynamicHide = { "startShopping": false };
                _this.dynamicTotalPrice = { "totalPrice-h3": false };
            });
            var customerCartDetails = this.customersService.getOneCartByCartId();
            customerCartDetails.subscribe(function (CustomerCart) {
                _this.customerCartDetails = CustomerCart;
                _this.customerCartDate = CustomerCart[0].date;
                _this.dynamicStartShopping = { "startShoppingBtn-hide": false, "startShopping": true };
            });
        }
        else if (!cartId) {
            var lastCustomerCart = this.customersService.getCustomerOrders();
            lastCustomerCart.subscribe(function (cart) {
                _this.customerOrders = cart;
                if (_this.customerOrders.length > 0) {
                    var customerLastOrder = _this.customerOrders[_this.customerOrders.length - 1];
                    if (customerLastOrder !== undefined) {
                        _this.lastOrder = customerLastOrder;
                        _this.dynamicStartShopping = { "startShopping": true };
                        _this.dynamicTotalPrice = { "totalPrice-h3": true };
                        _this.dynamicLastOrder = { "h6-dynamicLastOrder": true, "h6-lastorder-hide": false };
                    }
                }
                else {
                    _this.messageForNewCustomer = "wellcome to my store, start shopping ";
                    _this.dynamicStartShopping = { "startShopping": true };
                    _this.dynamicTotalPrice = { "totalPrice-h3": true };
                }
            });
        }
    };
    HomeComponent.prototype.showTotal = function (items) {
        var myTotal = 0;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                myTotal += (items[i].amount * items[i].price);
            }
            this.total = myTotal;
        }
    };
    HomeComponent.prototype.sendToStore = function () {
        this.router.navigate(["/home/shop"]);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\nmain {\n  -webkit-box-flex: 4;\n          flex: 4;\n}\n\nheader {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\nfooter {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 12%;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQzpcXFVzZXJzXFxpbGFuXFxEZXNrdG9wXFzXpNeo15XXmden15jXmdedINeq15vXoNeV16og15DXmdec159cXHN1cGVybWFya2V0IDIwMDYxOVxcc3VwZXJtYXJrZXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBmbGV4OjQ7XHJcbn1cclxuXHJcbmhlYWRlcntcclxuICAgIGZsZXg6MTtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDoxO1xyXG4gICAgaGVpZ2h0OiAxMiU7XHJcbiAgICBwYWRkaW5nOiAwIDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwic2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG5tYWluIHtcbiAgZmxleDogNDtcbn1cblxuaGVhZGVyIHtcbiAgZmxleDogMTtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEyJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/page404/page404.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pageNotFound {\n  width: 400px;\n  height: 400px;\n  background-image: url(\"/assets/images/page404.jpg\");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L0M6XFxVc2Vyc1xcaWxhblxcRGVza3RvcFxc16TXqNeV15nXp9eY15nXnSDXqteb16DXldeqINeQ15nXnNefXFxzdXBlcm1hcmtldCAyMDA2MTlcXHN1cGVybWFya2V0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlNDA0XFxwYWdlNDA0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZU5vdEZvdW5ke1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhZ2U0MDQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSIsIi5wYWdlTm90Rm91bmQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhZ2U0MDQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.scss */ "./src/app/components/page404/page404.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/models/admin.ts":
/*!*********************************!*\
  !*** ./src/app/models/admin.ts ***!
  \*********************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Admin = /** @class */ (function () {
    function Admin(_id, firstName, lastName, email, password) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    ;
    return Admin;
}());

;


/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Customer = /** @class */ (function () {
    function Customer(_id, firstName, lastName, email, password, phone, city, street, houseNumber) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
    }
    ;
    return Customer;
}());

;


/***/ }),

/***/ "./src/app/models/shoppingCart.ts":
/*!****************************************!*\
  !*** ./src/app/models/shoppingCart.ts ***!
  \****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(_id, customerId, // forign key
    date) {
        this._id = _id;
        this.customerId = customerId;
        this.date = date;
    }
    ;
    return ShoppingCart;
}());

;


/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/customer-register/customer-register.component */ "./src/app/components/customer-register/customer-register.component.ts");








var routes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: "admin/admin-board", loadChildren: "./admin.module#AdminModule" },
    { path: "home/register", component: _components_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_7__["CustomerRegisterComponent"] },
    { path: "home/shop", loadChildren: "./customers.module#CustomersModule" },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"] } // חייב להיות אחרון ברשימה
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/app.module.ts":
/*!***************************************!*\
  !*** ./src/app/modules/app.module.ts ***!
  \***************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/store */ "./src/app/redux/store.ts");
/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducer */ "./src/app/redux/reducer.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _components_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/customer-register/customer-register.component */ "./src/app/components/customer-register/customer-register.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");














// import { store } from '@angular/core/src/render3';











// import {Component} from 'angular2/core';
var AppModule = /** @class */ (function () {
    function AppModule(redux) {
        redux.configureStore(_redux_reducer__WEBPACK_IMPORTED_MODULE_13__["Reducer"].reduce, new _redux_store__WEBPACK_IMPORTED_MODULE_12__["Store"]());
    }
    AppModule.ctorParameters = function () { return [
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_10__["NgRedux"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"],
                _components_customer_register_customer_register_component__WEBPACK_IMPORTED_MODULE_22__["CustomerRegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng2_redux__WEBPACK_IMPORTED_MODULE_10__["NgReduxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_21__["AngularFileUploaderModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_redux__WEBPACK_IMPORTED_MODULE_10__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/redux/action-type.ts":
/*!**************************************!*\
  !*** ./src/app/redux/action-type.ts ***!
  \**************************************/
/*! exports provided: ActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ActionType;
(function (ActionType) {
    //category
    ActionType[ActionType["GetAllCategories"] = 0] = "GetAllCategories";
    //customers
    ActionType[ActionType["AddCustomer"] = 1] = "AddCustomer";
    ActionType[ActionType["GetOneCustomer"] = 2] = "GetOneCustomer";
    ActionType[ActionType["loginCustomer"] = 3] = "loginCustomer";
    ActionType[ActionType["logOutCustomer"] = 4] = "logOutCustomer";
    // items
    ActionType[ActionType["GetAllItems"] = 5] = "GetAllItems";
    ActionType[ActionType["GetOneItem"] = 6] = "GetOneItem";
    ActionType[ActionType["AddItem"] = 7] = "AddItem";
    ActionType[ActionType["DeleteItem"] = 8] = "DeleteItem";
    //mangers - admin
    ActionType[ActionType["loginAdmin"] = 9] = "loginAdmin";
    ActionType[ActionType["AddAdmin"] = 10] = "AddAdmin";
    ActionType[ActionType["adminLogout"] = 11] = "adminLogout";
    // orders
    ActionType[ActionType["AddOrders"] = 12] = "AddOrders";
    ActionType[ActionType["GetAllOrders"] = 13] = "GetAllOrders";
    ActionType[ActionType["GetOneOrder"] = 14] = "GetOneOrder";
    // products
    ActionType[ActionType["GetAllProducts"] = 15] = "GetAllProducts";
    ActionType[ActionType["GetOneProduct"] = 16] = "GetOneProduct";
    ActionType[ActionType["AddProduct"] = 17] = "AddProduct";
    ActionType[ActionType["UpdateProduct"] = 18] = "UpdateProduct";
    ActionType[ActionType["UpdatePartialProduct"] = 19] = "UpdatePartialProduct";
    ActionType[ActionType["getProductToUpdate"] = 20] = "getProductToUpdate";
    //shopping cart
    ActionType[ActionType["AddShoppingCart"] = 21] = "AddShoppingCart";
    ActionType[ActionType["GetAllShoppingCarts"] = 22] = "GetAllShoppingCarts";
    ActionType[ActionType["GetOneShoppingCart"] = 23] = "GetOneShoppingCart";
    ActionType[ActionType["DeleteShoppingCart"] = 24] = "DeleteShoppingCart";
    ActionType[ActionType["UpdateShoppingCart"] = 25] = "UpdateShoppingCart";
    ActionType[ActionType["UpdatePartialShoppingCart"] = 26] = "UpdatePartialShoppingCart";
    ActionType[ActionType["RemoveShoppingCart"] = 27] = "RemoveShoppingCart";
})(ActionType || (ActionType = {}));


/***/ }),

/***/ "./src/app/redux/reducer.ts":
/*!**********************************!*\
  !*** ./src/app/redux/reducer.ts ***!
  \**********************************/
/*! exports provided: Reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducer", function() { return Reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-type */ "./src/app/redux/action-type.ts");


var Reducer = /** @class */ (function () {
    function Reducer() {
    }
    Reducer.reduce = function (oldStore, action) {
        var newStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, oldStore);
        switch (action.type) {
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAllCategories:
                newStore.categories = action.payload;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAllItems:
                newStore.products = action.payload;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].loginAdmin:
                newStore.isLoggedIn = true;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].adminLogout:
                newStore.isLoggedIn = false;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].loginCustomer:
                newStore.customerLoggedIn = true;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].logOutCustomer:
                newStore.customerLoggedIn = false;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetOneCustomer:
                newStore.customer = action.payload;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetOneProduct:
                for (var i = 0; i < newStore.products.length; i++) {
                    if (newStore.products[i]._id === action.payload.id) {
                        newStore.product = newStore.products[i];
                        console.log(newStore.product);
                        break;
                    }
                }
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].UpdateProduct:
                newStore.productToUpdate = action.payload;
                break;
            case _action_type__WEBPACK_IMPORTED_MODULE_1__["ActionType"].getProductToUpdate:
                newStore.productToUpdate;
                break;
            // case ActionType.UpdateProduct:
            //      for (let i = 0; i < newStore.products.length; i++) {
            //          if (newStore.products[i]._id === action.payload.id) {
            //             action.payload = newStore.productToUpdate
            //              break;
            //          }
            //      }
            //      break;
        }
        // console.log(newStore)
        return newStore;
    };
    return Reducer;
}());



/***/ }),

/***/ "./src/app/redux/store.ts":
/*!********************************!*\
  !*** ./src/app/redux/store.ts ***!
  \********************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Store = /** @class */ (function () {
    function Store() {
        this.searchInputClass = "hidden";
        // admin  login and Logout
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            this.isLoggedIn = true;
        }
        // customer login 
        if (sessionStorage.getItem("customerLoggedIn") === "true") {
            this.customerLoggedIn = true;
        }
        // customer  Logout
        if (sessionStorage.getItem("customerLoggedIn") === "false") {
            this.customerLoggedIn = false;
        }
    }
    return Store;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-type */ "./src/app/redux/action-type.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AdminService = /** @class */ (function () {
    function AdminService(httpClient, router, redux) {
        this.httpClient = httpClient;
        this.router = router;
        this.redux = redux;
    }
    AdminService.prototype.CheckAdmin = function (admin) {
        var _this = this;
        this.isExist = this.httpClient.post("http://localhost:3000/api/admin/login", admin);
        this.isExist.subscribe(function (admin) {
            if (admin._id) {
                _this.router.navigate(["admin/admin-board"]);
                sessionStorage.setItem("isLoggedIn", "true");
                var action = { type: _redux_action_type__WEBPACK_IMPORTED_MODULE_4__["ActionType"].loginAdmin };
                _this.redux.dispatch(action);
                return true;
            }
            else {
                alert("Incorrect username or password :-(");
            }
        }, function (res) {
            alert(res.error.message);
        });
    };
    AdminService.prototype.addProduct = function (product) {
        return this.httpClient.post("http://localhost:3000/api/products", product);
    };
    // GET ALL PRODUCTS
    AdminService.prototype.GetAllProducts = function () {
        var _this = this;
        var observable = this.httpClient.get("http://localhost:3000/api/products");
        observable.subscribe(function (products) {
            var action = { type: _redux_action_type__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllProducts, payload: products };
            _this.redux.dispatch(action); // Will operate the recuder function.
        });
    };
    // PATCH - UPDATE PARTIAL CANDY
    AdminService.prototype.updatePartialProduct = function (_id, product) {
        return this.httpClient.patch("http://localhost:3000/api/products/" + _id, product);
    };
    AdminService.prototype.getOneProductById = function (_id) {
        return this.httpClient.get("http://localhost:3000/api/products/" + _id);
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _redux_action_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/action-type */ "./src/app/redux/action-type.ts");







var CustomersService = /** @class */ (function () {
    function CustomersService(httpClient, router, redux) {
        this.httpClient = httpClient;
        this.router = router;
        this.redux = redux;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
        this.currentUser = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
    }
    CustomersService.prototype.getCitiesList = function () {
        return this.httpClient.get("/assets/json/cities.json");
    };
    CustomersService.prototype.addCustomer = function (customer) {
        return this.httpClient.post("http://localhost:3000/api/customers", customer);
    };
    CustomersService.prototype.checkCredintialsForCustomer = function (customer) {
        var _this = this;
        this.isExisted = this.httpClient.post("http://localhost:3000/api/customers/login", customer);
        this.isExisted.subscribe(function (customer) {
            if (customer._id) {
                _this.router.navigate(["home"]);
                sessionStorage.setItem("customerLoggedIn", "true");
                var action = { type: _redux_action_type__WEBPACK_IMPORTED_MODULE_6__["ActionType"].loginCustomer };
                _this.redux.dispatch(action);
                _this.saveCustomerInStore(customer);
                return true;
            }
            else {
                alert("Incorrect username or password :-(");
            }
        }, function (res) {
            alert(res.error.message);
        });
    };
    CustomersService.prototype.saveCustomerInStore = function (customer) {
        var _this = this;
        localStorage.setItem("customerId", JSON.stringify(customer._id));
        this.getCustomer(customer._id).subscribe(function (customer) {
            var action = { type: _redux_action_type__WEBPACK_IMPORTED_MODULE_6__["ActionType"].GetOneCustomer, payload: customer };
            _this.redux.dispatch(action);
        });
    };
    CustomersService.prototype.addItemToCart = function (item) {
        return this.httpClient.post("http://localhost:3000/api/cartItems", item);
    };
    CustomersService.prototype.checkForCart = function () {
        var newShoppingCart = localStorage.getItem("newShoppingCart");
        if (newShoppingCart) {
            var cartId = JSON.parse(newShoppingCart);
            return this.httpClient.get("http://localhost:3000/api/cartItems/" + cartId._id);
        }
    };
    CustomersService.prototype.getOneCartByCartId = function () {
        var newShoppingCart = localStorage.getItem("newShoppingCart");
        if (newShoppingCart) {
            var cartId = JSON.parse(newShoppingCart);
            return this.httpClient.get("http://localhost:3000/api/carts/" + cartId._id);
        }
    };
    CustomersService.prototype.getCartItems = function (id) {
        var cart = localStorage.getItem(id);
        return cart;
    };
    // get customer shopping cart
    CustomersService.prototype.getCustomerShoppingCart = function () {
        var customerCart = JSON.parse(localStorage.getItem("customerId"));
        return this.httpClient.get("http://localhost:3000/api/carts/" + customerCart);
    };
    // get customer orders
    CustomersService.prototype.getCustomerOrders = function () {
        var customerId = JSON.parse(localStorage.getItem("customerId"));
        return this.httpClient.get("http://localhost:3000/api/orders/" + customerId);
    };
    CustomersService.prototype.createShoppingCart = function (cart) {
        return this.httpClient.post("http://localhost:3000/api/carts", cart);
    };
    CustomersService.prototype.getCustomer = function (id) {
        return this.httpClient.get("http://localhost:3000/api/customers/" + id);
    };
    //  ADD ORDER
    CustomersService.prototype.addOrder = function (order) {
        return this.httpClient.post("http://localhost:3000/api/orders/", order);
    };
    CustomersService.prototype.removeOneCartItem = function (id) {
        return this.httpClient.delete("http://localhost:3000/api/cartItems/" + id);
    };
    CustomersService.prototype.removeAllCartItems = function (id) {
        return this.httpClient.delete("http://localhost:3000/api/cartItems/deleteall/" + id);
    };
    CustomersService.prototype.messageForCustomer = function () {
        var customerCart = JSON.parse(localStorage.getItem("customerId"));
        return this.httpClient.get("http://localhost:3000/api/carts/" + customerCart);
    };
    CustomersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
    ]; };
    CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);





var ProductsService = /** @class */ (function () {
    function ProductsService(httpClient, router, redux) {
        this.httpClient = httpClient;
        this.router = router;
        this.redux = redux;
    }
    ProductsService.prototype.GetAllCategories = function () {
        return this.httpClient.get("http://localhost:3000/api/categories/list");
    };
    ProductsService.prototype.GetAllProducts = function () {
        return this.httpClient.get("http://localhost:3000/api/products");
    };
    ProductsService.prototype.GetAllOrders = function () {
        return this.httpClient.get("http://localhost:3000/api/orders");
    };
    ProductsService.prototype.GetAllProductsByCategory = function (id) {
        return this.httpClient.get("http://localhost:3000/api/products/" + id);
    };
    ProductsService.prototype.GetProductsBySearch = function (string) {
        return this.httpClient.get("http://localhost:3000/api/products/search/" + string);
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
    ]; };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_modules_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/modules/app.module */ "./src/app/modules/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_modules_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ilan\Desktop\פרויקטים תכנות אילן\supermarket 200619\supermarket\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map