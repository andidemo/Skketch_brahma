(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+QNl":
/*!************************************!*\
  !*** ./src/app/generic.service.ts ***!
  \************************************/
/*! exports provided: GenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericService", function() { return GenericService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GenericService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "https://api.first.org/data/v1/news";
        this.sketchApiurl = "https://api.openbrewerydb.org/breweries";
    }
    getNews() {
        return this.httpClient.get(this.apiUrl);
    }
    getData(state) {
        if (state) {
            return this.httpClient.get(this.sketchApiurl + "?by_state=" + state);
        }
        else {
            return this.httpClient.get(this.sketchApiurl);
        }
    }
    getSearch(search) {
        if (search) {
            return this.httpClient.get(this.sketchApiurl + "/search?query=" + search);
        }
        else {
            return this.httpClient.get(this.sketchApiurl);
        }
    }
}
GenericService.ɵfac = function GenericService_Factory(t) { return new (t || GenericService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GenericService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenericService, factory: GenericService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andi.p\Documents\open App\openfinancial\src\main.ts */"zUnb");


/***/ }),

/***/ "6xi8":
/*!********************************************************!*\
  !*** ./src/app/component/badabro/badabro.component.ts ***!
  \********************************************************/
/*! exports provided: BadabroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadabroComponent", function() { return BadabroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "/TIM");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "ziQ1");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "vBe5");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "RhHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function BadabroComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ratingobj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ratingobj_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ratingobj_r7.name);
} }
function BadabroComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conobj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", conobj_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conobj_r8.name);
} }
function BadabroComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photoobj_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", photoobj_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photoobj_r9.name);
} }
function BadabroComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subobj_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subobj_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subobj_r10.name);
} }
function BadabroComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comobj_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", comobj_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comobj_r11.name);
} }
function BadabroComponent_ul_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.name, " ");
} }
function BadabroComponent_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", day_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r13.company);
} }
class BadabroComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.ratingBrand = [
            { value: 5, name: "Samsung" },
            { value: 3, name: "Nokia" },
            { value: 3, name: "Redmi" },
            { value: 4, name: "Oneplus" },
            { value: 2, name: "Oppo" },
            { value: 1, name: "Vivo" },
            { value: 1, name: "Others" },
        ];
        this.numberOfContact = [
            { value: 5, name: "300+" },
            { value: 4, name: "200 - 300" },
            { value: 3, name: "150- 200 " },
            { value: 2, name: "100 - 150" },
            { value: 1, name: "0 - 100" },
        ];
        this.photoclarity = [
            { value: 5, name: "80 - 100" },
            { value: 3, name: "40 - 60" },
            { value: 4, name: "60 - 80" },
            { value: 2, name: "20 - 40" },
            { value: 1, name: "0 - 20 " },
        ];
        this.noofSubmissions = [
            { value: 5, name: "1" },
            { value: 4, name: "2" },
            { value: 3, name: "3" },
            { value: 2, name: "4" },
            { value: 1, name: "4+" },
        ];
        this.company = [
            { value: 5, name: "Tyre 1" },
            { value: 3, name: "Tyre 2" },
            { value: 2, name: "Tyre 3" },
            { value: 1, name: "Unknown" },
        ];
        this.server = [
            { value: 10, name: "server 10" },
            { value: 9, name: "server 9" },
            { value: 8, name: "server 8" },
            { value: 7, name: "server 7" },
            { value: 6, name: "server 6" },
            { value: 5, name: "server 5" },
            { value: 4, name: "server 4" },
            { value: 3, name: "server 3" },
            { value: 2, name: "server 2" },
            { value: 1, name: "server 1" },
        ];
        this.days = [
            { company: 'Monday', value: 0 },
            { company: 'Tuesday', value: 1 },
            { company: 'Wednesday', value: 2 },
            { company: 'Friday', value: 3 },
        ];
        this.StatsBarChart = [{
                level: [{
                        level: 5,
                        points: 4
                    },
                    {
                        level: 4,
                        points: 0
                    },
                    {
                        level: 3,
                        points: 20
                    },
                    {
                        level: 2,
                        points: 10
                    },
                    {
                        level: 1,
                        points: 1
                    },]
            },
            {
                level: [{
                        level: 5,
                        points: 3
                    },
                    {
                        level: 4,
                        points: 2
                    },
                    {
                        level: 3,
                        points: 10
                    },
                    {
                        level: 2,
                        points: 14
                    },
                    {
                        level: 1,
                        points: 4
                    },]
            },
            {
                level: [{
                        level: 5,
                        points: 2
                    },
                    {
                        level: 4,
                        points: 4
                    },
                    {
                        level: 3,
                        points: 10
                    },
                    {
                        level: 2,
                        points: 5
                    },
                    {
                        level: 1,
                        points: 20
                    },]
            },
            {
                level: [{
                        level: 5,
                        points: 4
                    },
                    {
                        level: 4,
                        points: 3
                    },
                    {
                        level: 3,
                        points: 2
                    },
                    {
                        level: 2,
                        points: 40
                    },
                    {
                        level: 1,
                        points: 24
                    },]
            }
        ];
        this.currentRate = 8;
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
        this.serverdata = [];
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    ngOnInit() {
        console.log(this.name, this.rating);
        this.weitageCalculator = this.formBuilder.group({
            rating: [''],
            contact: [''],
            photo: [''],
            submission: [''],
            company: [''],
        });
        this.initSvg();
        this.initAxis({ value: 0 });
        this.drawAxis();
        this.drawBars({ value: 0 });
    }
    calculator() {
        this.weightageValue = this.weitageCalculator.value;
        this.weightageSeperatevalue = Number(this.weightageValue.company) + Number(this.weightageValue.contact) + Number(this.weightageValue.photo) + Number(this.weightageValue.rating) + Number(this.weightageValue.submission) / 5;
        this.weitageCalculator.reset();
    }
    ratingcal() {
        this.name = '';
        this.rating = '';
    }
    customerrating() {
        this.serverdata = this.server.filter(ser => ser.value <= Number(this.rating));
        console.log(this.serverdata);
    }
    initSvg() {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('#barChart')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 900 500');
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
    initAxis(val) {
        let chartVal = [];
        console.log(this.StatsBarChart[val.value].level);
        chartVal = this.StatsBarChart[val.value].level;
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().rangeRound([0, this.width]).padding(0.1);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().rangeRound([this.height, 0]);
        this.x.domain(chartVal.map((d) => d.level));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_3__["max"](chartVal, (d) => d.points)]);
    }
    drawAxis() {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x));
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('points');
    }
    drawBars(val) {
        let chartVal = [];
        chartVal = this.StatsBarChart[val.value].level;
        this.g.selectAll('.bar')
            .data(chartVal)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => this.x(d.level))
            .attr('y', (d) => this.y(d.points))
            .attr('width', this.x.bandwidth())
            .attr('fill', '#498bfc')
            .attr('height', (d) => this.height - this.y(d.points));
    }
}
BadabroComponent.ɵfac = function BadabroComponent_Factory(t) { return new (t || BadabroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
BadabroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadabroComponent, selectors: [["app-badabro"]], decls: 58, vars: 12, consts: [[1, "container"], [1, "title"], [1, "frm", 3, "formGroup"], ["for", "rating"], ["formControlName", "rating"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "contact"], ["formControlName", "contact"], ["for", "photo"], ["formControlName", "photo"], ["for", "Submission"], ["formControlName", "submission"], ["for", "Company"], ["formControlName", "company"], [3, "click"], [1, "conainer"], ["for", "cname"], ["type", "text", "name", "name", "id", "name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "rating", "id", "rating", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "container", "chrt_cont"], ["for", "select"], ["name", "chart3", "id", "chart1", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "barChart"], [3, "value"], [3, "ngValue"]], template: function BadabroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Weightage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BadabroComponent_option_8_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BadabroComponent_option_13_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BadabroComponent_option_18_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BadabroComponent_option_23_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BadabroComponent_option_28_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BadabroComponent_Template_button_click_30_listener() { return ctx.calculator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Task 2\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BadabroComponent_Template_input_ngModelChange_40_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BadabroComponent_Template_input_ngModelChange_43_listener($event) { return ctx.rating = $event; })("ngModelChange", function BadabroComponent_Template_input_ngModelChange_43_listener() { return ctx.customerrating(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BadabroComponent_ul_45_Template, 3, 1, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Task 3\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Select a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BadabroComponent_Template_select_ngModelChange_53_listener($event) { return ctx.date = $event; })("change", function BadabroComponent_Template_select_change_53_listener() { ctx.initAxis(ctx.date); ctx.drawBars(ctx.date); ctx.initSvg(); return ctx.drawAxis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BadabroComponent_option_54_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Collection Report with bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.weitageCalculator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numberOfContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photoclarity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noofSubmissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Weightage Value:", ctx.weightageSeperatevalue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serverdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".title[_ngcontent-%COMP%]\r\n{\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n.frm[_ngcontent-%COMP%]\r\n{\r\n    max-width: 500px;\r\n    margin: auto;\r\n    padding: 15px;\r\n  \r\n}\r\n.frm[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0;\r\n}\r\n.frm[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n}\r\nselect[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 25px;\r\n}\r\n.chrt_cont[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    margin: 60px auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JhZGFicm8vYmFkYWJyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9iYWRhYnJvL2JhZGFicm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVxyXG57XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG4uZnJtXHJcbntcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIFxyXG59XHJcbi5mcm0gPiBkaXYge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uZnJtID4gZGl2ID4gbGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4uY2hydF9jb250IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadabroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-badabro',
                templateUrl: './badabro.component.html',
                styleUrls: ['./badabro.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 30, vars: 0, consts: [[1, "container", "flx_itm"], [1, "logo"], ["src", "assets/logo.png", "alt", "logo"], [1, "right_menu"], [1, "flx_itm"], ["href", "/html/"], ["href", "/css/"], ["href", "/js/"], [1, "btn_css"], ["href", "", 1, "btn_login"], ["href", "", 1, "btn_get"], [1, "container-fluid"], [1, "container"], ["src", "assets/collect_img-video.png", "alt", "collect_img-video"], ["for", "Monthly income"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "We make it Super Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Eligibility Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Monthly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]\r\n{\r\nmax-width: 1500px;\r\npadding: 0 130px;\r\n}\r\n\r\n.flx_itm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{width:123px;\r\n      height:123px;\r\n}\r\n\r\n.right_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        text-align: left;\r\n        font-family: \"Open Sans\";\r\n        font-size:25px;\r\n        line-height: 34px;\r\n        letter-spacing: 0px;\r\n        color: #222222;\r\n        text-decoration: none;\r\n        padding: 0 25px;\r\n    }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%] {\r\n        margin-left:23px;\r\n    }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        margin: 0 12px;\r\n        border-radius: 24px;\r\n        padding: 13px 20px;\r\n        min-width:118px;\r\n        height:45px;\r\n        font-family: 'Montserrat', sans-serif;\r\n        font-size:16px;\r\n        line-height: 19px;\r\n        background: transparent;\r\n        text-decoration: none;\r\n        box-shadow: 0px 0px 20px #00000033;\r\n        }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%]   .btn_login[_ngcontent-%COMP%]\r\n        {\r\n            border: 2px solid #663399;\r\n            color: #663399;\r\n        }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%]   .btn_login[_ngcontent-%COMP%]:hover{\r\n                background: transparent linear-gradient(90deg, #9F62C9 0%, #663399 100%) 0% 0% no-repeat padding-box;\r\n            color: white;\r\n            border: 2px solid transparent;\r\n            }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%]   .btn_get[_ngcontent-%COMP%]\r\n        {\r\n            background: transparent linear-gradient(90deg, #9F62C9 0%, #663399 100%) 0% 0% no-repeat padding-box;\r\n            color: white;\r\n            border: 2px solid transparent;\r\n        }\r\n\r\n.right_menu[_ngcontent-%COMP%]   .btn_css[_ngcontent-%COMP%]   .btn_get[_ngcontent-%COMP%]:hover{\r\n                border: 2px solid #663399;\r\n            color: #663399;\r\n            background: transparent;\r\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7O0FBRUEsTUFBTSxXQUFXO01BQ1gsWUFBWTtBQUNsQjs7QUFFQTtRQUNRLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25COztBQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUNJO1FBQ0EsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxxQ0FBcUM7UUFDckMsY0FBYztRQUNkLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLGtDQUFrQztRQUNsQzs7QUFDQTs7WUFFSSx5QkFBeUI7WUFDekIsY0FBYztRQUNsQjs7QUFDSTtnQkFDSSxvR0FBb0c7WUFDeEcsWUFBWTtZQUNaLDZCQUE2QjtZQUM3Qjs7QUFFSDs7WUFFRyxvR0FBb0c7WUFDcEcsWUFBWTtZQUNaLDZCQUE2QjtRQUNqQzs7QUFDSTtnQkFDSSx5QkFBeUI7WUFDN0IsY0FBYztZQUNkLHVCQUF1QjtZQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG5tYXgtd2lkdGg6IDE1MDBweDtcclxucGFkZGluZzogMCAxMzBweDtcclxufVxyXG5cclxuLmZseF9pdG0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4ubG9nb3t3aWR0aDoxMjNweDtcclxuICAgICAgaGVpZ2h0OjEyM3B4O1xyXG59XHJcblxyXG4ucmlnaHRfbWVudSAgYXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHRfbWVudSAuYnRuX2NzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjNweDtcclxuICAgIH1cclxuICAgICAgICAucmlnaHRfbWVudSAuYnRuX2NzcyBhe1xyXG4gICAgICAgIG1hcmdpbjogMCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDoxMThweDtcclxuICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzAwMDAwMDMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHRfbWVudSAuYnRuX2NzcyAuYnRuX2xvZ2luXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjYzMzk5O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2MzM5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodF9tZW51IC5idG5fY3NzIC5idG5fbG9naW46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5RjYyQzkgMCUsICM2NjMzOTkgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5yaWdodF9tZW51IC5idG5fY3NzIC5idG5fZ2V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5RjYyQzkgMCUsICM2NjMzOTkgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0X21lbnUgLmJ0bl9jc3MgLmJ0bl9nZXQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjYzMzk5O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2MzM5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'openfinancial';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Th54":
/*!********************************************************************!*\
  !*** ./src/app/component/sketch-brahma/sketch-brahma.component.ts ***!
  \********************************************************************/
/*! exports provided: SketchBrahmaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchBrahmaComponent", function() { return SketchBrahmaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_generic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/generic.service */ "+QNl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SketchBrahmaComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.state);
} }
function SketchBrahmaComponent_ng_container_28_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.brewery_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.city);
} }
function SketchBrahmaComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SketchBrahmaComponent_ng_container_28_tr_1_Template, 11, 5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sketchData);
} }
function SketchBrahmaComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Uh oh! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We couldn't find any content with these filters. Please try a broader search.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SketchBrahmaComponent {
    constructor(genericservice) {
        this.genericservice = genericservice;
        this.sketchData = [];
    }
    ngOnInit() {
        this.getStatedata();
        this.getDetails();
    }
    selectAccount(event) {
        console.log(event.target.value);
        let state = event.target.value;
        this.genericservice.getData(state.toLowerCase()).subscribe((data) => {
            this.sketchData = data;
            console.log(data);
        });
    }
    getDetails() {
        let state = "";
        this.genericservice.getData(state).subscribe((data) => {
            this.sketchData = data;
            console.log(data);
        });
    }
    getStatedata() {
        let state = "";
        this.genericservice.getData(state).subscribe((data) => {
            this.stateList = data;
            console.log(data);
        });
    }
    clearFilter() {
        this.serach = '';
        this.getStatedata();
        this.getDetails();
    }
    serchByname(evet) {
        console.log(evet.target.value);
        this.genericservice.getSearch(evet.target.value).subscribe((data) => {
            this.sketchData = data;
            console.log(data);
        });
    }
}
SketchBrahmaComponent.ɵfac = function SketchBrahmaComponent_Factory(t) { return new (t || SketchBrahmaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_generic_service__WEBPACK_IMPORTED_MODULE_1__["GenericService"])); };
SketchBrahmaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SketchBrahmaComponent, selectors: [["app-sketch-brahma"]], decls: 30, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], ["name", "state", "id", "state", 1, "form-control", "form-select", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["type", "text", "name", "search", "id", "search", "placeholder", "Serach", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "submit", 1, "btn-primary", 3, "click"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngIf"], [3, "value"], [4, "ngFor", "ngForOf"]], template: function SketchBrahmaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sketch-brahma works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SketchBrahmaComponent_Template_select_change_5_listener($event) { return ctx.selectAccount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select your State.!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SketchBrahmaComponent_option_8_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SketchBrahmaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.serach = $event; })("keyup", function SketchBrahmaComponent_Template_input_keyup_10_listener($event) { return ctx.serchByname($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SketchBrahmaComponent_Template_button_click_12_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clear Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Brewery_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SketchBrahmaComponent_ng_container_28_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SketchBrahmaComponent_div_29_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.serach);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sketchData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sketchData.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9za2V0Y2gtYnJhaG1hL3NrZXRjaC1icmFobWEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SketchBrahmaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sketch-brahma',
                templateUrl: './sketch-brahma.component.html',
                styleUrls: ['./sketch-brahma.component.css']
            }]
    }], function () { return [{ type: src_app_generic_service__WEBPACK_IMPORTED_MODULE_1__["GenericService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _component_badabro_badabro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/badabro/badabro.component */ "6xi8");
/* harmony import */ var _component_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/news/news.component */ "r3U5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _component_sketch_brahma_sketch_brahma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/sketch-brahma/sketch-brahma.component */ "Th54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_badabro_badabro_component__WEBPACK_IMPORTED_MODULE_5__["BadabroComponent"],
        _component_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
        _component_sketch_brahma_sketch_brahma_component__WEBPACK_IMPORTED_MODULE_9__["SketchBrahmaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_badabro_badabro_component__WEBPACK_IMPORTED_MODULE_5__["BadabroComponent"],
                    _component_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
                    _component_sketch_brahma_sketch_brahma_component__WEBPACK_IMPORTED_MODULE_9__["SketchBrahmaComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "r3U5":
/*!**************************************************!*\
  !*** ./src/app/component/news/news.component.ts ***!
  \**************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/generic.service */ "+QNl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function NewsComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.published);
} }
const _c0 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function NewsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsComponent_div_25_div_2_Template, 15, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NewsComponent_div_25_Template_pagination_controls_pageChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.cardlistdata, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function NewsComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.published);
} }
function NewsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_26_div_1_Template, 17, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NewsComponent_div_26_Template_pagination_controls_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.cardDatas, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.p)));
} }
function NewsComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required and must be a valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_57_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fval.firstName.errors.required);
} }
function NewsComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " last Name is required and must be a valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_62_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.fval.lastName.errors.required);
} }
function NewsComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide your address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_67_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fval.address.errors.required);
} }
function NewsComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r21.name);
} }
function NewsComponent_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select your country! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_75_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.fval.country.errors.required);
} }
function NewsComponent_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_80_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_80_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsComponent_div_80_div_2_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.fval.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.fval.email.errors.email);
} }
function NewsComponent_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide your code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_87_div_1_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.fval.code.errors.required);
} }
function NewsComponent_div_90_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phonenumber must be at least 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please provide your phone number.! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsComponent_div_90_div_3_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.fval.phone.errors.minlength);
} }
const _c1 = function (a0, a1) { return { "viewtoggle_btn": a0, "btncss": a1 }; };
const _c2 = function (a0) { return { "is-invalid": a0 }; };
class NewsComponent {
    constructor(genericservice, formBuilder) {
        this.genericservice = genericservice;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.p = 1;
        this.cardlistdata = [];
        this.cardDatas = [];
        this.cardBln = true;
        this.countries = [
            { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
            { code: "AL", code3: "ALB", name: "Albania", number: "008" },
            { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
            { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
            { code: "AD", code3: "AND", name: "Andorra", number: "020" },
            { code: "AO", code3: "AGO", name: "Angola", number: "024" },
            { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
            { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
            { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
            { code: "AR", code3: "ARG", name: "Argentina", number: "032" },
            { code: "AM", code3: "ARM", name: "Armenia", number: "051" },
            { code: "AW", code3: "ABW", name: "Aruba", number: "533" },
            { code: "AU", code3: "AUS", name: "Australia", number: "036" },
            { code: "AT", code3: "AUT", name: "Austria", number: "040" },
            { code: "AZ", code3: "AZE", name: "Azerbaijan", number: "031" },
            { code: "BS", code3: "BHS", name: "Bahamas (the)", number: "044" },
            { code: "BH", code3: "BHR", name: "Bahrain", number: "048" },
            { code: "BD", code3: "BGD", name: "Bangladesh", number: "050" },
            { code: "BB", code3: "BRB", name: "Barbados", number: "052" },
            { code: "BY", code3: "BLR", name: "Belarus", number: "112" },
            { code: "BE", code3: "BEL", name: "Belgium", number: "056" },
            { code: "BZ", code3: "BLZ", name: "Belize", number: "084" },
            { code: "BJ", code3: "BEN", name: "Benin", number: "204" },
            { code: "BM", code3: "BMU", name: "Bermuda", number: "060" },
            { code: "BT", code3: "BTN", name: "Bhutan", number: "064" },
            { code: "BO", code3: "BOL", name: "Bolivia (Plurinational State of)", number: "068" },
            { code: "BQ", code3: "BES", name: "Bonaire, Sint Eustatius and Saba", number: "535" },
            { code: "BA", code3: "BIH", name: "Bosnia and Herzegovina", number: "070" },
            { code: "BW", code3: "BWA", name: "Botswana", number: "072" },
            { code: "BV", code3: "BVT", name: "Bouvet Island", number: "074" },
            { code: "BR", code3: "BRA", name: "Brazil", number: "076" },
            { code: "IO", code3: "IOT", name: "British Indian Ocean Territory (the)", number: "086" },
            { code: "BN", code3: "BRN", name: "Brunei Darussalam", number: "096" },
            { code: "BG", code3: "BGR", name: "Bulgaria", number: "100" },
            { code: "BF", code3: "BFA", name: "Burkina Faso", number: "854" },
            { code: "BI", code3: "BDI", name: "Burundi", number: "108" },
            { code: "CV", code3: "CPV", name: "Cabo Verde", number: "132" },
            { code: "KH", code3: "KHM", name: "Cambodia", number: "116" },
            { code: "CM", code3: "CMR", name: "Cameroon", number: "120" },
            { code: "CA", code3: "CAN", name: "Canada", number: "124" },
            { code: "KY", code3: "CYM", name: "Cayman Islands (the)", number: "136" },
            { code: "CF", code3: "CAF", name: "Central African Republic (the)", number: "140" },
            { code: "TD", code3: "TCD", name: "Chad", number: "148" },
            { code: "CL", code3: "CHL", name: "Chile", number: "152" },
            { code: "CN", code3: "CHN", name: "China", number: "156" },
            { code: "CX", code3: "CXR", name: "Christmas Island", number: "162" },
            { code: "CC", code3: "CCK", name: "Cocos (Keeling) Islands (the)", number: "166" },
            { code: "CO", code3: "COL", name: "Colombia", number: "170" },
            { code: "KM", code3: "COM", name: "Comoros (the)", number: "174" },
            { code: "CD", code3: "COD", name: "Congo (the Democratic Republic of the)", number: "180" },
            { code: "CG", code3: "COG", name: "Congo (the)", number: "178" },
            { code: "CK", code3: "COK", name: "Cook Islands (the)", number: "184" },
            { code: "CR", code3: "CRI", name: "Costa Rica", number: "188" },
            { code: "HR", code3: "HRV", name: "Croatia", number: "191" },
            { code: "CU", code3: "CUB", name: "Cuba", number: "192" },
            { code: "CW", code3: "CUW", name: "Curaçao", number: "531" },
            { code: "CY", code3: "CYP", name: "Cyprus", number: "196" },
            { code: "CZ", code3: "CZE", name: "Czechia", number: "203" },
            { code: "CI", code3: "CIV", name: "Côte d'Ivoire", number: "384" },
            { code: "DK", code3: "DNK", name: "Denmark", number: "208" },
            { code: "DJ", code3: "DJI", name: "Djibouti", number: "262" },
            { code: "DM", code3: "DMA", name: "Dominica", number: "212" },
            { code: "DO", code3: "DOM", name: "Dominican Republic (the)", number: "214" },
            { code: "EC", code3: "ECU", name: "Ecuador", number: "218" },
            { code: "EG", code3: "EGY", name: "Egypt", number: "818" },
            { code: "SV", code3: "SLV", name: "El Salvador", number: "222" },
            { code: "GQ", code3: "GNQ", name: "Equatorial Guinea", number: "226" },
            { code: "ER", code3: "ERI", name: "Eritrea", number: "232" },
            { code: "EE", code3: "EST", name: "Estonia", number: "233" },
            { code: "SZ", code3: "SWZ", name: "Eswatini", number: "748" },
            { code: "ET", code3: "ETH", name: "Ethiopia", number: "231" },
            { code: "FK", code3: "FLK", name: "Falkland Islands (the) [Malvinas]", number: "238" },
            { code: "FO", code3: "FRO", name: "Faroe Islands (the)", number: "234" },
            { code: "FJ", code3: "FJI", name: "Fiji", number: "242" },
            { code: "FI", code3: "FIN", name: "Finland", number: "246" },
            { code: "FR", code3: "FRA", name: "France", number: "250" },
            { code: "GF", code3: "GUF", name: "French Guiana", number: "254" },
            { code: "PF", code3: "PYF", name: "French Polynesia", number: "258" },
            { code: "TF", code3: "ATF", name: "French Southern Territories (the)", number: "260" },
            { code: "GA", code3: "GAB", name: "Gabon", number: "266" },
            { code: "GM", code3: "GMB", name: "Gambia (the)", number: "270" },
            { code: "GE", code3: "GEO", name: "Georgia", number: "268" },
            { code: "DE", code3: "DEU", name: "Germany", number: "276" },
            { code: "GH", code3: "GHA", name: "Ghana", number: "288" },
            { code: "GI", code3: "GIB", name: "Gibraltar", number: "292" },
            { code: "GR", code3: "GRC", name: "Greece", number: "300" },
            { code: "GL", code3: "GRL", name: "Greenland", number: "304" },
            { code: "GD", code3: "GRD", name: "Grenada", number: "308" },
            { code: "GP", code3: "GLP", name: "Guadeloupe", number: "312" },
            { code: "GU", code3: "GUM", name: "Guam", number: "316" },
            { code: "GT", code3: "GTM", name: "Guatemala", number: "320" },
            { code: "GG", code3: "GGY", name: "Guernsey", number: "831" },
            { code: "GN", code3: "GIN", name: "Guinea", number: "324" },
            { code: "GW", code3: "GNB", name: "Guinea-Bissau", number: "624" },
            { code: "GY", code3: "GUY", name: "Guyana", number: "328" },
            { code: "HT", code3: "HTI", name: "Haiti", number: "332" },
            { code: "HM", code3: "HMD", name: "Heard Island and McDonald Islands", number: "334" },
            { code: "VA", code3: "VAT", name: "Holy See (the)", number: "336" },
            { code: "HN", code3: "HND", name: "Honduras", number: "340" },
            { code: "HK", code3: "HKG", name: "Hong Kong", number: "344" },
            { code: "HU", code3: "HUN", name: "Hungary", number: "348" },
            { code: "IS", code3: "ISL", name: "Iceland", number: "352" },
            { code: "IN", code3: "IND", name: "India", number: "356" },
            { code: "ID", code3: "IDN", name: "Indonesia", number: "360" },
            { code: "IR", code3: "IRN", name: "Iran (Islamic Republic of)", number: "364" },
            { code: "IQ", code3: "IRQ", name: "Iraq", number: "368" },
            { code: "IE", code3: "IRL", name: "Ireland", number: "372" },
            { code: "IM", code3: "IMN", name: "Isle of Man", number: "833" },
            { code: "IL", code3: "ISR", name: "Israel", number: "376" },
            { code: "IT", code3: "ITA", name: "Italy", number: "380" },
            { code: "JM", code3: "JAM", name: "Jamaica", number: "388" },
            { code: "JP", code3: "JPN", name: "Japan", number: "392" },
            { code: "JE", code3: "JEY", name: "Jersey", number: "832" },
            { code: "JO", code3: "JOR", name: "Jordan", number: "400" },
            { code: "KZ", code3: "KAZ", name: "Kazakhstan", number: "398" },
            { code: "KE", code3: "KEN", name: "Kenya", number: "404" },
            { code: "KI", code3: "KIR", name: "Kiribati", number: "296" },
            { code: "KP", code3: "PRK", name: "Korea (the Democratic People's Republic of)", number: "408" },
            { code: "KR", code3: "KOR", name: "Korea (the Republic of)", number: "410" },
            { code: "KW", code3: "KWT", name: "Kuwait", number: "414" },
            { code: "KG", code3: "KGZ", name: "Kyrgyzstan", number: "417" },
            { code: "LA", code3: "LAO", name: "Lao People's Democratic Republic (the)", number: "418" },
            { code: "LV", code3: "LVA", name: "Latvia", number: "428" },
            { code: "LB", code3: "LBN", name: "Lebanon", number: "422" },
            { code: "LS", code3: "LSO", name: "Lesotho", number: "426" },
            { code: "LR", code3: "LBR", name: "Liberia", number: "430" },
            { code: "LY", code3: "LBY", name: "Libya", number: "434" },
            { code: "LI", code3: "LIE", name: "Liechtenstein", number: "438" },
            { code: "LT", code3: "LTU", name: "Lithuania", number: "440" },
            { code: "LU", code3: "LUX", name: "Luxembourg", number: "442" },
            { code: "MO", code3: "MAC", name: "Macao", number: "446" },
            { code: "MG", code3: "MDG", name: "Madagascar", number: "450" },
            { code: "MW", code3: "MWI", name: "Malawi", number: "454" },
            { code: "MY", code3: "MYS", name: "Malaysia", number: "458" },
            { code: "MV", code3: "MDV", name: "Maldives", number: "462" },
            { code: "ML", code3: "MLI", name: "Mali", number: "466" },
            { code: "MT", code3: "MLT", name: "Malta", number: "470" },
            { code: "MH", code3: "MHL", name: "Marshall Islands (the)", number: "584" },
            { code: "MQ", code3: "MTQ", name: "Martinique", number: "474" },
            { code: "MR", code3: "MRT", name: "Mauritania", number: "478" },
            { code: "MU", code3: "MUS", name: "Mauritius", number: "480" },
            { code: "YT", code3: "MYT", name: "Mayotte", number: "175" },
            { code: "MX", code3: "MEX", name: "Mexico", number: "484" },
            { code: "FM", code3: "FSM", name: "Micronesia (Federated States of)", number: "583" },
            { code: "MD", code3: "MDA", name: "Moldova (the Republic of)", number: "498" },
            { code: "MC", code3: "MCO", name: "Monaco", number: "492" },
            { code: "MN", code3: "MNG", name: "Mongolia", number: "496" },
            { code: "ME", code3: "MNE", name: "Montenegro", number: "499" },
            { code: "MS", code3: "MSR", name: "Montserrat", number: "500" },
            { code: "MA", code3: "MAR", name: "Morocco", number: "504" },
            { code: "MZ", code3: "MOZ", name: "Mozambique", number: "508" },
            { code: "MM", code3: "MMR", name: "Myanmar", number: "104" },
            { code: "NA", code3: "NAM", name: "Namibia", number: "516" },
            { code: "NR", code3: "NRU", name: "Nauru", number: "520" },
            { code: "NP", code3: "NPL", name: "Nepal", number: "524" },
            { code: "NL", code3: "NLD", name: "Netherlands (the)", number: "528" },
            { code: "NC", code3: "NCL", name: "New Caledonia", number: "540" },
            { code: "NZ", code3: "NZL", name: "New Zealand", number: "554" },
            { code: "NI", code3: "NIC", name: "Nicaragua", number: "558" },
            { code: "NE", code3: "NER", name: "Niger (the)", number: "562" },
            { code: "NG", code3: "NGA", name: "Nigeria", number: "566" },
            { code: "NU", code3: "NIU", name: "Niue", number: "570" },
            { code: "NF", code3: "NFK", name: "Norfolk Island", number: "574" },
            { code: "MP", code3: "MNP", name: "Northern Mariana Islands (the)", number: "580" },
            { code: "NO", code3: "NOR", name: "Norway", number: "578" },
            { code: "OM", code3: "OMN", name: "Oman", number: "512" },
            { code: "PK", code3: "PAK", name: "Pakistan", number: "586" },
            { code: "PW", code3: "PLW", name: "Palau", number: "585" },
            { code: "PS", code3: "PSE", name: "Palestine, State of", number: "275" },
            { code: "PA", code3: "PAN", name: "Panama", number: "591" },
            { code: "PG", code3: "PNG", name: "Papua New Guinea", number: "598" },
            { code: "PY", code3: "PRY", name: "Paraguay", number: "600" },
            { code: "PE", code3: "PER", name: "Peru", number: "604" },
            { code: "PH", code3: "PHL", name: "Philippines (the)", number: "608" },
            { code: "PN", code3: "PCN", name: "Pitcairn", number: "612" },
            { code: "PL", code3: "POL", name: "Poland", number: "616" },
            { code: "PT", code3: "PRT", name: "Portugal", number: "620" },
            { code: "PR", code3: "PRI", name: "Puerto Rico", number: "630" },
            { code: "QA", code3: "QAT", name: "Qatar", number: "634" },
            { code: "MK", code3: "MKD", name: "Republic of North Macedonia", number: "807" },
            { code: "RO", code3: "ROU", name: "Romania", number: "642" },
            { code: "RU", code3: "RUS", name: "Russian Federation (the)", number: "643" },
            { code: "RW", code3: "RWA", name: "Rwanda", number: "646" },
            { code: "RE", code3: "REU", name: "Réunion", number: "638" },
            { code: "BL", code3: "BLM", name: "Saint Barthélemy", number: "652" },
            { code: "SH", code3: "SHN", name: "Saint Helena, Ascension and Tristan da Cunha", number: "654" },
            { code: "KN", code3: "KNA", name: "Saint Kitts and Nevis", number: "659" },
            { code: "LC", code3: "LCA", name: "Saint Lucia", number: "662" },
            { code: "MF", code3: "MAF", name: "Saint Martin (French part)", number: "663" },
            { code: "PM", code3: "SPM", name: "Saint Pierre and Miquelon", number: "666" },
            { code: "VC", code3: "VCT", name: "Saint Vincent and the Grenadines", number: "670" },
            { code: "WS", code3: "WSM", name: "Samoa", number: "882" },
            { code: "SM", code3: "SMR", name: "San Marino", number: "674" },
            { code: "ST", code3: "STP", name: "Sao Tome and Principe", number: "678" },
            { code: "SA", code3: "SAU", name: "Saudi Arabia", number: "682" },
            { code: "SN", code3: "SEN", name: "Senegal", number: "686" },
            { code: "RS", code3: "SRB", name: "Serbia", number: "688" },
            { code: "SC", code3: "SYC", name: "Seychelles", number: "690" },
            { code: "SL", code3: "SLE", name: "Sierra Leone", number: "694" },
            { code: "SG", code3: "SGP", name: "Singapore", number: "702" },
            { code: "SX", code3: "SXM", name: "Sint Maarten (Dutch part)", number: "534" },
            { code: "SK", code3: "SVK", name: "Slovakia", number: "703" },
            { code: "SI", code3: "SVN", name: "Slovenia", number: "705" },
            { code: "SB", code3: "SLB", name: "Solomon Islands", number: "090" },
            { code: "SO", code3: "SOM", name: "Somalia", number: "706" },
            { code: "ZA", code3: "ZAF", name: "South Africa", number: "710" },
            { code: "GS", code3: "SGS", name: "South Georgia and the South Sandwich Islands", number: "239" },
            { code: "SS", code3: "SSD", name: "South Sudan", number: "728" },
            { code: "ES", code3: "ESP", name: "Spain", number: "724" },
            { code: "LK", code3: "LKA", name: "Sri Lanka", number: "144" },
            { code: "SD", code3: "SDN", name: "Sudan (the)", number: "729" },
            { code: "SR", code3: "SUR", name: "Suriname", number: "740" },
            { code: "SJ", code3: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
            { code: "SE", code3: "SWE", name: "Sweden", number: "752" },
            { code: "CH", code3: "CHE", name: "Switzerland", number: "756" },
            { code: "SY", code3: "SYR", name: "Syrian Arab Republic", number: "760" },
            { code: "TW", code3: "TWN", name: "Taiwan", number: "158" },
            { code: "TJ", code3: "TJK", name: "Tajikistan", number: "762" },
            { code: "TZ", code3: "TZA", name: "Tanzania, United Republic of", number: "834" },
            { code: "TH", code3: "THA", name: "Thailand", number: "764" },
            { code: "TL", code3: "TLS", name: "Timor-Leste", number: "626" },
            { code: "TG", code3: "TGO", name: "Togo", number: "768" },
            { code: "TK", code3: "TKL", name: "Tokelau", number: "772" },
            { code: "TO", code3: "TON", name: "Tonga", number: "776" },
            { code: "TT", code3: "TTO", name: "Trinidad and Tobago", number: "780" },
            { code: "TN", code3: "TUN", name: "Tunisia", number: "788" },
            { code: "TR", code3: "TUR", name: "Turkey", number: "792" },
            { code: "TM", code3: "TKM", name: "Turkmenistan", number: "795" },
            { code: "TC", code3: "TCA", name: "Turks and Caicos Islands (the)", number: "796" },
            { code: "TV", code3: "TUV", name: "Tuvalu", number: "798" },
            { code: "UG", code3: "UGA", name: "Uganda", number: "800" },
            { code: "UA", code3: "UKR", name: "Ukraine", number: "804" },
            { code: "AE", code3: "ARE", name: "United Arab Emirates (the)", number: "784" },
            { code: "GB", code3: "GBR", name: "United Kingdom of Great Britain and Northern Ireland (the)", number: "826" },
            { code: "UM", code3: "UMI", name: "United States Minor Outlying Islands (the)", number: "581" },
            { code: "US", code3: "USA", name: "United States of America (the)", number: "840" },
            { code: "UY", code3: "URY", name: "Uruguay", number: "858" },
            { code: "UZ", code3: "UZB", name: "Uzbekistan", number: "860" },
            { code: "VU", code3: "VUT", name: "Vanuatu", number: "548" },
            { code: "VE", code3: "VEN", name: "Venezuela (Bolivarian Republic of)", number: "862" },
            { code: "VN", code3: "VNM", name: "Viet Nam", number: "704" },
            { code: "VG", code3: "VGB", name: "Virgin Islands (British)", number: "092" },
            { code: "VI", code3: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
            { code: "WF", code3: "WLF", name: "Wallis and Futuna", number: "876" },
            { code: "EH", code3: "ESH", name: "Western Sahara", number: "732" },
            { code: "YE", code3: "YEM", name: "Yemen", number: "887" },
            { code: "ZM", code3: "ZMB", name: "Zambia", number: "894" },
            { code: "ZW", code3: "ZWE", name: "Zimbabwe", number: "716" },
            { code: "AX", code3: "ALA", name: "Åland Islands", number: "248" }
        ];
    }
    ngOnInit() {
        this.feedbackForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)],
        });
        this.cardBln = true;
        this.genericservice.getNews().subscribe((data) => {
            this.cardlistdata = data.data;
            console.log(this.cardlistdata);
        });
    }
    cardheader() {
        this.cardBln = true;
        this.cardlistdata = this.cardlistdata;
    }
    cardData() {
        this.cardBln = false;
        this.cardDatas = this.cardlistdata;
    }
    get fval() {
        return this.feedbackForm.controls;
    }
    //this.user.fullName='';
    signup() {
        this.submitted = true;
        if (this.feedbackForm.invalid) {
            return;
        }
        alert('Thanks for your feedback...!');
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["GenericService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 93, vars: 40, consts: [[1, "row"], [1, "col-md-3", "profile", "desk_profile"], [1, "container"], [1, "row", "newsreader"], [1, "col-md-3"], ["src", "assets/news.png", "alt", "Avatar", 1, "avatar"], [1, "col-md-9"], [1, "view_toggle"], ["justify-content-center", ""], ["type", "submit", 1, "", 3, "ngClass", "click"], [1, "bi", "bi-card-heading"], [1, "bi", "bi-card-list"], [1, "feed_back"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "button"], [1, "col-md-9", "list"], ["class", "container", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "col-md-5", "profile"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn_css"], [1, "col-md-7", "list"], [1, "news_detail"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "formControlName", "firstName", "id", "first-name", "placeholder", "Andi", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "last-name", 1, "col-form-label"], ["type", "text", "formControlName", "lastName", "id", "last-name", "placeholder", "Selvaraj", 1, "form-control", 3, "ngClass"], ["for", "message-text", 1, "col-form-label"], ["formControlName", "address", "id", "address", "placeholder", "Enter your full postal address", 1, "form-control", 3, "ngClass"], ["formControlName", "country", "name", "country", "id", "country", 1, "form-control", "form-select", 3, "ngClass"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "email", 1, "col-form-label"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "example@sample.com", 1, "form-control", 3, "ngClass"], ["for", "phonenumber", 1, "col-form-label"], [1, "col-md-2"], ["type", "text", "formControlName", "code", "id", "code", "placeholder", "+91", 1, "form-control", 3, "ngClass"], [1, "col-md-10"], ["type", "text", "formControlName", "phone", "id", "number", "placeholder", "1234567890", 1, "form-control", 3, "ngClass"], [1, "button"], ["class", "col-md-4 card", 4, "ngFor", "ngForOf"], [1, "text-center"], [3, "pageChange"], [1, "col-md-4", "card"], ["data-bs-toggle", "modal", "data-bs-target", "#cardmodal", 1, "card-body"], [1, "close"], [1, "bi", "bi-x"], [1, "card-title"], [1, "card-text", "news_detail"], [1, "publish"], ["width", "100%", "src", "assets/news_image.jpg", "alt", "banner"], ["id", "cardmodal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], ["src", "https://www.first.org/newsroom/releases/20210611", "frameborder", "0"], ["class", "row list_row", "data-bs-toggle", "modal", "data-bs-target", "#cardmodal", 4, "ngFor", "ngForOf"], ["data-bs-toggle", "modal", "data-bs-target", "#cardmodal", 1, "row", "list_row"], ["width", "100%", "src", "assets/news.png", "alt", "banner", 1, "avatar"], [1, "card_list_title"], [1, "card_list_summary", "news_detail"], [1, "col-md-1"], [1, "close_list"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["ngClass", "fval.phone.errors.required"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi Reader,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Here's your News!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_button_click_15_listener() { return ctx.cardheader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_button_click_17_listener() { return ctx.cardData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Have a Feedback?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "we're Listening!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewsComponent_div_25_Template, 6, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewsComponent_div_26_Template, 5, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Hi Reader,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Here's your News!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Have a Feedback?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "we're Listening!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Thank you so much for taking the time!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Please provide the below details!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewsComponent_Template_form_ngSubmit_52_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "First name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, NewsComponent_div_57_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Last name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, NewsComponent_div_62_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, NewsComponent_div_67_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Select your Country.!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, NewsComponent_option_74_Template, 2, 2, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, NewsComponent_div_75_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Email ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, NewsComponent_div_80_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, NewsComponent_div_87_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, NewsComponent_div_90_Template, 4, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Submit Feedbak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c1, ctx.cardBln, !ctx.cardBln));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c1, !ctx.cardBln, ctx.cardBln));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardBln == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardBln == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.feedbackForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c2, ctx.submitted && ctx.fval.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c2, ctx.submitted && ctx.fval.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, ctx.submitted && ctx.fval.address.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.address.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, ctx.submitted && ctx.fval.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.country.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c2, ctx.submitted && ctx.fval.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, ctx.submitted && ctx.fval.code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.code.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, ctx.submitted && ctx.fval.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fval.phone.errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    background-color: #f1f4f7 !important; \r\n\r\n  }\r\n  .card-title[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%], .card_list_summary[_ngcontent-%COMP%], .card_list_title[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n }\r\n  .card-title[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%]\r\n {\r\n   -webkit-line-clamp: 2;\r\n }\r\n  .card_list_summary[_ngcontent-%COMP%], .card_list_title[_ngcontent-%COMP%]\r\n {\r\n  -webkit-line-clamp: 1;\r\n }\r\n  .card[_ngcontent-%COMP%]{\r\n  margin: 25px;\r\n  width: 250px; \r\n  box-shadow: rgb(0 0 0 / 50%) 0 0 10px;\r\n\r\n}\r\n  .list_row[_ngcontent-%COMP%]\r\n{\r\n  background-color: white;\r\n  padding: 12px;\r\n  margin: 25px;\r\n  box-shadow: rgb(0 0 0 / 50%) 0 0 10px;\r\n  border-radius: 10px;\r\n\r\n}\r\n  .list[_ngcontent-%COMP%]\r\n  {\r\n    padding-top: 40px;\r\n    background-color: #f1f4f7 !important; \r\n  }\r\n  .close[_ngcontent-%COMP%]\r\n  {\r\n    position: absolute;\r\n    font-size: 25px;\r\n    color: red;\r\n    margin: -18px 192px;\r\n  }\r\n  .profile[_ngcontent-%COMP%]\r\n {\r\n   padding-top: 60px;\r\n   background-color: #f1f4f7 !important;\r\n   box-shadow: rgb(0 0 0 / 50%) 0 0 10px !important;\r\n\r\n }\r\n  .desk_profile[_ngcontent-%COMP%]\r\n {\r\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px 1px !important;\r\n  margin-right: 10px;\r\n  width: calc(25% - 10px);\r\n }\r\n  .newsreader[_ngcontent-%COMP%]\r\n {\r\n  background-color: white !important;\r\n  padding-top: 10px;\r\n  margin: 15px 5px;\r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 50%) 0 0 10px;\r\n\r\n }\r\n  .view_toggle[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  padding: 15px;\r\n  margin: 15px 5px;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  box-shadow: rgb(0 0 0 / 50%) 0 0 10px;\r\n\r\n }\r\n  .feed_back[_ngcontent-%COMP%]\r\n {\r\n  background-color: white;\r\n  padding: 15px;\r\n  margin: 15px 5px;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  box-shadow: rgb(0 0 0 / 50%) 0 0 10px;\r\n\r\n }\r\n  .button[_ngcontent-%COMP%]{\r\n  background-color: #57d8c6;\r\n  border: none;\r\n  color: #111;\r\n  padding: 15px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n  .btn_css[_ngcontent-%COMP%]{\r\n  background-color: #d48d97 !important;\r\n  border: none;\r\n  color: #111;\r\n  padding: 15px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n  .viewtoggle_btn[_ngcontent-%COMP%]\r\n{\r\n  background-color: #57d8c6;\r\n  border: none;\r\n  color: #111;\r\n  padding: 5px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  border-radius: 5px 0px 0px 5px;\r\n  margin: -2px;\r\n}\r\n  .viewtoggle_btn2[_ngcontent-%COMP%]\r\n{\r\n  background-color: #57d8c6;\r\n  border: none;\r\n  color: #111;\r\n  padding: 5px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 0px 5px 5px 0px;\r\n}\r\n  .publish[_ngcontent-%COMP%]\r\n{\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n color :#88606085;\r\n}\r\n  .news_detail[_ngcontent-%COMP%]\r\n {\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n }\r\n  .close_list[_ngcontent-%COMP%]\r\n {\r\n  position: absolute;\r\n  right: 3px;\r\n  margin: 13px;\r\n  background-color: white;\r\n  border-radius: 50px;\r\n  padding: -5px;\r\n  font-size: 20px;\r\n  color: red;\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n}\r\n  .btncss[_ngcontent-%COMP%] {background-color: #b9b9b9bf;\r\n  border: none;\r\n  color: #111;\r\n  padding: 5px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  border-radius: 5px 0px 0px 5px;\r\n  margin: -2px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25ld3MvbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxvQ0FBb0M7O0VBRXRDO0VBRUQ7RUFDQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0NBQzdCO0VBQ0E7O0dBRUUscUJBQXFCO0NBQ3ZCO0VBQ0E7O0VBRUMscUJBQXFCO0NBQ3RCO0VBQ0E7RUFDQyxZQUFZO0VBQ1osWUFBWTtFQUNaLHFDQUFxQzs7QUFFdkM7RUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1COztBQUVyQjtFQUNFOztJQUVFLGlCQUFpQjtJQUNqQixvQ0FBb0M7RUFDdEM7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDRDs7R0FFRSxpQkFBaUI7R0FDakIsb0NBQW9DO0dBQ3BDLGdEQUFnRDs7Q0FFbEQ7RUFFQTs7RUFFQyx1REFBdUQ7RUFDdkQsa0JBQWtCO0VBQ2xCLHVCQUF1QjtDQUN4QjtFQUVBOztFQUVDLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQzs7Q0FFeEM7RUFDQTtFQUNDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDOztDQUV0QztFQUNBOztFQUVDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDOztDQUV0QztFQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtFQUNBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7RUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDO0VBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQixnQkFBZ0I7QUFDakI7RUFDQzs7RUFFQyxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0VBQ0E7O0VBRUMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtFQUNBLFNBQVMsMkJBQTJCO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNyAhaW1wb3J0YW50OyBcclxuXHJcbiAgfVxyXG5cclxuIC5jYXJkLXRpdGxlLC5jYXJkLXRleHQsLmNhcmRfbGlzdF9zdW1tYXJ5LC5jYXJkX2xpc3RfdGl0bGV7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuIH1cclxuIC5jYXJkLXRpdGxlLC5jYXJkLXRleHRcclxuIHtcclxuICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gfVxyXG4gLmNhcmRfbGlzdF9zdW1tYXJ5LC5jYXJkX2xpc3RfdGl0bGVcclxuIHtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiB9XHJcbiAuY2FyZHtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgd2lkdGg6IDI1MHB4OyBcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1MCUpIDAgMCAxMHB4O1xyXG5cclxufVxyXG4ubGlzdF9yb3dcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUwJSkgMCAwIDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuICAubGlzdFxyXG4gIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNyAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLmNsb3NlXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbjogLTE4cHggMTkycHg7XHJcbiAgfVxyXG4gLnByb2ZpbGVcclxuIHtcclxuICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjcgIWltcG9ydGFudDtcclxuICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNTAlKSAwIDAgMTBweCAhaW1wb3J0YW50O1xyXG5cclxuIH1cclxuXHJcbiAuZGVza19wcm9maWxlXHJcbiB7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNTAlKSAwcHggMHB4IDVweCAxcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMTBweCk7XHJcbiB9XHJcblxyXG4gLm5ld3NyZWFkZXJcclxuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMTVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNTAlKSAwIDAgMTBweDtcclxuXHJcbiB9XHJcbiAudmlld190b2dnbGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUwJSkgMCAwIDEwcHg7XHJcblxyXG4gfVxyXG4gLmZlZWRfYmFja1xyXG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1MCUpIDAgMCAxMHB4O1xyXG5cclxuIH1cclxuIC5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ZDhjNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnRuX2Nzc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ4ZDk3ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMTExO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnZpZXd0b2dnbGVfYnRuXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdkOGM2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzExMTtcclxuICBwYWRkaW5nOiA1cHggMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICBtYXJnaW46IC0ycHg7XHJcbn1cclxuLnZpZXd0b2dnbGVfYnRuMlxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ZDhjNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG59XHJcblxyXG4ucHVibGlzaFxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiBjb2xvciA6Izg4NjA2MDg1O1xyXG59XHJcbiAubmV3c19kZXRhaWxcclxuIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuIH1cclxuIC5jbG9zZV9saXN0XHJcbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogLTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG5jc3Mge2JhY2tncm91bmQtY29sb3I6ICNiOWI5YjliZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgbWFyZ2luOiAtMnB4O30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return [{ type: src_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["GenericService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_badabro_badabro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/badabro/badabro.component */ "6xi8");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/news/news.component */ "r3U5");
/* harmony import */ var _component_sketch_brahma_sketch_brahma_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/sketch-brahma/sketch-brahma.component */ "Th54");








const routes = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'task', component: _component_badabro_badabro_component__WEBPACK_IMPORTED_MODULE_2__["BadabroComponent"] },
    { path: 'news', component: _component_news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: 'sketch_brahma', component: _component_sketch_brahma_sketch_brahma_component__WEBPACK_IMPORTED_MODULE_5__["SketchBrahmaComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map