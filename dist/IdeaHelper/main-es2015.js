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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
class AppComponent {
    constructor() {
        this.title = 'IdeaHelper';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand"], ["src", "assets/images/favicon/favicon-16x16.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLinkActive", "'active'", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-item"], ["href", "#", "routerLink", "/help", "routerLinkActive", "'active'", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " IdeaHelper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/wizard/wizard.component.ts");
/* harmony import */ var _wizard_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizard/challenge/challenge.component */ "./src/app/wizard/challenge/challenge.component.ts");
/* harmony import */ var _wizard_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wizard/prompt/prompt.component */ "./src/app/wizard/prompt/prompt.component.ts");
/* harmony import */ var _wizard_finish_finish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wizard/finish/finish.component */ "./src/app/wizard/finish/finish.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
                { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__["FrontpageComponent"] },
                // {path: 'wizard', component: WizardComponent},
                { path: 'wizard', loadChildren: () => __webpack_require__.e(/*! import() | wizard-wizard-module */ "wizard-wizard-module").then(__webpack_require__.bind(null, /*! ./wizard/wizard.module */ "./src/app/wizard/wizard.module.ts")).then(m => m.WizardModule) },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"],
        _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__["FrontpageComponent"],
        _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"],
        _wizard_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeComponent"],
        _wizard_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__["PromptComponent"],
        _wizard_finish_finish_component__WEBPACK_IMPORTED_MODULE_10__["FinishComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"],
                    _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__["FrontpageComponent"],
                    _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"],
                    _wizard_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeComponent"],
                    _wizard_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__["PromptComponent"],
                    _wizard_finish_finish_component__WEBPACK_IMPORTED_MODULE_10__["FinishComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                        { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
                        { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_6__["FrontpageComponent"] },
                        // {path: 'wizard', component: WizardComponent},
                        { path: 'wizard', loadChildren: () => __webpack_require__.e(/*! import() | wizard-wizard-module */ "wizard-wizard-module").then(__webpack_require__.bind(null, /*! ./wizard/wizard.module */ "./src/app/wizard/wizard.module.ts")).then(m => m.WizardModule) },
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/frontpage/frontpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.ts ***!
  \**************************************************/
/*! exports provided: FrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontpageComponent", function() { return FrontpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/help"]; };
class FrontpageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrontpageComponent.ɵfac = function FrontpageComponent_Factory(t) { return new (t || FrontpageComponent)(); };
FrontpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontpageComponent, selectors: [["app-frontpage"]], decls: 19, vars: 2, consts: [[1, "row"], [1, "col-md-12"], [1, "col-md-12", "text-center"], ["href", "#", "role", "button", "routerLink", "/wizard", 1, "btn", "btn-primary"], [3, "routerLink"]], template: function FrontpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IdeaHelper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The IdeaHelper is a simple tool, that helps you to come up with ideas. It works like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First you describe your challenge in a concrete way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Then you are prompted several times with different words and images, and asked to think about how these helps you come up with solutions to your challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Finally, you get the full list of all the ideas you came up with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I need a more detailed explanation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250cGFnZS9mcm9udHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frontpage',
                templateUrl: './frontpage.component.html',
                styleUrls: ['./frontpage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 29, vars: 0, consts: [[1, "row"], [1, "col-md-12"], ["href", "#", "role", "button", "routeLink", "/wizard", 1, "btn", "btn-primary"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IdeaHelper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The IdeaHelper is a tool, that helps you brainstorm ideas. It works like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1. Describe your challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First you describe your challenge or problem as concretely as possible:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If you are writing a book, and gets stuck on the plot, it might be \"How can the villain get rid of the murder weapon?\". If you are arranging a birthday party for your kid, it could be \"What fun game can I do with 10 kids in the living room?\". If you are inventing a board game it might be \"How can I avoid the players getting bored while waiting for their turn?\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Do not be too abstract or vague: \"What should I write a book about?\" is not concrete enough.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2. Create ideas from image or word prompts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Then you are prompted several times with different words and images, and asked to think about how these helps you come up with solutions to your challenge. Type in any ideas that you come up with, no matter how silly or impractical they might be.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For example, your challenge might be \"How can the villain get rid of the murder weapon?\" and the prompt might be a photo of camels riding through a dessert. The camel makes you think of animals - maybe an animal eats the murder weapon. You write \"An animal eats it\". This makes you think of having a dog in the plot. Maybe the victim is a dog-owner, and the dog eats the string that the murderer used for strangulating the victim. Later the dog dies. This gives you even more ideas, and you write them all down. It does not matter that you are now far removed from the original prompt - the only thing that matters is that you keep on getting ideas. When you have finished this line of thought and written everything down, you look at the photo again. The desert makes you think of a remote place. Maybe the murderer drops the weapon in a remote place like an empty construction site in the far part of town. You write it down. The sand makes you think of the beach. Maybe the murderer goes to the beach and dumps the murder weapon in the ocean. You write it down, and keep writing down your ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "When you feel you have mined this prompt for all ideas you click next, and get a new image or word, and you keep going like this.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3. Save the result. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Finally, you get the full list of all the ideas you came up with. The IdeaHelper has helped you come up with some ideas. Save or copy the result into a document. Now it is up to you to sort through the ideas and think through what will really work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Start >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/prompt.service.ts":
/*!***********************************!*\
  !*** ./src/app/prompt.service.ts ***!
  \***********************************/
/*! exports provided: PromptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptService", function() { return PromptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PromptService {
    constructor() {
        this.words = [
            'animal',
            'answer',
            'apparatus',
            'approval',
            'argument',
            'art',
            'attack',
            'attempt',
            'attention',
            'attraction',
            'authority',
            'back',
            'balance',
            'base',
            'behavior',
            'belief',
            'birth',
            'bit',
            'bite',
            'blood',
            'blow',
            'body',
            'brass',
            'bread',
            'breath',
            'brother',
            'building',
            'burn',
            'burst',
            'business',
            'butter',
            'canvas',
            'care',
            'cause',
            'chalk',
            'chance',
            'change',
            'cloth',
            'coal',
            'color',
            'comfort',
            'committee',
            'company',
            'comparison',
            'competition',
            'condition',
            'connection',
            'control',
            'cook',
            'copper',
            'copy',
            'cork',
            'copy',
            'cough',
            'country',
            'cover',
            'crack',
            'credit',
            'crime',
            'crush',
            'cry',
            'current',
            'curve',
            'damage',
            'danger',
            'daughter',
            'day',
            'death',
            'debt',
            'decision',
            'degree',
            'design',
            'desire',
            'destruction',
            'detail',
            'development',
            'digestion',
            'direction',
            'discussion',
            'disease',
            'disgust',
            'distance',
            'distribution',
            'division',
            'doubt',
            'drink',
            'driving',
            'dust',
            'earth',
            'edge',
            'education',
            'effect',
            'end',
            'error',
            'event',
            'example',
            'exchange',
            'existence',
            'expansion',
            'experience',
            'expert',
            'fact',
            'fall',
            'family',
            'fear',
            'feeling',
            'fiction',
            'field',
            'fight',
            'fire',
            'flame',
            'flight',
            'flower',
            'fold',
            'food',
            'force',
            'form',
            'friend',
            'front',
            'fruit',
            'glass',
            'gold',
            'government',
            'grain',
            'grass',
            'grip',
            'group',
            'growth',
            'guide',
            'harbor',
            'harmony',
            'hate',
            'hearing',
            'heat',
            'help',
            'history',
            'hole',
            'hope',
            'hour',
            'humor',
            'ice',
            'idea',
            'impulse',
            'increase',
            'industry',
            'ink',
            'insect',
            'instrument',
            'insurance',
            'interest',
            'invention',
            'iron',
            'jelly',
            'join',
            'journey',
            'judge',
            'jump',
            'kick',
            'kiss',
            'knowledge',
            'land',
            'language',
            'laugh',
            'low',
            'lead',
            'learning',
            'leather',
            'letter',
            'level',
            'lift',
            'light',
            'limit',
            'linen',
            'liquid',
            'list',
            'look',
            'loss',
            'love',
            'machine',
            'man',
            'manager',
            'mark',
            'market',
            'mass',
            'meal',
            'measure',
            'meat',
            'meeting',
            'memory',
            'metal',
            'middle',
            'milk',
            'mind',
            'mine',
            'minute',
            'mist',
            'money',
            'month',
            'morning',
            'mother',
            'motion',
            'mountain',
            'move',
            'music',
            'name',
            'nation',
            'need',
            'news',
            'night',
            'noise',
            'note',
            'number',
            'observation',
            'offer',
            'oil',
            'operation',
            'opinion',
            'order',
            'organization',
            'owner',
            'page',
            'pain',
            'paint',
            'paper',
            'part',
            'paste',
            'payment',
            'peace',
            'person',
            'place',
            'plant',
            'play',
            'pleasure',
            'point',
            'poison',
            'polish',
            'porter',
            'position',
            'powder',
            'power',
            'price',
            'print',
            'process',
            'produce',
            'profit',
            'property',
            'prose',
            'protest',
            'pull',
            'punishment',
            'purpose',
            'push',
            'quality',
            'question',
            'rain',
            'range',
            'rate',
            'ray',
            'reaction',
            'reading',
            'reason',
            'record',
            'regret',
            'relation',
            'religion',
            'representative',
            'request',
            'respect',
            'rest',
            'reward',
            'rhythm',
            'rice',
            'river',
            'road',
            'roll',
            'room',
            'rub',
            'rule',
            'run',
            'salt',
            'sand',
            'scale',
            'science',
            'sea',
            'seat',
            'secretary',
            'selection',
            'self',
            'sense',
            'servant',
            'sex',
            'shade',
            'shake',
            'shame',
            'shock',
            'side',
            'sign',
            'silk',
            'silver',
            'sister',
            'size',
            'sky',
            'sleep',
            'slip',
            'slope',
            'smash',
            'smell',
            'smile',
            'smoke',
            'sneeze',
            'snow',
            'soap',
            'society',
            'son',
            'song',
            'sort',
            'sound',
            'soup',
            'space',
            'stage',
            'start',
            'statement',
            'steam',
            'steel',
            'step',
            'stitch',
            'stone',
            'stop',
            'story',
            'stretch',
            'structure',
            'substance',
            'sugar',
            'suggestion',
            'summer',
            'support',
            'surprise',
            'swim',
            'system',
            'talk',
            'taste',
            'tax',
            'teaching',
            'tendency',
            'test',
            'theory',
            'thing',
            'thought',
            'thunder',
            'time',
            'tin',
            'top',
            'touch',
            'trade',
            'transport',
            'trick',
            'trouble',
            'turn',
            'twist',
            'unit',
            'use',
            'value',
            'verse',
            'vessel',
            'view',
            'voice',
            'walk',
            'war',
            'wash',
            'waste',
            'water',
            'wave',
            'wax',
            'way',
            'weather',
            'week',
            'weight',
            'wind',
            'wine',
            'winter',
            'woman',
            'wood',
            'wool',
            'word',
            'work',
            'wound',
            'writing',
            'year'
        ];
    }
    getPrompt() {
        return this.words[this.getRandom(this.words.length)];
    }
    getRandom(n) {
        return Math.floor(Math.random() * Math.floor(n));
    }
}
PromptService.ɵfac = function PromptService_Factory(t) { return new (t || PromptService)(); };
PromptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PromptService, factory: PromptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wizard-data.service.ts":
/*!****************************************!*\
  !*** ./src/app/wizard-data.service.ts ***!
  \****************************************/
/*! exports provided: WizardDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardDataService", function() { return WizardDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WizardDataService {
    constructor() {
        this.ideas = [];
    }
}
WizardDataService.ɵfac = function WizardDataService_Factory(t) { return new (t || WizardDataService)(); };
WizardDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WizardDataService, factory: WizardDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wizard/challenge/challenge.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/wizard/challenge/challenge.component.ts ***!
  \*********************************************************/
/*! exports provided: ChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeComponent", function() { return ChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _wizard_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wizard-data.service */ "./src/app/wizard-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ChallengeComponent {
    constructor(wizardDataService, router) {
        this.wizardDataService = wizardDataService;
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        this.wizardDataService.challenge = this.challenge;
        this.router.navigate(['/wizard/prompt/1']);
    }
}
ChallengeComponent.ɵfac = function ChallengeComponent_Factory(t) { return new (t || ChallengeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wizard_data_service__WEBPACK_IMPORTED_MODULE_1__["WizardDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChallengeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeComponent, selectors: [["app-challenge"]], decls: 10, vars: 1, consts: [[1, "form-group"], ["for", "challenge"], ["id", "challenge", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["asp-validation-for", "Text", 1, "text-danger"], [1, "explanation"], [1, "btn", "btn-primary", 3, "click"]], template: function ChallengeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Describe your challenge or problem in the form of a question:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChallengeComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.challenge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E.g. \"what kind of garden game can I invent with one football and two golf clubs?\" or \"how can I kill off the main character's friend, without him knowing?\", or \"how can I make use of dice in my board game?\". Be as concrete as possible! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeComponent_Template_a_click_8_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Continue >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.challenge);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpemFyZC9jaGFsbGVuZ2UvY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge',
                templateUrl: './challenge.component.html',
                styleUrls: ['./challenge.component.css']
            }]
    }], function () { return [{ type: _wizard_data_service__WEBPACK_IMPORTED_MODULE_1__["WizardDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/wizard/finish/finish.component.ts":
/*!***************************************************!*\
  !*** ./src/app/wizard/finish/finish.component.ts ***!
  \***************************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _wizard_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wizard-data.service */ "./src/app/wizard-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FinishComponent {
    constructor(wizardDataService, router) {
        this.wizardDataService = wizardDataService;
        this.router = router;
    }
    ngOnInit() {
        this.result = this.wizardDataService.ideas.reduce((prev, current) => prev + '\n\r' + current);
    }
}
FinishComponent.ɵfac = function FinishComponent_Factory(t) { return new (t || FinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wizard_data_service__WEBPACK_IMPORTED_MODULE_1__["WizardDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FinishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishComponent, selectors: [["app-finish"]], decls: 11, vars: 1, consts: [[1, "panel", "panel-default"], [1, "panel-body"], [1, "result"]], template: function FinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Here are your ideas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Make sure to copy the ideas to a document. They won't be saved automatically.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpemFyZC9maW5pc2gvZmluaXNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-finish',
                templateUrl: './finish.component.html',
                styleUrls: ['./finish.component.css']
            }]
    }], function () { return [{ type: _wizard_data_service__WEBPACK_IMPORTED_MODULE_1__["WizardDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/wizard/prompt/prompt.component.ts":
/*!***************************************************!*\
  !*** ./src/app/wizard/prompt/prompt.component.ts ***!
  \***************************************************/
/*! exports provided: PromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptComponent", function() { return PromptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _prompt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../prompt.service */ "./src/app/prompt.service.ts");
/* harmony import */ var _wizard_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wizard-data.service */ "./src/app/wizard-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class PromptComponent {
    constructor(promptService, wizardDataService, router, route) {
        this.promptService = promptService;
        this.wizardDataService = wizardDataService;
        this.router = router;
        this.route = route;
        this.maxSteps = 4;
    }
    ngOnInit() {
        this.challenge = this.wizardDataService.challenge;
        if (this.challenge === null) {
            this.router.navigate(['/']);
        }
        this.route.params.subscribe(params => { this.doStep(params['step']); });
    }
    doStep(step) {
        this.ideas = '';
        this.step = step;
        this.word = this.promptService.getPrompt();
    }
    submit() {
        this.save();
        this.step++;
        if (+this.step > this.maxSteps) {
            this.finish();
        }
        else {
            this.word = this.promptService.getPrompt();
            this.router.navigate(['/wizard/prompt/' + (this.step)]);
        }
    }
    finish() {
        this.save();
        this.router.navigate(['/wizard/finish']);
    }
    save() {
        this.wizardDataService.ideas.push(this.ideas);
    }
}
PromptComponent.ɵfac = function PromptComponent_Factory(t) { return new (t || PromptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_prompt_service__WEBPACK_IMPORTED_MODULE_1__["PromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wizard_data_service__WEBPACK_IMPORTED_MODULE_2__["WizardDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PromptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromptComponent, selectors: [["app-prompt"]], decls: 22, vars: 4, consts: [[1, "row", 2, "margin", "10px 0px"], [1, "col-md-4"], [1, "challenge", "card", "style2"], [1, "col-md-8"], [1, "word-prompt", "card", "style1"], [1, "row"], [1, "md-col-12"], [1, "form-group"], ["rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-default", 3, "click"]], template: function PromptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Think about this word, and your challenge. Write down your ideas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PromptComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.ideas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponent_Template_a_click_18_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Continue >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponent_Template_a_click_20_listener($event) { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Finish now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challenge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.word);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ideas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nStep ", ctx.step, " of 4 ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".word-prompt[_ngcontent-%COMP%] {\r\n    font-size: 6em;\r\n    font-family: Arial;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    padding: 20px;\r\n    \r\n}\r\n\r\n\r\n\r\n.style1[_ngcontent-%COMP%] { background-color: lightblue; color: white; }\r\n\r\n.style2[_ngcontent-%COMP%] { background-color: darkolivegreen; color: white; }\r\n\r\n.style3[_ngcontent-%COMP%] { background-color: lightgoldenrodyellow; color: black; }\r\n\r\n.style4[_ngcontent-%COMP%] { background-color: gainsboro; color: black; }\r\n\r\n.image-prompt[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto; \r\n    margin-right: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n.challenge[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n    \r\n    padding: 10px;\r\n    height: 100%\r\n}\r\n\r\n.explanation[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n}\r\n\r\n.wizard-header[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    white-space: pre;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2l6YXJkL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQSwrQkFBK0I7O0FBRS9CLFVBQVUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFOztBQUNyRCxVQUFVLGdDQUFnQyxFQUFFLFlBQVksRUFBRTs7QUFDMUQsVUFBVSxzQ0FBc0MsRUFBRSxZQUFZLEVBQUU7O0FBQ2hFLFVBQVUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFOztBQUVyRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2l6YXJkL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud29yZC1wcm9tcHQge1xyXG4gICAgZm9udC1zaXplOiA2ZW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxufVxyXG5cclxuLyogLnJvdyAuY2FyZCB7IG1hcmdpbjogNnB4O30gKi9cclxuXHJcbi5zdHlsZTEgeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7IGNvbG9yOiB3aGl0ZTsgfVxyXG4uc3R5bGUyIHsgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47IGNvbG9yOiB3aGl0ZTsgfVxyXG4uc3R5bGUzIHsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7IGNvbG9yOiBibGFjazsgfVxyXG4uc3R5bGU0IHsgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvOyBjb2xvcjogYmxhY2s7IH1cclxuXHJcbi5pbWFnZS1wcm9tcHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNoYWxsZW5nZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uZXhwbGFuYXRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ud2l6YXJkLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4ucmVzdWx0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prompt',
                templateUrl: './prompt.component.html',
                styleUrls: ['./prompt.component.css']
            }]
    }], function () { return [{ type: _prompt_service__WEBPACK_IMPORTED_MODULE_1__["PromptService"] }, { type: _wizard_data_service__WEBPACK_IMPORTED_MODULE_2__["WizardDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/wizard/wizard.component.ts":
/*!********************************************!*\
  !*** ./src/app/wizard/wizard.component.ts ***!
  \********************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WizardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
WizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["app-wizard"]], decls: 1, vars: 0, template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpemFyZC93aXphcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wizard',
                templateUrl: './wizard.component.html',
                styleUrls: ['./wizard.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\IdeaHelper2\IdeaHelper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map