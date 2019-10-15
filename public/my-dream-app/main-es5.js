(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\"> \n   \n  <div class=\"container\" >\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <span> Mana Tadepalligudem </span> \n      </div>\n    </div>\n    <nav class=\"navbar navbar-default \" style=\"background-color: #F0C849;\"> \n      <div class=\"container-fluid\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\" style=\"background-color:#246613;color:white\">\n          <span class=\"sr-only\" >Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n         \n        </button>\n\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" >\n        <ul class=\" nav navbar-nav\" >\n          <li ><a  [routerLink]=\"['/home']\"> <b>Home</b> </a></li>\n          <li><a [routerLink]=\"['/tpgstores']\" ><b>TPG Stores</b>  </a></li>\n          <li><a [routerLink]=\"['/deals']\"> <b>Deals</b> </a></li>\n          <li><a [routerLink]=\"['/entertainment']\"> <b>Entertainment</b>  </a></li>\n          <li><a [routerLink]=\"['/contactus']\"> <b> Contact Us</b> </a></li>\n\n        </ul>\n      </div>\n    </nav>\n    <br/>\n\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\"> \n    <div class=\"row row-centered\">\n    <div class=\"col-sm-4 col-centered\">\n        <div>\n            <div class=\"form-group\">\n                    <label for=\"usr\">Name:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"usr\">\n            </div> \n            <div class=\"form-group\">\n                <label for=\"email\">Email Id</label>\n                <input id=\"email\" class=\"form-control\" type=\"email\"/>\n            </div>\n                        \n            <div class=\"form-group\">\n                    <label for='phno'>Phone Number</label>\n                    <input type=\"tel\" class=\"form-control\" id=\"phno\"/>\n            </div>\n\n            <div class=\"form-group\">\n                    <label for='desc'>Description</label>\n                    <textarea type=\"text\" class=\"form-control\" id=\"desc\" style=\"max-width: 100%;\"></textarea>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-info\">Submit</button>\n\n        </div>  \n\n    </div>\n    </div>\n\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/deals/deals.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deals/deals.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/entertainment/entertainment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entertainment/entertainment.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>entertainment works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n    <div class=\"col-md-12 col-centered\" >\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                <!-- Indicators -->\n                <ol class=\"carousel-indicators\">\n                        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n                      </ol>\n              \n                <!-- Wrapper for slides -->\n                <div class=\"carousel-inner\">\n                  <div class=\"item active\">\n                    <img src=\"../../assets/images/la.jpg\" alt=\"Los Angeles\">\n                  </div>\n              \n                  <div class=\"item\">\n                    <img src=\"../../assets/images/chicago.jpg\" alt=\"Chicago\">\n                  </div>\n              \n                  <div class=\"item\">\n                    <img src=\"../../assets/images/ny.jpg\" alt=\"New York\">\n                  </div>\n                </div>\n              \n                <!-- Left and right controls -->\n                <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </div>\n\n         \n\n     \n\n    </div>\n    <div class=\"border\">\n            <div class=\"row\" >\n                <div class=\"col-md-8\" >\n                        <div class=\"container-fluid\">\n                                <div class=\"box-parent\"> \n                                        <p class=\"card-title\">Shopping</p>\n                                        <div class=\"box effect\">\n                                                <a href=\"#\"><img class=\"image\" src=\"../../assets/images/shopping.jpg\"/></a>   \n                                        </div>\n\n                                </div>\n                                         \n                                <div class=\"box-parent\">\n                                        <p class=\"card-title\">Hospital</p>\n                                        <div class=\"box effect\">\n                                                <img class=\"image\" src=\"../../assets/images/hospital.jpg\"/>\n                                         </div>\n                                </div>\n                                   \n                           \n                               \n                           \n                                <div class=\"box-parent\">\n                                        <p class=\"card-title\">Activities</p>\n                                        <div class=\"box effect\">\n                                                <img class=\"image\" src=\"../../assets/images/activities-1-1.jpg\"/>\n                                         </div>\n                                </div>\n                                \n                                \n                                <div class=\"box-parent\">\n                                        <p class=\"card-title\">City</p>\n                                        <div class=\"box effect\">\n                                                <img class=\"image\" src=\"../../assets/images/chicago.jpg\"/>\n                                         </div>\n\n                                </div>\n                                \n                                 \n                                 <div class=\"box-parent\">\n                                        <p class=\"card-title\">Pubs</p>\n                                        <div class=\"box effect\">\n                                                <img class=\"image\" src=\"../../assets/images/la.jpg\"/>\n                                         </div>\n\n                                 </div>\n                                 \n                                 \n                                 <div class=\"box-parent\">\n                                        <p class=\"card-title\">Pubs</p>\n                                        <div class=\"box effect\">\n                                                <img class=\"image\" src=\"../../assets/images/ny.jpg\"/>\n                                         </div>\n\n                                 </div>\n                                 \n                            \n                           </div>\n        \n                </div>\n                <div class=\"col-md-4\">\n                        <div>\n                                <div class=\"jumbotron jumbotron-style\" style=\"padding: 10px\">\n                                        <h2> <span class=\"label label-default\">Movies</span></h2>\n                                        <div id=\"myCarousel2\" class=\"carousel slide\" data-ride=\"carousel\">\n                                                <!-- Indicators -->\n                                                \n                                              \n                                                <!-- Wrapper for slides -->\n                                                <div class=\"carousel-inner\">\n                                                  <div class=\"item active\">\n                                                    <img src=\"../../assets/images/la.jpg\" alt=\"Los Angeles\">\n                                                  </div>\n                                              \n                                                  <div class=\"item\">\n                                                    <img src=\"../../assets/images/chicago.jpg\" alt=\"Chicago\">\n                                                  </div>\n                                              \n                                                  <div class=\"item\">\n                                                    <img src=\"../../assets/images/ny.jpg\" alt=\"New York\">\n                                                  </div>\n                                                </div>\n                                              \n                                                <!-- Left and right controls -->\n                                                <a class=\"left carousel-control\" href=\"#myCarousel2\" data-slide=\"prev\">\n                                                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                                                  <span class=\"sr-only\">Previous</span>\n                                                </a>\n                                                <a class=\"right carousel-control\" href=\"#myCarousel2\" data-slide=\"next\">\n                                                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                                                  <span class=\"sr-only\">Next</span>\n                                                </a>\n                                              </div>\n                                </div>\n                        </div>\n                           \n                             \n                  </div>\n        \n                \n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tpgstores/tpgstores.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tpgstores/tpgstores.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tpgstores works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #04192e;\r\n    display:block;\r\n    padding: 3px;\r\n    color: white;\r\n    font-size: 26px;\r\n    line-height: 70px;\r\n    text-align: left;\r\n\r\n}\r\n\r\na {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDE5MmU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-dream-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tpgstores_tpgstores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tpgstores/tpgstores.component */ "./src/app/tpgstores/tpgstores.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entertainment/entertainment.component */ "./src/app/entertainment/entertainment.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-service.service */ "./src/app/home-service.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _tpgstores_tpgstores_component__WEBPACK_IMPORTED_MODULE_7__["TpgstoresComponent"],
                _deals_deals_component__WEBPACK_IMPORTED_MODULE_8__["DealsComponent"],
                _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_9__["EntertainmentComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'tpgstores', component: _tpgstores_tpgstores_component__WEBPACK_IMPORTED_MODULE_7__["TpgstoresComponent"] },
                    { path: 'deals', component: _deals_deals_component__WEBPACK_IMPORTED_MODULE_8__["DealsComponent"] },
                    { path: 'entertainment', component: _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_9__["EntertainmentComponent"] },
                    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"] },
                ]),
            ],
            providers: [_home_service_service__WEBPACK_IMPORTED_MODULE_11__["HomeServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align:center;\r\n}\r\n.col-centered {\r\n    display:inline-block;\r\n    float:none;\r\n    color: aliceblue;\r\n    /* reset the text-align */\r\n    text-align:left;\r\n    /* inline-block space fix */\r\n    margin-right:-4px;\r\n    text-align: center;\r\n    background-color: darkslategrey;\r\n    padding: 10px;\r\n    border-radius: 5px;    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmNvbC1jZW50ZXJlZCB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgLyogcmVzZXQgdGhlIHRleHQtYWxpZ24gKi9cclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIC8qIGlubGluZS1ibG9jayBzcGFjZSBmaXggKi9cclxuICAgIG1hcmdpbi1yaWdodDotNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgIFxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        })
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/deals/deals.component.css":
/*!*******************************************!*\
  !*** ./src/app/deals/deals.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2RlYWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/*!******************************************!*\
  !*** ./src/app/deals/deals.component.ts ***!
  \******************************************/
/*! exports provided: DealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsComponent", function() { return DealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DealsComponent = /** @class */ (function () {
    function DealsComponent() {
    }
    DealsComponent.prototype.ngOnInit = function () {
    };
    DealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deals',
            template: __webpack_require__(/*! raw-loader!./deals.component.html */ "./node_modules/raw-loader/index.js!./src/app/deals/deals.component.html"),
            styles: [__webpack_require__(/*! ./deals.component.css */ "./src/app/deals/deals.component.css")]
        })
    ], DealsComponent);
    return DealsComponent;
}());



/***/ }),

/***/ "./src/app/entertainment/entertainment.component.css":
/*!***********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGVydGFpbm1lbnQvZW50ZXJ0YWlubWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/entertainment/entertainment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.ts ***!
  \**********************************************************/
/*! exports provided: EntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function() { return EntertainmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntertainmentComponent = /** @class */ (function () {
    function EntertainmentComponent() {
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
    };
    EntertainmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entertainment',
            template: __webpack_require__(/*! raw-loader!./entertainment.component.html */ "./node_modules/raw-loader/index.js!./src/app/entertainment/entertainment.component.html"),
            styles: [__webpack_require__(/*! ./entertainment.component.css */ "./src/app/entertainment/entertainment.component.css")]
        })
    ], EntertainmentComponent);
    return EntertainmentComponent;
}());



/***/ }),

/***/ "./src/app/home-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/home-service.service.ts ***!
  \*****************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeServiceService = /** @class */ (function () {
    function HomeServiceService() {
        console.log('home-service');
    }
    HomeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HomeServiceService);
    return HomeServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron-style {\r\n    background-color: dimgrey;\r\n    padding-top: 5px;\r\n}\r\n\r\n.col-centered {\r\n    display:inline-block;\r\n    float:none;\r\n    color: aliceblue;\r\n    /* reset the text-align */\r\n    text-align:left;\r\n    /* inline-block space fix */\r\n    margin-right:-4px;\r\n    text-align: center;\r\n    background-color: darkslategrey;\r\n    padding: 3px;\r\n    border-radius: 3px;    \r\n\r\n}\r\n\r\n.card-title{\r\n    color:black;\r\n    font-size: 20px;\r\n    background-color:#F0C849;\r\n    margin: 0px;\r\n    line-height: 40px;\r\n}\r\n\r\n.box-parent{\r\n    \r\n    display: inline-block;\r\n    border:2px solid #F0C849;\r\n    border-radius: 3px;\r\n    margin:10px;\r\n}\r\n\r\n.box{\r\n    padding: 0px;\r\n    margin: 10px 10px 10px 10px;\r\n    width: 190px;\r\n    height: 200px;\r\n    background-color: burlywood;   \r\n    display: inline-block;\r\n   \r\n}\r\n\r\n.effect\r\n{\r\n  position: relative;\r\n}\r\n\r\n.effect:before, .effect:after\r\n{\r\n  z-index: -1;\r\n  position: absolute;\r\n  content: \"\";\r\n  bottom: 15px;\r\n  left: 10px;\r\n  width: 50%;\r\n  top: 80%;\r\n  max-width:300px;\r\n  background: #777;\r\n  box-shadow: 0 15px 2px black;\r\n  transform: rotate(-3deg);\r\n}\r\n\r\n.effect:after\r\n{\r\n  transform: rotate(3deg);\r\n  right: 10px;\r\n  left: auto;\r\n}\r\n\r\n.image{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n}\r\n\r\n.border {\r\n    \r\n    padding-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscUJBQXFCOztBQUV6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjs7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi1zdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNvbC1jZW50ZXJlZCB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgLyogcmVzZXQgdGhlIHRleHQtYWxpZ24gKi9cclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIC8qIGlubGluZS1ibG9jayBzcGFjZSBmaXggKi9cclxuICAgIG1hcmdpbi1yaWdodDotNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgXHJcblxyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjBDODQ5O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJveC1wYXJlbnR7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjoycHggc29saWQgI0YwQzg0OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgXHJcbn1cclxuXHJcbi5lZmZlY3Rcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZWZmZWN0OmJlZm9yZSwgLmVmZmVjdDphZnRlclxyXG57XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0b3A6IDgwJTtcclxuICBtYXgtd2lkdGg6MzAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxuICBib3gtc2hhZG93OiAwIDE1cHggMnB4IGJsYWNrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcclxufVxyXG4uZWZmZWN0OmFmdGVyXHJcbntcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcclxuICByaWdodDogMTBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-service.service */ "./src/app/home-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeServiceService) {
        this.homeServiceService = homeServiceService;
        console.log('home constructor');
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('onInit');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log('on Destroy');
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/tpgstores/tpgstores.component.css":
/*!***************************************************!*\
  !*** ./src/app/tpgstores/tpgstores.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RwZ3N0b3Jlcy90cGdzdG9yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tpgstores/tpgstores.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tpgstores/tpgstores.component.ts ***!
  \**************************************************/
/*! exports provided: TpgstoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpgstoresComponent", function() { return TpgstoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TpgstoresComponent = /** @class */ (function () {
    function TpgstoresComponent() {
    }
    TpgstoresComponent.prototype.ngOnInit = function () {
    };
    TpgstoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tpgstores',
            template: __webpack_require__(/*! raw-loader!./tpgstores.component.html */ "./node_modules/raw-loader/index.js!./src/app/tpgstores/tpgstores.component.html"),
            styles: [__webpack_require__(/*! ./tpgstores.component.css */ "./src/app/tpgstores/tpgstores.component.css")]
        })
    ], TpgstoresComponent);
    return TpgstoresComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\my-dream-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map