(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -->\n\n\n\n<!-- partner-->\n\n<!--   -->\n\n<!-- <app-business-details></app-business-details>\n<app-footer></app-footer> -->\n<app-login></app-login>\n<app-signup></app-signup>\n<app-nav></app-nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('blsHeader', JSON.stringify({
            'appName': 'wishaWiz',
            'deviceType': 'webApp',
            'sessionID': '86abf944-3344-4afd-9fb6-454566c66457'
        }));
        sessionStorage.setItem('email', 'as19ish@gmail.com');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _provider_provider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider/provider.module */ "./src/app/provider/provider.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/_services/modal.service */ "./src/app/core/_services/modal.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/_services/auth.service */ "./src/app/core/_services/auth.service.ts");
/* harmony import */ var _core_services_authRequestGenrateror_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/_services/authRequestGenrateror.service */ "./src/app/core/_services/authRequestGenrateror.service.ts");
/* harmony import */ var _core_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/_interceptors/http.interceptor */ "./src/app/core/_interceptors/http.interceptor.ts");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _core_services_provider_providerRegistation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/_services/provider/providerRegistation.service */ "./src/app/core/_services/provider/providerRegistation.service.ts");
/* harmony import */ var _core_services_provider_requestGenertor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/_services/provider/requestGenertor.service */ "./src/app/core/_services/provider/requestGenertor.service.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_16__["routes"]),
                _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_17__["AuthModule"],
                _provider_provider_module__WEBPACK_IMPORTED_MODULE_5__["ProviderModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
                    timeOut: 3500,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                    progressBar: false,
                    closeButton: false,
                    extendedTimeOut: 1000,
                    easing: 'ease-in',
                    easeTime: 300,
                    tapToDismiss: true,
                }),
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_11__["NguCarouselModule"],
                _provider_provider_module__WEBPACK_IMPORTED_MODULE_5__["ProviderModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _core_services_authRequestGenrateror_service__WEBPACK_IMPORTED_MODULE_9__["AuthRequestGenerator"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpRequestInterceptor"],
                    multi: true
                },
                _core_services_provider_providerRegistation_service__WEBPACK_IMPORTED_MODULE_12__["ProviderRegistrationService"],
                _core_services_provider_requestGenertor_service__WEBPACK_IMPORTED_MODULE_13__["RequestGenerator"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _provider_provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider/provider.component */ "./src/app/provider/provider.component.ts");


var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'provider',
        component: _provider_provider_component__WEBPACK_IMPORTED_MODULE_1__["ProviderComponent"]
    },
];


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog cascading-modal\" role=\"document\">\n            <div class=\"modal-content\">\n                       <div class=\"modal-body\">\n                            <div class=\"box\">\n                                 <div class=\"content\">\n                                     <h3 class=\"text-center\"><strong>Login With</strong> </h3>\n                                    <div class=\"social\">\n                                        <a class=\"circle github\" href=\"#\">\n                                            <i class=\"fa fa-github fa-fw\"></i>\n                                        </a>\n                                        <a id=\"google_login\" class=\"circle google\" href=\"#\">\n                                            <i class=\"fa fa-google-plus fa-fw\"></i>\n                                        </a>\n                                        <a id=\"facebook_login\" class=\"circle facebook\" href=\"#\">\n                                            <i class=\"fa fa-facebook fa-fw\"></i>\n                                        </a>\n                                    </div>\n                                    <div class=\"division\">\n                                        <div class=\"line l\"></div>\n                                          <span>or</span>\n                                        <div class=\"line r\"></div>\n                                    </div>\n                                    <div class=\"error\"></div>\n                                    <div class=\"form loginBox\">\n                                            <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\n    \n                                                    <input id=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Email\" formControlName=\"email\" >\n                                                    <input id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\"  formControlName=\"password\" >\n                                                    <button class=\"btn btn-default btn-login\" type=\"submit\"  >Login</button>\n    \n                                           </form>\n                                    </div>\n                                 </div>\n                            </div>\n        \n                        </div>\n                        <div class=\"modal-footer\">\n                            <div class=\"forgot login-footer\">\n                                <span>Looking to\n                                     <a (click)=\"showSignup()\" >create an account</a>\n                                ?</span>\n                            </div>\n                        </div>\n              </div>\n         </div>\n    </div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  width: 350px; }\n\n.modal-footer {\n  border-top: 0;\n  margin-top: 0px;\n  padding: 10px 20px 20px; }\n\n.modal-header {\n  border: 0 none;\n  padding: 15px 15px 15px; }\n\n.division {\n  float: none;\n  margin: 0 auto 18px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%; }\n\n.division .line {\n  border-top: 1px solid #DFDFDF;\n  position: absolute;\n  top: 10px;\n  width: 34%; }\n\n.division .line.l {\n  left: 0; }\n\n.division .line.r {\n  right: 0; }\n\n.division span {\n  color: #424242;\n  font-size: 17px; }\n\n.box .social {\n  float: none;\n  margin: 0 auto 30px;\n  text-align: center; }\n\n.social .circle {\n  background-color: #EEEEEE;\n  color: #FFFFFF;\n  border-radius: 100px;\n  display: inline-block;\n  margin: 0 17px;\n  padding: 15px;\n  height: 50px; }\n\n.social .circle .fa {\n  font-size: 16px; }\n\n.social .facebook {\n  background-color: #455CA8;\n  color: #FFFFFF; }\n\n.social .google {\n  background-color: #F74933; }\n\n.social .github {\n  background-color: #403A3A; }\n\n.facebook:hover {\n  background-color: #6E83CD; }\n\n.google:hover {\n  background-color: #FF7566; }\n\n.github:hover {\n  background-color: #4D4D4d; }\n\n.forgot {\n  color: #797979;\n  margin-left: 0;\n  overflow: hidden;\n  text-align: center;\n  width: 100%; }\n\n.btn-login, .registerBox .btn-register {\n  background-color: #00BBFF;\n  border-color: #00BBFF;\n  border-width: 0;\n  color: #FFFFFF;\n  display: block;\n  margin: 0 auto;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  width: 100%; }\n\n.btn-login:hover, .registerBox .btn-register:hover {\n  background-color: #00A4E4;\n  color: #FFFFFF; }\n\n.form-control {\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.09);\n  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.09) inset;\n  color: #FFFFFF; }\n\n.form-control:hover {\n  background-color: rgba(0, 0, 0, 0.16); }\n\n.form-control:focus {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.04) inset;\n  background-color: rgba(0, 0, 0, 0.23);\n  color: #FFFFFF; }\n\n.box .form input[type=\"text\"], .box .form input[type=\"password\"] {\n  border-radius: 3px;\n  border: none;\n  color: #333333;\n  font-size: 16px;\n  height: 46px;\n  margin-bottom: 5px;\n  padding: 13px 12px;\n  width: 100%; }\n\n@media (max-width: 576px) {\n  .modal-dialog {\n    width: auto; } }\n\n.big-login, .big-register {\n  background-color: #00bbff;\n  color: #FFFFFF;\n  border-radius: 7px;\n  border-width: 2px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 200;\n  padding: 16px 60px;\n  text-transform: uppercase;\n  transition: all 0.3s ease 0s; }\n\n.big-login:hover {\n  background-color: #00A4E4;\n  color: #FFFFFF; }\n\n.big-register {\n  background-color: rgba(0, 0, 0, 0);\n  color: #00bbff;\n  border-color: #00bbff; }\n\n.big-register:hover {\n  border-color: #00A4E4;\n  color: #00A4E4; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/_services/modal.service */ "./src/app/core/_services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/_services/auth.service */ "./src/app/core/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(modal, AuthService, toastr) {
        this.modal = modal;
        this.AuthService = AuthService;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modal.loginOb.subscribe(function (value) {
            if (value) {
                _this.show();
            }
            else {
                _this.hide();
            }
        });
    };
    LoginComponent.prototype.show = function () {
        this.loginModal.show();
    };
    LoginComponent.prototype.hide = function () {
        this.loginModal.hide();
    };
    LoginComponent.prototype.showSignup = function () {
        this.hide();
        this.modal.toggleSignup(true);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.AuthService.AnonymousUserLogin(this.loginForm.value)
                .subscribe(function (response) {
                if (response.blsHeader.status === "USER_CREDENTIAL_DOES_NOT_EXIST") {
                    _this.toastr.error(response.blsHeader.message, 'Whoops!!!');
                }
                else if (response.blsHeader.status === "USER_LOGIN_OK") {
                    _this.toastr.success("you've successfully Loged In", 'Congratulations!!!');
                }
                else if (response.blsHeader.status === "USER_LOGIN_ATTEMPT_FAIL") {
                    _this.toastr.error(response.blsHeader.message, 'Whoops!!!');
                }
                else {
                    _this.toastr.error("Something Goes Wrong!!!");
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loginModal", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #signupForm=\"mdb-modal\" class=\"modal fade\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog cascading-modal\" role=\"document\">\n            <div class=\"modal-content\">\n                       <div class=\"modal-body\">\n                            <div class=\"box\">\n                                 <div class=\"content\">\n                                     <h3 class=\"text-center\"><strong>SignUp With</strong> </h3>\n                                    <div class=\"social\">\n                                        <a class=\"circle github\" href=\"#\">\n                                            <i class=\"fa fa-github fa-fw\"></i>\n                                        </a>\n                                        <a id=\"google_login\" class=\"circle google\" href=\"#\">\n                                            <i class=\"fa fa-google-plus fa-fw\"></i>\n                                        </a>\n                                        <a id=\"facebook_login\" class=\"circle facebook\" href=\"#\">\n                                            <i class=\"fa fa-facebook fa-fw\"></i>\n                                        </a>\n                                    </div>\n                                    <div class=\"division\">\n                                        <div class=\"line l\"></div>\n                                          <span>or</span>\n                                        <div class=\"line r\"></div>\n                                    </div>\n                                    <div class=\"error\"></div>\n                                    <div class=\"form loginBox\">\n                                            <form  [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\" >\n                                                    <input  class=\"form-control\" type=\"text\" placeholder=\"First Name\" formControlName=\"first_name\" >\n                                                    <input  class=\"form-control\" type=\"text\" placeholder=\"Last Name\" formControlName=\"last_name\" > \n                                                    <input  class=\"form-control\" type=\"text\" placeholder=\"Email\" formControlName=\"email\" >\n                                                    <input  class=\"form-control\" type=\"password\" placeholder=\"Password\"  formControlName=\"password\" >\n                                                    <button class=\"btn btn-default btn-login\" type=\"submit\"  >Submit</button>\n    \n                                           </form>\n                                    </div>\n                                 </div>\n                            </div>\n        \n                        </div>\n                        <div class=\"modal-footer\">\n                            <div class=\"forgot register-footer\" style=\"display:none\">\n                                    <span>Already have an account?</span>\n                                    <a href=\"\">Login</a>\n                            </div>\n                        </div>\n              </div>\n         </div>\n    </div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  width: 350px; }\n\n.modal-footer {\n  border-top: 0;\n  margin-top: 0px;\n  padding: 10px 20px 20px; }\n\n.modal-header {\n  border: 0 none;\n  padding: 15px 15px 15px; }\n\n.division {\n  float: none;\n  margin: 0 auto 18px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%; }\n\n.division .line {\n  border-top: 1px solid #DFDFDF;\n  position: absolute;\n  top: 10px;\n  width: 34%; }\n\n.division .line.l {\n  left: 0; }\n\n.division .line.r {\n  right: 0; }\n\n.division span {\n  color: #424242;\n  font-size: 17px; }\n\n.box .social {\n  float: none;\n  margin: 0 auto 30px;\n  text-align: center; }\n\n.social .circle {\n  background-color: #EEEEEE;\n  color: #FFFFFF;\n  border-radius: 100px;\n  display: inline-block;\n  margin: 0 17px;\n  padding: 15px;\n  height: 50px; }\n\n.social .circle .fa {\n  font-size: 16px; }\n\n.social .facebook {\n  background-color: #455CA8;\n  color: #FFFFFF; }\n\n.social .google {\n  background-color: #F74933; }\n\n.social .github {\n  background-color: #403A3A; }\n\n.facebook:hover {\n  background-color: #6E83CD; }\n\n.google:hover {\n  background-color: #FF7566; }\n\n.github:hover {\n  background-color: #4D4D4d; }\n\n.forgot {\n  color: #797979;\n  margin-left: 0;\n  overflow: hidden;\n  text-align: center;\n  width: 100%; }\n\n.btn-login, .registerBox .btn-register {\n  background-color: #00BBFF;\n  border-color: #00BBFF;\n  border-width: 0;\n  color: #FFFFFF;\n  display: block;\n  margin: 0 auto;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  width: 100%; }\n\n.btn-login:hover, .registerBox .btn-register:hover {\n  background-color: #00A4E4;\n  color: #FFFFFF; }\n\n.form-control {\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.09);\n  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.09) inset;\n  color: #FFFFFF; }\n\n.form-control:hover {\n  background-color: rgba(0, 0, 0, 0.16); }\n\n.form-control:focus {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.04) inset;\n  background-color: rgba(0, 0, 0, 0.23);\n  color: #FFFFFF; }\n\n.box .form input[type=\"text\"], .box .form input[type=\"password\"] {\n  border-radius: 3px;\n  border: none;\n  color: #333333;\n  font-size: 16px;\n  height: 46px;\n  margin-bottom: 5px;\n  padding: 13px 12px;\n  width: 100%; }\n\n@media (max-width: 576px) {\n  .modal-dialog {\n    width: auto; } }\n\n.big-login, .big-register {\n  background-color: #00bbff;\n  color: #FFFFFF;\n  border-radius: 7px;\n  border-width: 2px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 200;\n  padding: 16px 60px;\n  text-transform: uppercase;\n  transition: all 0.3s ease 0s; }\n\n.big-login:hover {\n  background-color: #00A4E4;\n  color: #FFFFFF; }\n\n.big-register {\n  background-color: rgba(0, 0, 0, 0);\n  color: #00bbff;\n  border-color: #00bbff; }\n\n.big-register:hover {\n  border-color: #00A4E4;\n  color: #00A4E4; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/_services/auth.service */ "./src/app/core/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/_services/modal.service */ "./src/app/core/_services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(modal, AuthService, toastr) {
        this.modal = modal;
        this.AuthService = AuthService;
        this.toastr = toastr;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    SignupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modal.signupOb.subscribe(function (value) {
            if (value) {
                console.log('sp' + value);
                _this.show();
            }
            else {
                _this.hide();
            }
        });
    };
    SignupComponent.prototype.show = function () {
        console.log('ddd');
        this.signupModal.show();
    };
    SignupComponent.prototype.hide = function () {
        this.signupModal.hide();
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signUpForm.valid) {
            this.AuthService.AnonymousUsersignUp(this.signUpForm.value)
                .subscribe(function (response) {
                if (response.blsHeader.status === "USER_ALREADY_EXIST") {
                    _this.toastr.error(response.blsHeader.message, 'Whoops!!!');
                }
                else if (response.blsHeader.status === "USER_SIGNUP_OK") {
                    _this.toastr.success("you've successfully registered", 'Congratulations!!!');
                }
                else {
                    _this.toastr.error("Something Goes Wrong!!!");
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('signupForm'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "signupModal", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/core/_interceptors/http.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/_interceptors/http.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor() {
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        var fullReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'YmFkb25pc2FuamVldkBnbWFpbC5jb206YWRtaW4='
            })
        });
        return next.handle(fullReq);
    };
    HttpRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/_models/loginSignUpRequestResponse.ts":
/*!************************************************************!*\
  !*** ./src/app/core/_models/loginSignUpRequestResponse.ts ***!
  \************************************************************/
/*! exports provided: LoginSignUpRequestResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignUpRequestResponse", function() { return LoginSignUpRequestResponse; });
var LoginSignUpRequestResponse = /** @class */ (function () {
    function LoginSignUpRequestResponse(blsHeader, user) {
        this.blsHeader = blsHeader;
        this.user = user;
    }
    return LoginSignUpRequestResponse;
}());



/***/ }),

/***/ "./src/app/core/_models/provider/bussinessDeatailSubmitRequestResponse.model.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/_models/provider/bussinessDeatailSubmitRequestResponse.model.ts ***!
  \**************************************************************************************/
/*! exports provided: BussinessDetailSubmitRequestResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessDetailSubmitRequestResponse", function() { return BussinessDetailSubmitRequestResponse; });
var BussinessDetailSubmitRequestResponse = /** @class */ (function () {
    function BussinessDetailSubmitRequestResponse(blsHeader, email, providerBussinessDetails) {
        this.blsHeader = blsHeader;
        this.email = email;
        this.providerBussinessDetails = providerBussinessDetails;
    }
    return BussinessDetailSubmitRequestResponse;
}());



/***/ }),

/***/ "./src/app/core/_models/provider/otpRequestResponse.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/_models/provider/otpRequestResponse.model.ts ***!
  \*******************************************************************/
/*! exports provided: OtpRequestResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpRequestResponse", function() { return OtpRequestResponse; });
var OtpRequestResponse = /** @class */ (function () {
    function OtpRequestResponse(blsHeader, email, otpReqBodyForm) {
        this.blsHeader = blsHeader;
        this.email = email;
        this.dialCode = otpReqBodyForm.dialCode;
        this.mobile = otpReqBodyForm.mobile;
        //console.log(this.dailCode+this.mobile);
    }
    return OtpRequestResponse;
}());



/***/ }),

/***/ "./src/app/core/_services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/_services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authRequestGenrateror_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authRequestGenrateror.service */ "./src/app/core/_services/authRequestGenrateror.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, authRequestGenrator, toastr) {
        this.http = http;
        this.authRequestGenrator = authRequestGenrator;
        this.toastr = toastr;
    }
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AuthService.prototype.AnonymousUsersignUp = function (user) {
        var _this = this;
        return this.http.post('/rest/signup.json', this.authRequestGenrator.AnonymousSignUpRequest(user))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _; }, function (_) { return _this.toastr.error('Invalid/Existing data', 'ERROR!!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.AnonymousUserLogin = function (user) {
        var _this = this;
        return this.http.post('/rest/login.json', this.authRequestGenrator.AnonymousSignUpRequest(user))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _; }, function (_) { return _this.toastr.error('Invalid/Existing data', 'ERROR!!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _authRequestGenrateror_service__WEBPACK_IMPORTED_MODULE_4__["AuthRequestGenerator"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/_services/authRequestGenrateror.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/_services/authRequestGenrateror.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthRequestGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequestGenerator", function() { return AuthRequestGenerator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_loginSignUpRequestResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/loginSignUpRequestResponse */ "./src/app/core/_models/loginSignUpRequestResponse.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthRequestGenerator = /** @class */ (function () {
    function AuthRequestGenerator() {
    }
    AuthRequestGenerator.prototype.AnonymousSignUpRequest = function (b_user) {
        var user = this.SetSignUpUser(b_user);
        return new _models_loginSignUpRequestResponse__WEBPACK_IMPORTED_MODULE_1__["LoginSignUpRequestResponse"](JSON.parse(sessionStorage.getItem('blsHeader')), user);
    };
    AuthRequestGenerator.prototype.AnonymousLoginRequest = function (b_user) {
        var user = this.SetLoginUser(b_user);
        return new _models_loginSignUpRequestResponse__WEBPACK_IMPORTED_MODULE_1__["LoginSignUpRequestResponse"](JSON.parse(sessionStorage.getItem('blsHeader')), user);
    };
    AuthRequestGenerator.prototype.SetSignUpUser = function (b_user) {
        return {
            'email': b_user.email,
            'firstName': b_user.firstName,
            'lastName': b_user.lastName,
            'loginType': "anonymous",
            'loginTypeToken': "",
            'password': b_user.password,
            'userLoginTypeID': "",
            'userType': 'customer'
        };
    };
    AuthRequestGenerator.prototype.SetLoginUser = function (b_user) {
        return {
            'email': b_user.email,
            'password': b_user.password,
            'loginType': 'anonymous'
        };
    };
    AuthRequestGenerator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthRequestGenerator);
    return AuthRequestGenerator;
}());



/***/ }),

/***/ "./src/app/core/_services/modal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/_services/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.loginModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.loginOb = this.loginModal.asObservable();
        this.signupModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.signupOb = this.signupModal.asObservable();
    }
    ModalService.prototype.toggleLogin = function (message) {
        console.log(2);
        this.loginModal.next(message);
    };
    ModalService.prototype.toggleSignup = function (message) {
        console.log(22);
        this.signupModal.next(message);
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/core/_services/provider/otp.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/_services/provider/otp.service.ts ***!
  \********************************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _requestGenertor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestGenertor.service */ "./src/app/core/_services/provider/requestGenertor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtpService = /** @class */ (function () {
    function OtpService(http, toastr, req) {
        this.http = http;
        this.toastr = toastr;
        this.req = req;
    }
    OtpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.toastr.error('Invalid/Existing data', 'ERROR!!'));
    };
    ;
    OtpService.prototype.fetchCountries = function () {
        var _this = this;
        return this.http.post('/user/rest/customer_mobile_contries.json', { "blsHeader": JSON.parse(sessionStorage.getItem('blsHeader')) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _; }, function (_) { return _this.toastr.error('Invalid/Existing data', 'ERROR!!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OtpService.prototype.requestOtp = function (otpReqBodyForm) {
        var _this = this;
        return this.http.post('/user/rest/otp.json', this.req.otpRequest(otpReqBodyForm))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _; }, function (_) { return _this.toastr.error('Invalid/Existing data', 'ERROR!!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OtpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _requestGenertor_service__WEBPACK_IMPORTED_MODULE_5__["RequestGenerator"]])
    ], OtpService);
    return OtpService;
}());



/***/ }),

/***/ "./src/app/core/_services/provider/providerRegistation.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/_services/provider/providerRegistation.service.ts ***!
  \************************************************************************/
/*! exports provided: ProviderRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRegistrationService", function() { return ProviderRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _requestGenertor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestGenertor.service */ "./src/app/core/_services/provider/requestGenertor.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderRegistrationService = /** @class */ (function () {
    function ProviderRegistrationService(http, reqGenerator, toastr) {
        this.http = http;
        this.reqGenerator = reqGenerator;
        this.toastr = toastr;
    }
    ProviderRegistrationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.toastr.error('Invalid/Existing data', 'ERROR!!'));
    };
    ;
    ProviderRegistrationService.prototype.bussinessDetailsSubmit = function (providerBussinessDetails) {
        var _this = this;
        return this.http.post('/user/rest/p_business_submit.json', this.reqGenerator.bussinessDetailsSubmitRequest(providerBussinessDetails))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _; }, function (_) { return _this.toastr.error('Invalid/Existing data', 'ERROR!!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProviderRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _requestGenertor_service__WEBPACK_IMPORTED_MODULE_4__["RequestGenerator"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProviderRegistrationService);
    return ProviderRegistrationService;
}());



/***/ }),

/***/ "./src/app/core/_services/provider/requestGenertor.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/_services/provider/requestGenertor.service.ts ***!
  \********************************************************************/
/*! exports provided: RequestGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestGenerator", function() { return RequestGenerator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_provider_bussinessDeatailSubmitRequestResponse_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models/provider/bussinessDeatailSubmitRequestResponse.model */ "./src/app/core/_models/provider/bussinessDeatailSubmitRequestResponse.model.ts");
/* harmony import */ var _models_provider_otpRequestResponse_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/provider/otpRequestResponse.model */ "./src/app/core/_models/provider/otpRequestResponse.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestGenerator = /** @class */ (function () {
    function RequestGenerator() {
    }
    RequestGenerator.prototype.bussinessDetailsSubmitRequest = function (providerBussinessDetails) {
        return new _models_provider_bussinessDeatailSubmitRequestResponse_model__WEBPACK_IMPORTED_MODULE_1__["BussinessDetailSubmitRequestResponse"](JSON.parse(sessionStorage.getItem('blsHeader')), sessionStorage.getItem('email'), providerBussinessDetails);
    };
    RequestGenerator.prototype.otpRequest = function (otpReqBodyForm) {
        return new _models_provider_otpRequestResponse_model__WEBPACK_IMPORTED_MODULE_2__["OtpRequestResponse"](JSON.parse(sessionStorage.getItem('blsHeader')), sessionStorage.getItem('email'), otpReqBodyForm);
    };
    RequestGenerator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RequestGenerator);
    return RequestGenerator;
}());



/***/ }),

/***/ "./src/app/home/app-download/app-download.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/app-download/app-download.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase .showcase-text {\r\n    padding: 3rem;\r\n  }\r\n  \r\n  .showcase .showcase-img {\r\n    min-height: 30rem;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .showcase .showcase-text {\r\n      padding: 7rem;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/home/app-download/app-download.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/app-download/app-download.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"showcase\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\">\n\n      <div class=\"col-lg-6 order-lg-1 text-white showcase-img\" style=\"background: url('assets/img/appMock.png');-webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-size: cover;\"></div>\n      <div class=\"col-lg-6 order-lg-2 my-auto showcase-text\">\n        <h2>Download the App</h2>\n        <p class=\"lead mb-0\">Choose and book from 100+ services and track them on the go with the UrbanClap App</p>\n        <br><p><b>Send a link via SMS to install the app</b></p>\n        <!-- <form> -->\n          <div class=\"form-row row\">\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Enter your number...\">\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn  btn-lg btn-primary md-btn-outline-info\">Text app link</button>\n            </div>\n          </div>\n        <!-- </form> -->\n\n        <div class=\"row\">\n          <div class=\"col mt-5\"><img src=\"assets/img/googlePlay.png\"></div>\n          <div class=\"col mt-5\"><img src=\"assets/img/appStore.png\"></div>\n        </div>\n    </div>\n   \n    \n  </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/app-download/app-download.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/app-download/app-download.component.ts ***!
  \*************************************************************/
/*! exports provided: AppDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDownloadComponent", function() { return AppDownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDownloadComponent = /** @class */ (function () {
    function AppDownloadComponent() {
    }
    AppDownloadComponent.prototype.ngOnInit = function () {
    };
    AppDownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./app-download.component.html */ "./src/app/home/app-download/app-download.component.html"),
            styles: [__webpack_require__(/*! ./app-download.component.css */ "./src/app/home/app-download/app-download.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppDownloadComponent);
    return AppDownloadComponent;
}());



/***/ }),

/***/ "./src/app/home/counter/counter.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/counter/counter.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/counter/counter.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/counter/counter.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"counter\">\n  <div class=\"container-fluid bg-light\">\n    <div class=\"col\">\n      <div class=\"container\">\n        <div class=\"row text-center\" >\n          <div class=\"col mt-5\">\n            <h1>107</h1>\n            <h5> LIVE SERVICES</h5>\n          </div>\n           <div class=\"col mt-5\">\n            <h1>3 million</h1>\n            <h5> CUSTOMERS SERVED</h5>\n          </div>\n           <div class=\"col mt-5\">\n            <h1>100,000</h1>\n            <h5>VERIFIED EXPERTS</h5>\n          </div>\n           <div class=\"col mt-5\">\n            <h1>4.2</h1>\n            <h5>AVERAGE RATING</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/counter/counter.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/counter/counter.component.ts ***!
  \***************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/home/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/home/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/home/customer-footer/customer-footer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/customer-footer/customer-footer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer_area\">\n  <div class=\"footer_widgets_area\">\n      <div class=\"container\">\n          <div class=\"f_widgets_inner row\">\n              <div class=\"col-lg-3 col-md-6\">\n                  <aside class=\"f_widget subscribe_widget\">\n                      <div class=\"f_w_title\">\n                          <h3>Our Newsletter</h3>\n                      </div>\n                      <p>Subscribe to our mailing list to get the updates to your email inbox.</p>\n                      <div class=\"input-group\">\n                          <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" aria-label=\"E-mail\">\n                          <span class=\"input-group-btn\">\n                              <button class=\"btn btn-primary\" type=\"button\">Subscribe</button>\n                          </span>\n                      </div>\n                      <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\n                      </ul>\n                  </aside>\n              </div>\n              <div class=\"col-lg-3 col-md-6\">\n                  <aside class=\"f_widget twitter_widget\">\n                      <div class=\"f_w_title\">\n                          <h3>Twitter Feed</h3>\n                      </div>\n                      <div class=\"tweets_feed\"></div>\n                  </aside>\n              </div>\n              <div class=\"col-lg-3 col-md-6\">\n                  <aside class=\"f_widget categories_widget\">\n                      <div class=\"f_w_title\">\n                          <h3>Serving In</h3>\n                      </div>\n                      <ul style=\"list-style-type: none;\">\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                      </ul>\n                      <ul style=\"list-style-type: none;\">\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Area 1</a></li>\n                      </ul>\n                  </aside>\n              </div>\n              <div class=\"col-lg-3 col-md-6\">\n                  <aside class=\"f_widget contact_widget\">\n                      <div class=\"f_w_title\">\n                          <h3>Contact Us</h3>\n                      </div>\n                      <a href=\"#\">94000000000</a>\n                      <a href=\"#\">something@gmail.com</a>\n                      <p>lkdfj kdjf lkdjflk djl akf<br />lkahl adslkf  lkadhlk</p>\n                      <h6>alkdjf  aksdj k ldjs</h6>\n                  </aside>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"copy_right_area\">\n      <div class=\"container\">\n          <div class=\"float-md-left\">\n              <h5><strong> Urbanclap </strong> Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</h5>\n          </div>\n          <div class=\"float-md-right\">\n              <ul class=\"nav\">\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#\">Disclaimer</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">Privacy</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">Advertisement</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">Contact us</a>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/home/customer-footer/customer-footer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/customer-footer/customer-footer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer_widgets_area {\n  background: #131627;\n  overflow: hidden;\n  padding: 80px 0px; }\n\n.f_w_title {\n  padding-bottom: 25px; }\n\n.f_w_title h3 {\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  font-size: 16px; }\n\n.subscribe_widget p {\n  font-size: 14px;\n  line-height: 26px;\n  color: #b5aec4;\n  font-weight: 300;\n  font-family: \"Poppins\", sans-serif;\n  padding-bottom: 20px; }\n\n.subscribe_widget .input-group input {\n  background: #2b2e3d;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  height: 40px;\n  border-radius: 3px;\n  font-size: 12px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif;\n  padding: 0px 15px; }\n\n.subscribe_widget .input-group input.placeholder {\n  font-size: 12px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif; }\n\n.subscribe_widget .input-group input:-moz-placeholder {\n  font-size: 12px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif; }\n\n.subscribe_widget .input-group input::-moz-placeholder {\n  font-size: 12px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif; }\n\n.subscribe_widget .input-group input::-webkit-input-placeholder {\n  font-size: 12px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif; }\n\n.subscribe_widget ul {\n  padding-top: 30px; }\n\n.subscribe_widget ul li {\n  display: inline-block;\n  margin-right: 32px; }\n\n.subscribe_widget ul li a {\n  font-size: 14px;\n  color: #b5aec4;\n  transition: all 400ms linear 0s; }\n\n.subscribe_widget ul li:hover a {\n  color: #2bc0a4; }\n\n.subscribe_widget ul li:last-child {\n  margin-right: 0px; }\n\n.twitter_widget {\n  margin-left: 55px; }\n\n.twitter_widget .tweets_feed ul .owl-item .tw_content .tweet_text {\n  font-size: 14px;\n  line-height: 26px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif; }\n\n.twitter_widget .tweets_feed ul .owl-item .tw_content .tweet_text i {\n  padding-right: 5px;\n  color: #2bc0a4; }\n\n.twitter_widget .tweets_feed ul .owl-item .tw_content .tweet_text a {\n  font-size: 14px;\n  line-height: 26px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 400ms linear 0s; }\n\n.twitter_widget .tweets_feed ul .owl-item .tw_content .tweet_text a:hover {\n  color: #2bc0a4; }\n\n.twitter_widget .tweets_feed ul .owl-item .tw_content .tweet_date {\n  font-size: 14px;\n  line-height: 26px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif;\n  padding-top: 15px; }\n\n.twitter_widget .tweets_feed ul .owl-item .footer .tweet_time.fright a {\n  font-size: 14px;\n  line-height: 26px;\n  color: #2bc0a4;\n  font-family: \"Poppins\", sans-serif; }\n\n.categories_widget {\n  margin-left: 70px; }\n\n.categories_widget ul {\n  width: calc(100% / 2);\n  float: left;\n  margin-top: -4px; }\n\n.categories_widget ul li a {\n  position: relative;\n  font-size: 14px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif;\n  line-height: 36px;\n  transition: all 400ms linear 0s; }\n\n.categories_widget ul li a i {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: all 400ms linear 0s; }\n\n.categories_widget ul li:hover a {\n  padding-left: 15px;\n  color: #2bc0a4; }\n\n.categories_widget ul li:hover a i {\n  opacity: 1; }\n\n.contact_widget {\n  margin-left: 50px; }\n\n.contact_widget a, .contact_widget p, .contact_widget h6 {\n  font-size: 14px;\n  color: #b5aec4;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 400ms linear 0s; }\n\n.contact_widget a:hover, .contact_widget p:hover, .contact_widget h6:hover {\n  color: #2bc0a4; }\n\n.contact_widget p {\n  padding: 23px 0px; }\n\n.copy_right_area {\n  background: #04081d;\n  overflow: hidden; }\n\n.copy_right_area .float-md-left h5 {\n  color: #51545f;\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  line-height: 50px; }\n\n.copy_right_area .float-md-left h5 a {\n  transition: all 400ms linear 0s;\n  color: #51545f;\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  line-height: 50px; }\n\n.copy_right_area .float-md-left h5 a:hover {\n  color: #2bc0a4; }\n\n.copy_right_area .float-md-right .nav li {\n  margin-right: 35px; }\n\n.copy_right_area .float-md-right .nav li a {\n  padding: 0px;\n  line-height: 50px;\n  font-size: 14px;\n  color: #51545f;\n  transition: all 400ms linear 0s; }\n\n.copy_right_area .float-md-right .nav li:last-child {\n  margin-right: 0px; }\n\n.copy_right_area .float-md-right .nav li:hover a {\n  color: #2bc0a4; }\n"

/***/ }),

/***/ "./src/app/home/customer-footer/customer-footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/customer-footer/customer-footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFooterComponent", function() { return CustomerFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerFooterComponent = /** @class */ (function () {
    function CustomerFooterComponent() {
    }
    CustomerFooterComponent.prototype.ngOnInit = function () {
    };
    CustomerFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-footer',
            template: __webpack_require__(/*! ./customer-footer.component.html */ "./src/app/home/customer-footer/customer-footer.component.html"),
            styles: [__webpack_require__(/*! ./customer-footer.component.scss */ "./src/app/home/customer-footer/customer-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerFooterComponent);
    return CustomerFooterComponent;
}());



/***/ }),

/***/ "./src/app/home/customer-header/customer-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/customer-header/customer-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead text-white text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\">\n        <h1 class=\"mb-2\"><strong>Your Service Expert in Delhi</strong></h1>\n        <!-- <h5 class=\"mb-3\">Get instant access to reliable and affordable services</h5> -->\n      </div><br><br>\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <!-- <form> -->\n          <div class=\"form-row\">\n            <div class=\"col-12 col-md-3\">\n              <div class=\"dropdown\">\n                <button type=\"button\" class=\" dropdown-toggle form-control form-control-lg\" data-toggle=\"dropdown\">\n                 <i class=\"fa fa-location-arrow \"> </i> Delhi \n                </button>\n                <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"#\">Ahemdabad</a>\n                  <a class=\"dropdown-item\" href=\"#\">Dehradoon</a>\n                  <a class=\"dropdown-item\" href=\"#\">Link 3</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"search\" class=\"form-control form-control-lg search\n              \" placeholder=\"Search a service..\">\n            </div>\n            \n          </div>\n        <!-- </form> -->\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/customer-header/customer-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/customer-header/customer-header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.masthead {\n  position: relative;\n  background-color: #343a40;\n  background: url(/assets/img/bg-masthead.jpg) no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem; }\n\nheader.masthead .overlay {\n  position: absolute;\n  background-color: #212529;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.5; }\n\nheader.masthead h1 {\n  font-size: 2rem;\n  color: #fff;\n  margin: 0;\n  font-weight: 500;\n  z-index: 4;\n  position: relative;\n  font-family: Axiforma-SemiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;\n  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2); }\n\nheader.masthead h5 {\n  font-weight: 500;\n  color: #fff;\n  margin-top: 15px;\n  margin-bottom: 60px;\n  z-index: 4;\n  position: relative;\n  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);\n  font-size: 21px; }\n\n@media (min-width: 768px) {\n  header.masthead {\n    padding-top: 12rem;\n    padding-bottom: 12rem; }\n  header.masthead h1 {\n    color: #101010;\n    font-size: 47px;\n    color: #fff;\n    margin: 0;\n    font-weight: 500;\n    z-index: 4;\n    position: relative;\n    font-family: Axiforma-SemiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;\n    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2); } }\n\n.search {\n  background-color: #fff;\n  color: #101010; }\n\nbutton {\n  background-color: #fff;\n  color: #101010; }\n"

/***/ }),

/***/ "./src/app/home/customer-header/customer-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/customer-header/customer-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHeaderComponent", function() { return CustomerHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerHeaderComponent = /** @class */ (function () {
    function CustomerHeaderComponent() {
    }
    CustomerHeaderComponent.prototype.ngOnInit = function () {
    };
    CustomerHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-header',
            template: __webpack_require__(/*! ./customer-header.component.html */ "./src/app/home/customer-header/customer-header.component.html"),
            styles: [__webpack_require__(/*! ./customer-header.component.scss */ "./src/app/home/customer-header/customer-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerHeaderComponent);
    return CustomerHeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/featurearea/featurearea.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/featurearea/featurearea.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feature_area {\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .c_feature_box {\r\n    box-shadow: 0px 25px 49px 0px rgba(58, 74, 88, 0.1);\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    padding: 45px 0px;\r\n    margin-top: -100px;\r\n    z-index: 22;\r\n    position: relative;\r\n  }\r\n  \r\n  .c_feature_box .col-lg-4:last-child .c_box_item:before {\r\n    display: none;\r\n  }\r\n  \r\n  .c_box_item {\r\n    padding: 0px 35px 0px 40px;\r\n    position: relative;\r\n  }\r\n  \r\n  .c_box_item:before {\r\n    content: \"\";\r\n    background: #e5e5e5;\r\n    height: 145px;\r\n    width: 1px;\r\n    position: absolute;\r\n    right: -15px;\r\n    top: 0px;\r\n  }\r\n  \r\n  .c_box_item h4 {\r\n    font-size: 20px;\r\n    color: #232d37;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n    padding-bottom: 10px;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n  \r\n  .c_box_item h4 i {\r\n    padding-right: 10px;\r\n    color: #2bc0a4;\r\n  }\r\n  \r\n  .c_box_item h4:hover {\r\n    color: #2bc0a4;\r\n  }\r\n  \r\n  .c_box_item p {\r\n    font-size: 14px;\r\n    line-height: 26px;\r\n    color: #51545f;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/home/featurearea/featurearea.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/featurearea/featurearea.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"feature_area\">\n  <div class=\"container\">\n      <div class=\"c_feature_box\">\n          <div class=\"row\">\n              <div class=\"col-lg-4\">\n                  <div class=\"c_box_item\">\n                      <a href=\"#\"><h4><i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>High Quality & Trusted Professionals</h4></a>\n                      <p>We provide only verified, background checked and high quality professionals</p>\n                  </div>\n              </div>\n              <div class=\"col-lg-4\">\n                  <div class=\"c_box_item\">\n                      <a href=\"#\"><h4><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Matched to Your Needs</h4></a>\n                      <p>We match you with the right professionals with the right budget</p>\n                  </div>\n              </div>\n              <div class=\"col-lg-4\">\n                  <div class=\"c_box_item\">\n                      <a href=\"#\"><h4><i class=\"fa fa-diamond\" aria-hidden=\"true\"></i> Hassle Free Service Delivery</h4></a>\n                      <p>Super convenient, guaranteed service from booking to delivery</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/featurearea/featurearea.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/featurearea/featurearea.component.ts ***!
  \***********************************************************/
/*! exports provided: FeatureareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureareaComponent", function() { return FeatureareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureareaComponent = /** @class */ (function () {
    function FeatureareaComponent() {
    }
    FeatureareaComponent.prototype.ngOnInit = function () {
    };
    FeatureareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featurearea',
            template: __webpack_require__(/*! ./featurearea.component.html */ "./src/app/home/featurearea/featurearea.component.html"),
            styles: [__webpack_require__(/*! ./featurearea.component.css */ "./src/app/home/featurearea/featurearea.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureareaComponent);
    return FeatureareaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-customer-header></app-customer-header>\n<app-icon-grid></app-icon-grid>\n<!-- <app-services></app-services> -->\n<app-download></app-download>\n<app-testimonials></app-testimonials>\n<app-join></app-join>\n<app-featurearea></app-featurearea>\n<app-counter></app-counter> \n<app-customer-footer></app-customer-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routes */ "./src/app/home/home.routes.ts");
/* harmony import */ var _app_download_app_download_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-download/app-download.component */ "./src/app/home/app-download/app-download.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/home/counter/counter.component.ts");
/* harmony import */ var _featurearea_featurearea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featurearea/featurearea.component */ "./src/app/home/featurearea/featurearea.component.ts");
/* harmony import */ var _icon_grid_icon_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon-grid/icon-grid.component */ "./src/app/home/icon-grid/icon-grid.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./join/join.component */ "./src/app/home/join/join.component.ts");
/* harmony import */ var _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-header/customer-header.component */ "./src/app/home/customer-header/customer-header.component.ts");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-footer/customer-footer.component */ "./src/app/home/customer-footer/customer-footer.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/home/testimonials/testimonials.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_4__["HomeRoutes"])
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _app_download_app_download_component__WEBPACK_IMPORTED_MODULE_5__["AppDownloadComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__["CounterComponent"],
                _featurearea_featurearea_component__WEBPACK_IMPORTED_MODULE_7__["FeatureareaComponent"],
                _icon_grid_icon_grid_component__WEBPACK_IMPORTED_MODULE_8__["IconGridComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_9__["JoinComponent"],
                _customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_10__["CustomerHeaderComponent"],
                _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_11__["CustomerFooterComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"]
            ],
            exports: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routes.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.routes.ts ***!
  \*************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");

var HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
];


/***/ }),

/***/ "./src/app/home/icon-grid/icon-grid.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/icon-grid/icon-grid.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".features-icons {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  .features-icons .features-icons-item {\r\n    max-width: 200px;\r\n  }\r\n  \r\n  .features-icons .features-icons-item .features-icons-icon {\r\n    height: 100px;\r\n  }\r\n  \r\n  .features-icons .features-icons-item .features-icons-icon i {\r\n    font-size: 60px;\r\n  }\r\n  \r\n  .features-icons .features-icons-item:hover .features-icons-icon i {\r\n    font-size: 50px;\r\n  }"

/***/ }),

/***/ "./src/app/home/icon-grid/icon-grid.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/icon-grid/icon-grid.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features-icons bg-light text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-heartbeat m-auto \"></i>\n          </div>\n          <h5>Beauty and Spa</h5>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-birthday-cake m-auto \"></i>\n          </div>\n          <h5>Events</h5>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-briefcase m-auto \"></i>\n          </div>\n          <h5>Business & Taxes</h5>              \n        </div>\n      </div>\n    \n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-heartbeat m-auto \"></i>\n          </div>\n          <h5>Beauty and Spa</h5>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-birthday-cake m-auto \"></i>\n          </div>\n          <h5>Events</h5>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"features-icons-item mx-auto mb-1 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"fa fa-briefcase m-auto \"></i>\n          </div>\n          <h5>Business & Taxes</h5>              \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/icon-grid/icon-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/icon-grid/icon-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: IconGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconGridComponent", function() { return IconGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconGridComponent = /** @class */ (function () {
    function IconGridComponent() {
    }
    IconGridComponent.prototype.ngOnInit = function () {
    };
    IconGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-grid',
            template: __webpack_require__(/*! ./icon-grid.component.html */ "./src/app/home/icon-grid/icon-grid.component.html"),
            styles: [__webpack_require__(/*! ./icon-grid.component.css */ "./src/app/home/icon-grid/icon-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconGridComponent);
    return IconGridComponent;
}());



/***/ }),

/***/ "./src/app/home/join/join.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/join/join.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".call-to-action {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background: url(/assets/img/bg-masthead.jpg) no-repeat center center;\r\n    background-size: cover;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\r\n  \r\n  .call-to-action .overlay {\r\n    position: absolute;\r\n    background-color: #212529;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.3;\r\n  }"

/***/ }),

/***/ "./src/app/home/join/join.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/join/join.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"call-to-action text-dark text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <!-- <form> -->\n          <div class=\"form-row\">\n            <div class=\"col-xl-9 mx-auto\">\n            <h3 class=\"mb-4\">Are you a professional looking to grow your service business?</h3>\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn btn-block btn-lg md-btn-outline-warning\">Join Now!</button>\n            </div>\n          </div>\n        <!-- </form> -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/join/join.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/join/join.component.ts ***!
  \*********************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinComponent = /** @class */ (function () {
    function JoinComponent() {
    }
    JoinComponent.prototype.ngOnInit = function () {
    };
    JoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/home/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/home/join/join.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonials {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\r\n  \r\n  .testimonials .testimonial-item {\r\n    max-width: 18rem;\r\n  }\r\n  \r\n  .testimonials .testimonial-item img {\r\n    max-width: 12rem;\r\n    box-shadow: 0px 5px 5px 0px #adb5bd;\r\n  }"

/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"testimonials text-center\">\n  <div class=\"container\">\n    <h2 class=\"mb-5\">What people are saying...</h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-1.jpg\" alt=\"\">\n          <h5>Sajal Kapoor</h5><p>Wedding Photographer</p>\n          <p class=\"font-weight-light mb-0\">\"From earning 10K a month to being totally booked from November till February -- My UrbanClap Journey.\"</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-2.jpg\" alt=\"\">\n          <h5>Natasha Arya</h5><p>Make-up Artist</p>\n          <p class=\"font-weight-light mb-0\">\"UrbanClap has given me an opportunity to showcase my work through a convenient platform. It’s all One CLICK away\"</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-3.jpg\" alt=\"\">\n          <h5>Yasser Raja</h5><p>Fitness Trainer</p>\n          <p class=\"font-weight-light mb-0\">\"In the past one year UrbanClap has given me business worth Rs. 4.5Lakh+ and has enabled me in quitting my MNC job and follow my passion.\"</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.ts ***!
  \*************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/home/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.css */ "./src/app/home/testimonials/testimonials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ],
            declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
            exports: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar\" [containerInside]=\"true\">\n  <logo>\n    <a class=\"logo navbar-brand\" routerLink=\"/\">\n      <strong>WishaWiz</strong>\n    </a>\n  </logo>\n  <links>\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active waves-light\">\n        <a class=\"nav-link\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item waves-light\" mdbWavesEffect>\n        <a class=\"nav-link\">Link</a>\n      </li>\n      <li class=\"nav-item waves-light\" mdbWavesEffect>\n        <a class=\"nav-link\">Profile</a>\n      </li> -->\n    </ul>\n    <ul class=\"navbar-nav nav-flex-icons\">\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n            <a class=\"nav-link\" routerLink=\"/provider\" >Become Partner</a>\n          </li>\n          <li class=\"nav-item waves-light\" mdbWavesEffect>\n              <a class=\"nav-link\" (click)=\"showLoginModal()\">login</a>\n            </li>\n\n        <!-- <li class=\"nav-item active waves-light\">\n            <button type=\"button\" class=\"btn btn-primary waves-light\" (click)=\"showLoginModal()\" >Login form</button>\n        </li> -->\n     \n      </ul>\n  </links>\n</mdb-navbar>"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.top-nav-collapse {\n  background-color: #1C2331; }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/_services/modal.service */ "./src/app/core/_services/modal.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(modal, toastr) {
        this.modal = modal;
        this.toastr = toastr;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.showLoginModal = function () {
        console.log(1);
        this.modal.toggleLogin(true);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/provider/feature-video/feature-video.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/provider/feature-video/feature-video.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<section class=\"d-none d-lg-block\">\n  <div class=\"container\">\n            <h2 class=\"text-center font-weight-bold\">Featured Professionals</h2>\n <div class=\"row mt-5 mb-5\">\n      <div class=\"col-lg-4\">\n           <div  style=\"background-image:url('assets/img/Prajat_Arora_Guitar_Teacher.png');\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"featuredvideo rounded relative\">\n            <div style=\"background-image:url('assets/img/btn.png');\" class=\"absolute\"></div>\n           </div>\n     </div>\n     <div class=\"col-lg-4\">\n           <div  style=\"background-image:url('assets/img/Ekta_Sood_Dietitian.png')\" data-toggle=\"modal\" data-target=\"#myModal2\" class=\"featuredvideo rounded relative\">\n            <div style=\"background-image:url('assets/img/btn.png');\" class=\"absolute\"></div>\n           </div>\n     </div>\n     <div class=\"col-lg-4\">\n           <div  style=\"background-image:url('assets/img/Video_thumbnail.png')\" data-toggle=\"modal\" data-target=\"#myModal3\" class=\"featuredvideo rounded relative\">\n            <div style=\"background-image:url('assets/img/btn.png');\" class=\"absolute\"></div>\n           </div>\n     </div>\n    <!-- Modal -->\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog text-center\">\n            <video controls>\n                <source src=\"\" type=\"video/mp4\">\n            </video>\n      </div>\n    </div>\n\n     <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog text-center\">\n          <video controls>\n                <source src=\"\" type=\"video/mp4\">\n            </video>\n      </div>\n    </div>\n\n    <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog text-center\">\n            <video controls>\n                <source src=\"\" type=\"video/mp4\">\n            </video>\n      </div>\n    </div> \n  </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/provider/feature-video/feature-video.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/provider/feature-video/feature-video.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Half Page Carousel itself*/\n.carousel {\n  height: 50%; }\n.carousel .carousel-inner {\n  height: 100%; }\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100%; }\n/* Adjustment for mobile devices*/\n@media (max-width: 776px) {\n  .carousel {\n    height: 100%; } }\n/* Navbar animation */\n.navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n.top-nav-collapse {\n  background-color: #1C2331; }\n/* Adding color to the Navbar on mobile */\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.feature_area {\n  background: #04091e;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 651px;\n  z-index: 1; }\n.feature_area .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 125%;\n  bottom: 0;\n  z-index: -1;\n  opacity: .25; }\n.feature_item {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 50px 37px 35px 37px;\n  border: 1px solid #6c6d77;\n  color: #fff; }\n.feature_item i {\n  font-size: 24px;\n  margin-bottom: 25px;\n  display: inline-block; }\n.feature_item h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 15px; }\n.feature_item p {\n  margin-bottom: 0px;\n  color: #777777; }\n.p_120 {\n  padding-top: 120px;\n  padding-bottom: 120px; }\n.white_title {\n  text-align: center;\n  max-width: 690px;\n  margin: 0px auto 75px; }\n.white_title h2 {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 15px; }\n.white_title p {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Poppins\", sans-serif;\n  color: #777777;\n  margin-bottom: 0px; }\n.modal-dialog {\n  margin-left: 150px; }\n.modal-dialog video {\n  width: 1080px;\n  height: 640px; }\n.featuredvideo {\n  box-shadow: 5px 5px 2px lightgrey;\n  width: 320px;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.featuredvideo:hover {\n  box-shadow: 5px 5px 2px grey; }\ndiv.relative {\n  position: relative; }\ndiv.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: inherit;\n  height: inherit; }\n.absolute:hover {\n  background: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/provider/feature-video/feature-video.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/provider/feature-video/feature-video.component.ts ***!
  \*******************************************************************/
/*! exports provided: FeatureVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureVideoComponent", function() { return FeatureVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureVideoComponent = /** @class */ (function () {
    function FeatureVideoComponent() {
    }
    FeatureVideoComponent.prototype.ngOnInit = function () {
    };
    FeatureVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-video',
            template: __webpack_require__(/*! ./feature-video.component.html */ "./src/app/provider/feature-video/feature-video.component.html"),
            styles: [__webpack_require__(/*! ./feature-video.component.scss */ "./src/app/provider/feature-video/feature-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureVideoComponent);
    return FeatureVideoComponent;
}());



/***/ }),

/***/ "./src/app/provider/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/provider/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer text-center font-small mt-4 wow fadeIn\">\n\n  <!--Call to action-->\n  <div class=\"pt-4\">\n    <img src=\"assets/img/logo.jpg\" height=\"50px\" width=\"50px\" style=\"border: 2px solid white;border-radius: 4px;\" class=\"mb-1\">\n    <h4> UrbanClap</h4>\n  </div>\n  <!--/.Call to action-->\n\n  <hr class=\"my-4\">\n\n  <!-- Social icons -->\n  <div class=\"pb-4\">\n    <a href=\"\" target=\"_blank\">\n      <i class=\"fa fa-facebook mr-3\"></i>\n    </a>\n\n    <a href=\"\" target=\"_blank\">\n      <i class=\"fa fa-twitter mr-3\"></i>\n    </a>\n\n    <a href=\"\" target=\"_blank\">\n      <i class=\"fa fa-instagram mr-3\"></i>\n    </a>\n\n    <a href=\"\" target=\"_blank\">\n      <i class=\"fa fa-google-plus mr-3\"></i>\n    </a>\n\n    <a href=\"\" target=\"_blank\">\n      <i class=\"fa fa-dribbble mr-3\"></i>\n    </a>\n\n\n\n    \n  </div>\n  <!-- Social icons -->\n\n  <!--Copyright-->\n  <div class=\"footer-copyright py-3\">\n    © 2018 Copyright:\n    <a href=\"\" target=\"_blank\"> UrbanClap Technologies Pvt. Ltd </a>\n  </div>\n  <!--/.Copyright-->\n\n</footer>"

/***/ }),

/***/ "./src/app/provider/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/provider/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Half Page Carousel itself*/\n.carousel {\n  height: 50%; }\n.carousel .carousel-inner {\n  height: 100%; }\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100%; }\n/* Adjustment for mobile devices*/\n@media (max-width: 776px) {\n  .carousel {\n    height: 100%; } }\n/* Navbar animation */\n.navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n.top-nav-collapse {\n  background-color: #1C2331; }\n/* Adding color to the Navbar on mobile */\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.feature_area {\n  background: #04091e;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 651px;\n  z-index: 1; }\n.feature_area .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 125%;\n  bottom: 0;\n  z-index: -1;\n  opacity: .25; }\n.feature_item {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 50px 37px 35px 37px;\n  border: 1px solid #6c6d77;\n  color: #fff; }\n.feature_item i {\n  font-size: 24px;\n  margin-bottom: 25px;\n  display: inline-block; }\n.feature_item h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 15px; }\n.feature_item p {\n  margin-bottom: 0px;\n  color: #777777; }\n.p_120 {\n  padding-top: 120px;\n  padding-bottom: 120px; }\n.white_title {\n  text-align: center;\n  max-width: 690px;\n  margin: 0px auto 75px; }\n.white_title h2 {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 15px; }\n.white_title p {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Poppins\", sans-serif;\n  color: #777777;\n  margin-bottom: 0px; }\n.modal-dialog {\n  margin-left: 150px; }\n.modal-dialog video {\n  width: 1080px;\n  height: 640px; }\n.featuredvideo {\n  box-shadow: 5px 5px 2px lightgrey;\n  width: 320px;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.featuredvideo:hover {\n  box-shadow: 5px 5px 2px grey; }\ndiv.relative {\n  position: relative; }\ndiv.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: inherit;\n  height: inherit; }\n.absolute:hover {\n  background: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/provider/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/provider/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/provider/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/provider/howto-use/howto-use.component.html":
/*!*************************************************************!*\
  !*** ./src/app/provider/howto-use/howto-use.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"mt-5 wow fadeIn\">\n  <div class=\"conatiner\"> \n   <div class=\"row\">\n     <div class=\"col-md-6 mb-4 text-center\" style=\"max-height:400px;\">\n       <img src=\"assets/img/a.gif\" class=\"img-fluid z-depth-1-half rounded\" style=\"max-height:400px;border: 10px solid black;\"alt=\"\">\n     </div>\n     <div class=\"col-md-6 text-center\">\n       <h3 class=\"h3 mb-3\"><strong>How UrbanClap Works?</strong></h3>\n       <div class=\"row\">\n       <h5><p class=\"font-weight-bold\">1. Get verified customer requests</p></h5>\n       <p class=\"font-italic \">Get connected with customers looking for your service.</p><hr>\n       </div>\n       <div class=\"row\">\n       <h5><p class=\"font-weight-bold\">2. Pay to send quotes</p></h5>\n       <p class=\"font-italic \">Pay only to reply to customer leads that match your interests and qualifications.</p><hr>\n       </div>\n       <div class=\"row\">\n       <h5><p class=\"font-weight-bold\">3. Chat and get hired</p></h5>\n       <p class=\"font-italic\">Chat with the customers, finalise the quotes and get hired. Know More.</p>\n       </div>\n      </div>\n   </div>\n  </div>\n </section>\n </div>"

/***/ }),

/***/ "./src/app/provider/howto-use/howto-use.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/provider/howto-use/howto-use.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Half Page Carousel itself*/\n.carousel {\n  height: 50%; }\n.carousel .carousel-inner {\n  height: 100%; }\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100%; }\n/* Adjustment for mobile devices*/\n@media (max-width: 776px) {\n  .carousel {\n    height: 100%; } }\n/* Navbar animation */\n.navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n.top-nav-collapse {\n  background-color: #1C2331; }\n/* Adding color to the Navbar on mobile */\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.feature_area {\n  background: #04091e;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 651px;\n  z-index: 1; }\n.feature_area .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 125%;\n  bottom: 0;\n  z-index: -1;\n  opacity: .25; }\n.feature_item {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 50px 37px 35px 37px;\n  border: 1px solid #6c6d77;\n  color: #fff; }\n.feature_item i {\n  font-size: 24px;\n  margin-bottom: 25px;\n  display: inline-block; }\n.feature_item h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 15px; }\n.feature_item p {\n  margin-bottom: 0px;\n  color: #777777; }\n.p_120 {\n  padding-top: 120px;\n  padding-bottom: 120px; }\n.white_title {\n  text-align: center;\n  max-width: 690px;\n  margin: 0px auto 75px; }\n.white_title h2 {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 15px; }\n.white_title p {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Poppins\", sans-serif;\n  color: #777777;\n  margin-bottom: 0px; }\n.modal-dialog {\n  margin-left: 150px; }\n.modal-dialog video {\n  width: 1080px;\n  height: 640px; }\n.featuredvideo {\n  box-shadow: 5px 5px 2px lightgrey;\n  width: 320px;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.featuredvideo:hover {\n  box-shadow: 5px 5px 2px grey; }\ndiv.relative {\n  position: relative; }\ndiv.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: inherit;\n  height: inherit; }\n.absolute:hover {\n  background: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/provider/howto-use/howto-use.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/provider/howto-use/howto-use.component.ts ***!
  \***********************************************************/
/*! exports provided: HowtoUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoUseComponent", function() { return HowtoUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowtoUseComponent = /** @class */ (function () {
    function HowtoUseComponent() {
    }
    HowtoUseComponent.prototype.ngOnInit = function () {
    };
    HowtoUseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-howto-use',
            template: __webpack_require__(/*! ./howto-use.component.html */ "./src/app/provider/howto-use/howto-use.component.html"),
            styles: [__webpack_require__(/*! ./howto-use.component.scss */ "./src/app/provider/howto-use/howto-use.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HowtoUseComponent);
    return HowtoUseComponent;
}());



/***/ }),

/***/ "./src/app/provider/intro/intro.component.html":
/*!*****************************************************!*\
  !*** ./src/app/provider/intro/intro.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view full-page-intro\" style=\"background-image: url('assets/img/bg-02.jpg'); background-repeat: no-repeat; background-size: cover; background-color: rgba(0,0,0,0.1);\">\n  <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!--Grid column1-->\n        <div class=\"col-md-6 mb-4 white-text text-center text-md-left\">\n          <h1 class=\"font-weight-bold mt-5\">Expand your service business with WishaWiz</h1>\n          <hr class=\"hr-light\">\n          <h5>Join a community of 65,000+ professionals who have successfully grown their business with WishaWiz.</h5>\n         <div class=\"row mt-5 d-none d-lg-flex\">\n          <div class=\"col-lg-4 col-md-4\">\n            <h3>3.0 Million +</h3>\n            <p>Verified Customers</p>\n          </div>\n          <div class=\"col-lg-4 col-md-4\">\n            <h3>100,000 +</h3>\n            <p>Professionals earning on our platform</p>\n          </div>\n          <div class=\"col-lg-4 col-md-4\">\n            <h3>100 +</h3>\n            <p>Services across various categories</p>\n          </div>\n         </div>\n          <a target=\"_blank\" href=\"\" class=\"btn md-btn-outline-white btn-lg\">Click to Know More\n            <i class=\"fa fa-graduation-cap ml-2\"></i>\n          </a>\n        </div>\n        <!--grid column1 end-->\n        <!--Grid column2-->\n        <div class=\"col-md-6 col-xl-5 mb-4 mt-5 \">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <form [formGroup]=\"MobileVarification\" >\n                <h4 class=\"dark-grey-text text-center\">\n                  <strong>Become an WishaWiz Partner within minutes</strong>\n                </h4>\n                <hr>\n                <div >\n          \n                  <mat-form-field style=\"width: 100%\" >\n                    <mat-select placeholder=\"Country\" formControlName=\"dialCode\" [(value)]=\"dialCode\" >\n                      <mat-option *ngFor=\"let country of Countries\" [value]=\"country.dialCode\">\n                        {{country.country}}\n                      </mat-option>\n                    </mat-select>\n                </mat-form-field>\n                 </div>\n                <div >\n                  <mat-form-field style=\"width: 100%;\">\n                    <span matPrefix>{{dialCode}} &nbsp;</span>\n                    <input type=\"tel\" matInput placeholder=\"Enter Mobile No.\" formControlName=\"mobile\">\n                    <mat-icon matSuffix>mode_edit</mat-icon>\n                  </mat-form-field>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn md-btn-outline-danger btn-md\" (click)=\"onSubmitMobile()\" >Next</button>\n                  <hr>\n                  <p> <a href=\"\">Know how </a>WishaWiz works</p>\n                 </div> \n                  \n              </form>\n            </div>\n          </div>\n        </div>\n        <!--Grid column2 end-->\n      </div>\n    </div>\n   </div>\n  </div>\n<!-- Intro end-->"

/***/ }),

/***/ "./src/app/provider/intro/intro.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/provider/intro/intro.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.otp {\n  color: darkgray;\n  border-style: none;\n  width: 60px;\n  height: 60px;\n  font-size: 50px; }\ntd {\n  border: 2px solid darkgray; }\ntable {\n  border-collapse: collapse; }\n"

/***/ }),

/***/ "./src/app/provider/intro/intro.component.ts":
/*!***************************************************!*\
  !*** ./src/app/provider/intro/intro.component.ts ***!
  \***************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_provider_otp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/_services/provider/otp.service */ "./src/app/core/_services/provider/otp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = /** @class */ (function () {
    function IntroComponent(otp) {
        var _this = this;
        this.otp = otp;
        this.dailCode = " ";
        this.MobileVarification = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'dialCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.otp.fetchCountries().subscribe(function (response) { _this.Countries = response.countries; });
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent.prototype.onSubmitMobile = function () {
        console.log(this.MobileVarification.value);
        this.otp.requestOtp(this.MobileVarification.value).subscribe(function (response) {
            console.log(response);
        });
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/provider/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/provider/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_provider_otp_service__WEBPACK_IMPORTED_MODULE_2__["OtpService"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/provider/partner/partner.component.html":
/*!*********************************************************!*\
  !*** ./src/app/provider/partner/partner.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <section class=\"bg-light pt-5 pb-5\">\n        <div class=\"container\">\n              <div class=\"card\">\n                <!--img class=\"card-img-top\" src=\"img_avatar1.png\" alt=\"Card image\"-->\n              <div class=\"row \">\n                <div class=\"col-lg-6\">             \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title font-weight-bold\">Aastha Sharma</h4>\n                      <p class=\"card-text font-italic\"> Hired 45 times<br>Bollywood Dance Instructor</p>\n                    \n                    <p class=\"lead dark-grey-text font-small\">\n                         Aastha joined UrbanClap 6 months ago and has been hired more than 45 times till now. She uses the app regularly to get potential clients in Delhi NCR and has managed to successfully establish and grow her business with UrbanClap.\n                    </p>\n\n                      <a href=\"#\" class=\"btn md-btn-outline-info\">Visit Profile</a>\n                    </div>\n                  </div>\n\n              <div class=\"col-md-6 col-xl-5 mb-4 mt-5\">\n           \n                  <div class=\"card-body\">\n                      <h5 class=\"dark-grey-text text-center\">\n                        <strong>Take a look at how many customers request for professionals like you</strong>\n                      </h5>\n                      <hr>\n                        <div class=\"dropdown col-lg-12 text-center\">\n                          <button type=\"button\" class=\"btn md-btn-outline-primary btn-md dropdown-toggle\" data-toggle=\"dropdown\">\n                            Choose Your Service\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <a class=\"dropdown-item\" href=\"#\">Link 1</a>\n                            <a class=\"dropdown-item\" href=\"#\">Link 2</a>\n                            <a class=\"dropdown-item\" href=\"#\">Link 3</a>\n                          </div>\n                        </div>\n                    \n                  </div>\n             </div>\n          </div>           \n          </div>\n        </div>\n      </section>"

/***/ }),

/***/ "./src/app/provider/partner/partner.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/provider/partner/partner.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Half Page Carousel itself*/\n.carousel {\n  height: 50%; }\n.carousel .carousel-inner {\n  height: 100%; }\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100%; }\n/* Adjustment for mobile devices*/\n@media (max-width: 776px) {\n  .carousel {\n    height: 100%; } }\n/* Navbar animation */\n.navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n.top-nav-collapse {\n  background-color: #1C2331; }\n/* Adding color to the Navbar on mobile */\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.feature_area {\n  background: #04091e;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 651px;\n  z-index: 1; }\n.feature_area .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 125%;\n  bottom: 0;\n  z-index: -1;\n  opacity: .25; }\n.feature_item {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 50px 37px 35px 37px;\n  border: 1px solid #6c6d77;\n  color: #fff; }\n.feature_item i {\n  font-size: 24px;\n  margin-bottom: 25px;\n  display: inline-block; }\n.feature_item h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 15px; }\n.feature_item p {\n  margin-bottom: 0px;\n  color: #777777; }\n.p_120 {\n  padding-top: 120px;\n  padding-bottom: 120px; }\n.white_title {\n  text-align: center;\n  max-width: 690px;\n  margin: 0px auto 75px; }\n.white_title h2 {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 15px; }\n.white_title p {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Poppins\", sans-serif;\n  color: #777777;\n  margin-bottom: 0px; }\n.modal-dialog {\n  margin-left: 150px; }\n.modal-dialog video {\n  width: 1080px;\n  height: 640px; }\n.featuredvideo {\n  box-shadow: 5px 5px 2px lightgrey;\n  width: 320px;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.featuredvideo:hover {\n  box-shadow: 5px 5px 2px grey; }\ndiv.relative {\n  position: relative; }\ndiv.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: inherit;\n  height: inherit; }\n.absolute:hover {\n  background: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/provider/partner/partner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/provider/partner/partner.component.ts ***!
  \*******************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
    }
    PartnerComponent.prototype.ngOnInit = function () {
    };
    PartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partner',
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/provider/partner/partner.component.html"),
            styles: [__webpack_require__(/*! ./partner.component.scss */ "./src/app/provider/partner/partner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider.component.html":
/*!**************************************************!*\
  !*** ./src/app/provider/provider.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<app-intro></app-intro>\n<app-howto-use></app-howto-use>\n<app-partner></app-partner>\n<app-why></app-why>\n<div class=\"container\">\n<hr class=\"mb-5 mt-0\">\n<app-providers-testimonials></app-providers-testimonials>\n<app-feature-video></app-feature-video>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/provider/provider.component.scss":
/*!**************************************************!*\
  !*** ./src/app/provider/provider.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/provider/provider.component.ts":
/*!************************************************!*\
  !*** ./src/app/provider/provider.component.ts ***!
  \************************************************/
/*! exports provided: ProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderComponent", function() { return ProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderComponent = /** @class */ (function () {
    function ProviderComponent() {
    }
    ProviderComponent.prototype.ngOnInit = function () {
    };
    ProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider',
            template: __webpack_require__(/*! ./provider.component.html */ "./src/app/provider/provider.component.html"),
            styles: [__webpack_require__(/*! ./provider.component.scss */ "./src/app/provider/provider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderComponent);
    return ProviderComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider.module.ts":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.module.ts ***!
  \*********************************************/
/*! exports provided: ProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderModule", function() { return ProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/provider/intro/intro.component.ts");
/* harmony import */ var _howto_use_howto_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./howto-use/howto-use.component */ "./src/app/provider/howto-use/howto-use.component.ts");
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partner/partner.component */ "./src/app/provider/partner/partner.component.ts");
/* harmony import */ var _why_why_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why/why.component */ "./src/app/provider/why/why.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/provider/footer/footer.component.ts");
/* harmony import */ var _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature-video/feature-video.component */ "./src/app/provider/feature-video/feature-video.component.ts");
/* harmony import */ var _providers_testimonials_providers_testimonials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers-testimonials/providers-testimonials.component */ "./src/app/provider/providers-testimonials/providers-testimonials.component.ts");
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider.component */ "./src/app/provider/provider.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provider.routes */ "./src/app/provider/provider.routes.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _core_services_provider_otp_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/_services/provider/otp.service */ "./src/app/core/_services/provider/otp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(_provider_routes__WEBPACK_IMPORTED_MODULE_11__["ProviderRoutes"]),
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
            ],
            declarations: [
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"],
                _howto_use_howto_use_component__WEBPACK_IMPORTED_MODULE_3__["HowtoUseComponent"],
                _partner_partner_component__WEBPACK_IMPORTED_MODULE_4__["PartnerComponent"],
                _why_why_component__WEBPACK_IMPORTED_MODULE_5__["WhyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_7__["FeatureVideoComponent"],
                _providers_testimonials_providers_testimonials_component__WEBPACK_IMPORTED_MODULE_8__["ProvidersTestimonialsComponent"],
                _provider_component__WEBPACK_IMPORTED_MODULE_9__["ProviderComponent"],
            ],
            providers: [_core_services_provider_otp_service__WEBPACK_IMPORTED_MODULE_17__["OtpService"]]
        })
    ], ProviderModule);
    return ProviderModule;
}());



/***/ }),

/***/ "./src/app/provider/provider.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.routes.ts ***!
  \*********************************************/
/*! exports provided: ProviderRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRoutes", function() { return ProviderRoutes; });
/* harmony import */ var _provider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.component */ "./src/app/provider/provider.component.ts");

var ProviderRoutes = [
    { path: '', component: _provider_component__WEBPACK_IMPORTED_MODULE_0__["ProviderComponent"] },
];


/***/ }),

/***/ "./src/app/provider/providers-testimonials/providers-testimonials.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/providers-testimonials/providers-testimonials.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"text-center bg-white\">\n  <div class=\"container\">\n    <h2 class=\"mb-5\">Trusted By</h2>\n      <div class=\"row\">\n       <div class=\"col-lg-4\">\n        <a href=\"\">\n          <div class=\"mx-auto mb-5 mb-lg-0 black-text\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-1.jpg\" alt=\"\">\n          <h5><p class=\"font-weight-bold\">Sajal Kapoor</p></h5><p class=\"font-italic\">Wedding Photographer</p>\n          <p class=\"font-weight-light mb-0 grey-text\">\"From earning 10K a month to being totally booked from November till February -- My UrbanClap Journey.\"</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-4\">\n        <a href=\"\"><div class=\"mx-auto mb-5 mb-lg-0 black-text\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-2.jpg\" alt=\"\">\n          <h5><p class=\"font-weight-bold\">Natasha Arya</p></h5><p class=\"font-italic\">Make-up Artist</p>\n          <p class=\"font-weight-light mb-0 grey-text\">UrbanClap has given me an opportunity to showcase my work through a convenient platform. It’s all One CLICK away.</p>\n        </div></a>\n      </div>\n      <div class=\"col-lg-4\">\n        <a href=\"\"><div class=\"mx-auto mb-5 mb-lg-0 black-text\">\n          <img class=\"img-fluid rounded-circle mb-3\" src=\"assets/img/testimonials-3.jpg\" alt=\"\">\n          <h5><p class=\"font-weight-bold\">Yasser Raja</p></h5><p class=\"font-italic\">Fitness Trainer</p>\n          <p class=\"font-weight-light mb-0 grey-text\">In the past one year UrbanClap has given me business worth Rs. 4.5Lakh+ and has enabled me in quitting my MNC job and follow my passion.</p>\n        </div></a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/provider/providers-testimonials/providers-testimonials.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/providers-testimonials/providers-testimonials.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/provider/providers-testimonials/providers-testimonials.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/provider/providers-testimonials/providers-testimonials.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProvidersTestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersTestimonialsComponent", function() { return ProvidersTestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProvidersTestimonialsComponent = /** @class */ (function () {
    function ProvidersTestimonialsComponent() {
    }
    ProvidersTestimonialsComponent.prototype.ngOnInit = function () {
    };
    ProvidersTestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-providers-testimonials',
            template: __webpack_require__(/*! ./providers-testimonials.component.html */ "./src/app/provider/providers-testimonials/providers-testimonials.component.html"),
            styles: [__webpack_require__(/*! ./providers-testimonials.component.scss */ "./src/app/provider/providers-testimonials/providers-testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProvidersTestimonialsComponent);
    return ProvidersTestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/provider/why/why.component.html":
/*!*************************************************!*\
  !*** ./src/app/provider/why/why.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"feature_area p_120 \">\n  <div class=\"overlay bg-parallax\" data-stellar-ratio=\"0.9\" data-stellar-vertical-offset=\"0\" data-background=\"\"></div>\n  <div class=\"container\">\n    <div class=\"white_title\">\n      <h2>Why become an UrbanClap Partner?</h2>\n    </div>\n    <div class=\"row feature_inner\">\n      <div class=\"col-lg-4\">\n        <div class=\"feature_item\">\n          <i class=\"fa fa-bar-chart-o\"></i>\n          <h4>Grow your business</h4>\n          <p>Get new customers looking for service professionals like you.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"feature_item\">\n          <i class=\"fa fa-puzzle-piece\"></i>\n          <h4>Work on your own terms</h4>\n          <p>Quote your own price and choose the customer requests that interest you.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"feature_item\">\n          <i class=\"fa fa-credit-card-alt\"></i>\n          <h4>Business Tools</h4>\n          <p>Get business tools like online payment and invoicing.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/provider/why/why.component.scss":
/*!*************************************************!*\
  !*** ./src/app/provider/why/why.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Required height of parents of the Half Page Carousel for proper displaying carousel itself */\nhtml,\nbody,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  .full-page-intro {\n    height: 1000px; } }\n/* Half Page Carousel itself*/\n.carousel {\n  height: 50%; }\n.carousel .carousel-inner {\n  height: 100%; }\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100%; }\n/* Adjustment for mobile devices*/\n@media (max-width: 776px) {\n  .carousel {\n    height: 100%; } }\n/* Navbar animation */\n.navbar {\n  background-color: rgba(0, 0, 0, 0.3); }\n.top-nav-collapse {\n  background-color: #1C2331; }\n/* Adding color to the Navbar on mobile */\n@media only screen and (max-width: 768px) {\n  .navbar {\n    background-color: #1C2331; } }\n/* Footer color for sake of consistency with Navbar */\n.page-footer {\n  background-color: #1C2331; }\nhtml,\nbody,\nheader,\n.view {\n  height: 100%; }\n@media (max-width: 740px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 1000px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\n  body,\n  header,\n  .view {\n    height: 650px; } }\n@media (min-width: 800px) and (max-width: 850px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n.feature_area {\n  background: #04091e;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  min-height: 651px;\n  z-index: 1; }\n.feature_area .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 125%;\n  bottom: 0;\n  z-index: -1;\n  opacity: .25; }\n.feature_item {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 50px 37px 35px 37px;\n  border: 1px solid #6c6d77;\n  color: #fff; }\n.feature_item i {\n  font-size: 24px;\n  margin-bottom: 25px;\n  display: inline-block; }\n.feature_item h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 15px; }\n.feature_item p {\n  margin-bottom: 0px;\n  color: #777777; }\n.p_120 {\n  padding-top: 120px;\n  padding-bottom: 120px; }\n.white_title {\n  text-align: center;\n  max-width: 690px;\n  margin: 0px auto 75px; }\n.white_title h2 {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 15px; }\n.white_title p {\n  font-size: 14px;\n  line-height: 24px;\n  font-family: \"Poppins\", sans-serif;\n  color: #777777;\n  margin-bottom: 0px; }\n.modal-dialog {\n  margin-left: 150px; }\n.modal-dialog video {\n  width: 1080px;\n  height: 640px; }\n.featuredvideo {\n  box-shadow: 5px 5px 2px lightgrey;\n  width: 320px;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.featuredvideo:hover {\n  box-shadow: 5px 5px 2px grey; }\ndiv.relative {\n  position: relative; }\ndiv.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: inherit;\n  height: inherit; }\n.absolute:hover {\n  background: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/provider/why/why.component.ts":
/*!***********************************************!*\
  !*** ./src/app/provider/why/why.component.ts ***!
  \***********************************************/
/*! exports provided: WhyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponent", function() { return WhyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyComponent = /** @class */ (function () {
    function WhyComponent() {
    }
    WhyComponent.prototype.ngOnInit = function () {
    };
    WhyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-why',
            template: __webpack_require__(/*! ./why.component.html */ "./src/app/provider/why/why.component.html"),
            styles: [__webpack_require__(/*! ./why.component.scss */ "./src/app/provider/why/why.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyComponent);
    return WhyComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blackbox/Documents/wishawiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map