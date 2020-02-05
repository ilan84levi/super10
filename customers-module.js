(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-buy-store/best-buy-store.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-buy-store/best-buy-store.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n  <div class=\"cartDiv\">\n\n    <h5>my cart</h5>\n\n    <button *ngIf=\"items\" class=\"btn btn-danger deleteAllCart\" (click)=\"deleteAllItems()\">Delete All</button>\n\n    <hr>\n\n    <div class=\"cartItems itemsContainer\">\n\n      <div *ngFor=\"let item of items\">\n\n        <div class=\"itemAddedDiv\">\n\n          <div class=\"deleteIcon\" (click)=\"deleteItem(item._id)\"><i class=\"fas fa-times \"></i></div>\n\n          <img src=\"http://localhost:3000/{{item.productId.productImage}}\" alt=\"\" class=\"productImage\">\n          {{item.productId.productName}}\n          <br>\n          <span>Quntity: {{item.amount}}</span>\n          <br>\n          {{item.productId.price | currency}}\n          <br>\n          {{item.productId.categoryName.name}}\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"totalPriceAndOrderDiv\">\n\n      <h6 class=\"total-h6\">Total price:{{totalPrice | currency}}</h6>\n\n      <button type=\"button\" (click)=\"orderNow()\" class=\"btn btn-success orderButton\">ORDER NOW</button>\n\n    </div>\n\n  </div>\n\n  <div class=\"mainDiv\">\n\n    <div class=\"spinner\" *ngIf=\"!categories\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n    <div class=\"categoriesNavBar col-xs\" *ngIf=\"categories\">\n\n      <input type=\"text\" placeholder=\"serch\" #searchInput>\n\n      <button (click)=\"serchProduct(searchInput.value)\" class=\"btn btn-dark\">search</button>\n\n      <div class=\"categoriesDiv col-xs \">\n\n        <h5 class=\"categories-h5\" (click)=\"showAllProducts()\">all products |</h5>\n\n        <div *ngFor=\"let c of categories\">\n\n          <h5 class=\"categories-h5\" (click)=\" changeCategory(c._id)\" selected>{{c.name}} |</h5>\n\n        </div>\n\n      </div><br>\n\n      <span *ngIf=\"amountError\" class=\"amountErrorClass\">{{amountError}}</span>\n\n    </div>\n\n    <div class=\"productContainer\">\n\n      <div class=\"spinner\" *ngIf=\"!products\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n      <div *ngFor=\"let p of products\" class=\"products-div\">\n\n        <div class=\"productItem\">\n\n          <span class=\"addBtn\" (click)=\"addToCart(p)\"><i class=\"fas fa-plus addItemFas\"></i></span>\n\n          <div class=\"amountPanel\" *ngIf=\"item\">\n\n            <input class=\"amountInput\" matInput placeholder=\"choose amount\" type=\"number\" name=\"amount\"\n              [(ngModel)]=\"item.amount\" min=\"1\" max=\"1000\">\n\n          </div>\n\n\n          <div (click)=\"addToCart(p)\" class=\"product\">\n\n            <div>\n\n              <img src=\"http://localhost:3000/{{p.productImage}}\" alt=\"\" class=\"productImage\">\n\n            </div>\n\n            <div class=\"productDetails\">\n\n              <p>{{p.productName}}</p>\n              <br>\n              <p>{{p.price | currency}}</p>\n              <br>\n              <p> {{p.categoryName.name}}</p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid all-container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-xs-5 col-sm-6 col\">\n\n      <h5>myCart - Total Price: {{totalPrice | currency}}</h5>\n\n    </div>\n\n    <div class=\"col-xs-5 col-sm-6 col \">\n\n      <h5>Shipping Details:</h5>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col col-xs-4 col-sm-4 col-lg-6 myCart\">\n\n      <div class=\"cartItems itemsContainer\">\n\n        <div *ngFor=\"let item of items\">\n\n          <div class=\"item \">\n\n            <img src=\"http://localhost:3000/{{item.productId.productImage}}\" alt=\"\" class=\"productImage\">\n            {{item.productId.productName}}\n            <br>\n            <span>Quntity: {{item.amount}}</span>\n            <br>\n            {{item.productId.price | currency}}\n            <br>\n            {{item.productId.categoryName.name}}\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div (click)=\"backToCart()\">\n\n        <i class=\"fas fa-arrow-left \">Back To Cart</i>\n\n      </div>\n\n    </div>\n\n    <div class=\"col col-xs-4 col-sm-8 col-lg-6 orderForm\">\n\n      <form class=\"example-form\" #myForm=\"ngForm\">\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"select city\" required minlength=\"2\" #customerCity=\"ngModel\"\n            [(ngModel)]=\"customer.city\" [value]=\"customer.city\" #city name=\"city\">\n            <mat-option matInput *ngFor=\"let c of cities\" value=\"{{c.name}}\">{{c.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <span *ngIf=\"customerCity.errors?.required && customerCity.touched\">must select a city</span>\n        <span *ngIf=\"customerCity.errors?.minlength && customerCity.touched\">city must be at least 3 character\n          long</span>\n\n        <mat-form-field class=\"example-full-width street\">\n          <input matInput type=\"text\" required minlength=\"2\" placeholder=\"street\" #customerStreet=\"ngModel\"\n            [(ngModel)]=\"customer.street\" [value]=\"customer.street\" #street name=\"street\">\n        </mat-form-field>\n\n        <span *ngIf=\"customerStreet.errors?.required && customerStreet.touched\">Missing Street name.</span>\n        <span *ngIf=\"customerStreet.errors?.minlength && customerStreet.touched\">Street name too short.</span>\n\n        <mat-form-field class=\"example-full-width houseNumber\">\n          <input matInput type=\"text\" placeholder=\"House Number\" required minlength=\"2\" #customerHouseNumber=\"ngModel\"\n            [(ngModel)]=\"customer.houseNumber\" [value]=\"customer.houseNumber\" #houseNumber name=\"houseNumber\">\n        </mat-form-field>\n\n        <span *ngIf=\"customerHouseNumber.errors?.required && customerHouseNumber.touched\">Missing Street.</span>\n        <span *ngIf=\"customerHouseNumber.errors?.minlength && customerHouseNumber.touched\"> Street name is too\n          short.</span>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"date\" required minlength=\"1\" [(ngModel)]=\"order.date\" placeholder=\"Shipping Date\"\n            #customerDate=\"ngModel\" #date name=\"date\">\n        </mat-form-field>\n\n        <span *ngIf=\"customerDate.errors?.required && customerDate.touched\">Missing house Number.</span>\n        <span *ngIf=\"customerDate.errors?.minlength && customerDate.touched\">house Number is too short.</span>\n\n\n        <p>payments:</p>\n        <hr>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput [(ngModel)]=\"order.creditCard\" type=\"text\" placeholder=\"Credit Card\" required minlength=\"8\"\n            #customerCreditCard=\"ngModel\" #creditCard name=\"customerCreditCard\">\n        </mat-form-field>\n\n        <span *ngIf=\"customerCreditCard.errors?.required && customerCreditCard.touched\">Missing product name.</span>\n        <span *ngIf=\"customerCreditCard.errors?.minlength && customerCreditCard.touched\">Product name too short.</span>\n\n        <div class=\"example-button-row\">\n\n          <button [disabled]=\"myForm.form.invalid\" mat-button color=\"primary\"\n            (click)=\"sendOrder(creditCard.value, date.value , houseNumber.value , street.value , city.value)\">Send\n            Order</button>\n        \n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-you/thank-you.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-you/thank-you.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n\n      <div class=\"thank-you\">\n\n        <h1>thank you for your purchase</h1>\n\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"home()\">GO TO HOME PAGE</button>\n      \n    </div>\n\n    </div>\n    \n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/components/best-buy-store/best-buy-store.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/best-buy-store/best-buy-store.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: bisque;\n  text-align: center;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: 100%;\n}\n\n.mainDiv {\n  grid-column: span 8;\n  background-color: burlywood;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.cartDiv {\n  grid-column: span 4;\n  background-color: gold;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.categoriesNavBar {\n  height: 10%;\n  width: 100%;\n  background-color: cadetblue;\n}\n\n.categoriesDiv {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  font-family: \"Indie Flower\", cursive;\n}\n\n.categories-h5 {\n  margin: 5px;\n  padding: 1px;\n  font-size: 17px;\n}\n\n.productContainer {\n  width: 100%;\n  height: 80%;\n  padding: 2%;\n  margin: 2%;\n  overflow: auto;\n}\n\n.productItem {\n  position: relative;\n  width: 280px;\n  height: 140px;\n  background-color: white;\n  margin: 2px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  float: left;\n  padding: 3px;\n  z-index: 0;\n}\n\n.productDetails {\n  right: 20%;\n  height: 100%;\n  z-index: 6;\n  font-size: 15px;\n  float: left;\n}\n\np {\n  text-align: justify;\n  font-size: 15px;\n  display: inline;\n  position: relative;\n  left: 100px;\n  top: -100px;\n}\n\n.productImage {\n  width: 100px;\n  height: 100px;\n  float: left;\n}\n\n.itemsContainer {\n  width: 100%;\n  overflow: auto;\n}\n\n.itemAddedDiv {\n  width: 100%;\n  height: 140px;\n  margin-bottom: 2px;\n  background-color: white;\n  opacity: 0.9;\n}\n\n.amountPanel {\n  visibility: hidden;\n}\n\n.productItem:hover .amountPanel {\n  position: absolute;\n  visibility: visible;\n  width: 100%;\n  right: 0;\n  height: 50px;\n  bottom: 0;\n  opacity: 0.7;\n  z-index: 3;\n}\n\n.amountInput {\n  position: absolute;\n  width: 100%;\n  right: 0;\n  height: 50px;\n  z-index: 5;\n  background-color: cadetblue;\n  text-align: center;\n  font-size: x-large;\n}\n\n.total-h6 {\n  position: relative;\n  left: -20%;\n}\n\n.orderButton {\n  width: 100%;\n  position: relative;\n}\n\n.deleteIcon {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 230px;\n  z-index: 3;\n  font-size: x-large;\n  color: red;\n  margin-left: 80%;\n}\n\n.addBtn {\n  position: absolute;\n  right: 0;\n}\n\n.addItemFas {\n  color: red;\n  font-size: 20px;\n}\n\n.amountErrorClass {\n  color: red;\n  z-index: 8;\n  font-family: \"Courier New\", Courier, monospace;\n  text-decoration: underline;\n  text-transform: uppercase;\n}\n\n.deleteAllCart {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZXN0LWJ1eS1zdG9yZS9DOlxcVXNlcnNcXGlsYW5cXERlc2t0b3BcXNek16jXldeZ16fXmNeZ150g16rXm9eg15XXqiDXkNeZ15zXn1xcc3VwZXJtYXJrZXQgMjAwNjE5XFxzdXBlcm1hcmtldC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmVzdC1idXktc3RvcmVcXGJlc3QtYnV5LXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jlc3QtYnV5LXN0b3JlL2Jlc3QtYnV5LXN0b3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURHQTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDREY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FET0E7RUFDRSxrQkFBQTtFQUVBLFFBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDTEY7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iZXN0LWJ1eS1zdG9yZS9iZXN0LWJ1eS1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluRGl2IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiA4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJ0RGl2IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllc05hdkJhciB7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG59XHJcblxyXG5cclxuLmNhdGVnb3JpZXNEaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcclxuXHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWg1IHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3RJdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0RGV0YWlscyB7XHJcbiAgcmlnaHQ6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTAwcHg7XHJcbiAgdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLml0ZW1zQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLml0ZW1BZGRlZERpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuLmFtb3VudFBhbmVsIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0SXRlbTpob3ZlciAuYW1vdW50UGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5hbW91bnRJbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4udG90YWwtaDYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMjAlO1xyXG59XHJcblxyXG4ub3JkZXJCdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRlbGV0ZUljb24ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAyMzBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuXHJcblxyXG4uYWRkQnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hZGRJdGVtRmFzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi5hbW91bnRFcnJvckNsYXNze1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZGVsZXRlQWxsQ2FydHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufSIsIi5jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xufVxuXG4ubWFpbkRpdiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FydERpdiB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhdGVnb3JpZXNOYXZCYXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cblxuLmNhdGVnb3JpZXNEaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiSW5kaWUgRmxvd2VyXCIsIGN1cnNpdmU7XG59XG5cbi5jYXRlZ29yaWVzLWg1IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ucHJvZHVjdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbjogMiU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvZHVjdEl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgei1pbmRleDogMDtcbn1cblxuLnByb2R1Y3REZXRhaWxzIHtcbiAgcmlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA2O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAwcHg7XG4gIHRvcDogLTEwMHB4O1xufVxuXG4ucHJvZHVjdEltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLml0ZW1zQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaXRlbUFkZGVkRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmFtb3VudFBhbmVsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucHJvZHVjdEl0ZW06aG92ZXIgLmFtb3VudFBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5hbW91bnRJbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi50b3RhbC1oNiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTIwJTtcbn1cblxuLm9yZGVyQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRlbGV0ZUljb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDIzMHB4O1xuICB6LWluZGV4OiAzO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbi5hZGRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYWRkSXRlbUZhcyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFtb3VudEVycm9yQ2xhc3Mge1xuICBjb2xvcjogcmVkO1xuICB6LWluZGV4OiA4O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZGVsZXRlQWxsQ2FydCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/best-buy-store/best-buy-store.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/best-buy-store/best-buy-store.component.ts ***!
  \***********************************************************************/
/*! exports provided: BestBuyStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestBuyStoreComponent", function() { return BestBuyStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/shoppingCart */ "./src/app/models/shoppingCart.ts");











var BestBuyStoreComponent = /** @class */ (function () {
    function BestBuyStoreComponent(router, http, adminService, productsService, redux, customerService) {
        this.router = router;
        this.http = http;
        this.adminService = adminService;
        this.productsService = productsService;
        this.redux = redux;
        this.customerService = customerService;
        this.item = new src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["Item"]();
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_8__["Customer"]();
        this.cart = new src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_10__["ShoppingCart"]();
        this.date = new Date();
        this.newCart = new src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_10__["ShoppingCart"]();
        this.amountError = "";
    }
    BestBuyStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        var categoriesFromCollection = this.productsService.GetAllCategories();
        categoriesFromCollection.subscribe(function (category) {
            _this.categories = category;
        });
        var productsFromCollection = this.productsService.GetAllProducts();
        productsFromCollection.subscribe(function (product) {
            _this.products = product;
        });
        var customerCart = this.customerService.checkForCart();
        if (customerCart === null || customerCart === undefined) {
            var id = localStorage.getItem("customerId");
            id = JSON.parse(id);
            var date = new Date();
            this.cart.customerId = id;
            this.cart.date = date;
            this.createShoppingCart(this.cart);
        }
        else {
            customerCart.subscribe(function (cartItems) {
                _this.redux.getState().items = cartItems;
                var newShoppingCart = localStorage.getItem("newShoppingCart");
                var cartId = JSON.parse(newShoppingCart);
                _this.redux.getState().cartId = cartId._id;
                _this.cartId = cartId._id;
                _this.items = cartItems;
                var total = 0;
                for (var i = 0; i < _this.items.length; i++) {
                    total += (_this.items[i].amount * _this.items[i].price);
                }
                _this.totalPrice = total;
            });
        }
    };
    BestBuyStoreComponent.prototype.changeCategory = function (id) {
        var _this = this;
        var productsByCategories = this.productsService.GetAllProductsByCategory(id);
        productsByCategories.subscribe(function (product) {
            _this.products = product;
        });
    };
    BestBuyStoreComponent.prototype.showAllProducts = function () {
        this.ngOnInit();
    };
    BestBuyStoreComponent.prototype.addToCart = function (item) {
        var _this = this;
        var local = localStorage.getItem("newShoppingCart");
        local = JSON.parse(local);
        this.cartId = local;
        this.item.cartId = this.cartId._id;
        this.item.price = item.price;
        item.amount = this.item.amount;
        this.item.productId = item._id;
        var total = 0;
        total += (this.item.amount * this.item.price);
        this.totalPrice += total;
        this.totalPrice;
        if (this.item.amount <= 0 || this.item.amount > 1000) {
            this.amountError = "number between 1-1000";
            alert("number must be between 1-1000");
            this.ngOnInit();
            return false;
        }
        else {
            var addItem = this.customerService.addItemToCart(this.item);
            addItem.subscribe(function (item) {
                _this.ngOnInit();
            });
        }
    };
    BestBuyStoreComponent.prototype.createShoppingCart = function (cart) {
        var _this = this;
        var newCart = this.customerService.createShoppingCart(cart);
        newCart.subscribe(function (newCart) {
            _this.newCart = newCart;
            _this.redux.getState().newCart = newCart;
            localStorage.setItem("newShoppingCart", JSON.stringify(newCart));
        });
    };
    BestBuyStoreComponent.prototype.orderNow = function () {
        this.router.navigate(["home/shop/order"]);
    };
    BestBuyStoreComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        var deleteItem = this.customerService.removeOneCartItem(itemId);
        deleteItem.subscribe(function (item) {
            _this.ngOnInit();
        });
    };
    BestBuyStoreComponent.prototype.serchProduct = function (val) {
        var _this = this;
        var products = this.productsService.GetProductsBySearch(val);
        products.subscribe(function (product) {
            _this.products = product;
        });
    };
    BestBuyStoreComponent.prototype.deleteAllItems = function () {
        var _this = this;
        var cartId = JSON.parse(localStorage.getItem("newShoppingCart"));
        var deleteAll = this.customerService.removeAllCartItems(cartId._id);
        deleteAll.subscribe(function () {
            _this.ngOnInit();
        });
    };
    BestBuyStoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] },
        { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"] }
    ]; };
    BestBuyStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-best-buy-store',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./best-buy-store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-buy-store/best-buy-store.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./best-buy-store.component.scss */ "./src/app/components/best-buy-store/best-buy-store.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"],
            src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
    ], BestBuyStoreComponent);
    return BestBuyStoreComponent;
}());



/***/ }),

/***/ "./src/app/components/order-page/order-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-page/order-page.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all-container {\n  background-color: bisque;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 400px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n  background-color: green;\n}\n\n.myCart,\n.orderForm {\n  height: 100%;\n  width: 100%;\n}\n\n.itemsContainer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  max-height: 364px;\n  overflow: auto;\n}\n\n.productImage {\n  width: 100px;\n  height: 100px;\n  float: left;\n}\n\n.item {\n  width: 80%;\n  height: 25%;\n  margin-bottom: 2px;\n  background-color: white;\n  opacity: 0.9;\n  overflow: auto;\n  margin-top: 1%;\n  padding: 1%;\n}\n\nform > span {\n  color: red;\n  text-align: left;\n  position: absolute;\n  margin: 2px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .productImage {\n    width: 65px;\n    height: 60px;\n  }\n\n  .itemsContainer {\n    max-height: 300px;\n    max-width: 150px;\n  }\n\n  .item {\n    height: 45%;\n  }\n\n  .example-form {\n    min-width: 100px;\n    max-width: 400px;\n    width: 100%;\n    max-height: 450px;\n    font-size: 10px;\n  }\n\n  .alert-danger {\n    color: red;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1wYWdlL0M6XFxVc2Vyc1xcaWxhblxcRGVza3RvcFxc16TXqNeV15nXp9eY15nXnSDXqteb16DXldeqINeQ15nXnNefXFxzdXBlcm1hcmtldCAyMDA2MTlcXHN1cGVybWFya2V0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcmRlci1wYWdlXFxvcmRlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLXBhZ2Uvb3JkZXItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBOztFQUVFLGlCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDREY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0ZGOztFREtBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0UsV0FBQTtFQ0ZGOztFREtBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNGRjs7RURLQTtJQUNFLFVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1wYWdlL29yZGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5teUNhcnQsXHJcbi5vcmRlckZvcm0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5pdGVtc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDM2NHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuXHJcbmZvcm0+c3BhbiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lcj4qIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnByb2R1Y3RJbWFnZSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIC5pdGVtc0NvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIi5hbGwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5teUNhcnQsXG4ub3JkZXJGb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW1zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM2NHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnByb2R1Y3RJbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDElO1xuICBwYWRkaW5nOiAxJTtcbn1cblxuZm9ybSA+IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvZHVjdEltYWdlIHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAuaXRlbXNDb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAuaXRlbSB7XG4gICAgaGVpZ2h0OiA0NSU7XG4gIH1cblxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmFsZXJ0LWRhbmdlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/order-page/order-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-page/order-page.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageComponent", function() { return OrderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");









var OrderPageComponent = /** @class */ (function () {
    function OrderPageComponent(redux, http, customersServics, router) {
        this.redux = redux;
        this.http = http;
        this.customersServics = customersServics;
        this.router = router;
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
        this.item = new src_app_models_item__WEBPACK_IMPORTED_MODULE_7__["Item"]();
        this.order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_8__["Order"]();
    }
    OrderPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cities = this.customersServics.getCitiesList();
        cities.subscribe(function (city) {
            _this.cities = city;
        });
        var customerCart = this.customersServics.checkForCart();
        customerCart.subscribe(function (item) {
            _this.items = item;
            _this.checkTotalPrice();
        });
        var currentCustomerFromLocalStorage = localStorage.getItem("customerId");
        currentCustomerFromLocalStorage = JSON.parse(currentCustomerFromLocalStorage);
        var currentCustomer = this.customersServics.getCustomer(currentCustomerFromLocalStorage);
        currentCustomer.subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    OrderPageComponent.prototype.checkTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            total += (this.items[i].amount * this.items[i].price);
        }
        this.totalPrice = total;
    };
    OrderPageComponent.prototype.backToCart = function () {
        this.router.navigate(["home/shop"]);
    };
    OrderPageComponent.prototype.sendOrder = function (creditCard, date, houseNumber, street, city) {
        var _this = this;
        var currentCustomerFromLocalStorage = localStorage.getItem("newShoppingCart");
        currentCustomerFromLocalStorage = JSON.parse(currentCustomerFromLocalStorage);
        this.order.creditCard = creditCard;
        this.order.date = date;
        this.order.houseNumber = houseNumber;
        this.order.street = street;
        this.order.city = city;
        this.order.cartId = currentCustomerFromLocalStorage;
        this.order.customerId = this.customer._id;
        this.order.finelPrice = this.totalPrice;
        var newOrder = this.customersServics.addOrder(this.order);
        newOrder.subscribe(function (customerOrder) {
            _this.router.navigate(["home/shop/thank-you"]);
            localStorage.removeItem("newShoppingCart");
        });
    };
    OrderPageComponent.ctorParameters = function () { return [
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    OrderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'order',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-page.component.scss */ "./src/app/components/order-page/order-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrderPageComponent);
    return OrderPageComponent;
}());



/***/ }),

/***/ "./src/app/components/thank-you/thank-you.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/thank-you/thank-you.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/thank-you/thank-you.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/thank-you/thank-you.component.ts ***!
  \*************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent(router) {
        this.router = router;
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent.prototype.home = function () {
        this.router.navigate(["home"]);
    };
    ThankYouComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thank-you',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-you/thank-you.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you.component.scss */ "./src/app/components/thank-you/thank-you.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/models/item.ts":
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Item = /** @class */ (function () {
    function Item(_id, productId, amount, price, cartId) {
        if (amount === void 0) { amount = 1; }
        this._id = _id;
        this.productId = productId;
        this.amount = amount;
        this.price = price;
        this.cartId = cartId;
    }
    ;
    return Item;
}());

;


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Order = /** @class */ (function () {
    function Order(_id, customerId, // forign key
    cartId, // forign key
    finelPrice, city, street, houseNumber, date, creditCard) {
        this._id = _id;
        this.customerId = customerId;
        this.cartId = cartId;
        this.finelPrice = finelPrice;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.date = date;
        this.creditCard = creditCard;
    }
    ;
    return Order;
}());

;


/***/ }),

/***/ "./src/app/modules/customers.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/customers.module.ts ***!
  \*********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_best_buy_store_best_buy_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/best-buy-store/best-buy-store.component */ "./src/app/components/best-buy-store/best-buy-store.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customers_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/customers-guard.service */ "./src/app/services/customers-guard.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/order-page/order-page.component */ "./src/app/components/order-page/order-page.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/thank-you/thank-you.component */ "./src/app/components/thank-you/thank-you.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");















var myShop = [
    {
        path: "", component: _components_best_buy_store_best_buy_store_component__WEBPACK_IMPORTED_MODULE_3__["BestBuyStoreComponent"], canActivate: [_services_customers_guard_service__WEBPACK_IMPORTED_MODULE_5__["CustomersGuardService"]],
        children: [],
    },
    { path: 'order', component: _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__["OrderPageComponent"], canActivate: [_services_customers_guard_service__WEBPACK_IMPORTED_MODULE_5__["CustomersGuardService"]] },
    { path: 'thank-you', component: _components_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"], canActivate: [_services_customers_guard_service__WEBPACK_IMPORTED_MODULE_5__["CustomersGuardService"]] }
];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_best_buy_store_best_buy_store_component__WEBPACK_IMPORTED_MODULE_3__["BestBuyStoreComponent"],
                _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__["OrderPageComponent"],
                _components_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(myShop),
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"]
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/services/customers-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/customers-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomersGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGuardService", function() { return CustomersGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);




var CustomersGuardService = /** @class */ (function () {
    function CustomersGuardService(redux, router) {
        this.redux = redux;
        this.router = router;
    }
    CustomersGuardService.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
        var userLoogedIn = sessionStorage.getItem("customerLoggedIn");
        if (this.redux.getState().customerLoggedIn || userLoogedIn) {
            return true;
        }
        this.router.navigate(["/home/register"], { queryParams: { redirect: routerStateSnapshot.url } });
        return false;
    };
    CustomersGuardService.ctorParameters = function () { return [
        { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CustomersGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomersGuardService);
    return CustomersGuardService;
}());



/***/ })

}]);
//# sourceMappingURL=customers-module.js.map