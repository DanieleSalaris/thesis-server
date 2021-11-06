(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+0e3":
    /*!***********************************************!*\
      !*** ./src/app/global/module/declarations.ts ***!
      \***********************************************/

    /*! exports provided: declarations */

    /***/
    function e3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "declarations", function () {
        return declarations;
      });
      /* harmony import */


      var _src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/home/home.component */
      "9vUh");
      /* harmony import */


      var _src_app_survey_question_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/survey/question/question.component */
      "JyhI");
      /* harmony import */


      var _src_app_survey_question_question_choice_question_choice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/question/question-choice/question-choice.component */
      "lXmC");
      /* harmony import */


      var _src_app_survey_question_question_array_question_array_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/survey/question/question-array/question-array.component */
      "eFSC");
      /* harmony import */


      var _src_app_survey_question_question_input_question_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/survey/question/question-input/question-input.component */
      "O2ky");
      /* harmony import */


      var _src_app_survey_question_confirm_buttons_confirm_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/survey/question/confirm-buttons/confirm-buttons.component */
      "YaMb");
      /* harmony import */


      var _src_app_survey_question_question_dummy_question_dummy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/survey/question/question-dummy/question-dummy.component */
      "DIjQ");
      /* harmony import */


      var _src_app_survey_instances_instances_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/survey/instances/instances.component */
      "Z0C/");
      /* harmony import */


      var _src_app_survey_instances_instances_dummy_instances_dummy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/survey/instances/instances-dummy/instances-dummy.component */
      "k4C4");
      /* harmony import */


      var _src_app_survey_instances_instance_instance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/survey/instances/instance/instance.component */
      "IYv1");
      /* harmony import */


      var _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _src_app_survey_question_container_question_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/survey/question-container/question-container.component */
      "6v9I");
      /* harmony import */


      var _src_app_survey_question_question_choice_slider_question_choice_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @src/app/survey/question/question-choice-slider/question-choice-slider.component */
      "W2BJ");
      /* harmony import */


      var _src_app_survey_instances_today_instance_today_instance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/survey/instances/today-instance/today-instance.component */
      "upKY");

      var declarations = [_src_app_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _src_app_survey_instances_instances_component__WEBPACK_IMPORTED_MODULE_8__["InstancesComponent"], _src_app_survey_instances_instances_dummy_instances_dummy_component__WEBPACK_IMPORTED_MODULE_9__["InstancesDummyComponent"], _src_app_survey_instances_instance_instance_component__WEBPACK_IMPORTED_MODULE_10__["InstanceComponent"], _src_app_survey_instances_today_instance_today_instance_component__WEBPACK_IMPORTED_MODULE_14__["TodayInstanceComponent"], _src_app_survey_question_container_question_container_component__WEBPACK_IMPORTED_MODULE_12__["QuestionContainerComponent"], _src_app_survey_question_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"], _src_app_survey_question_question_dummy_question_dummy_component__WEBPACK_IMPORTED_MODULE_7__["QuestionDummyComponent"], _src_app_survey_question_question_choice_question_choice_component__WEBPACK_IMPORTED_MODULE_3__["QuestionChoiceComponent"], _src_app_survey_question_question_choice_slider_question_choice_slider_component__WEBPACK_IMPORTED_MODULE_13__["QuestionChoiceSliderComponent"], _src_app_survey_question_question_array_question_array_component__WEBPACK_IMPORTED_MODULE_4__["QuestionArrayComponent"], _src_app_survey_question_question_input_question_input_component__WEBPACK_IMPORTED_MODULE_5__["QuestionInputComponent"], _src_app_survey_question_confirm_buttons_confirm_buttons_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmButtonsComponent"]];
      /***/
    },

    /***/
    "+ID0":
    /*!*******************************************************************************!*\
      !*** ./src/app/survey/question/confirm-buttons/confirm-buttons.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function ID0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".root {\n  display: flex;\n  justify-content: space-around;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tYnV0dG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJjb25maXJtLWJ1dHRvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/daniele/Scrivania/development/tesi/thesis-client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0tIl":
    /*!********************************************************************************!*\
      !*** ./src/app/survey/instances/instances-dummy/instances-dummy.component.css ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function tIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-column-gap: 30px;\n  padding: 50px 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlcy1kdW1teS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Imluc3RhbmNlcy1kdW1teS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMzBweDtcbiAgcGFkZGluZzogNTBweCA4MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "1RbT":
    /*!*********************************************************************************************!*\
      !*** ./src/app/survey/question/question-choice-slider/question-choice-slider.component.css ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function RbT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-slider {\n  width: 100%;\n  margin-top: 50px;\n}\n\n.value-label {\n  margin-top: 10px;\n  margin-bottom: 30px;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWNob2ljZS1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakIiLCJmaWxlIjoicXVlc3Rpb24tY2hvaWNlLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udmFsdWUtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "1lo6":
    /*!*****************************************************!*\
      !*** ./src/app/survey/question/question.service.ts ***!
      \*****************************************************/

    /*! exports provided: QuestionService */

    /***/
    function lo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
        return QuestionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionService = function QuestionService() {
        _classCallCheck(this, QuestionService);
      };

      QuestionService.ctorParameters = function () {
        return [];
      };

      QuestionService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], QuestionService);
      /***/
    },

    /***/
    "2lBq":
    /*!********************************************************!*\
      !*** ./src/app/survey/question/question.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function lBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".root {\n  background-color: #f8f8f8;\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.question-container {\n  min-width: 300px;\n  padding: 30px 40px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "6v9I":
    /*!***************************************************************************!*\
      !*** ./src/app/survey/question-container/question-container.component.ts ***!
      \***************************************************************************/

    /*! exports provided: QuestionContainerComponent */

    /***/
    function v9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionContainerComponent", function () {
        return QuestionContainerComponent;
      });
      /* harmony import */


      var _raw_loader_question_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-container.component.html */
      "R1Zk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/survey/survey.service */
      "FznE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionContainerComponent = /*#__PURE__*/function () {
        function QuestionContainerComponent(surveyService, router, route) {
          _classCallCheck(this, QuestionContainerComponent);

          this.surveyService = surveyService;
          this.router = router;
          this.route = route;
        }

        _createClass(QuestionContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.route.paramMap.pipe( // instance id
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
              return params.get('instanceId');
            }), // survey
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (instanceId) {
              return _this.surveyService.getSurvey(instanceId);
            }), // first question id
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (survey) {
              var _a, _b;

              return (_b = (_a = survey === null || survey === void 0 ? void 0 : survey[0]) === null || _a === void 0 ? void 0 : _a._id) !== null && _b !== void 0 ? _b : null;
            }), // navigate to first id
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (firstQuestionId) {
              if (!firstQuestionId) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
              }

              return _this.router.navigate(['question', firstQuestionId], {
                relativeTo: _this.route
              });
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return QuestionContainerComponent;
      }();

      QuestionContainerComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      QuestionContainerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-container',
        template: _raw_loader_question_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], QuestionContainerComponent);
      /***/
    },

    /***/
    "9Isj":
    /*!*******************************************************************************!*\
      !*** ./src/app/survey/question/question-choice/question-choice.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Isj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul {\n  list-style-type: none;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nli {\n  margin-top: 15px;\n  display: flex;\n}\n\n.checkbox-label {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWNob2ljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicXVlc3Rpb24tY2hvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmxpIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component.css */
      "RV7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authService, router) {
          _classCallCheck(this, HomeComponent);

          this.authService = authService;
          this.router = router;
          this.title = 'thesis-client';
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login1",
          value: function login1() {
            this.login('002');
          }
        }, {
          key: "login2",
          value: function login2() {
            this.login('003');
          }
        }, {
          key: "login",
          value: function login(userId) {
            this.authService.login(userId, '12345678').subscribe(function () {}, function (error) {
              return console.error(error);
            }); // this.authService.tryToken();
          }
        }, {
          key: "readToken",
          value: function readToken() {
            var token = this.authService.readToken();
            console.log(token);
          }
        }, {
          key: "get",
          value: function get() {
            this.authService.get();
          }
        }, {
          key: "goToQuestion",
          value: function goToQuestion() {
            this.router.navigate(['instance', 2, 'question', 1])["catch"]();
          }
        }, {
          key: "goToInstances",
          value: function goToInstances() {
            this.router.navigate(['instance'])["catch"]();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HomeComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "D/Jk":
    /*!******************************************!*\
      !*** ./src/app/auth/auth.interceptor.ts ***!
      \******************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function DJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/auth/token-storage.service */
      "dZLz");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(tokenStorageService) {
          _classCallCheck(this, AuthInterceptor);

          this.tokenStorageService = tokenStorageService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            // getting access token
            var accessToken = this.tokenStorageService.readToken(); // adding authorization header

            var requestWithAccessToken = req.clone({
              headers: req.headers.set('Authorization', "Bearer ".concat(accessToken))
            });
            return next.handle(requestWithAccessToken);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      };

      AuthInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])], AuthInterceptor);
      /***/
    },

    /***/
    "DIjQ":
    /*!****************************************************************************!*\
      !*** ./src/app/survey/question/question-dummy/question-dummy.component.ts ***!
      \****************************************************************************/

    /*! exports provided: QuestionDummyComponent */

    /***/
    function DIjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionDummyComponent", function () {
        return QuestionDummyComponent;
      });
      /* harmony import */


      var _raw_loader_question_dummy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-dummy.component.html */
      "qlUT");
      /* harmony import */


      var _question_dummy_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-dummy.component.css */
      "kX/y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_question_question_choice_question_choice_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/question/question-choice/question-choice.model */
      "ttvc");
      /* harmony import */


      var _src_app_survey_question_question_array_question_array_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/survey/question/question-array/question-array.model */
      "msdp");
      /* harmony import */


      var _src_app_survey_question_question_input_question_input_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/survey/question/question-input/question-input.model */
      "ROd5");
      /* harmony import */


      var _src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/survey/question/question.service */
      "1lo6");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionDummyComponent = /*#__PURE__*/function () {
        function QuestionDummyComponent(questionService) {
          _classCallCheck(this, QuestionDummyComponent);

          this.questionService = questionService;
          this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.prevQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.questionData = {};
          this.isTypeChoice = false;
          this.isTypeArray = false;
          this.isTypeInput = false;
        }

        _createClass(QuestionDummyComponent, [{
          key: "hasNextQuestion",
          get: function get() {
            return this.questionService.hasNextQuestion;
          },
          set: function set(value) {
            this.questionService.hasNextQuestion = value;
          }
        }, {
          key: "hasPrevQuestion",
          get: function get() {
            return this.questionService.hasPrevQuestion;
          },
          set: function set(value) {
            this.questionService.hasPrevQuestion = value;
          }
        }, {
          key: "answer",
          get: function get() {
            return this._answer;
          },
          set: function set(value) {
            this._answer = value;
            this.changeStartValue();
          }
        }, {
          key: "question",
          set: function set(value) {
            if (!value) {
              return;
            } // extract data from question


            this.questionType = value.type;
            this.questionLabel = value.data.label;
            this.isTypeChoice = this.questionType === 'choice';
            this.isTypeArray = this.questionType === 'array';
            this.isTypeInput = this.questionType === 'input';
            this.questionData = this.isTypeChoice ? new _src_app_survey_question_question_choice_question_choice_model__WEBPACK_IMPORTED_MODULE_3__["QuestionChoiceModel"](value.data) : this.isTypeArray ? new _src_app_survey_question_question_array_question_array_model__WEBPACK_IMPORTED_MODULE_4__["QuestionArrayModel"](value.data) : this.isTypeInput ? new _src_app_survey_question_question_input_question_input_model__WEBPACK_IMPORTED_MODULE_5__["QuestionInputModel"](value.data) : {};
            this.changeStartValue();
          }
        }, {
          key: "onNextQuestion",
          value: function onNextQuestion(event) {
            this.nextQuestion.emit(event);
          }
        }, {
          key: "onPrevQuestion",
          value: function onPrevQuestion() {
            this.prevQuestion.emit();
          }
        }, {
          key: "changeStartValue",
          value: function changeStartValue() {
            if (!this.answer || this.answer.questionType !== this.questionType) {
              this.startValue = null;
              return;
            }

            this.startValue = this.answer.data;
          }
        }]);

        return QuestionDummyComponent;
      }();

      QuestionDummyComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]
        }];
      };

      QuestionDummyComponent.propDecorators = {
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        prevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hasNextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hasPrevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        answer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        question: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      QuestionDummyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-question-dummy',
        template: _raw_loader_question_dummy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_dummy_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]])], QuestionDummyComponent);
      /***/
    },

    /***/
    "Fn9p":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question-array/question-array.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fn9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  Question array\n  <table>\n    <tr>\n      <th></th>\n      <th *ngFor=\"let option of options\">\n        {{option.label}}\n      </th>\n    </tr>\n    <tr *ngFor=\"let subQuestion of checkBoxesControl.controls; let rowIndex=index\">\n      <td>\n        {{getSubQuestion(rowIndex)}}\n      </td>\n      <td *ngFor=\"let control of getControlsFromSubQuestion(subQuestion); let i=index\">\n        <div class=\"checkbox-container\">\n          <mat-checkbox\n            class=\"checkbox\"\n            [checked]=\"control.value\"\n            (change)=\"toggleCheckbox($event.checked, control, subQuestion)\"\n          ></mat-checkbox>\n        </div>\n      </td>\n    </tr>\n  </table>\n  <app-confirm-buttons\n    (next)=\"onNextQuestion()\"\n    (prev)=\"onPrevQuestion()\"\n  ></app-confirm-buttons>\n</div>\n";
      /***/
    },

    /***/
    "FznE":
    /*!******************************************!*\
      !*** ./src/app/survey/survey.service.ts ***!
      \******************************************/

    /*! exports provided: SurveyService */

    /***/
    function FznE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
        return SurveyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _src_app_survey_question_question_choice_question_choice_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/question/question-choice/question-choice.model */
      "ttvc");
      /* harmony import */


      var _src_app_survey_question_question_array_question_array_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/survey/question/question-array/question-array.model */
      "msdp");
      /* harmony import */


      var _src_app_survey_question_question_input_question_input_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/survey/question/question-input/question-input.model */
      "ROd5");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _src_app_survey_instance_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/survey/instance.model */
      "Xv2C");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SurveyService = /*#__PURE__*/function () {
        function SurveyService(http) {
          _classCallCheck(this, SurveyService);

          this.http = http;
          this.prefix = 'api/survey';
          this.instancePrefix = 'api/instance';
          this.instanceId = null;
          this.survey = null;
        }

        _createClass(SurveyService, [{
          key: "getQuestionsFromInstanceId",
          value: function getQuestionsFromInstanceId() {
            var _this2 = this;

            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2';
            return this.http.get("".concat(this.instancePrefix, "/").concat(instanceId, "/question")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (questions) {
              return questions.map(function (q) {
                return _this2.formatQuestion(q);
              });
            }));
          }
        }, {
          key: "answerQuestion",
          value: function answerQuestion(instanceId, questionId, value) {
            return this.http.post("".concat(this.instancePrefix, "/").concat(instanceId, "/question/").concat(questionId, "/answer"), {
              value: value
            });
          }
        }, {
          key: "getAnswer",
          value: function getAnswer(instanceId, questionId) {
            return this.http.get("".concat(this.instancePrefix, "/").concat(instanceId, "/question/").concat(questionId, "/answer/"));
          }
        }, {
          key: "refreshSurvey",
          value: function refreshSurvey(instanceId) {
            var _this3 = this;

            return this.http.get("".concat(this.instancePrefix, "/").concat(instanceId, "/question")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (survey) {
              _this3.instanceId = instanceId;
              _this3.survey = survey;
            }));
          }
        }, {
          key: "getSurvey",
          value: function getSurvey(instanceId) {
            if (instanceId !== this.instanceId || this.survey === null) {
              this.instanceId = null;
              return this.refreshSurvey(instanceId);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.survey);
          }
        }, {
          key: "getQuestion",
          value: function getQuestion(instanceId, questionId) {
            return this.getSurvey(instanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (questions) {
              return questions.find(function (question) {
                return question._id === questionId;
              });
            }));
          }
        }, {
          key: "getNextQuestionId",
          value: function getNextQuestionId(instanceId, questionId) {
            return this.getSurvey(instanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (questions) {
              var _a, _b;

              var index = questions.findIndex(function (question) {
                return question._id === questionId;
              });
              return (_b = (_a = questions[index + 1]) === null || _a === void 0 ? void 0 : _a._id) !== null && _b !== void 0 ? _b : null;
            }));
          }
        }, {
          key: "getPrevQuestionId",
          value: function getPrevQuestionId(instanceId, questionId) {
            return this.getSurvey(instanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (questions) {
              var _a, _b;

              var index = questions.findIndex(function (question) {
                return question._id === questionId;
              });
              return (_b = (_a = questions[index - 1]) === null || _a === void 0 ? void 0 : _a._id) !== null && _b !== void 0 ? _b : null;
            }));
          }
        }, {
          key: "getInstances",
          value: function getInstances() {
            return this.http.get(this.instancePrefix).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (instances) {
              return instances.map(function (i) {
                return new _src_app_survey_instance_model__WEBPACK_IMPORTED_MODULE_7__["InstanceModel"](i);
              });
            }));
          }
        }, {
          key: "getTodayInstance",
          value: function getTodayInstance() {
            return this.http.post("".concat(this.instancePrefix, "/today-instance"), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (instance) {
              return new _src_app_survey_instance_model__WEBPACK_IMPORTED_MODULE_7__["InstanceModel"](instance);
            }));
          }
        }, {
          key: "formatQuestion",
          value: function formatQuestion(question) {
            var questionData = question.type === 'choice' ? new _src_app_survey_question_question_choice_question_choice_model__WEBPACK_IMPORTED_MODULE_3__["QuestionChoiceModel"](question.data) : question.type === 'array' ? new _src_app_survey_question_question_array_question_array_model__WEBPACK_IMPORTED_MODULE_4__["QuestionArrayModel"](question.data) : question.type === 'input' ? new _src_app_survey_question_question_input_question_input_model__WEBPACK_IMPORTED_MODULE_5__["QuestionInputModel"](question.data) : null;
            return {
              _id: question._id,
              type: question.type,
              data: questionData
            };
          }
        }]);

        return SurveyService;
      }();

      SurveyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SurveyService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SurveyService);
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button (click)=\"login1()\">\n  LOGIN 1\n</button>\n<br />\n<button (click)=\"login2()\">\n  LOGIN 2\n</button>\n<br />\n<button (click)=\"readToken()\">\n  READ TOKEN\n</button>\n<br />\n<button (click)=\"goToQuestion()\">\n  GO BACK\n</button>\n<br />\n<button (click)=\"goToInstances()\">\n  INSTANCES\n</button>\n\n\n";
      /***/
    },

    /***/
    "HtII":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question-input/question-input.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HtII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  Question input\n  <form class=\"form\" [formGroup]=\"formGroup\">\n    <mat-form-field>\n      <input matInput [formControl]=\"valueControl\" type=\"text\">\n    </mat-form-field>\n  </form>\n  <app-confirm-buttons\n    (next)=\"onNextQuestion()\"\n    (prev)=\"onPrevQuestion()\"\n  ></app-confirm-buttons>\n</div>\n";
      /***/
    },

    /***/
    "IYv1":
    /*!*****************************************************************!*\
      !*** ./src/app/survey/instances/instance/instance.component.ts ***!
      \*****************************************************************/

    /*! exports provided: InstanceComponent */

    /***/
    function IYv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstanceComponent", function () {
        return InstanceComponent;
      });
      /* harmony import */


      var _raw_loader_instance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./instance.component.html */
      "WaVU");
      /* harmony import */


      var _instance_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instance.component.css */
      "r3NX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_instance_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/instance.model */
      "Xv2C");
      /* harmony import */


      var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns/format */
      "sWYD");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var InstanceComponent = /*#__PURE__*/function () {
        function InstanceComponent() {
          _classCallCheck(this, InstanceComponent);

          this.day = '';
          this.month = '';
          this.year = '';
        }

        _createClass(InstanceComponent, [{
          key: "instance",
          get: function get() {
            return this._instance;
          },
          set: function set(value) {
            this._instance = value;

            if (value) {
              var _Object$split = Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(value.date, 'd MMMM yyyy').split(' '),
                  _Object$split2 = _slicedToArray(_Object$split, 3),
                  day = _Object$split2[0],
                  month = _Object$split2[1],
                  year = _Object$split2[2];

              this.day = day;
              this.month = month;
              this.year = year;
              this.link = ['/instance', value._id];
            }
          }
        }]);

        return InstanceComponent;
      }();

      InstanceComponent.ctorParameters = function () {
        return [];
      };

      InstanceComponent.propDecorators = {
        instance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      InstanceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instance',
        template: _raw_loader_instance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_instance_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], InstanceComponent);
      /***/
    },

    /***/
    "JyhI":
    /*!*******************************************************!*\
      !*** ./src/app/survey/question/question.component.ts ***!
      \*******************************************************/

    /*! exports provided: QuestionComponent */

    /***/
    function JyhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
        return QuestionComponent;
      });
      /* harmony import */


      var _raw_loader_question_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question.component.html */
      "Rtvf");
      /* harmony import */


      var _question_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question.component.css */
      "2lBq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/survey/survey.service */
      "FznE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionComponent = /*#__PURE__*/function () {
        function QuestionComponent(surveyService, router, route) {
          _classCallCheck(this, QuestionComponent);

          this.surveyService = surveyService;
          this.router = router;
          this.route = route;
        }

        _createClass(QuestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.instanceId$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (params) {
              return params.get('instanceId');
            }));
            this.questionId$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (params) {
              return params.get('questionId');
            }));
            var instanceIdAndQuestionId$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.instanceId$, this.questionId$);
            this.question$ = instanceIdAndQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  instanceId = _ref2[0],
                  questionId = _ref2[1];

              return _this4.surveyService.getQuestion(instanceId, questionId);
            }));
            this.answer$ = instanceIdAndQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  instanceId = _ref4[0],
                  questionId = _ref4[1];

              return _this4.surveyService.getAnswer(instanceId, questionId);
            }));
            this.nextQuestionId$ = instanceIdAndQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  instanceId = _ref6[0],
                  questionId = _ref6[1];

              return _this4.surveyService.getNextQuestionId(instanceId, questionId);
            }));
            this.prevQuestionId$ = instanceIdAndQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  instanceId = _ref8[0],
                  questionId = _ref8[1];

              return _this4.surveyService.getPrevQuestionId(instanceId, questionId);
            }));
            this.hasNextQuestion$ = this.nextQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (id) {
              return id !== null;
            }));
            this.hasPrevQuestion$ = this.prevQuestionId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (id) {
              return id !== null;
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home'])["catch"]();
          }
        }, {
          key: "nextQuestion",
          value: function nextQuestion(value) {
            var _this5 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.instanceId$, this.questionId$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  instanceId = _ref10[0],
                  questionId = _ref10[1];

              return _this5.surveyService.answerQuestion(instanceId, questionId, value);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
              return _this5.navigateToQuestion(_this5.nextQuestionId$);
            })).subscribe();
          }
        }, {
          key: "prevQuestion",
          value: function prevQuestion() {
            this.navigateToQuestion(this.prevQuestionId$).subscribe();
          }
        }, {
          key: "navigateToQuestion",
          value: function navigateToQuestion(questionId$) {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.instanceId$, questionId$, this.hasNextQuestion$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 3),
                  instanceId = _ref12[0],
                  questionId = _ref12[1],
                  hasNextQuestion = _ref12[2];

              if (instanceId === null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
              }

              if (!hasNextQuestion) {
                return _this6.router.navigate(['/instance']);
              }

              if (questionId === null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
              }

              return _this6.router.navigate(['/instance', instanceId, 'question', questionId]);
            }));
          }
        }]);

        return QuestionComponent;
      }();

      QuestionComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      QuestionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-question',
        template: _raw_loader_question_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], QuestionComponent);
      /***/
    },

    /***/
    "KKS+":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/instances/instances-dummy/instances-dummy.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <app-instance\n    *ngFor=\"let instance of instances\"\n    [instance]=\"instance\"\n  ></app-instance>\n</div>\n\n";
      /***/
    },

    /***/
    "NLkC":
    /*!********************************************!*\
      !*** ./src/app/utility/utility.service.ts ***!
      \********************************************/

    /*! exports provided: UtilityService */

    /***/
    function NLkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var UtilityService = /*#__PURE__*/function () {
        function UtilityService() {
          _classCallCheck(this, UtilityService);
        }

        _createClass(UtilityService, [{
          key: "dismissSoftKeyBoard",
          value: function dismissSoftKeyBoard() {}
        }, {
          key: "initNotifications",
          value: function initNotifications() {}
        }, {
          key: "scheduleSurveyNotifications",
          value: function scheduleSurveyNotifications() {}
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [];
      };

      UtilityService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], UtilityService);
      /***/
    },

    /***/
    "O2ky":
    /*!****************************************************************************!*\
      !*** ./src/app/survey/question/question-input/question-input.component.ts ***!
      \****************************************************************************/

    /*! exports provided: QuestionInputComponent */

    /***/
    function O2ky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionInputComponent", function () {
        return QuestionInputComponent;
      });
      /* harmony import */


      var _raw_loader_question_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-input.component.html */
      "HtII");
      /* harmony import */


      var _question_input_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-input.component.css */
      "y1Ei");
      /* harmony import */


      var _question_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../question.component.css */
      "2lBq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionInputComponent = /*#__PURE__*/function () {
        function QuestionInputComponent(fb) {
          _classCallCheck(this, QuestionInputComponent);

          this.fb = fb;
          this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.prevQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this._startValue = '';
          this.formGroup = this.fb.group({
            value: this.fb.control([['']])
          });
        }

        _createClass(QuestionInputComponent, [{
          key: "textConfigValues",
          get: function get() {
            return {
              type: this.type,
              minLength: this.minLength,
              maxLength: this.maxLength
            };
          },
          set: function set(value) {
            var type = value.type,
                minLength = value.minLength,
                maxLength = value.maxLength;

            if (this.type !== type || this.minLength !== minLength || this.maxLength !== maxLength) {
              // changed values
              this.initFormValue();
            }

            this.type = type;
            this.minLength = minLength;
            this.maxLength = maxLength;
          }
        }, {
          key: "startValue",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._startValue = value;
            this.initFormValue(this._startValue);
          }
        }, {
          key: "valueControl",
          get: function get() {
            return this.formGroup.get('value');
          }
        }, {
          key: "onNextQuestion",
          value: function onNextQuestion() {
            var formValid = this.validateForm();

            if (!formValid) {
              return;
            }

            this.nextQuestion.emit(this.valueControl.value);
          }
        }, {
          key: "onPrevQuestion",
          value: function onPrevQuestion() {
            this.prevQuestion.emit();
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            return this.formGroup.valid;
          }
        }, {
          key: "initFormValue",
          value: function initFormValue() {
            var startValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.formGroup = this.fb.group({
              value: [startValue, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.minLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLength)]]
            });
          }
        }]);

        return QuestionInputComponent;
      }();

      QuestionInputComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      QuestionInputComponent.propDecorators = {
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        prevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        textConfigValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QuestionInputComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-question-input',
        template: _raw_loader_question_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_input_component_css__WEBPACK_IMPORTED_MODULE_1__["default"], _question_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], QuestionInputComponent);
      /***/
    },

    /***/
    "OD09":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question-choice-slider/question-choice-slider.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OD09(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  {{label}}\n  <form [formGroup]=\"fg\">\n    <mat-slider\n      [min]=\"minNumber\"\n      [max]=\"maxNumber\"\n      step=\"1\"\n      [value]=\"sliderControl.value\"\n      (input)=\"onValueChange($event.value)\"\n    ></mat-slider>\n  </form>\n  <p class=\"value-label\">\n    {{sliderControl.value}}: {{selectedOption}}\n  </p>\n  <app-confirm-buttons\n    (next)=\"onNextQuestion()\"\n    (prev)=\"onPrevQuestion()\"\n  ></app-confirm-buttons>\n</div>\n";
      /***/
    },

    /***/
    "P+IX":
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/auth/auth.service */
      "qXBG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isValidToken = this.authService.validToken();

            if (isValidToken) {
              return true;
            }

            return this.router.parseUrl('/login');
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "QrDR":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question-choice/question-choice.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QrDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  {{label}}\n  <ul [formGroup]=\"formGroup\">\n    <li *ngFor=\"let control of checkBoxesControl.controls; let i=index\">\n      <mat-checkbox\n        [checked]=\"control.value\"\n        (change)=\"toggleCheckbox($event.checked, control)\"\n      >\n      </mat-checkbox>\n      <div class=\"checkbox-label\">\n        {{getOptionLabelFromIndex(i)}}\n      </div>\n    </li>\n  </ul>\n  <app-confirm-buttons\n    (next)=\"onNextQuestion()\"\n    (prev)=\"onPrevQuestion()\"\n  ></app-confirm-buttons>\n</div>\n";
      /***/
    },

    /***/
    "R1Zk":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question-container/question-container.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R1Zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "ROd5":
    /*!************************************************************************!*\
      !*** ./src/app/survey/question/question-input/question-input.model.ts ***!
      \************************************************************************/

    /*! exports provided: QuestionInputModel */

    /***/
    function ROd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionInputModel", function () {
        return QuestionInputModel;
      });

      var QuestionInputModel = function QuestionInputModel(value) {
        _classCallCheck(this, QuestionInputModel);

        var type = value.type,
            label = value.label,
            minLength = value.minLength,
            maxLength = value.maxLength;
        this.type = type;
        this.label = label;
        this.minLength = minLength;
        this.maxLength = maxLength;
      };
      /***/

    },

    /***/
    "RUEf":
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /*! exports provided: routes */

    /***/
    function RUEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @src/app/home/home.component */
      "9vUh");
      /* harmony import */


      var _src_app_survey_question_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/survey/question/question.component */
      "JyhI");
      /* harmony import */


      var _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/auth/auth.guard */
      "P+IX");
      /* harmony import */


      var _src_app_survey_question_container_question_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/survey/question-container/question-container.component */
      "6v9I");
      /* harmony import */


      var _src_app_survey_instances_today_instance_today_instance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/survey/instances/today-instance/today-instance.component */
      "upKY");
      /* harmony import */


      var _src_app_auth_login_login_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/auth/login/login.guard */
      "tuLx");

      var routes = [{
        path: 'login',
        component: _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_src_app_auth_login_login_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"]]
      }, {
        path: '',
        canActivate: [_src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [{
          path: '',
          redirectTo: '/instance',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
        }, {
          path: 'instance',
          component: _src_app_survey_instances_today_instance_today_instance_component__WEBPACK_IMPORTED_MODULE_5__["TodayInstanceComponent"]
        }, {
          path: 'instance/:instanceId',
          component: _src_app_survey_question_container_question_container_component__WEBPACK_IMPORTED_MODULE_4__["QuestionContainerComponent"]
        }, {
          path: 'instance/:instanceId/question/:questionId',
          component: _src_app_survey_question_question_component__WEBPACK_IMPORTED_MODULE_1__["QuestionComponent"]
        }]
      }];
      /***/
    },

    /***/
    "RV7M":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Rtvf":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rtvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"root\">\n  <div class=\"card question-container\">\n    <app-question-dummy\n      [question]=\"question$ | async\"\n      [hasNextQuestion]=\"hasNextQuestion$ | async\"\n      [hasPrevQuestion]=\"hasPrevQuestion$ | async\"\n      [answer]=\"answer$ | async\"\n      (nextQuestion)=\"nextQuestion($event)\"\n      (prevQuestion)=\"prevQuestion()\"\n    ></app-question-dummy>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/utility/utility.service */
      "NLkC");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(utilityService) {
          _classCallCheck(this, AppComponent);

          this.utilityService = utilityService;
          this.utilityService.initNotifications();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.utilityService.scheduleSurveyNotifications();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"mat-typography\">\n  <router-outlet></router-outlet>\n</div>\n";
      /***/
    },

    /***/
    "W2BJ":
    /*!********************************************************************************************!*\
      !*** ./src/app/survey/question/question-choice-slider/question-choice-slider.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: QuestionChoiceSliderComponent */

    /***/
    function W2BJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionChoiceSliderComponent", function () {
        return QuestionChoiceSliderComponent;
      });
      /* harmony import */


      var _raw_loader_question_choice_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-choice-slider.component.html */
      "OD09");
      /* harmony import */


      var _question_choice_slider_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-choice-slider.component.css */
      "1RbT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionChoiceSliderComponent = /*#__PURE__*/function () {
        function QuestionChoiceSliderComponent(fb) {
          _classCallCheck(this, QuestionChoiceSliderComponent);

          this.fb = fb;
          this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.prevQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this._startValue = [];
          this.fg = this.fb.group({
            slider: this.fb.control(1)
          });
          this.minNumber = 1;
        }

        _createClass(QuestionChoiceSliderComponent, [{
          key: "options",
          get: function get() {
            return this._options;
          },
          set: function set(value) {
            this._options = value; // side effect, reset slider value

            this.sliderControl.setValue(1);
          }
        }, {
          key: "startValue",
          set: function set(value) {
            this._startValue = value;

            if (!value) {
              return;
            }

            this.precompilateForm();
          }
        }, {
          key: "sliderControl",
          get: function get() {
            return this.fg.get('slider');
          }
        }, {
          key: "selectedOption",
          get: function get() {
            var _a;

            return (_a = this.options[this.sliderControl.value - 1]) === null || _a === void 0 ? void 0 : _a.label;
          }
        }, {
          key: "maxNumber",
          get: function get() {
            var _a, _b;

            return (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : this.minNumber;
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.sliderControl.setValue(value);
          }
        }, {
          key: "onNextQuestion",
          value: function onNextQuestion() {
            var output = this.formatOutput();
            this.nextQuestion.emit(output);
          }
        }, {
          key: "onPrevQuestion",
          value: function onPrevQuestion() {
            this.prevQuestion.emit();
          }
        }, {
          key: "formatOutput",
          value: function formatOutput() {
            var value = this.sliderControl.value;
            return [value - 1];
          }
        }, {
          key: "precompilateForm",
          value: function precompilateForm() {
            var _this$_startValue = _slicedToArray(this._startValue, 1),
                value = _this$_startValue[0];

            this.sliderControl.setValue(value + 1);
          }
        }]);

        return QuestionChoiceSliderComponent;
      }();

      QuestionChoiceSliderComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      QuestionChoiceSliderComponent.propDecorators = {
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        prevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      QuestionChoiceSliderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-question-choice-slider',
        template: _raw_loader_question_choice_slider_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_choice_slider_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], QuestionChoiceSliderComponent);
      /***/
    },

    /***/
    "WaVU":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/instances/instance/instance.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WaVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a class=\"instance card\" [routerLink]=\"link\">\n  <p>\n    <span class=\"day\">{{day}}</span>\n    <span class=\"month\">{{month}}</span>\n  </p>\n  <p>\n    <span class=\"year\">{{year}}</span>\n  </p>\n</a>\n";
      /***/
    },

    /***/
    "Xv2C":
    /*!******************************************!*\
      !*** ./src/app/survey/instance.model.ts ***!
      \******************************************/

    /*! exports provided: InstanceModel */

    /***/
    function Xv2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstanceModel", function () {
        return InstanceModel;
      });
      /* harmony import */


      var date_fns_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! date-fns/parse */
      "LPPQ");

      var InstanceModel = function InstanceModel(_ref13) {
        var _id = _ref13._id,
            surveyId = _ref13.surveyId,
            date = _ref13.date;

        _classCallCheck(this, InstanceModel);

        this._id = _id;
        this.surveyId = surveyId;
        this.date = Object(date_fns_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 'dd-MM-yyyy', new Date());
      };
      /***/

    },

    /***/
    "YaMb":
    /*!******************************************************************************!*\
      !*** ./src/app/survey/question/confirm-buttons/confirm-buttons.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ConfirmButtonsComponent */

    /***/
    function YaMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmButtonsComponent", function () {
        return ConfirmButtonsComponent;
      });
      /* harmony import */


      var _raw_loader_confirm_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./confirm-buttons.component.html */
      "arkT");
      /* harmony import */


      var _confirm_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm-buttons.component.css */
      "+ID0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/question/question.service */
      "1lo6");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ConfirmButtonsComponent = /*#__PURE__*/function () {
        function ConfirmButtonsComponent(questionService) {
          _classCallCheck(this, ConfirmButtonsComponent);

          this.questionService = questionService;
          this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(ConfirmButtonsComponent, [{
          key: "hasNextQuestion",
          get: function get() {
            return this.questionService.hasNextQuestion;
          }
        }, {
          key: "hasPrevQuestion",
          get: function get() {
            return this.questionService.hasPrevQuestion;
          }
        }, {
          key: "onNext",
          value: function onNext() {
            this.next.emit();
          }
        }, {
          key: "onPrev",
          value: function onPrev() {
            this.prev.emit();
          }
        }]);

        return ConfirmButtonsComponent;
      }();

      ConfirmButtonsComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]
        }];
      };

      ConfirmButtonsComponent.propDecorators = {
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        prev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      ConfirmButtonsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-confirm-buttons',
        template: _raw_loader_confirm_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_survey_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])], ConfirmButtonsComponent);
      /***/
    },

    /***/
    "Z0C/":
    /*!*********************************************************!*\
      !*** ./src/app/survey/instances/instances.component.ts ***!
      \*********************************************************/

    /*! exports provided: InstancesComponent */

    /***/
    function Z0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstancesComponent", function () {
        return InstancesComponent;
      });
      /* harmony import */


      var _raw_loader_instances_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./instances.component.html */
      "rnrp");
      /* harmony import */


      var _instances_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instances.component.css */
      "yqKT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/survey.service */
      "FznE");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var InstancesComponent = /*#__PURE__*/function () {
        function InstancesComponent(surveyService) {
          _classCallCheck(this, InstancesComponent);

          this.surveyService = surveyService;
        }

        _createClass(InstancesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.instances$ = this.surveyService.getInstances();
          }
        }]);

        return InstancesComponent;
      }();

      InstancesComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]
        }];
      };

      InstancesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instances',
        template: _raw_loader_instances_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_instances_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]])], InstancesComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _src_app_global_module_declarations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/global/module/declarations */
      "+0e3");
      /* harmony import */


      var _src_app_global_module_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/global/module/providers */
      "Zluc");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_app_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/material/material.module */
      "hctd");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: _src_app_global_module_declarations__WEBPACK_IMPORTED_MODULE_5__["declarations"],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _src_app_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"]],
        providers: _src_app_global_module_providers__WEBPACK_IMPORTED_MODULE_6__["providers"],
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zluc":
    /*!********************************************!*\
      !*** ./src/app/global/module/providers.ts ***!
      \********************************************/

    /*! exports provided: providers */

    /***/
    function Zluc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "providers", function () {
        return providers;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _src_app_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/auth/auth.interceptor */
      "D/Jk");
      /* harmony import */


      var _src_app_global_global_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/global/global.interceptor */
      "hvbs");

      var providers = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _src_app_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _src_app_global_global_interceptor__WEBPACK_IMPORTED_MODULE_2__["GlobalInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "arkT":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/confirm-buttons/confirm-buttons.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function arkT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"root\">\n  <button\n    mat-raised-button\n    color=\"primary\"\n    (click)=\"onPrev()\"\n    [disabled]=\"!hasPrevQuestion\"\n  >PREV</button>\n  <button\n    mat-raised-button\n    color=\"primary\"\n    (click)=\"onNext()\"\n  >\n    {{hasNextQuestion ? 'NEXT' : 'CONFIRM'}}\n  </button>\n</div>\n";
      /***/
    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "zu2e");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.css */
      "wmvV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/utility/utility.service */
      "NLkC");
      /* harmony import */


      var _src_app_utility_icon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/utility/icon.service */
      "pH+g");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, fb, router, utilityService, iconService) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.fb = fb;
          this.router = router;
          this.utilityService = utilityService;
          this.iconService = iconService;
          this.form = this.fb.group({
            username: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
          this.wrongLogin = false;
          this.loading = false;
        }

        _createClass(LoginComponent, [{
          key: "username",
          get: function get() {
            return this.form.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.form.get('password');
          }
        }, {
          key: "passwordVisible",
          get: function get() {
            return this._passwordVisible;
          },
          set: function set(value) {
            this._passwordVisible = value;
            this.iconPassword = value ? this.iconEye : this.iconEyeSlash;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.iconEye = this.iconService.eye;
            this.iconEyeSlash = this.iconService.eyeSlash;
            this.passwordVisible = false;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this7 = this;

            this.wrongLogin = false;
            this.utilityService.dismissSoftKeyBoard();

            if (this.form.invalid) {
              this.username.markAsDirty();
              this.password.markAsDirty();
              return;
            }

            this.loading = true;
            this.authService.login(this.username.value, this.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
              return _this7.router.navigate(['/instance']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this7.wrongLogin = true;
              _this7.loading = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err);
            })).subscribe();
          }
        }, {
          key: "errorVisible",
          value: function errorVisible(control) {
            return control.invalid && !control.pristine;
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.wrongLogin = false;
            this.form.reset();
            this.utilityService.dismissSoftKeyBoard();
          }
        }, {
          key: "togglePasswordVisibility",
          value: function togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: _src_app_utility_icon_service__WEBPACK_IMPORTED_MODULE_9__["IconService"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], _src_app_utility_icon_service__WEBPACK_IMPORTED_MODULE_9__["IconService"]])], LoginComponent);
      /***/
    },

    /***/
    "dZLz":
    /*!***********************************************!*\
      !*** ./src/app/auth/token-storage.service.ts ***!
      \***********************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function dZLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "saveToken",
          value: function saveToken(token) {
            localStorage.setItem('auth-token', token);
          }
        }, {
          key: "readToken",
          value: function readToken() {
            return localStorage.getItem('auth-token');
          }
        }, {
          key: "decodeToken",
          value: function decodeToken(token) {
            return JSON.parse(atob(token.split('.')[1]));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], TokenStorageService);
      /***/
    },

    /***/
    "eFSC":
    /*!****************************************************************************!*\
      !*** ./src/app/survey/question/question-array/question-array.component.ts ***!
      \****************************************************************************/

    /*! exports provided: QuestionArrayComponent */

    /***/
    function eFSC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionArrayComponent", function () {
        return QuestionArrayComponent;
      });
      /* harmony import */


      var _raw_loader_question_array_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-array.component.html */
      "Fn9p");
      /* harmony import */


      var _question_array_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-array.component.css */
      "yGT/");
      /* harmony import */


      var _question_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../question.component.css */
      "2lBq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionArrayComponent = /*#__PURE__*/function () {
        function QuestionArrayComponent(fb) {
          _classCallCheck(this, QuestionArrayComponent);

          this.fb = fb;
          this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.prevQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this._startValue = [[]];
          this.formGroup = this.fb.group({
            checkBoxesControl: this.fb.array([])
          });
        }

        _createClass(QuestionArrayComponent, [{
          key: "maxNumberOfChoices",
          get: function get() {
            return this._maxNumberOfChoices;
          },
          set: function set(value) {
            this._maxNumberOfChoices = value;
            this.singleChoice = value === 1;
          }
        }, {
          key: "startValue",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._startValue = value;
            this.precompilateForm();
          }
        }, {
          key: "optionsAndSubQuestions",
          get: function get() {
            return this._optionsAndSubQuestions;
          },
          set: function set(value) {
            this._optionsAndSubQuestions = value;
            var options = value.options,
                subQuestions = value.subQuestions;

            if (!options || !subQuestions) {
              return;
            } // matrix of false [[false, false], [false, false]]


            var initValues = [];

            for (var i = 0; i < subQuestions.length; i++) {
              var initRow = [];

              for (var j = 0; j < options.length; j++) {
                initRow[j] = false;
              }

              initValues[i] = initRow;
            }

            this.initFormGroup(initValues); // while (this.checkBoxesControl.controls.length < subQuestions.length) {
            //   const subQuestionControl = this.fb.array([]);
            //   while (subQuestionControl.controls.length < options.length) {
            //     subQuestionControl.push(
            //       this.fb.control(false)
            //     );
            //   }
            //   this.checkBoxesControl.push(subQuestionControl);
            // }
            // this._options = valud;
            //
            // while (this.checkBoxesControl.controls.length < value.length) {
            //   this.checkBoxesControl.push(
            //     this.fb.control(false)
            //   );
            // }
          }
        }, {
          key: "checkBoxesControl",
          get: function get() {
            return this.formGroup.get('checkBoxesControl');
          }
        }, {
          key: "options",
          get: function get() {
            return this.optionsAndSubQuestions.options;
          }
        }, {
          key: "subQuestions",
          get: function get() {
            return this.optionsAndSubQuestions.subQuestions;
          }
        }, {
          key: "submit",
          value: function submit() {
            var values = this.checkBoxesControl.controls.map(function (subQuestion) {
              return subQuestion.controls.map(function (c) {
                return c.value;
              });
            });
          }
        }, {
          key: "toggleCheckbox",
          value: function toggleCheckbox(value, control, subQuestion) {
            if (!this.singleChoice) {
              // multiple choice
              control.setValue(value);
              return;
            }

            if (!value) {
              return;
            }

            var controls = this.getControlsFromSubQuestion(subQuestion);
            controls.map(function (c) {
              c.setValue(false);
            });
            control.setValue(value);
          }
        }, {
          key: "getControlsFromSubQuestion",
          value: function getControlsFromSubQuestion(subQuestion) {
            return subQuestion.controls;
          }
        }, {
          key: "onNextQuestion",
          value: function onNextQuestion() {
            var validForm = this.validateForm(); // if (!validForm) {
            //   return;
            // }

            var output = this.formatOutput();
            this.nextQuestion.emit(output);
          }
        }, {
          key: "onPrevQuestion",
          value: function onPrevQuestion() {
            this.prevQuestion.emit();
          }
        }, {
          key: "getSubQuestion",
          value: function getSubQuestion(index) {
            return this.optionsAndSubQuestions.subQuestions[index].label;
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            var _this8 = this;

            return this.checkBoxesControl.controls.map(function (c) {
              return _this8.countTrueValues(c);
            }) // count number of true values for each subquestion
            .map(function (v) {
              return v >= _this8.minNumberOfChoices && v <= _this8.maxNumberOfChoices;
            }) // check if each subquestion has valid number of answers
            .reduce(function (prevValid, currValid) {
              // if prev not valid return false
              if (!prevValid) {
                return false;
              }

              return currValid;
            }, true);
          }
        }, {
          key: "countTrueValues",
          value: function countTrueValues(subQuestion) {
            return subQuestion.value.reduce(function (acc, value) {
              return value ? acc + 1 : acc;
            }, 0);
          }
        }, {
          key: "formatOutput",
          value: function formatOutput() {
            return this.checkBoxesControl.value.map(function (subQuestion) {
              return subQuestion.reduce(function (acc, val, index) {
                if (val) {
                  return [].concat(_toConsumableArray(acc), [index]);
                }

                return acc;
              }, []);
            });
          }
        }, {
          key: "initFormGroup",
          value: function initFormGroup(value) {
            var _this9 = this;

            // matrix of form array
            this.formGroup = this.fb.group({
              checkBoxesControl: this.fb.array(value.map(function (row) {
                return _this9.fb.array(row);
              }))
            }); // while (this.checkBoxesControl.controls.length < subQuestions.length) {
            //   const subQuestionControl = this.fb.array([]);
            //   while (subQuestionControl.controls.length < options.length) {
            //     subQuestionControl.push(
            //       this.fb.control(false)
            //     );
            //   }
            //   this.checkBoxesControl.push(subQuestionControl);
            // }
          }
        }, {
          key: "precompilateForm",
          value: function precompilateForm() {
            // from [[2, 4], [1, 3]] to [[false, true, false, true], [true, false, true, false]]
            var nextValue = this.checkBoxesControl.value;

            this._startValue.forEach(function (row, rowIndex) {
              return row.forEach(function (truePos) {
                return nextValue[rowIndex][truePos] = true;
              });
            });

            this.initFormGroup(nextValue);
          }
        }]);

        return QuestionArrayComponent;
      }();

      QuestionArrayComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      QuestionArrayComponent.propDecorators = {
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        prevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        minNumberOfChoices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maxNumberOfChoices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasOtherOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optionsAndSubQuestions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QuestionArrayComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-question-array',
        template: _raw_loader_question_array_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_array_component_css__WEBPACK_IMPORTED_MODULE_1__["default"], _question_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], QuestionArrayComponent);
      /***/
    },

    /***/
    "hctd":
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function hctd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var MaterialComponents = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
      })], MaterialModule);
      /***/
    },

    /***/
    "hvbs":
    /*!**********************************************!*\
      !*** ./src/app/global/global.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: GlobalInterceptor */

    /***/
    function hvbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalInterceptor", function () {
        return GlobalInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var GlobalInterceptor = /*#__PURE__*/function () {
        function GlobalInterceptor() {
          _classCallCheck(this, GlobalInterceptor);
        }

        _createClass(GlobalInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var request = req; // if request has a body (POST, PUT, PATCH) add

            switch (req.method) {
              case 'POST':
              case 'PUT':
              case 'PATCH':
                request = req.clone({
                  headers: request.headers.set('Content-Type', 'application/json')
                });
            }

            return next.handle(request);
          }
        }]);

        return GlobalInterceptor;
      }();

      GlobalInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], GlobalInterceptor);
      /***/
    },

    /***/
    "k4C4":
    /*!*******************************************************************************!*\
      !*** ./src/app/survey/instances/instances-dummy/instances-dummy.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: InstancesDummyComponent */

    /***/
    function k4C4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstancesDummyComponent", function () {
        return InstancesDummyComponent;
      });
      /* harmony import */


      var _raw_loader_instances_dummy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./instances-dummy.component.html */
      "KKS+");
      /* harmony import */


      var _instances_dummy_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instances-dummy.component.css */
      "0tIl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var InstancesDummyComponent = function InstancesDummyComponent() {
        _classCallCheck(this, InstancesDummyComponent);
      };

      InstancesDummyComponent.ctorParameters = function () {
        return [];
      };

      InstancesDummyComponent.propDecorators = {
        instances: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      InstancesDummyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instances-dummy',
        template: _raw_loader_instances_dummy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_instances_dummy_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], InstancesDummyComponent);
      /***/
    },

    /***/
    "kX/y":
    /*!*****************************************************************************!*\
      !*** ./src/app/survey/question/question-dummy/question-dummy.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function kXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1kdW1teS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "lXmC":
    /*!******************************************************************************!*\
      !*** ./src/app/survey/question/question-choice/question-choice.component.ts ***!
      \******************************************************************************/

    /*! exports provided: QuestionChoiceComponent */

    /***/
    function lXmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionChoiceComponent", function () {
        return QuestionChoiceComponent;
      });
      /* harmony import */


      var _raw_loader_question_choice_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-choice.component.html */
      "QrDR");
      /* harmony import */


      var _question_choice_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-choice.component.css */
      "9Isj");
      /* harmony import */


      var _question_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../question.component.css */
      "2lBq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var QuestionChoiceComponent = /*#__PURE__*/function () {
        function QuestionChoiceComponent(fb) {
          _classCallCheck(this, QuestionChoiceComponent);

          this.fb = fb;
          this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.prevQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this._startValue = [];
          this.formGroup = this.fb.group({
            checkBoxesControl: this.fb.array([])
          });
          this.disableCheckBoxes = false;
          this._numberOfTrueValues = 0;
          this.errorMessage = '';
          this.singleChoice = false;
        }

        _createClass(QuestionChoiceComponent, [{
          key: "maxNumberOfChoices",
          get: function get() {
            return this._maxNumberOfChoices;
          },
          set: function set(value) {
            this._maxNumberOfChoices = value;
            this.singleChoice = value === 1;
          }
        }, {
          key: "startValue",
          set: function set(value) {
            this._startValue = value;

            if (!value) {
              return;
            }

            this.precompilateForm();
          }
        }, {
          key: "options",
          get: function get() {
            return this._options;
          },
          set: function set(value) {
            this._options = value; // const initValues = [];
            // for (let i = 0; i < subQuestions.length; i++) {
            //   const initRow = [];
            //   for (let j = 0; j < options.length; j++) {
            //     initRow[j] = false;
            //   }
            //   initValues[i] = initRow;
            // }

            var initValue = [];

            for (var i = 0; i < this._options.length; i++) {
              initValue[i] = false;
            }

            this.initFormGroup(initValue); // while (this.checkBoxesControl.controls.length < value.length) {
            //   this.checkBoxesControl.push(
            //     this.fb.control(false)
            //   );
            // }
            // this.checkBoxesControl.
          }
        }, {
          key: "checkBoxesControl",
          get: function get() {
            return this.formGroup.get('checkBoxesControl');
          }
        }, {
          key: "numberOfTrueValues",
          get: function get() {
            return this._numberOfTrueValues;
          },
          set: function set(value) {
            this._numberOfTrueValues = value;
            this.disableCheckBoxes = value >= this.maxNumberOfChoices;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.numberOfTrueValues = this.countTrueValues(); // this.initFormGroup();
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            var numberOfTrueValues = this.countTrueValues();
            this.errorMessage = '';

            if (numberOfTrueValues < this.minNumberOfChoices) {
              this.errorMessage = "Insert at least ".concat(this.minNumberOfChoices, " options");
              return false;
            }

            if (numberOfTrueValues > this.maxNumberOfChoices) {
              this.errorMessage = "Insert at most ".concat(this.maxNumberOfChoices, " options");
              return false;
            }

            return true;
          }
        }, {
          key: "toggleCheckbox",
          value: function toggleCheckbox(value, control) {
            if (!this.singleChoice) {
              control.setValue(value);
              this.numberOfTrueValues = this.countTrueValues();
            }

            if (!value) {
              return;
            }

            var controls = this.checkBoxesControl.controls;
            controls.map(function (c) {
              c.setValue(false);
            });
            control.setValue(value);
          }
        }, {
          key: "onNextQuestion",
          value: function onNextQuestion() {
            var validForm = this.validateForm();

            if (!validForm) {
              return;
            }

            var output = this.formatOutput();
            this.nextQuestion.emit(output);
          }
        }, {
          key: "onPrevQuestion",
          value: function onPrevQuestion() {
            this.prevQuestion.emit();
          }
        }, {
          key: "getOptionLabelFromIndex",
          value: function getOptionLabelFromIndex(index) {
            return this.options[index].label;
          }
        }, {
          key: "countTrueValues",
          value: function countTrueValues() {
            return this.checkBoxesControl.controls.reduce(function (acc, control) {
              if (control.value) {
                return acc + 1;
              }

              return acc;
            }, 0);
          }
        }, {
          key: "formatOutput",
          value: function formatOutput() {
            return this.checkBoxesControl.controls.reduce(function (acc, control, index) {
              if (control.value) {
                return [].concat(_toConsumableArray(acc), [index]);
              }

              return acc;
            }, []);
          }
        }, {
          key: "initFormGroup",
          value: function initFormGroup() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.formGroup = this.fb.group({
              checkBoxesControl: this.fb.array(value)
            });
          }
        }, {
          key: "precompilateForm",
          value: function precompilateForm() {
            // from [2, 4, 5] to [false, true, false, true, true]
            var nextValue = this.checkBoxesControl.controls.map(function () {
              return false;
            });

            this._startValue.forEach(function (pos) {
              return nextValue[pos] = true;
            });

            this.initFormGroup(nextValue);
          }
        }]);

        return QuestionChoiceComponent;
      }();

      QuestionChoiceComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      QuestionChoiceComponent.propDecorators = {
        nextQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        prevQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        minNumberOfChoices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasOtherOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maxNumberOfChoices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QuestionChoiceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-question-choice',
        template: _raw_loader_question_choice_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_choice_component_css__WEBPACK_IMPORTED_MODULE_1__["default"], _question_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], QuestionChoiceComponent);
      /***/
    },

    /***/
    "msdp":
    /*!************************************************************************!*\
      !*** ./src/app/survey/question/question-array/question-array.model.ts ***!
      \************************************************************************/

    /*! exports provided: QuestionArrayModel */

    /***/
    function msdp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionArrayModel", function () {
        return QuestionArrayModel;
      });

      var QuestionArrayModel = function QuestionArrayModel(_ref14) {
        var label = _ref14.label,
            minNumberOfChoices = _ref14.minNumberOfChoices,
            maxNumberOfChoices = _ref14.maxNumberOfChoices,
            subQuestions = _ref14.subQuestions,
            options = _ref14.options;

        _classCallCheck(this, QuestionArrayModel);

        this.label = label;
        this.minNumberOfChoices = minNumberOfChoices;
        this.maxNumberOfChoices = maxNumberOfChoices;
        this.subQuestion = subQuestions;
        this.options = options;
      };
      /***/

    },

    /***/
    "pH+g":
    /*!*****************************************!*\
      !*** ./src/app/utility/icon.service.ts ***!
      \*****************************************/

    /*! exports provided: IconService */

    /***/
    function pHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconService", function () {
        return IconService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var IconService = /*#__PURE__*/function () {
        function IconService() {
          _classCallCheck(this, IconService);
        }

        _createClass(IconService, [{
          key: "eye",
          get: function get() {
            return {
              className: 'far',
              code: this.formatCode(0xf06e)
            };
          }
        }, {
          key: "eyeSlash",
          get: function get() {
            return {
              className: 'far',
              code: this.formatCode(0xf070)
            };
          }
        }, {
          key: "formatCode",
          value: function formatCode(code) {
            return String.fromCharCode(code);
          }
        }]);

        return IconService;
      }();

      IconService.ctorParameters = function () {
        return [];
      };

      IconService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], IconService);
      /***/
    },

    /***/
    "q3cw":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/instances/today-instance/today-instance.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q3cw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"root\">\n  <div class=\"card\">\n    <h2>Vuoi rispondere al questionario giornaliero?</h2>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [disabled]=\"!instanceId\"\n      (click)=\"navigateToQuestion()\"\n    >Rispondi</button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "qXBG":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function qXBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns/isAfter */
      "EhJz");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, tokenStorageService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.tokenStorageService = tokenStorageService;
          this.prefix = 'api/auth';
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(userId, password) {
            var _this10 = this;

            return this.http.post("".concat(this.prefix, "/login"), {
              userId: userId,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              return _this10.tokenStorageService.saveToken(res.token);
            }));
          }
        }, {
          key: "get",
          value: function get() {
            this.http.get("".concat(this.prefix, "/get")).subscribe(function () {
              return console.log('success');
            }, function (error) {
              return console.log('fail', error);
            });
          }
        }, {
          key: "readToken",
          value: function readToken() {
            return this.tokenStorageService.readToken();
          }
        }, {
          key: "validToken",
          value: function validToken() {
            var tokenJSON = this.tokenStorageService.readToken();

            if (!tokenJSON) {
              return false;
            }

            var token = this.tokenStorageService.decodeToken(tokenJSON);
            var expireDate = new Date(token.exp * 1000);
            var now = new Date();
            return Object(date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__["default"])(expireDate, now);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      };

      AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])], AuthService);
      /***/
    },

    /***/
    "qlUT":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/question/question-dummy/question-dummy.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qlUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-question-choice\n  *ngIf=\"isTypeChoice && !questionData.slider\"\n  [label]=\"questionLabel\"\n  [minNumberOfChoices]=\"questionData.minNumberOfChoices\"\n  [maxNumberOfChoices]=\"questionData.maxNumberOfChoices\"\n  [hasOtherOption]=\"questionData.hasOtherOption\"\n  [options]=\"questionData.options\"\n  [startValue]=\"startValue\"\n  (nextQuestion)=\"onNextQuestion($event)\"\n  (prevQuestion)=\"onPrevQuestion()\"\n>\n</app-question-choice>\n<app-question-choice-slider\n  *ngIf=\"isTypeChoice && questionData.slider\"\n  [label]=\"questionLabel\"\n  [options]=\"questionData.options\"\n  [startValue]=\"startValue\"\n  (nextQuestion)=\"onNextQuestion($event)\"\n  (prevQuestion)=\"onPrevQuestion()\"\n>\n</app-question-choice-slider>\n<app-question-array\n  *ngIf=\"isTypeArray\"\n  [label]=\"questionLabel\"\n  [minNumberOfChoices]=\"questionData.minNumberOfChoices\"\n  [maxNumberOfChoices]=\"questionData.maxNumberOfChoices\"\n  [optionsAndSubQuestions]=\"{subQuestions: questionData.subQuestion, options: questionData.options}\"\n  [startValue]=\"startValue\"\n  (nextQuestion)=\"onNextQuestion($event)\"\n  (prevQuestion)=\"onPrevQuestion()\"\n></app-question-array>\n<app-question-input\n  *ngIf=\"isTypeInput\"\n  [label]=\"questionData.label\"\n  [textConfigValues]=\"{\n              type: questionData.type,\n              minLength: questionData.minLength,\n              maxLength: questionData.maxLength\n            }\"\n  [startValue]=\"startValue\"\n  (nextQuestion)=\"onNextQuestion($event)\"\n  (prevQuestion)=\"onPrevQuestion()\"\n></app-question-input>\n";
      /***/
    },

    /***/
    "r3NX":
    /*!******************************************************************!*\
      !*** ./src/app/survey/instances/instance/instance.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function r3NX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".instance {\n  padding: 25px 25px 20px;\n  text-decoration: none;\n  display: block;\n  color: #000;\n}\n\np {\n  margin: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.day {\n  font-size: 30px;\n  margin-right: 20px;\n}\n\n.month {\n  font-size: 28px;\n}\n\n.year {\n  font-size: 18px;\n  margin-top: 20px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmO0FBQ0YiLCJmaWxlIjoiaW5zdGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YW5jZSB7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzAwMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRheSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubW9udGgge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi55ZWFyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4XG59XG4iXX0= */";
      /***/
    },

    /***/
    "rnrp":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/instances/instances.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rnrp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-instances-dummy\n  [instances]=\"instances$ | async\"\n></app-instances-dummy>\n";
      /***/
    },

    /***/
    "saIX":
    /*!******************************************************************************!*\
      !*** ./src/app/survey/instances/today-instance/today-instance.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function saIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".root {\n  background-color: #f8f8f8;\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  min-width: 300px;\n  padding: 30px 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZGF5LWluc3RhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRvZGF5LWluc3RhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "ttvc":
    /*!**************************************************************************!*\
      !*** ./src/app/survey/question/question-choice/question-choice.model.ts ***!
      \**************************************************************************/

    /*! exports provided: QuestionChoiceModel */

    /***/
    function ttvc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionChoiceModel", function () {
        return QuestionChoiceModel;
      });

      var QuestionChoiceModel = function QuestionChoiceModel(data) {
        _classCallCheck(this, QuestionChoiceModel);

        this.label = data.label;
        this.minNumberOfChoices = data.minNumberOfChoices;
        this.maxNumberOfChoices = data.maxNumberOfChoices;
        this.hasOtherOption = data.hasOtherOption;
        this.options = data.options;
        this.slider = !!data.slider;
      };
      /***/

    },

    /***/
    "tuLx":
    /*!*******************************************!*\
      !*** ./src/app/auth/login/login.guard.ts ***!
      \*******************************************/

    /*! exports provided: LoginGuard */

    /***/
    function tuLx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/auth/auth.service */
      "qXBG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(authService, router) {
          _classCallCheck(this, LoginGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(LoginGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isValidToken = this.authService.validToken();

            if (!isValidToken) {
              return true;
            }

            return this.router.parseUrl('/');
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ctorParameters = function () {
        return [{
          type: _src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      LoginGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LoginGuard);
      /***/
    },

    /***/
    "upKY":
    /*!*****************************************************************************!*\
      !*** ./src/app/survey/instances/today-instance/today-instance.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TodayInstanceComponent */

    /***/
    function upKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodayInstanceComponent", function () {
        return TodayInstanceComponent;
      });
      /* harmony import */


      var _raw_loader_today_instance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./today-instance.component.html */
      "q3cw");
      /* harmony import */


      var _today_instance_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./today-instance.component.css */
      "saIX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/survey/survey.service */
      "FznE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TodayInstanceComponent = /*#__PURE__*/function () {
        function TodayInstanceComponent(surveyService, router) {
          _classCallCheck(this, TodayInstanceComponent);

          this.surveyService = surveyService;
          this.router = router;
        }

        _createClass(TodayInstanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.todayInstanceSubscription = this.surveyService.getTodayInstance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (instance) {
              return _this11.instanceId = instance._id;
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.todayInstanceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "navigateToQuestion",
          value: function navigateToQuestion() {
            if (!this.instanceId) {
              return;
            }

            this.router.navigate(['instance', this.instanceId])["catch"]();
          }
        }]);

        return TodayInstanceComponent;
      }();

      TodayInstanceComponent.ctorParameters = function () {
        return [{
          type: _src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      TodayInstanceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-today-instance',
        template: _raw_loader_today_instance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_today_instance_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_src_app_survey_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], TodayInstanceComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app.routes */
      "RUEf");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wmvV":
    /*!************************************************!*\
      !*** ./src/app/auth/login/login.component.css ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function wmvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  width: 500px;\n  padding: 40px 50px 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-field {\n  margin-bottom: 10px;\n}\n\n.buttons {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.buttons button {\n  width: 45%;\n}\n\n.wrong-login-message {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.wrong-login-message,\nmat-progress-bar {\n  opacity: 0;\n  transition: opacity 300ms;\n}\n\n.visible {\n  opacity: 1;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDQwcHggNTBweCAwO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi53cm9uZy1sb2dpbi1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi53cm9uZy1sb2dpbi1tZXNzYWdlLFxubWF0LXByb2dyZXNzLWJhciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "y1Ei":
    /*!*****************************************************************************!*\
      !*** ./src/app/survey/question/question-input/question-input.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function y1Ei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1pbnB1dC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "yGT/":
    /*!*****************************************************************************!*\
      !*** ./src/app/survey/question/question-array/question-array.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function yGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\n  margin-top: 24px;\n  margin-bottom: 50px;\n  border-spacing: 0;\n}\n\nth, td {\n  padding: 20px 10px;\n}\n\nth {\n  color: #777;\n  font-weight: normal;\n}\n\ntd {\n  border-top: 1px solid #ccc;\n}\n\n.checkbox-container {\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWFycmF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InF1ZXN0aW9uLWFycmF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbnRoIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "yqKT":
    /*!**********************************************************!*\
      !*** ./src/app/survey/instances/instances.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function yqKT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZXMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app.module */
      "ZAI4");
      /* harmony import */


      var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/environments/environment */
      "AytR");

      if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zu2e":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zu2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"card\">\n    <form [formGroup]=\"form\">\n      <!-- username -->\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Username</mat-label>\n        <input formControlName=\"username\" matInput placeholder=\"Insert username\">\n        <mat-error>Insert a username</mat-error>\n      </mat-form-field>\n\n      <!-- password -->\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Password</mat-label>\n        <input [type]=\"passwordVisible ? 'text' : 'password'\" formControlName=\"password\" matInput placeholder=\"Insert password\">\n        <mat-error>Insert a password</mat-error>\n        <button matSuffix mat-icon-button (click)=\"togglePasswordVisibility()\">\n          <mat-icon *ngIf=\"passwordVisible\">visibility</mat-icon>\n          <mat-icon *ngIf=\"!passwordVisible\">visibility_off</mat-icon>\n        </button>\n      </mat-form-field>\n\n      <!-- buttons -->\n      <div class=\"buttons\">\n        <button (click)=\"submit()\" mat-button color=\"primary\" [disabled]=\"loading\">LOGIN</button>\n        <button (click)=\"clearForm()\" mat-button [disabled]=\"loading\">CANCEL</button>\n      </div>\n    </form>\n    <span\n      [ngClass]=\"{'mat-error': true, 'wrong-login-message': true, 'visible': wrongLogin}\"\n    >\n      Wrong Username or Password\n    </span>\n    <mat-progress-bar [ngClass]=\"{'visible': loading}\" mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map