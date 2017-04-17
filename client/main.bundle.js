webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.addProduct = function (product) {
        //going to the backend
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('products/addproduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get('products/getproducts').map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/product.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateDepartment = function (department) {
        if (!department) {
            return true;
        }
        else {
            console.log("Department already exists!");
            return false;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/validate.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(525);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/main.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(782),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/app.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_contactus_contactus_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_adminlogin_adminlogin_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_manage_manage_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_inventory_inventory_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_product_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_checkout_checkout_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_finalcheckout_finalcheckout_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_validate_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_easter_egg_easter_egg_component__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_15__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_14__components_contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_19__components_inventory_inventory_component__["a" /* InventoryComponent */] },
    { path: 'admin/manage', component: __WEBPACK_IMPORTED_MODULE_18__components_manage_manage_component__["a" /* ManageComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_21__components_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'finalcheckout', component: __WEBPACK_IMPORTED_MODULE_22__components_finalcheckout_finalcheckout_component__["a" /* FinalcheckoutComponent */] },
    //Suprise for a curious developer or explorer -- Happy Easter
    { path: 'adamlee/42easteregg', component: __WEBPACK_IMPORTED_MODULE_26__components_easter_egg_easter_egg_component__["a" /* EasterEggComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_manage_manage_component__["a" /* ManageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_finalcheckout_finalcheckout_component__["a" /* FinalcheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_easter_egg_easter_egg_component__["a" /* EasterEggComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_25__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(783),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/about.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminloginComponent = (function () {
    function AdminloginComponent(router) {
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.onLoginSubmit = function () {
        //If login is success 
        this.router.navigate(['manage']);
    };
    AdminloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__(784),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AdminloginComponent);
    return AdminloginComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/adminlogin.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(785),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/cart.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = (function () {
    function CheckoutComponent(router) {
        this.router = router;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.onLoginSubmit = function () {
        this.router.navigate(['finalcheckout']);
    };
    CheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(786),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/checkout.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.onSubmitContact = function () {
    };
    ContactusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(787),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactusComponent);
    return ContactusComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/contactus.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(788),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasterEggComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasterEggComponent = (function () {
    function EasterEggComponent() {
    }
    EasterEggComponent.prototype.ngOnInit = function () {
    };
    EasterEggComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-easter-egg',
            template: __webpack_require__(789),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [])
    ], EasterEggComponent);
    return EasterEggComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/easter-egg.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalcheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinalcheckoutComponent = (function () {
    function FinalcheckoutComponent(_zone) {
        this._zone = _zone;
    }
    FinalcheckoutComponent.prototype.ngOnInit = function () {
    };
    FinalcheckoutComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: 2000
        });
    };
    FinalcheckoutComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! Card token " + response.card.id + ".";
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    FinalcheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finalcheckout',
            template: __webpack_require__(790),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object])
    ], FinalcheckoutComponent);
    return FinalcheckoutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/finalcheckout.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.today;
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(791),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/footer.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("Home component initialized...");
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(792),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/home.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
        //   this.productService.getProducts().subscribe(product => {
        //     this.PushToArrayGRSY(product);
        //   }, 
        //   err=> {
        //     console.log(err);
        //     return false;
        //   });
        // }
        // PushToArrayGRSY(product: Product[]){
    };
    InventoryComponent.prototype.productSelected = function () {
        console.log("Product Clicked: ");
    };
    InventoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(793),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryComponent);
    return InventoryComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/inventory.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.msgs = [];
        this.growlmsgs = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("Login component initialized...");
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log("user submit button pushed");
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            //console.log(data);
            if (_this.username == undefined || _this.password == undefined) {
                _this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields.' });
            }
            else {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.growlmsgs.push({ severity: 'success', summary: 'Welcome' + user.username });
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.growlmsgs.push({ severity: 'error', summary: data.msg });
                    _this.msgs.push({ severity: 'error', summary: 'Error:', detail: 'Please enter valid credentials.' });
                    _this.router.navigate(['login']);
                }
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(794),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/login.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageComponent = (function () {
    function ManageComponent(productService, authService, router) {
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.growlmsgs = [];
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ManageComponent.prototype.onAddProduct = function () {
        var _this = this;
        var product = {
            name: this.name,
            price: this.price,
            desc: this.desc,
            qty: this.qty,
            image: this.image,
            department: this.department
        };
        console.log(product);
        this.productService.addProduct(product).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'Product has been added to the database.' });
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
                _this.router.navigate(['/admin/manage']);
            }
        });
    };
    ManageComponent.prototype.getAllProducts = function () {
        //Return all products to an array.
    };
    ManageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(795),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], ManageComponent);
    return ManageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/manage.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.msgs = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.msgs.push({ severity: 'info', summary: 'Info:', detail: 'You have successfully logged out.' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(796),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(797),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/profile.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.growlmsgs = [];
        this.msgs = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("Register component initialized...");
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            console.log("Please fill in all fields");
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please fill in all fields' });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please use a valid email' });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'You are now registered and can log in' });
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(798),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/register.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/environment.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        //going to the backend
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/auth.service.js.map

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = ".note{\r\n    color: red;\r\n}\r\n.spacer{\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    margin-top: 20px;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    background-color: #f5f5f5;\r\n}"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px; \r\n    width: 180px;\r\n    height: 300px;    \r\n}\r\n.spacer{\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    height: 200px;\r\n}\r\n.note{\r\n    color:red;\r\n}"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <p-messages [value]=\"msgs\"></p-messages>\n    <p-growl [value]=\"growlmsgs\"></p-growl>\n    <router-outlet></router-outlet>\n    <div class=\"spacer\"></div> \n          <!-- 200px is FooterHeight  this will push \n          the footer so it will not overlap if you have very long content  -->\n</div>\n<app-footer><app-footer>\n\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">About</h2>\n<h4><em>\n  This is the about page a description of your business and the website main goals and other exciting information about your company goes here...\n</em></h4>\n<br>\n<h4><ul>\n  <li>Business Goals</li>\n  <li>Why was this site created?</li>\n  <li>Something to excite the visitors</li>\n</ul></h4>\n<br>\n<strong>\n<p >This is a simple page but contains all the information your visitors should know about you before using your site can they trust you will deliver on your goals.<p>\n</strong>"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<form class=\"col-md-4 col-md-offset-4\"(submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\">\n  <h2>Checkout</h2>\n  <div class=\"form-group\">\n    <label>Cart Total</label>\n    <p>qty goes here...</p>\n  </div>\n  <div>\n    <label>Number of Items</label>\n    <p>Number of Items here...</p>\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Checkout\">\n</form>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Contact Us</h2>\n<form class=\"col-md-4\" (submit)=\"onSubmitContact()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div>\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div>\n    <label>Subject</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"subject\" name=\"subject\">\n  </div>\n  <div>\n    <label>Description</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Contact\">\n</form>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashbaord.</p>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<Strong><em><h4>You have found an &#8496;&#8458;&#8458;. Please enjoy some of my favourite music &#9835; &#9834; Upon your discovery. &#9786;&#9760;</h4></em></Strong>\n<em class=\"note\">Note: There is more to come.</em>\n<Strong>Happy Easter.<strong>\n<div>\n  <h3><a href=\"https://www.youtube.com/watch?v=zYpDJw7fThU\">Blind Faith</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yAZrDkz_7aY\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Exb2x_BNcIk\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n<div>\n  <h3><a href=\"\">Rock n Roll</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-sUXMzkh-jI\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JU5LMG3WFBw\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n\n<div>\n  <h3><a href=\"https://www.youtube.com/watch?v=tvTRZJ-4EyI\">Hip Hop</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_JZom_gVfuw\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fGeNDnYcQOA\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n<div class=\"spacer\">\n</div>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<h1>Custom Stripe Form</h1>\n\n<form action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\">\n  <span class=\"payment-message\">{{message}}</span>\n\n  <div class=\"form-row\">\n    <label>\n      <span>Card Number</span>\n      <input [(ngModel)]=\"cardNumber\" name=\"card-number\" type=\"text\" size=\"20\" data-stripe=\"number\">\n    </label>\n  </div>\n\n  <div class=\"form-row\">\n    <label>\n      <span>Expiration (MM/YY)</span>\n      <input [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" type=\"text\" size=\"2\" data-stripe=\"exp_month\">\n    </label>\n    <span> / </span>\n    <input [(ngModel)]=\"expiryYear\" name=\"expiry-year\" type=\"text\" size=\"2\" data-stripe=\"exp_year\">\n  </div>\n\n  <div class=\"form-row\">\n    <label>\n      <span>CVC</span>\n      <input [(ngModel)]=\"cvc\" name=\"cvc\" type=\"text\" size=\"4\" data-stripe=\"cvc\">\n    </label>\n  </div>\n\n  <input type=\"submit\" value=\"Submit Payment\">\n</form>\n<button (click)=\"openCheckout()\">Purchase</button>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <a class=\"text-muted\" routerLink=\"/\">Company Name</a>\n    <span class=\"attribution\">\n      &copy; {{ today | date: 'yyyy' }}.\n      Footer Content goes here...\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN eCommerce App</h1>\n  <p class=\"lead\">Welcome to our site built using the MEAN stack</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Simple Checkout</h3>\n    <p>View the products, add them to the cart and checkout providing credit card information to Stripe. Most companies dont want to be responsible for their users private information so they pass it to external companies that are prefessionals with securely storing this information.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Access Control</h3>\n    <p>An admin login and manage view has been added to allow an administrator to manage the website from a seperate account type.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Integrated API's</h3>\n    <p>Stripe API and Twilio API have been integrated to add more functionality and security to your site. Stripe is used for secure purchases. Twilio API is to provide the site with SMS functionality if it needed such as Two-step verification.</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organise models and query the MongoDB(NoSQL) database.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI is used to generate components, services and much more! Local development server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data with Hashed passwords too.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" id=\"rcorners2\"><app-checkout ></app-checkout></div>\n<div class=\"col-md-4\">\n  <ul *ngFor=\"let product of products\">\n  <li>{{ product.name }}<li>\n  <li>{{ product.price }}</li>\n  </ul>\n</div>\n<!--row 1-->\n<div class=\"col-sm-12\"> \n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<!--row2-->\n<div class=\"col-sm-12\"> \n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"spacer\"></div>\n</div>\n\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Please sign in</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<br>\n<a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\n<p style=\"color:red\">Developer note: Admin login is at /admin</p>\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Store management</h2>\n  <div>\n  <h3>Admin Profile</h3>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{user.name}}</li>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n  </div>\n  <br>\n  <div>\n  <h3>Inventory List</h3>\n  <ul class=\"\">\n    <table class=\"table table-hover table-striped table-responsive table-condensed\">\n                <thead>\n                    <tr>\n                        <th class=\"col-xs-2\">Name</th>\n                        <th class=\"col-xs-1\">Price</th>\n                        <th class=\"col-xs-2\">Description</th>\n                        <th class=\"col-xs-2\">quantity</th>\n                        <th class=\"col-xs-2\">imageUrl</th>\n                        <th class=\"col-xs-1\">Department</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of PatientsFiltered\">\n                        <td>{{item.p_full_name}}</td>\n                        <td>{{item.P_DOB | date:'dd/MM/yyyy'}}</td>\n                        <td>{{item.p_tel_num}}</td>\n                        <td>{{item.p_Address1}}</td>\n                        <td>{{item.p_Address2}}</td>\n                        <td>{{item.p_city}}</td>\n                        <td>{{item.p_county | uppercase}}</td>\n                    </tr>\n                </tbody>\n            </table>\n  </ul>\n  </div>\n  <div class=\"col-sm-12\">\n  <h3>Inventory Management</h3>\n  <!--Add Product-->\n      <div class=\"col-md-4\">\n        <h4><strong>Add Inventory</strong></h4>\n        <form (submit)=\"onAddProduct()\">\n        <div class=\"form-group\">\n          <label>Product Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n        <div>\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\">\n        </div>\n        <div>\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"desc\" name=\"desc\">\n        </div>\n        <div>\n          <label>Quantity</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qty\" name=\"qty\">\n        </div>\n        <div>\n          <label>Image</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"image\" name=\"image\">\n        </div>\n        <div>\n          <label>Department</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"department\" name=\"department\">\n        </div>\n        <br>\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Add\">\n    </form>\n    </div>\n    <div class=\"col-md-4\">\n    <h4><strong>Update Product</strong></h4>\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <br>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Update\">\n    </form>\n    </div>\n    <div class=\"col-md-4\">\n      <h4><strong>Delete Product</strong></h4>\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <br>\n      <input type=\"submit\" class=\"btn btn-danger\" value=\"Delete\">\n    </form>\n    </div>\n  </div>\n  \n    <!--Spacer for the footer do not remove-->\n  <div class=\"spacer\"></div>\n  <div class=\"note\">Note: Add, update and delete customers and admin also coming soon...</div>\n\n\n\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN eCommerce App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/']\">Home</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/inventory']\">Products</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/cart']\">Cart</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/about']\">About</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/contactus']\">Contact us</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/manage']\">Manage</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Registration</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-sucess\" value=\"Submit\">\n</form>\n<a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ })

},[829]);
//# sourceMappingURL=main.bundle.map