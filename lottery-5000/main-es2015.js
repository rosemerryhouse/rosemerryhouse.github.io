(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4417:
/*!******************************************************!*\
  !*** ./src/app/add-persion/add-persion.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPersionComponent": function() { return /* binding */ AddPersionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_persion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-persion.component.html */ 6262);
/* harmony import */ var _add_persion_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-persion.component.css */ 89);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _lotter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lotter.service */ 9200);






let AddPersionComponent = class AddPersionComponent {
    constructor(formBuilder, _lotterService) {
        this.formBuilder = formBuilder;
        this._lotterService = _lotterService;
        this.createFormInit();
    }
    ngOnInit() { }
    add() {
        let inputData = this.formGroup.getRawValue();
        let addPerson = {
            name: inputData.yourName,
            lastNum: inputData.yourId,
        };
        this._lotterService.addPersonData(addPerson);
        this.formGroup.get('yourName').setValue('');
        this.formGroup.get('yourId').setValue('');
    }
    clearAll() {
        this._lotterService.clearPersonData();
        this.formGroup.get('yourName').setValue('');
        this.formGroup.get('yourId').setValue('');
    }
    get yourNameControl() {
        return this.formGroup.get('yourName');
    }
    get yourIdControl() {
        return this.formGroup.get('yourId');
    }
    createFormInit() {
        this.formGroup = this.formBuilder.group({
            yourName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            yourId: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10),
                ],
            ],
        });
    }
};
AddPersionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _lotter_service__WEBPACK_IMPORTED_MODULE_2__.LotterService }
];
AddPersionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-persion',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_persion_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_persion_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddPersionComponent);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _lotter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lotter.service */ 9200);





let AppComponent = class AppComponent {
    constructor(_lotterService) {
        this._lotterService = _lotterService;
        this.lottDataArray = [
            {
                title: '國旅券',
                lotNumber: ['21', '32', '98', '67', '97', '410'],
                date: '2021,10,12',
                price: 1000
            },
            {
                title: 'i 原券',
                lotNumber: ['64', '85'],
                date: '2021,10,12',
                price: 1000
            },
            {
                title: '農遊券',
                lotNumber: ['89', '32', '54', '597', '453', '152'],
                date: '2021,10,13',
                price: 888
            },
            {
                title: '樂fun券 (數位)',
                lotNumber: ['96', '15', '07', '30', '73', '98', '19', '11'],
                date: '2021,10,12',
                price: 600
            },
            {
                title: '樂fun券 (紙本)',
                lotNumber: ['39', '37', '23', '36', '79', '08', '14', '75'],
                date: '2021,10,12',
                price: 600
            },
            {
                title: '動滋券',
                lotNumber: [
                    '97',
                    '13',
                    '19',
                    '55',
                    '71',
                    '93',
                    '381',
                    '734',
                    '655',
                    '453',
                    '985',
                ],
                date: '2021,10,13',
                price: 500
            },
            {
                title: '客庄券',
                lotNumber: ['81', '900'],
                date: '2021,10,14',
                price: 500
            },
            {
                title: '地方創生券',
                lotNumber: ['081', '105', '594', '188', '089', '396', '521', '467', '912', '798', '358', '441', '367', '941', '335'],
                date: '2021,10,15',
                price: 500
            },
        ];
        this.persons = [];
        // persons = [
        //   {
        //     name: 'mom',
        //     lastNum: '449',
        //   },
        //   {
        //     name: 'PaPa',
        //     lastNum: '360',
        //   },
        //   {
        //     name: 'cherry',
        //     lastNum: '820',
        //   },
        //   {
        //     name: 'George',
        //     lastNum: '376',
        //   },
        //   {
        //     name: 'Granpa',
        //     lastNum: '022',
        //   },
        //   {
        //     name: 'Granma',
        //     lastNum: '836',
        //   },
        // ];
        this.lotPersons = [];
        this.arrangeData();
    }
    ngOnInit() {
        this._lotterService.sendPerson$.subscribe((res) => {
            if (res && res.length > 0) {
                this.lotPersons = res;
            }
            else {
                this.lotPersons = [];
            }
        });
    }
    arrangeData() {
        let newData = [];
        newData = this.lottDataArray.map((item) => {
            let newData = Object.assign({ lotDate: new Date(item.date).getTime() }, item);
            return newData;
        });
        this.lottDataArray = newData;
    }
};
AppComponent.ctorParameters = () => [
    { type: _lotter_service__WEBPACK_IMPORTED_MODULE_2__.LotterService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'my-app',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _lottery_lottery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lottery/lottery.component */ 5464);
/* harmony import */ var _num_num_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./num/num.component */ 5339);
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winner/winner.component */ 4533);
/* harmony import */ var _add_persion_add_persion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-persion/add-persion.component */ 4417);
/* harmony import */ var _person_item_person_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person-item/person-item.component */ 2550);
/* harmony import */ var _lotter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lotter.service */ 9200);











const COMPONENT = [
    _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
    _lottery_lottery_component__WEBPACK_IMPORTED_MODULE_1__.LotteryComponent,
    _num_num_component__WEBPACK_IMPORTED_MODULE_2__.NumComponent,
    _winner_winner_component__WEBPACK_IMPORTED_MODULE_3__.WinnerComponent,
    _add_persion_add_persion_component__WEBPACK_IMPORTED_MODULE_4__.AddPersionComponent,
    _person_item_person_item_component__WEBPACK_IMPORTED_MODULE_5__.PersonItemComponent
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule],
        declarations: [...COMPONENT],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [_lotter_service__WEBPACK_IMPORTED_MODULE_6__.LotterService]
    })
], AppModule);



/***/ }),

/***/ 9200:
/*!***********************************!*\
  !*** ./src/app/lotter.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotterService": function() { return /* binding */ LotterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4225);



let LotterService = class LotterService {
    constructor() {
        this.lotPersons = [];
        this.sendPerson$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    addPersonData(p) {
        this.lotPersons.push(p);
        this.sendPerson$.next(this.lotPersons);
    }
    clearPersonData() {
        this.lotPersons = [];
        this.sendPerson$.next([]);
    }
    get allPersonData() {
        return this.lotPersons;
    }
};
LotterService.ctorParameters = () => [];
LotterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], LotterService);



/***/ }),

/***/ 5464:
/*!**********************************************!*\
  !*** ./src/app/lottery/lottery.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotteryComponent": function() { return /* binding */ LotteryComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lottery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lottery.component.html */ 9924);
/* harmony import */ var _lottery_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lottery.component.css */ 2518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _lotter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lotter.service */ 9200);





let LotteryComponent = class LotteryComponent {
    constructor(_lotterService) {
        this._lotterService = _lotterService;
        this.lotPersons = [];
        this.winnerArray = [];
    }
    ngOnInit() {
        this._lotterService.sendPerson$.subscribe((res) => {
            this.lotPersons = [];
            if (res && res.length > 0) {
                console.log('sendPerson lottery', res);
                this.lotPersons = res;
                this.findWinner();
            }
            else {
                this.winnerArray = [];
            }
        });
    }
    findWinner() {
        this.winnerArray = [];
        if (this.lotPersons.length === 0)
            return;
        this.lotPersons.forEach((p) => {
            // if (this.lotteryData.lotNumber.indexOf(p.lastNum) !== -1) {
            //   this.winnerArray.push(p.name);
            // }
            let data = this.lotteryData.lotNumber;
            for (let i = 0; i < data.length; i++) {
                let numLen = data[i].length;
                let lastNumber = p.lastNum.slice(-numLen);
                if (data[i].indexOf(lastNumber) !== -1) {
                    this.winnerArray.push(p);
                }
            }
        });
        // console.log('winner',this.winnerArray);
    }
};
LotteryComponent.ctorParameters = () => [
    { type: _lotter_service__WEBPACK_IMPORTED_MODULE_2__.LotterService }
];
LotteryComponent.propDecorators = {
    lotteryData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
LotteryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lottery',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lottery_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lottery_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LotteryComponent);



/***/ }),

/***/ 5339:
/*!**************************************!*\
  !*** ./src/app/num/num.component.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumComponent": function() { return /* binding */ NumComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_num_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./num.component.html */ 2296);
/* harmony import */ var _num_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./num.component.css */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let NumComponent = class NumComponent {
    constructor() { }
    ngOnInit() {
    }
};
NumComponent.ctorParameters = () => [];
NumComponent.propDecorators = {
    lotNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NumComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-num',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_num_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_num_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], NumComponent);



/***/ }),

/***/ 2550:
/*!******************************************************!*\
  !*** ./src/app/person-item/person-item.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonItemComponent": function() { return /* binding */ PersonItemComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./person-item.component.html */ 7660);
/* harmony import */ var _person_item_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-item.component.css */ 1781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let PersonItemComponent = class PersonItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonItemComponent.ctorParameters = () => [];
PersonItemComponent.propDecorators = {
    person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PersonItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-person-item',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_person_item_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], PersonItemComponent);



/***/ }),

/***/ 4533:
/*!********************************************!*\
  !*** ./src/app/winner/winner.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerComponent": function() { return /* binding */ WinnerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_winner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./winner.component.html */ 7628);
/* harmony import */ var _winner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner.component.css */ 9747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let WinnerComponent = class WinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
WinnerComponent.ctorParameters = () => [];
WinnerComponent.propDecorators = {
    winner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
WinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-winner',
        template: _D_CodeProject_angular_lottery5000_node_modules_ngtools_webpack_src_loaders_direct_resource_js_winner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_winner_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], WinnerComponent);



/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 7761);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 6262:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/add-persion/add-persion.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formGroup\" (ngSubmit)=\"add()\">\n  <div class=\"flex flex-col items-center justify-center my-2 add-form sm:flex-col md:flex-row lg:flex-row xl:flex-row\">\n    <div class=\"w-auto mx-1 p-1 inline-block\">\n      <input\n        placeholder=\"你的姓名\"\n        [formControl]=\"yourNameControl\"\n        class=\"\n          pl-2\n          border-2 border-gray-200\n          h-8\n          leading-8\n          rounded\n          bg-gray-100\n          text-gray-800\n        \"\n        type=\"text\"\n      />\n    </div>\n\n    <div class=\"w-auto mx-1 p-1 inline-block\">\n      <input\n        placeholder=\"身份證至少後三碼\"\n        class=\"\n          pl-2\n          border-2 border-gray-200\n          h-8\n          leading-8\n          rounded\n          bg-gray-100\n          text-gray-800\n        \"\n        [formControl]=\"yourIdControl\"\n        type=\"text\"\n      />\n    </div>\n\n    <div\n      class=\"\n        mx-1\n        inline-block\n        flex flex-wrap\n        w-auto\n        justify-center\n        items-center\n      \"\n    >\n      <button\n        class=\"submitBTN inline-block px-2 mx-2 h-8 leading-8 cursor-pointer\"\n        type=\"submit\"\n        [disabled]=\"formGroup.invalid\"\n        [ngClass]=\"{'disabled': formGroup.invalid}\"\n      >\n        新增人員\n      </button>\n\n      <div\n        (click)=\"clearAll()\"\n        class=\"clearBtn h-8 leading-8 inline-block cursor-pointer px-2 mx-2\"\n      >\n        清除全部人員\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"flex items-center justify-between px-2 h-8 bg-gray-100 text-green-600 w-full\"\n>\n  <div class=\"flex flex-wrap items-center\">\n    <i class=\"fas fa-money-bill-wave\"></i>\n    <span class=\"mx-2\"> 加碼券 </span>\n  </div>\n\n  <div class=\"flex items-end h-8\">\n    <div class=\"h-6 leading-6 bg-white w-16 text-center border-gray-300 border-1 \">Week 1</div>\n  </div></div>\n\n<div class=\"w-full flex flex-col\">\n\n  <div>\n    <app-add-persion></app-add-persion>\n  \n  </div>\n \n  <div class=\"flex flex-wrap justify-center items-center w-full\">\n     <app-person-item *ngFor=\"let p of lotPersons\" [person]=\"p\"></app-person-item>\n  </div>\n\n  <div class=\"container m-4\">\n\n  <div class=\"grid xl:grid-cols-4 xl:gap-4  lg:grid-cols-3 lg:gap-4  md:grid-cols-3 md:gap-2 sm:grid-cols-2 sm:gap-2\"> \n      <div *ngFor=\"let item of lottDataArray\">\n        <app-lottery [lotteryData]=\"item\"> </app-lottery>\n      </div>\n  </div>\n\n</div>\n\n\n</div>\n\n");

/***/ }),

/***/ 9924:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lottery/lottery.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"\n    flex flex-col\n    w-full\n    bg-white\n    p-3\n    m-5\n    rounded\n    border-2 border-gray-200\n    lotter-block\n    relative\n  \"\n>\n\n<div class=\"wrap\" *ngIf=\"winnerArray && winnerArray.length > 0\">\n   <span class=\"ribbon6\"> 中獎 :{{lotteryData.price}}</span>\n</div>\n\n\n  <!-- title  -->\n  <div class=\"ml-2 flex justify-between\">\n    <div class=\"font-bold\">{{ lotteryData.title }}</div>\n    <div class=\"font-base font-normal mr-2 text-gray-400\">\n      {{ lotteryData.lotDate | date: 'yyyy/MM/dd' }}\n    </div>\n  </div>\n\n  <div class=\"flex flex-wrap w-full mt-3\">\n    \n    <app-num *ngFor=\"let i of lotteryData.lotNumber\" [lotNo]=\"i\"></app-num>\n  \n  </div>\n\n  <div class=\"flex flex-wrap w-full m-5 border-gray-200 border-1\">\n    <app-winner *ngFor=\"let n of winnerArray\" [winner]=\"n\"></app-winner>\n  </div>\n</div>\n");

/***/ }),

/***/ 2296:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/num/num.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inline-block w-auto px-3 bg-white text-red-500 font-bold rounded-md m-1 border-2 h-10 leading-10\">\n  {{ lotNo }}\n</div>\n");

/***/ }),

/***/ 7660:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/person-item/person-item.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inline-block rounded-2xl bg-blue-100 text-blue-800 px-3 py-1 mx-1\">\n  {{person.name}} <span class=\"text-xs text-gray-800 mx-1\">{{person.lastNum}}</span>\n</div>");

/***/ }),

/***/ 7628:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/winner/winner.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inline-block w-auto px-2 bg-yellow-100  font-bold text-orange-500  rounded-3xl m-1 border-2 border-yellow-200\">\n<i class=\"fas fa-award text-red-400\"></i>\n{{ winner.name }} \n<span class=\"text-sm text-gray-800 font-base \">({{winner.lastNum}}) </span>\n</div>");

/***/ }),

/***/ 89:
/*!*******************************************************!*\
  !*** ./src/app/add-persion/add-persion.component.css ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".clearBtn {\n  background-color: #b2dfdb;\n  border: 2px solid #4db6ac;\n  color: #009688;\n  font-weight: normal;\n  border-radius: 0.25rem;\n}\n\n.submitBTN {\n  background-color: #01579b;\n  border: 2px solid #0277bd;\n  color: #80d8ff;\n  border-radius: 0.25rem;\n\n}\n\n.submitBTN.disabled {\n  background-color: #DDD;\n  color: #777;\n  border:2px solid #CCC;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wZXJzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFkZC1wZXJzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZmRiO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGRiNmFjO1xuICBjb2xvcjogIzAwOTY4ODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnN1Ym1pdEJUTiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OWI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjc3YmQ7XG4gIGNvbG9yOiAjODBkOGZmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXG59XG5cbi5zdWJtaXRCVE4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBjb2xvcjogIzc3NztcbiAgYm9yZGVyOjJweCBzb2xpZCAjQ0NDO1xufVxuIl19 */";

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */";

/***/ }),

/***/ 2518:
/*!***********************************************!*\
  !*** ./src/app/lottery/lottery.component.css ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = ".lotter-block {\n  min-height: 250px;\n}\n\n.wrap {\n  width: 100%;\n  height: 188px;\n  position: absolute;\n  top: -8px;\n  left: 8px;\n  overflow: hidden;\n}\n\n.wrap:before,\n.wrap:after {\n  content: '';\n  position: absolute;\n}\n\n.wrap:before {\n  width: 40px;\n  height: 8px;\n  right: 60px;\n  background: #857e45;\n  border-radius: 8px 8px 0px 0px;\n}\n\n.wrap:after {\n  width: 8px;\n  height: 49px;\n  right: 0px;\n  top: 53px;\n  background: #857e45;\n  border-radius: 0px 8px 8px 0px;\n}\n\n.ribbon6 {\n  width: 158px;\n  height: 26px;\n  line-height: 26px;\n  position: absolute;\n  top: 30px;\n  right: -50px;\n  z-index: 2;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 1px dashed;\n  box-shadow: 0 0 0 3px #c5c33e, 0px 21px 5px -18px rgb(0 0 0 / 60%);\n  background: #f3e567;\n  text-align: left;\n  padding-left: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBRWhCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0VBQWtFO0VBQ2xFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImxvdHRlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb3R0ZXItYmxvY2sge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbn1cblxuLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwOmJlZm9yZSxcbi53cmFwOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi53cmFwOmJlZm9yZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM4NTdlNDU7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbn1cbi53cmFwOmFmdGVyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDUzcHg7XG4gIGJhY2tncm91bmQ6ICM4NTdlNDU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcbn1cbi5yaWJib242IHtcbiAgd2lkdGg6IDE1OHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC01MHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXI6IDFweCBkYXNoZWQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjYzVjMzNlLCAwcHggMjFweCA1cHggLTE4cHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgYmFja2dyb3VuZDogI2YzZTU2NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuIl19 */";

/***/ }),

/***/ 6646:
/*!***************************************!*\
  !*** ./src/app/num/num.component.css ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudW0uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 1781:
/*!*******************************************************!*\
  !*** ./src/app/person-item/person-item.component.css ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24taXRlbS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 9747:
/*!*********************************************!*\
  !*** ./src/app/winner/winner.component.css ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5uZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map