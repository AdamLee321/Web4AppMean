webpackJsonp([1,4],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(264);
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
    //Add a Product
    ProductService.prototype.addProduct = function (product) {
        //going to the backend
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('products/addproduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Get All Products
    ProductService.prototype.getProducts = function () {
        return this.http.get('products/getproducts').map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (product) {
        return this.http.delete('products/product/' + product).map(function (res) { return res.json; });
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('products/addproduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    //Add a Product
    ContactService.prototype.addContact = function (contact) {
        //going to the backend
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('contacts/addcontact', contact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ContactService);
    return ContactService;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/contact.service.js.map

/***/ }),

/***/ 356:
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
        if (user.name == undefined || user.email == undefined || user.phone == undefined || user.username == undefined || user.password == undefined) {
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
    ValidateService.prototype.validatePhone = function (phone) {
        var re = /^\d+$/;
        return re.test(phone);
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

/***/ 424:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 424;


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(545);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/main.js.map

/***/ }),

/***/ 544:
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
            template: __webpack_require__(813),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/app.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_contactus_contactus_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_adminlogin_adminlogin_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cart_cart_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manage_manage_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_inventory_inventory_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_product_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_checkout_checkout_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_finalcheckout_finalcheckout_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_footer_footer_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_validate_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_contact_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_easter_egg_easter_egg_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_maps_maps_component__ = __webpack_require__(559);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_17__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_16__components_contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_19__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_21__components_inventory_inventory_component__["a" /* InventoryComponent */] },
    { path: 'admin/manage', component: __WEBPACK_IMPORTED_MODULE_20__components_manage_manage_component__["a" /* ManageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_23__components_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'finalcheckout', component: __WEBPACK_IMPORTED_MODULE_24__components_finalcheckout_finalcheckout_component__["a" /* FinalcheckoutComponent */] },
    //Suprise for a curious developer or explorer -- Happy Easter
    { path: 'adamlee/42easteregg', component: __WEBPACK_IMPORTED_MODULE_29__components_easter_egg_easter_egg_component__["a" /* EasterEggComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_manage_manage_component__["a" /* ManageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_finalcheckout_finalcheckout_component__["a" /* FinalcheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_easter_egg_easter_egg_component__["a" /* EasterEggComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_maps_maps_component__["a" /* MapsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__["ImageUploadModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDOCmJyU4z8Wcbmbb0DCo32D1zTWVX4QNA'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_26__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_27__services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/app.module.js.map

/***/ }),

/***/ 546:
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
            template: __webpack_require__(814),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/about.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
    function AdminloginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.msgs = [];
        this.growlmsgs = [];
    }
    AdminloginComponent.prototype.ngOnInit = function () {
        console.log("Login component initialized...");
    };
    AdminloginComponent.prototype.onLoginSubmit = function () {
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
                    _this.router.navigate(['manage']);
                }
                else {
                    _this.growlmsgs.push({ severity: 'error', summary: data.msg });
                    _this.msgs.push({ severity: 'error', summary: 'Error:', detail: 'Please enter valid credentials.' });
                    _this.router.navigate(['/admin']);
                }
            }
        });
    };
    AdminloginComponent.prototype.MessageLogin = function (response) {
        console.log('Post Finished');
        if (response == 'customer') {
            this.router.navigate(['/profile']);
        }
        else if (response == 'admin') {
            this.router.navigate(['/admin/manage']);
        }
        else if (response == 'Login Failed') {
            this.msgs.push({ severity: 'error', summary: 'Error:', detail: 'Please enter valid credentials.' });
        }
        else if (response == 'Login Successful Secretary') {
            this.router.navigate(['secretary/dashboard']);
        }
    };
    AdminloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__(815),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], AdminloginComponent);
    return AdminloginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/adminlogin.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(162);
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
    function CartComponent(productService) {
        this.productService = productService;
        this.cart = [];
    }
    CartComponent.prototype.removeProduct = function (product) {
        //this.cartStore.removeFromCart(product)
    };
    CartComponent.prototype.checkout = function () {
        alert('Sorry! Checkout will be coming soon!');
    };
    CartComponent.prototype.ngOnInit = function () {
        // this.cartSubscription = this.cartStore.getState().subscribe(res => {
        //   this.cart = res.products
        //   this.getTotalPrice()
        // })
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(816),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], CartComponent);
    return CartComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/cart.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
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
            template: __webpack_require__(817),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/checkout.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(355);
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
    function ContactusComponent(contactService) {
        this.contactService = contactService;
        this.growlmsgs = [];
        this.contacts = [];
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.onSubmitContact = function () {
        var _this = this;
        var contact = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            description: this.description,
        };
        console.log(contact);
        this.contactService.addContact(contact).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'Your Message has been sent!.' });
                _this.refreshList();
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
            }
        });
    };
    ContactusComponent.prototype.refreshList = function () {
        this.name = '';
        this.email = '';
        this.subject = '';
        this.description = '';
    };
    ContactusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(818),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === 'function' && _a) || Object])
    ], ContactusComponent);
    return ContactusComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/contactus.component.js.map

/***/ }),

/***/ 551:
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
            template: __webpack_require__(819),
            styles: [__webpack_require__(801)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 552:
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
            template: __webpack_require__(820),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [])
    ], EasterEggComponent);
    return EasterEggComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/easter-egg.component.js.map

/***/ }),

/***/ 553:
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
            name: 'eCommerce Site',
            description: '',
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
            template: __webpack_require__(821),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object])
    ], FinalcheckoutComponent);
    return FinalcheckoutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/finalcheckout.component.js.map

/***/ }),

/***/ 554:
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
            template: __webpack_require__(822),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/footer.component.js.map

/***/ }),

/***/ 555:
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
            template: __webpack_require__(823),
            styles: [__webpack_require__(805)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/home.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
    // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
    // Because they are injected in the constructor
    function InventoryComponent(productService, router) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    }
    // Dynamic route for detail info when a product is clicked
    InventoryComponent.prototype.clickedProduct = function (product) {
        var link = ['/detail', product.id];
        this.router.navigate(link);
    };
    // When add to cart button is clicked
    InventoryComponent.prototype.addToCart = function (product) {
        // this.productService.addToCart(product)
        console.log(this.quantity);
        //this.cartStore.addToCart(product, this.quantity || 1)
    };
    // getProductData() {     
    //    this.productService.getProducts().then(products => this.products = products)
    // }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(824),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], InventoryComponent);
    return InventoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/inventory.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
            if (_this.username == "admin" && _this.password == "admin") {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['admin/manage']);
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
    LoginComponent.prototype.MessageLogin = function (response) {
        console.log('Post Finished');
        if (response == 'customer') {
            this.router.navigate(['/profile']);
        }
        else if (response == 'Login Failed') {
            this.msgs.push({ severity: 'error', summary: 'Error:', detail: 'Please enter valid credentials.' });
        }
        else if (response == 'Login Successful Secretary') {
            this.router.navigate(['secretary/dashboard']);
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(825),
            styles: [__webpack_require__(807)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/login.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__(162);
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




//const URL = 'https://quiet-sierra-22706.herokuapp.com/products/addproduct';
var ManageComponent = (function () {
    function ManageComponent(productService, authService, router) {
        var _this = this;
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        //public uploader:FileUploader = new FileUploader({url: URL});
        this.growlmsgs = [];
        this.products = [];
        this.getIndexOfProduct = function (_id) {
            return _this.products.findIndex(function (product) {
                return product._id === _id;
            });
        };
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
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
            description: this.description,
            quantity: this.quantity,
            imageUrl: this.imageUrl,
            department: this.department
        };
        console.log(product);
        this.productService.addProduct(product).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'Product has been added to the database.' });
                _this.refreshList();
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
                _this.router.navigate(['/admin/manage']);
            }
        });
    };
    ManageComponent.prototype.refreshList = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ManageComponent.prototype.updateProductList = function () {
        var _this = this;
        var product = {
            name: this.name,
            price: this.price,
            description: this.description,
            quantity: this.quantity,
            imageUrl: this.imageUrl,
            department: this.department
        };
        this.productService.updateProduct(product).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'Product has been updated in the database.' });
                _this.refreshList();
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
                _this.router.navigate(['/admin/manage']);
            }
        });
        console.log("this is product " + product);
    };
    ManageComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        var products = this.products;
        this.productService.deleteProduct(id).subscribe(function (data) {
            for (var i = 0; i < products.length; i++) {
                if (products[i]._id == id) {
                    products.splice(i, 1);
                    return _this.products;
                }
            }
        });
    };
    ManageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(826),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], ManageComponent);
    return ManageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/manage.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
        this.title = 'Company Location';
        this.lat = 54.27858074867338;
        this.lng = -8.459987637880886;
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(827),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapsComponent);
    return MapsComponent;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/maps.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
            template: __webpack_require__(828),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
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
            template: __webpack_require__(829),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/profile.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
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
        this.role = 1;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("Register component initialized...");
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            username: this.username,
            password: this.password,
            role: this.role
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
        //Validate Number
        if (!this.validateService.validatePhone(user.phone)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please use a valid phone' });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.growlmsgs.push({ severity: 'success', summary: 'You are now registered and can log in' });
                //this.router.navigate(['/login']);
                _this.resetForm();
            }
            else {
                _this.growlmsgs.push({ severity: 'error', summary: 'Oops! Something went wrong! Please try again.' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.resetForm = function () {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.password = '';
        this.username = '';
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(830),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adaml/Desktop/Web4Mean/angular-src/src/register.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(62);
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
    AuthGuard.prototype.canActivate = function (user) {
        if (this.authService.isAdmin(user)) {
            return true;
        }
        else {
            if (this.authService.loggedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
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

/***/ 564:
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(264);
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
    AuthService.prototype.isAdmin = function (user) {
        if ((user.username = "admin") && (user.password = "admin")) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
        }
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

/***/ 795:
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = ".note{\r\n    color: red;\r\n}\r\n.spacer{\r\n    height: 200px;\r\n}"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    margin-top: 20px;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    background-color: #f5f5f5;\r\n}"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px; \r\n    width: 180px;\r\n    height: 300px;    \r\n}\r\n.spacer{\r\n    height: 200px;\r\n}\r\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    height: 200px;\r\n}\r\n.note{\r\n    color:red;\r\n}"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <p-messages [value]=\"msgs\"></p-messages>\n    <p-growl [value]=\"growlmsgs\"></p-growl>\n    <router-outlet></router-outlet>\n    <div class=\"spacer\"></div> \n          <!-- 200px is FooterHeight  this will push \n          the footer so it will not overlap if you have very long content  -->\n</div>\n<app-footer><app-footer>\n\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">About</h2>\n<h4><em>\n  This is the about page a description of your business and the website main goals and other exciting information about your company goes here...\n</em></h4>\n<br>\n<h4><ul>\n  <li>Business Goals</li>\n  <li>Why was this site created?</li>\n  <li>Something to excite the visitors</li>\n</ul></h4>\n<br>\n<strong>\n<p >This is a simple page but contains all the information your visitors should know about you before using your site can they trust you will deliver on your goals.<p>\n</strong>\n<app-maps></app-maps>"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<form class=\"col-md-4 col-md-offset-4\"(submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<app-checkout></app-checkout>\n  <h3><strong>cart coming soon...</strong></h3>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\">\n  <h2>Checkout</h2>\n  <div class=\"form-group\">\n    <label>Cart Total</label>\n    <p>qty goes here...</p>\n  </div>\n  <div>\n    <label>Number of Items</label>\n    <p>Number of Items here...</p>\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Checkout\">\n</form>\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Contact Us</h2>\n<form class=\"col-md-4\" (submit)=\"onSubmitContact()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div>\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div>\n    <label>Subject</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"subject\" name=\"subject\">\n  </div>\n  <div>\n    <label>Description</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Contact\">\n</form>\n<app-maps></app-maps>\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashbaord.</p>\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<Strong><em><h4>You have found an &#8496;&#8458;&#8458;. Please enjoy some of my favourite music &#9835; &#9834; Upon your discovery. &#9786;&#9760;</h4></em></Strong>\n<em class=\"note\">Note: There is more to come.</em>\n<Strong>Happy Easter.<strong>\n<div>\n  <h3><a href=\"https://www.youtube.com/watch?v=zYpDJw7fThU\">Blind Faith</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yAZrDkz_7aY\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Exb2x_BNcIk\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n<div>\n  <h3><a href=\"\">Rock n Roll</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-sUXMzkh-jI\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JU5LMG3WFBw\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n\n<div>\n  <h3><a href=\"https://www.youtube.com/watch?v=tvTRZJ-4EyI\">Hip Hop</a></h3>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_JZom_gVfuw\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-md-6\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fGeNDnYcQOA\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n</div>\n<div class=\"spacer\">\n</div>\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Checkout</h2>\n\n<form class=\"form-group\" action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\">\n  <span class=\"payment-message\">{{message}}</span>\n\n  <div class=\"form-row\">\n    <label>\n      <span>Card Number</span>\n      <input [(ngModel)]=\"cardNumber\"class=\"form-control\" name=\"card-number\" type=\"text\" size=\"20\" data-stripe=\"number\">\n    </label>\n  </div>\n\n  <div class=\"form-row\">\n    <label>\n      <span>Expiration (MM/YY)</span>\n      <input [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" type=\"text\" size=\"2\" data-stripe=\"exp_month\">\n    </label>\n    <span> / </span>\n    <input [(ngModel)]=\"expiryYear\" name=\"expiry-year\" type=\"text\" size=\"2\" data-stripe=\"exp_year\">\n  </div>\n\n  <div class=\"form-row\">\n    <label>\n      <span>CVC</span>\n      <input [(ngModel)]=\"cvc\"class=\"form-control\" name=\"cvc\" type=\"text\" size=\"4\" data-stripe=\"cvc\">\n    </label>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-info\" value=\"Validate Card\">\n  <button class=\"btn btn-success\"(click)=\"openCheckout()\">Checkout</button>\n</form>\n\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <a class=\"text-muted\" routerLink=\"/\">Company Name</a>\n    <span class=\"attribution\">\n      &copy; {{ today | date: 'yyyy' }}.\n      Footer Content goes here...\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN eCommerce App</h1>\n  <p class=\"lead\">Welcome to our site built using the MEAN stack</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Simple Checkout</h3>\n    <p>View the products, add them to the cart and checkout providing credit card information to Stripe. Most companies dont want to be responsible for their users private information so they pass it to external companies that are prefessionals with securely storing this information.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Access Control</h3>\n    <p>An admin login and manage view has been added to allow an administrator to manage the website from a seperate account type.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Integrated API's</h3>\n    <p>Stripe API and Twilio API have been integrated to add more functionality and security to your site. Stripe is used for secure purchases. Twilio API is to provide the site with SMS functionality if it needed such as Two-step verification.</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organise models and query the MongoDB(NoSQL) database.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI is used to generate components, services and much more! Local development server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data with Hashed passwords too.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Products</h2>\n  <div class=\"col-md-6\" *ngFor=\"let product of products\">\n    <div class=\"well\">\n      <div class=\"thumbnail\">\n        {{product.imageUrl}}\n        </div>\n      <div>\n        <h4>{{product.name}}</h4>\n      </div>\n      <div>\n        <p><strong>Price:</strong></p> €{{product.price}}\n      </div>\n      <br>\n      <div>\n        <p><strong>Description:</strong></p>{{product.description}}\n      </div>\n      <br>\n      <div>\n        <p><strong>Category:</strong></p> {{product.department}}\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-success\">\n          Add <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n        </button>\n      </div>\n    </div>                              \n  <br><br>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Please sign in</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<br>\n<a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\n<p style=\"color:red\">Developer note: Admin login is at /admin</p>\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Store management</h2>\n  <div>\n  <h3>Admin Profile</h3>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{user.name}}</li>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n  </div>\n  <br>\n  <div>\n  <h3>Inventory List</h3>\n  <ul class=\"\">\n    <table class=\"table table-hover table-striped table-responsive table-condensed\">\n                <thead>\n                    <tr>\n                        <th class=\"col-xs-2\">Product ID</th>\n                        <th class=\"col-xs-2\">Name</th>\n                        <th class=\"col-xs-1\">Price</th>\n                        <th class=\"col-xs-2\">Description</th>\n                        <th class=\"col-xs-2\">quantity</th>\n                        <th class=\"col-xs-2\">imageUrl</th>\n                        <th class=\"col-xs-1\">Department</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let product of products\">\n                        <td>{{product._id}}</td>\n                        <td>{{product.name}}</td>\n                        <td>{{product.price}}</td>\n                        <td>{{product.description}}</td>\n                        <td>{{product.quantity}}</td>\n                        <td>{{product.imageUrl}}</td>\n                        <td>{{product.department}}</td>\n                        <td><input type=\"button\" value=\"delete\" class=\"btn btn-danger\" (click)=\"deleteProduct(product._id)\"><td>\n                    </tr>\n                </tbody>\n            </table>\n  </ul>\n  </div>\n  <div class=\"col-sm-12\">\n  <h3>Inventory Management</h3>\n  <!--Add Product-->\n      <div class=\"col-md-5\">\n        <h4><strong>Add Inventory</strong></h4>\n        <form (submit)=\"onAddProduct()\">\n        <div class=\"form-group\">\n          <label>Product Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n        <div>\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\">\n        </div>\n        <div>\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\">\n        </div>\n        <div>\n          <label>Quantity</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"quantity\" name=\"quantity\">\n        </div>\n        <div>\n          <label>Department</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"department\" name=\"department\">\n        </div>\n        <div>\n          <label>Image</label>\n        <image-upload \n        ></image-upload>\n        </div>\n        <br>\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Add\">\n    </form>\n    </div>\n    <div class=\"col-md-5\">\n      <h4><strong>Update Product</strong></h4>\n      <label>Select Product...</label>\n      <select class=\"form-control\"[(ngModel)]=\"name\">\n        <option value=\"\" selected disabled>Please select...</option>\n        <option placeholder=\"Select Product...\" *ngFor=\"let product of products\" [ngValue]=\"product.name\" [ngValue]=\"product.price\" (click)=\"getProducts(products)\">{{product.name}}</option>\n      </select>\n      <br>\n      <input type=\"submit\" class=\"btn btn-info\" value=\"update\" (click)=\"updateProductList()\">\n    </div>\n    <!--Spacer for the footer do not remove-->\n  <div class=\"col-md-12\">\n  <div class=\"spacer\"></div>\n  <div class=\"note\">Note: Add, update and delete customers and admin also coming soon...</div>\n  </div>\n\n\n\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\n</sebm-google-map>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN eCommerce App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/']\">Home</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/inventory']\">Products</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/cart']\">Cart</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/about']\">About</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/contactus']\">Contact us</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/manage']\">Manage</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Phone: {{user.phone}}</li>\n    <li class=\"list-group-item\">Role: {{user.role}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Registration</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <p-messages [value]=\"msgs\"></p-messages>\n  <p-growl [value]=\"growlmsgs\"></p-growl>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n</form>\n<a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(425);


/***/ })

},[861]);
//# sourceMappingURL=main.bundle.map