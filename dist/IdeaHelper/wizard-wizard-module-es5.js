function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wizard-wizard-module"], {
  /***/
  "./src/app/wizard/wizard-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/wizard/wizard-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: WizardRoutingModule */

  /***/
  function srcAppWizardWizardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardRoutingModule", function () {
      return WizardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./prompt/prompt.component */
    "./src/app/wizard/prompt/prompt.component.ts");
    /* harmony import */


    var _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./challenge/challenge.component */
    "./src/app/wizard/challenge/challenge.component.ts");
    /* harmony import */


    var _wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./wizard.component */
    "./src/app/wizard/wizard.component.ts");
    /* harmony import */


    var _finish_finish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finish/finish.component */
    "./src/app/wizard/finish/finish.component.ts");

    var routes = [{
      path: '',
      component: _wizard_component__WEBPACK_IMPORTED_MODULE_4__["WizardComponent"],
      children: [{
        path: '',
        component: _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeComponent"]
      }, {
        path: 'prompt/:step',
        component: _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_2__["PromptComponent"]
      }, {
        path: 'finish',
        component: _finish_finish_component__WEBPACK_IMPORTED_MODULE_5__["FinishComponent"]
      }]
    }];

    var WizardRoutingModule = function WizardRoutingModule() {
      _classCallCheck(this, WizardRoutingModule);
    };

    WizardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WizardRoutingModule
    });
    WizardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WizardRoutingModule_Factory(t) {
        return new (t || WizardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WizardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/wizard/wizard.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/wizard/wizard.module.ts ***!
    \*****************************************/

  /*! exports provided: WizardModule */

  /***/
  function srcAppWizardWizardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardModule", function () {
      return WizardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./wizard-routing.module */
    "./src/app/wizard/wizard-routing.module.ts");

    var WizardModule = function WizardModule() {
      _classCallCheck(this, WizardModule);
    };

    WizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WizardModule
    });
    WizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WizardModule_Factory(t) {
        return new (t || WizardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["WizardRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WizardModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["WizardRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["WizardRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=wizard-wizard-module-es5.js.map