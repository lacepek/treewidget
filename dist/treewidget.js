var TreeWidget =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TreeWidget.ts":
/*!***************************!*\
  !*** ./src/TreeWidget.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.ts");

var TreeWidget = /** @class */ (function () {
    function TreeWidget() {
    }
    TreeWidget.create = function (config) {
        TreeWidget.tree = new _tree__WEBPACK_IMPORTED_MODULE_0__["Tree"](config);
    };
    return TreeWidget;
}());
/* harmony default export */ __webpack_exports__["default"] = (TreeWidget);


/***/ }),

/***/ "./src/base/component.ts":
/*!*******************************!*\
  !*** ./src/base/component.ts ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _configurable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurable */ "./src/base/configurable.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Base configurable component
 * @template T type of state
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(config) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this.attributes = null;
        _this._config = {};
        _this.setDefaultProps();
        _this._config = config;
        _this.init();
        _this.render();
        _this.postRender();
        _this.parentElement = _this.getParentElement();
        if (_this.element && _this.parentElement) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(_this.parentElement, _this.element);
        }
        return _this;
    }
    Component.prototype.setAttribute = function (name, value) {
        if (this.element) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].setAttribute(this.element, name, value);
        }
    };
    Component.prototype.setContent = function (value) {
        if (this.element) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].setContent(this.element, value);
        }
    };
    Component.prototype.addContent = function (value) {
        if (this.element) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(this.element, value);
        }
    };
    Component.prototype.clearContent = function () {
        if (this.element) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].clearContent(this.element);
        }
    };
    Component.prototype.show = function () {
        this.element.style.visibility = "visible";
    };
    Component.prototype.hide = function () {
        this.element.style.visibility = "hidden";
    };
    Component.prototype.setState = function (state) {
        this.state = state;
        this.clearContent();
        this.render();
    };
    Component.prototype.init = function () {
        this.config(this._config);
        this.parentElement = this.getParentElement();
    };
    Component.prototype.render = function () { };
    Component.prototype.postRender = function () { };
    Component.prototype.getParentElement = function () {
        if (this.parentElement) {
            return this.parentElement;
        }
        else if (this.parentSelector) {
            return document.querySelector(this.parentSelector);
        }
        return null;
    };
    Component.prototype.setDefaultProps = function () {
        this.attributes = { id: null, className: null, style: null };
        this.parentElement = null;
        this.element = null;
        this.parentSelector = null;
        this.tag = 'div';
        this.parent = null;
        this.state = {};
    };
    ;
    Component.prototype.createElement = function (tag, content, attributes) {
        if (tag === void 0) { tag = this.tag; }
        if (attributes === void 0) { attributes = this.attributes; }
        if (!tag) {
            return null;
        }
        return _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement(tag, content, attributes);
    };
    return Component;
}(_configurable__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/base/configurable.ts":
/*!**********************************!*\
  !*** ./src/base/configurable.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Configurable = /** @class */ (function () {
    function Configurable() {
    }
    Configurable.prototype.config = function (config) {
        for (var property in config) {
            if (config.hasOwnProperty(property)) {
                this[property] = config[property];
            }
        }
    };
    Configurable.prototype.setDefaultProps = function () { };
    return Configurable;
}());
/* harmony default export */ __webpack_exports__["default"] = (Configurable);


/***/ }),

/***/ "./src/base/containers/container.ts":
/*!******************************************!*\
  !*** ./src/base/containers/container.ts ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        this.element = this.createElement();
    };
    Container.prototype.addChild = function (child) {
        var size = this.children.length;
        this.children.push({ index: size, component: child });
        child.parent = this;
    };
    Container.prototype.findChildByElement = function (element) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.component.element === element) {
                return child;
            }
        }
        return null;
    };
    Container.prototype.findChild = function (component) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.component === component) {
                return child;
            }
        }
        return null;
    };
    Container.prototype.moveChild = function (fromIndex, toIndex) {
        var child = this.children[fromIndex];
        this.children.splice(fromIndex, 1);
        this.children.splice(toIndex, 0, child);
        this.resetIndexes();
    };
    Container.prototype.resetIndexes = function () {
        for (var i = 0, n = this.children.length; i < n; i++) {
            this.children[i].index = i;
        }
    };
    Container.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.children = [];
    };
    return Container;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/base/containers/dropzone.ts":
/*!*****************************************!*\
  !*** ./src/base/containers/dropzone.ts ***!
  \*****************************************/
/*! exports provided: DropZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone", function() { return DropZone; });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/base/containers/container.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropZone = /** @class */ (function (_super) {
    __extends(DropZone, _super);
    function DropZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropZone.prototype.setCurrent = function (draggable) {
        var child = this.findChild(draggable);
        if (child) {
            this.current = child;
        }
    };
    DropZone.prototype.postRender = function () {
        this.initEvents();
    };
    DropZone.prototype.initEvents = function () {
        var _this = this;
        if (this.element) {
            this.element.addEventListener('dragover', this.onDragOver);
            this.element.addEventListener('dragenter', this.onDragEnter);
            this.element.addEventListener('dragleave', this.onDragLeave);
            this.element.addEventListener('drop', function (event) { return _this.onDrop(event); });
        }
    };
    DropZone.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    DropZone.prototype.onDragEnter = function (event) {
        event.preventDefault();
    };
    DropZone.prototype.onDragLeave = function (event) {
        //throw new Error("onDragLeave not implemented.");
    };
    DropZone.prototype.onDrop = function (event) {
        var target = event.target;
        var draggable = this.current.component;
        this.element.insertBefore(draggable.element, target);
    };
    DropZone.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.current = null;
    };
    return DropZone;
}(_container__WEBPACK_IMPORTED_MODULE_0__["Container"]));



/***/ }),

/***/ "./src/base/containers/sortzone.ts":
/*!*****************************************!*\
  !*** ./src/base/containers/sortzone.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone */ "./src/base/containers/dropzone.ts");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sortable */ "./src/base/sortable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SortZone = /** @class */ (function (_super) {
    __extends(SortZone, _super);
    function SortZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortZone.prototype.onDrop = function (event) {
        var target = event.target;
        var dragged = this.current.component.element;
        // if dragged is target do nothing 
        if (dragged === target) {
            return;
        }
        var targetChild = this.findChildByElement(target);
        if (targetChild) {
            var currentIndex = this.current.index;
            var targetIndex = targetChild.index;
            // if current is higher then the target put it after, otherwise put it before the target
            if (currentIndex > targetIndex) {
                this.element.insertBefore(dragged, target);
            }
            else {
                var nextSibling = target.nextElementSibling;
                if (nextSibling) {
                    this.element.insertBefore(dragged, nextSibling);
                }
                else {
                    this.element.appendChild(dragged);
                }
            }
            // move element in container list
            this.moveChild(currentIndex, targetIndex);
            // if dragged is also sortable, dispatch onSortSuccess event
            if (this.current.component instanceof _sortable__WEBPACK_IMPORTED_MODULE_1__["Sortable"]) {
                var positionChange = targetIndex - currentIndex;
                this.current.component.onSortSuccess({ lastIndex: currentIndex, index: targetIndex, positionChange: positionChange });
            }
        }
    };
    return SortZone;
}(_dropzone__WEBPACK_IMPORTED_MODULE_0__["DropZone"]));
/* harmony default export */ __webpack_exports__["default"] = (SortZone);


/***/ }),

/***/ "./src/base/draggable.ts":
/*!*******************************!*\
  !*** ./src/base/draggable.ts ***!
  \*******************************/
/*! exports provided: Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/base/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Draggable = /** @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canDrag = false;
        return _this;
    }
    Draggable.prototype.initDragEvents = function () {
        var _this = this;
        if (this.element) {
            this.element.addEventListener('dragstart', function (event) { _this.onDragStart(event); });
            this.element.addEventListener('dragend', function (event) { _this.onDragEnd(event); });
        }
    };
    Draggable.prototype.onDragStart = function (event) {
        this.setAsCurrent();
    };
    Draggable.prototype.onDragEnd = function (event) {
        this.clearCurrent();
    };
    // sets the current dragged element in container
    Draggable.prototype.setAsCurrent = function () {
        this.container.setCurrent(this);
    };
    // clears the current dragged element in container
    Draggable.prototype.clearCurrent = function () {
        this.container.current = null;
    };
    return Draggable;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/base/forms/checkbox.ts":
/*!************************************!*\
  !*** ./src/base/forms/checkbox.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _this = this;
        this.element = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "form-check" });
        var id = "checkbox-" + this.attributes.name;
        this.checkbox = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("input", null, __assign({ className: "form-check-input", id: id }, this.attributes));
        if (this.onChange) {
            this.checkbox.addEventListener("change", function (event) { _this.onChange(event, _this); });
        }
        this.addContent(this.checkbox);
        var label = this.label;
        if (label) {
            var labelClass = "form-check-label";
            var labelElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("label", label, { className: labelClass, forId: id });
            this.addContent(labelElement);
        }
        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    };
    Checkbox.prototype.getValue = function () {
        return this.checkbox.checked;
    };
    Checkbox.prototype.setValue = function (value) {
        this.checkbox.checked = value;
    };
    Checkbox.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.label = null;
        this.input = null;
        this.attributes = { type: "checkbox" };
    };
    return Checkbox;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);


/***/ }),

/***/ "./src/base/forms/dynamicForm.ts":
/*!***************************************!*\
  !*** ./src/base/forms/dynamicForm.ts ***!
  \***************************************/
/*! exports provided: DynamicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicForm", function() { return DynamicForm; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");
/* harmony import */ var _utility_objectMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/objectMap */ "./src/base/utility/objectMap.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/base/forms/input.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/elementUtility */ "./src/base/utility/elementUtility.ts");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select */ "./src/base/forms/select.ts");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox */ "./src/base/forms/checkbox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var DynamicForm = /** @class */ (function (_super) {
    __extends(DynamicForm, _super);
    function DynamicForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicForm.prototype.render = function () {
        var _this = this;
        this.element = this.createElement();
        this.element.addEventListener("submit", function (event) { return _this.onSubmit(event); });
        if (this.model) {
            var form = this.renderForm();
            this.setContent(form);
        }
    };
    DynamicForm.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.tag = "form";
    };
    DynamicForm.prototype.onSubmit = function (event) {
        console.log("submit");
        /*event.preventDefault();

        if (this.onSubmit) {
            const result = this.props.onSubmit(this.state.model);
            if (result) {
                this.setState({ isLoading: false });
            }
        }*/
    };
    DynamicForm.prototype.renderForm = function () {
        var _this = this;
        var attributes = this.model;
        var formContent = Object(_utility_objectMap__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, function (attribute) {
            var type = attribute.type;
            var input = null;
            switch (type) {
                case "radio":
                    input = _this.renderRadioList(attribute);
                    break;
                case "select":
                    input = _this.renderSelect(attribute);
                    break;
                case "checkbox":
                    input = _this.renderCheckbox(attribute);
                    break;
                default:
                    input = _this.renderText(attribute);
                    break;
            }
            return input;
        });
        return formContent;
    };
    DynamicForm.prototype.renderRadioList = function (attribute) {
        /*const { key, type, options, label } = attribute;

        let radioElement = objectMap(options, (option: IFormAttributeOption) =>
        {
            return this.renderRadio(key, type, option);
        });

        const radioId = `input-wrapper-${key}`;
        const radioWrapper = <div id={radioId}>{radioElement}</div>;
        let labelElement = null;

        if (label) {
            labelElement = <label htmlFor={radioId}>{label}</label>;
        }

        return (
            <div key={key} className="form-group">
                {labelElement}
                {radioWrapper}
            </div>
        );*/
        return _utility_elementUtility__WEBPACK_IMPORTED_MODULE_3__["ElementUtility"].createElement("div");
    };
    DynamicForm.prototype.renderRadio = function (key, type, option) {
        /*const checked = this.state.model.getAttribute(key).value === option.key;

        const radioKey = `${key}-${option.key}`, id = `radio-${radioKey}`,
            labelId = `${id}-label`, groupId = `${id}-group`;

        const radioElement = <input
            className="form-check-input"
            type={type}
            id={id}
            name={key}
            key={id}
            checked={checked}
            value={option.value}
            disabled={option.disabled}
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => { this.onRadioChange(event, key, option.key) }
            }
        />;
        const labelElement = <label id={labelId} htmlFor={id}>{option.value}</label>;

        return (
            <div className="form-check" key={radioKey} id={groupId}>
                {radioElement}
                {labelElement}
            </div>
        );*/
        return _utility_elementUtility__WEBPACK_IMPORTED_MODULE_3__["ElementUtility"].createElement("div");
    };
    DynamicForm.prototype.renderSelect = function (attribute) {
        var name = attribute.name, value = attribute.value, options = attribute.options, label = attribute.label, disabled = attribute.disabled;
        var optionElements = Object(_utility_objectMap__WEBPACK_IMPORTED_MODULE_1__["default"])(options, function (option) {
            var id = "option-" + name + "-" + option.key;
            return _utility_elementUtility__WEBPACK_IMPORTED_MODULE_3__["ElementUtility"].createElement("option", option.value, { id: id });
        });
        var selectId = "select-" + name;
        var selectElement = new _select__WEBPACK_IMPORTED_MODULE_4__["default"]({ label: label, attributes: { name: name, disabled: disabled, value: value, id: selectId } });
        selectElement.addContent(optionElements);
        return selectElement;
    };
    DynamicForm.prototype.renderCheckbox = function (attribute) {
        var name = attribute.name, type = attribute.type, label = attribute.label, value = attribute.value, disabled = attribute.disabled;
        var checked = value;
        var checkbox = new _checkbox__WEBPACK_IMPORTED_MODULE_5__["default"]({
            label: label,
            onChange: this.onTextChange,
            attributes: { name: name, disabled: disabled, value: value, type: type }
        });
        checkbox.setAttribute("checked", checked);
        return checkbox;
    };
    DynamicForm.prototype.renderText = function (attribute) {
        var name = attribute.name, type = attribute.type, label = attribute.label, value = attribute.value, disabled = attribute.disabled;
        var input = new _input__WEBPACK_IMPORTED_MODULE_2__["default"]({
            label: label,
            onChange: this.onTextChange,
            attributes: { name: name, disabled: disabled, value: value, type: type }
        });
        return input;
    };
    DynamicForm.prototype.onTextChange = function (event, input) {
    };
    return DynamicForm;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/base/forms/input.ts":
/*!*********************************!*\
  !*** ./src/base/forms/input.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _this = this;
        this.element = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "form-group" });
        var id = "input-" + this.attributes.name;
        if (this.label) {
            var labelElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("label", this.label, { forId: id });
            this.addContent(labelElement);
        }
        this.input = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("input", null, __assign({ className: "form-control", id: id }, this.attributes));
        if (this.onChange) {
            this.input.addEventListener("change", function (event) { _this.onChange(event, _this); });
        }
        this.element.appendChild(this.input);
        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    };
    Input.prototype.getValue = function () {
        return this.input.value;
    };
    Input.prototype.setValue = function (value) {
        this.input.value = value;
    };
    Input.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.label = null;
        this.input = null;
        this.attributes = { type: "text" };
    };
    return Input;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./src/base/forms/select.ts":
/*!**********************************!*\
  !*** ./src/base/forms/select.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.setContent = function (value) {
        if (this.select) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].setContent(this.select, value);
        }
    };
    Select.prototype.addContent = function (value) {
        if (this.select) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(this.select, value);
        }
    };
    Select.prototype.clearContent = function () {
        if (this.select) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].clearContent(this.select);
        }
    };
    Select.prototype.render = function () {
        var _this = this;
        this.element = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "form-group" });
        var id = "select-" + this.attributes.name;
        if (this.label) {
            var labelElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("label", this.label, { forId: id });
            this.element.appendChild(labelElement);
        }
        this.select = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("select", null, {
            className: "form-control",
            type: this.type,
            name: this.name,
            id: id,
            value: this.value,
            disabled: this.disabled
        });
        if (this.onChange) {
            this.select.addEventListener("change", function (event) { _this.onChange(event, _this); });
        }
        this.element.appendChild(this.select);
        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    };
    Select.prototype.getValue = function () {
        return this.input.value;
    };
    Select.prototype.setValue = function (value) {
        this.input.value = value;
    };
    Select.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.label = null;
        this.select = null;
        this.attributes = { type: "select" };
    };
    return Select;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Select);


/***/ }),

/***/ "./src/base/modal.ts":
/*!***************************!*\
  !*** ./src/base/modal.ts ***!
  \***************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/base/component.ts");
/* harmony import */ var _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.init = function () {
        _super.prototype.init.call(this);
        this.state.content = this.content;
    };
    Modal.prototype.render = function () {
        var _this = this;
        this.element = this.createElement("div");
        this.element.className = "modal-overlay";
        var windowHeader = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "modal-window-header" });
        this.contentElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "modal-window-body" });
        var windowFooter = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", null, { className: "modal-window-footer" });
        var window = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", [windowHeader, this.contentElement, windowFooter], { className: "modal-window" });
        if (this.title) {
            var titleElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("h" + this.title.size, this.title.text);
            windowHeader.appendChild(titleElement);
        }
        if (this.hasCloseButton) {
            var icon = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("span", "&times;", { ariaHidden: "true" });
            var closeButton = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("button", icon, {
                className: "close",
                ariaLabel: "Close"
            });
            closeButton.addEventListener("click", function () { _this.close(); });
            windowHeader.appendChild(closeButton);
        }
        if (this.state.content) {
            this.addContent(this.state.content);
        }
        if (this.dismissButton) {
            this.dismissButton.addEventListener("click", function () {
                if (_this.onDismiss) {
                    _this.onDismiss();
                }
                _this.close();
            });
        }
        if (this.confirmButton) {
            this.confirmButton.addEventListener("click", function () {
                if (_this.onConfirm) {
                    _this.onConfirm();
                }
            });
        }
        var buttonGroup = null;
        if (this.dismissButton || this.confirmButton) {
            buttonGroup = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", [this.dismissButton, this.confirmButton], { className: "btn-group", role: "group" });
        }
        _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(windowFooter, buttonGroup);
        this.element.addEventListener("click", function (event) {
            if (event.target === _this.element) {
                _this.close();
            }
        });
        _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(this.element, window);
    };
    Modal.prototype.close = function () {
        this.hide();
        if (this.onClose) {
            this.onClose();
        }
    };
    Modal.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.hasCloseButton = true;
        this.confirmButton = null;
        this.dismissButton = null;
        this.onConfirm = null;
        this.onDismiss = null;
        this.onClose = null;
    };
    return Modal;
}(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/base/sortable.ts":
/*!******************************!*\
  !*** ./src/base/sortable.ts ***!
  \******************************/
/*! exports provided: Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggable */ "./src/base/draggable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Sortable = /** @class */ (function (_super) {
    __extends(Sortable, _super);
    function Sortable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sortable.prototype.onSortSuccess = function (data) {
    };
    return Sortable;
}(_draggable__WEBPACK_IMPORTED_MODULE_0__["Draggable"]));



/***/ }),

/***/ "./src/base/utility/elementUtility.ts":
/*!********************************************!*\
  !*** ./src/base/utility/elementUtility.ts ***!
  \********************************************/
/*! exports provided: ElementUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementUtility", function() { return ElementUtility; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/base/component.ts");

/**
 * Utility for working with elements
 */
var ElementUtility = /** @class */ (function () {
    function ElementUtility() {
    }
    ElementUtility.createElement = function (tag, content, attributes) {
        var element = document.createElement(tag);
        if (attributes) {
            for (var name_1 in attributes) {
                var attribute = attributes[name_1];
                this.setAttribute(element, name_1, attribute);
            }
        }
        if (content) {
            this.addContent(element, content);
        }
        return element;
    };
    ElementUtility.setAttribute = function (target, name, value) {
        if (target && value != null && value != undefined) {
            name = this.sanitizeAttributeName(name);
            var element = null;
            if (target instanceof _component__WEBPACK_IMPORTED_MODULE_0__["Component"]) {
                element = target.element;
            }
            else {
                element = target;
            }
            if (element) {
                element.setAttribute(name, value);
            }
        }
    };
    ElementUtility.addContent = function (target, content) {
        if (!content || !target) {
            return;
        }
        if (content instanceof Array) {
            for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                var item = content_1[_i];
                this.addToElement(target, item);
            }
        }
        else {
            this.addToElement(target, content);
        }
    };
    ElementUtility.setContent = function (target, content) {
        if (!content || !target) {
            return;
        }
        this.clearContent(target);
        this.addContent(target, content);
    };
    ElementUtility.clearContent = function (target) {
        var realElement = this.getRealElement(target);
        while (realElement.firstChild) {
            realElement.removeChild(realElement.firstChild);
        }
    };
    ElementUtility.addToElement = function (target, content) {
        var realElement = this.getRealElement(target);
        var realContent = this.getRealContent(content);
        if (realElement && realContent) {
            if (typeof (realContent) === "string") {
                realElement.innerHTML += realContent;
            }
            else {
                realElement.appendChild(realContent);
            }
        }
    };
    ElementUtility.getRealElement = function (target) {
        if (target instanceof HTMLElement) {
            return target;
        }
        else {
            return target.element;
        }
    };
    ElementUtility.getRealContent = function (content) {
        if (content instanceof _component__WEBPACK_IMPORTED_MODULE_0__["Component"]) {
            return content.element;
        }
        else {
            return content;
        }
    };
    ElementUtility.sanitizeAttributeName = function (name) {
        switch (name) {
            case "className":
                return "class";
            case "forId":
                return "for";
            case "ariaLabel":
                return "aria-label";
            case "ariaHidden":
                return "aria-hidden";
        }
        return name;
    };
    return ElementUtility;
}());



/***/ }),

/***/ "./src/base/utility/objectFilter.ts":
/*!******************************************!*\
  !*** ./src/base/utility/objectFilter.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectFilter; });
function objectFilter(object, callback) {
    var result = {};
    for (var key in object) {
        var value = object[key];
        var callbackResult = callback(value);
        if (callbackResult) {
            result[key] = value;
        }
    }
    return result;
}


/***/ }),

/***/ "./src/base/utility/objectMap.ts":
/*!***************************************!*\
  !*** ./src/base/utility/objectMap.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectMap; });
function objectMap(object, callback) {
    var result = [];
    for (var key in object) {
        var value = object[key];
        var callbackResult = callback(value);
        result.push(callbackResult);
    }
    return result;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _TreeWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeWidget */ "./src/TreeWidget.ts");

function create(config) {
    return _TreeWidget__WEBPACK_IMPORTED_MODULE_0__["default"].create(config);
}


/***/ }),

/***/ "./src/tree-line.ts":
/*!**************************!*\
  !*** ./src/tree-line.ts ***!
  \**************************/
/*! exports provided: TreeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeLine", function() { return TreeLine; });
/* harmony import */ var _base_sortable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/sortable */ "./src/base/sortable.ts");
/* harmony import */ var _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/utility/elementUtility */ "./src/base/utility/elementUtility.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var TreeLine = /** @class */ (function (_super) {
    __extends(TreeLine, _super);
    function TreeLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeLine.prototype.onSortSuccess = function (data) {
        var moveData = __assign({}, data, { text: "text", name: "name", canDrag: this.canDrag });
        return this.events.onLineMove(moveData, this.element);
    };
    TreeLine.prototype.render = function () {
        var _this = this;
        this.element = _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div");
        this.element.addEventListener("click", function () { _this.events.onLineClick({ text: "text", name: "name", canDrag: _this.canDrag }, _this.element); }, false);
        var className = "tree-line row";
        if (this.count % 2 === 0) {
            className = className + " tree-line-even";
        }
        else {
            className = className + " tree-line-odd";
        }
        this.setAttribute("className", className);
        if (this.parentElement) {
            if (this.canDrag) {
                this.setAttribute("draggable", true);
            }
            if (this.text) {
                this.element.innerHTML = this.text;
            }
            else {
                this.createItems();
            }
        }
    };
    TreeLine.prototype.postRender = function () {
        this.initDragEvents();
    };
    TreeLine.prototype.createItems = function () {
        var items = this.structure.items;
        if (items) {
            var visibleItemCount = this.getVisibleItemCount(items);
            var isOffset = false;
            for (var key in items) {
                if (this.data.item[key]) {
                    var item = items[key];
                    var value = this.getItemValue(key, item);
                    if (!item.hidden) {
                        var itemElement = this.createItem(value, visibleItemCount);
                        if (!isOffset) {
                            var offset = 10 + 20 * this.level;
                            itemElement.style.paddingLeft = offset + "px";
                            isOffset = true;
                        }
                    }
                }
            }
        }
    };
    TreeLine.prototype.createItem = function (value, itemCount) {
        var columnSize = Math.round(12 / itemCount);
        var className = "col-" + Math.max(1, columnSize);
        var item = _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", value, { className: className });
        this.addContent(item);
        return item;
    };
    TreeLine.prototype.getItemValue = function (key, item) {
        var dataValue = this.data.item[key];
        if (item.options && dataValue) {
            if (item.options[dataValue]) {
                var value = item.options[dataValue].value;
                return value ? value : null;
            }
        }
        return dataValue ? dataValue : null;
    };
    TreeLine.prototype.getVisibleItemCount = function (items) {
        var count = 0;
        for (var key in items) {
            var item = items[key];
            if (!item.hidden) {
                count++;
            }
        }
        return count;
    };
    TreeLine.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.level = 0;
        this.data = { item: null };
        this.structure = { name: null, parent: null };
        this.color = "dark";
        this.textColor = "light";
        this.offset = 0;
        this.tag = "div";
        this.count = 0;
        this.text = null;
        this.events = {};
        this.events.onLineClick = function (data, item) { };
        this.events.onLineMove = function (data, item) { };
    };
    return TreeLine;
}(_base_sortable__WEBPACK_IMPORTED_MODULE_0__["Sortable"]));



/***/ }),

/***/ "./src/tree.ts":
/*!*********************!*\
  !*** ./src/tree.ts ***!
  \*********************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/component */ "./src/base/component.ts");
/* harmony import */ var _tree_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-line */ "./src/tree-line.ts");
/* harmony import */ var _base_containers_sortzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/containers/sortzone */ "./src/base/containers/sortzone.ts");
/* harmony import */ var _base_containers_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/containers/container */ "./src/base/containers/container.ts");
/* harmony import */ var _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base/utility/elementUtility */ "./src/base/utility/elementUtility.ts");
/* harmony import */ var _base_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modal */ "./src/base/modal.ts");
/* harmony import */ var _base_forms_dynamicForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/forms/dynamicForm */ "./src/base/forms/dynamicForm.ts");
/* harmony import */ var _base_utility_objectFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/utility/objectFilter */ "./src/base/utility/objectFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tree.prototype.render = function () {
        var _this = this;
        if (!this.parentElement) {
            this.parentElement = document.body;
        }
        this.element = _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__["ElementUtility"].createElement("div", null, { className: "tree-widget-list" });
        var wrapper = _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__["ElementUtility"].createElement("div", this.element, { className: "tree-widget" });
        this.parentElement.appendChild(wrapper);
        this.nodes.push({ node: this, parent: null, children: [] });
        var level = 0;
        var iterator = { count: 0 };
        var lastNode = this.nodes[this.nodes.length - 1];
        this.createLines(this.data, lastNode.children, lastNode, level, iterator, this.element);
        var modalButton = _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__["ElementUtility"].createElement('button', 'Edit', { className: "btn" });
        document.body.appendChild(modalButton);
        modalButton.onclick = function () {
            _this.modal.show();
        };
        this.modal = new _base_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"]({
            parentElement: document.body, title: { size: 3, text: "Header" }, content: "Foo",
            dismissButton: _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__["ElementUtility"].createElement('button', 'Cancel', { className: "btn btn-default" }),
            confirmButton: _base_utility_elementUtility__WEBPACK_IMPORTED_MODULE_4__["ElementUtility"].createElement('button', 'Confirm', { className: "btn btn-primary" }),
        });
    };
    Tree.prototype.setDefaultProps = function () {
        _super.prototype.setDefaultProps.call(this);
        this.data = [];
        this.structure = {};
        this.canEdit = false;
        this.nodes = [];
        this.options = { addLineText: null };
    };
    Tree.prototype.createLines = function (data, nodes, parentNode, level, iterator, parent, sortZone) {
        var dataCount = data.length;
        var currentCount = 0;
        for (var key in data) {
            var dataNode = data[key];
            var structureKey = Object.keys(this.structure)[level];
            var structure = this.structure[structureKey];
            var isSortable = this.canEdit && structure.isSortable;
            var line = this.createLine(level, iterator.count, isSortable, parent, dataNode, structure, {}, sortZone);
            //nodes.push({ node: line, parent: parentNode.node });
            if (this.canEdit && sortZone) {
                sortZone.addChild(line);
            }
            // create add line in edit mode at the end of level
            currentCount++;
            if (this.canEdit && dataCount === currentCount) {
                iterator.count++;
                var addLine = this.createAddLine(level, iterator.count, parent, dataNode, structure);
                //nodes.push({ node: addLine, parent: parentNode.node });
            }
            iterator.count++;
            var container = this.element;
            // if element have children create wrapper for them
            if (dataNode.children) {
                // if child structure level is sortable create dropzone
                var nextStructureKey = Object.keys(this.structure)[level + 1];
                var nextStructure = this.structure[nextStructureKey];
                if (this.canEdit && nextStructure.isSortable) {
                    sortZone = new _base_containers_sortzone__WEBPACK_IMPORTED_MODULE_2__["default"]({ tag: "div" });
                    container = sortZone.element;
                    nodes.push({ node: sortZone, parent: parentNode.node, children: [] });
                }
                else {
                    var containerComponent = new _base_containers_container__WEBPACK_IMPORTED_MODULE_3__["Container"]({ tag: "div", parentElement: parent });
                    container = containerComponent.element;
                    nodes.push({ node: containerComponent, parent: parentNode.node, children: [] });
                }
                container.setAttribute("class", structure.name);
                parent.appendChild(container);
                var lastNode = nodes[nodes.length - 1];
                this.createLines(dataNode.children, lastNode.children, lastNode, level + 1, iterator, container, sortZone);
            }
        }
    };
    Tree.prototype.addEditLine = function (line) {
        var element = line.element;
        var parent = line.parentElement;
        var newLine = this.createEditLine(line.level, line.structure.name, line.parentElement);
        var newElement = newLine.element;
        newElement.focus();
        parent.insertBefore(newElement, element);
    };
    /*protected editDone(): TreeLine
    {
        
    }*/
    Tree.prototype.createAddLine = function (level, count, parentElement, data, structure, options) {
        var _this = this;
        var defaultText = "Add line +";
        var line = new _tree_line__WEBPACK_IMPORTED_MODULE_1__["TreeLine"]({
            parentElement: parentElement,
            data: data,
            structure: structure,
            level: level,
            count: count,
            text: this.options.addLineText ? this.options.addLineText : defaultText
        });
        line.element.addEventListener("click", function () {
            _this.addLine(data, structure);
        });
        return line;
    };
    Tree.prototype.addLine = function (data, structure) {
        if (structure.useFormEdit) {
            var modelItems = Object(_base_utility_objectFilter__WEBPACK_IMPORTED_MODULE_7__["default"])(structure.items, function (item) {
                if (!item.hidden) {
                    return true;
                }
                return false;
            });
            var form = new _base_forms_dynamicForm__WEBPACK_IMPORTED_MODULE_6__["DynamicForm"]({
                model: modelItems
            });
            this.modal.setState({ content: form });
            this.modal.show();
        }
    };
    Tree.prototype.createLine = function (level, count, isSortable, parentElement, data, structure, options, sortZone) {
        var lineOptions = {
            parentElement: parentElement,
            data: data,
            structure: structure,
            level: level,
            canDrag: isSortable,
            events: this.events,
            container: sortZone,
            count: count
        };
        return new _tree_line__WEBPACK_IMPORTED_MODULE_1__["TreeLine"](lineOptions);
    };
    Tree.prototype.createEditLine = function (level, name, parent) {
        var line = this.createLine(level, 0, false, parent, { item: null }, { name: null, parent: null });
        return line;
    };
    return Tree;
}(_base_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmVlV2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvVHJlZVdpZGdldC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvY29tcG9uZW50LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2NvbnRhaW5lcnMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL2Ryb3B6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL3NvcnR6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9kcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2Zvcm1zL2NoZWNrYm94LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9mb3Jtcy9keW5hbWljRm9ybS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvZm9ybXMvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2Zvcm1zL3NlbGVjdC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL3NvcnRhYmxlLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS91dGlsaXR5L2VsZW1lbnRVdGlsaXR5LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS91dGlsaXR5L29iamVjdEZpbHRlci50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvdXRpbGl0eS9vYmplY3RNYXAudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL3RyZWUtbGluZS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE4QjtBQUU5QjtJQUFBO0lBT0EsQ0FBQztJQUppQixpQkFBTSxHQUFwQixVQUFxQixNQUFjO1FBRS9CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSwwQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUM7QUFDZ0I7QUFHMUQ7OztHQUdHO0FBQ0g7SUFBa0MsNkJBQVk7SUFnQjFDLG1CQUFtQixNQUFrQjtRQUFsQixzQ0FBa0I7UUFBckMsWUFFSSxpQkFB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T0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFNLElBQUksR0FBRyxJQUFJLG1FQUFXLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxVQUFVO2FBQ3BCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFUyx5QkFBVSxHQUFwQixVQUNJLEtBQWEsRUFDYixLQUFhLEVBQ2IsVUFBbUIsRUFDbkIsYUFBMEIsRUFDMUIsSUFBZSxFQUNmLFNBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFFBQW1CO1FBR25CLElBQUksV0FBVyxHQUFHO1lBQ2QsYUFBYTtZQUNiLElBQUk7WUFDSixTQUFTO1lBQ1QsS0FBSztZQUNMLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsUUFBUTtZQUNuQixLQUFLO1NBQ1I7UUFFRCxPQUFPLElBQUksbURBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsNkJBQWMsR0FBeEIsVUFBeUIsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFtQjtRQUVyRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbEcsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBbE95Qix5REFBUyxHQWtPbEMiLCJmaWxlIjoidHJlZXdpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRyZWVXaWRnZXRcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJlZTogVHJlZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNvbmZpZzogb2JqZWN0KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFRyZWVXaWRnZXQudHJlZSA9IG5ldyBUcmVlKGNvbmZpZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlndXJhYmxlIGZyb20gXCIuL2NvbmZpZ3VyYWJsZVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuaW1wb3J0IElIdG1sQXR0cmlidXRlcyBmcm9tIFwiLi9pbnRlcmZhY2VzL0lodG1sQXR0cmlidXRlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgY29uZmlndXJhYmxlIGNvbXBvbmVudFxyXG4gKiBAdGVtcGxhdGUgVCB0eXBlIG9mIHN0YXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFQ+IGV4dGVuZHMgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVzOiBJSHRtbEF0dHJpYnV0ZXMgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRhZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmVudDogQ29tcG9uZW50PFQ+O1xyXG5cclxuICAgIHB1YmxpYyBldmVudHM6IGFueTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGU6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWc6IGFueSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0UmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5wYXJlbnRFbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbnRlbnQodmFsdWU6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LnNldENvbnRlbnQodGhpcy5lbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb250ZW50KHZhbHVlOiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5hZGRDb250ZW50KHRoaXMuZWxlbWVudCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJDb250ZW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmNsZWFyQ29udGVudCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogdm9pZCB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9zdFJlbmRlcigpOiB2b2lkIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRQYXJlbnRFbGVtZW50KCk6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJlbnRTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmVudFNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHsgaWQ6IG51bGwsIGNsYXNzTmFtZTogbnVsbCwgc3R5bGU6IG51bGwgfTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRTZWxlY3RvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50YWcgPSAnZGl2JztcclxuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1lbnQodGFnOiBzdHJpbmcgPSB0aGlzLnRhZywgY29udGVudD86IGFueSwgYXR0cmlidXRlczogSUh0bWxBdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRhZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KHRhZywgY29udGVudCwgYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIFtrZXk6c3RyaW5nXTogYW55O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uZmlnKGNvbmZpZzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgcHJvcGVydHkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IGNvbmZpZ1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lcjxUPiBleHRlbmRzIENvbXBvbmVudDxUPlxyXG57XHJcbiAgICBwcm90ZWN0ZWQgY2hpbGRyZW46IEFycmF5PElDb250YWluZXJDaGlsZDxUPj47XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENoaWxkKGNoaWxkOiBDb21wb25lbnQ8VD4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goe2luZGV4OiBzaXplLCBjb21wb25lbnQ6IGNoaWxkfSk7XHJcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZENoaWxkQnlFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSUNvbnRhaW5lckNoaWxkPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRDaGlsZChjb21wb25lbnQ6IENvbXBvbmVudDxUPilcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUNoaWxkKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltmcm9tSW5kZXhdO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShmcm9tSW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRvSW5kZXgsIDAsIGNoaWxkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEluZGV4ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVzZXRJbmRleGVzKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uaW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWluZXJDaGlsZDxUPlxyXG57XHJcbiAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgY29tcG9uZW50OiBDb21wb25lbnQ8VD47XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL2RyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIElDb250YWluZXJDaGlsZCB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyb3Bab25lIGV4dGVuZHMgQ29udGFpbmVyPHt9PlxyXG57XHJcbiAgICBwdWJsaWMgY3VycmVudDogSUNvbnRhaW5lckNoaWxkPHt9PjtcclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudChkcmFnZ2FibGU6IERyYWdnYWJsZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmZpbmRDaGlsZChkcmFnZ2FibGUpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwb3N0UmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdEV2ZW50cygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5vbkRyYWdFbnRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7IHJldHVybiB0aGlzLm9uRHJvcChldmVudCkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwib25EcmFnTGVhdmUgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Ecm9wKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBkcmFnZ2FibGUgPSB0aGlzLmN1cnJlbnQuY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLmVsZW1lbnQsIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJvcFpvbmUgfSBmcm9tIFwiLi9kcm9wem9uZVwiO1xyXG5pbXBvcnQgeyBTb3J0YWJsZSB9IGZyb20gXCIuLi9zb3J0YWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydFpvbmUgZXh0ZW5kcyBEcm9wWm9uZVxyXG57XHJcbiAgICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkcmFnZ2VkID0gdGhpcy5jdXJyZW50LmNvbXBvbmVudC5lbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBpZiBkcmFnZ2VkIGlzIHRhcmdldCBkbyBub3RoaW5nIFxyXG4gICAgICAgIGlmIChkcmFnZ2VkID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGFyZ2V0Q2hpbGQgPSB0aGlzLmZpbmRDaGlsZEJ5RWxlbWVudCh0YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Q2hpbGQpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudC5pbmRleDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gdGFyZ2V0Q2hpbGQuaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IGlzIGhpZ2hlciB0aGVuIHRoZSB0YXJnZXQgcHV0IGl0IGFmdGVyLCBvdGhlcndpc2UgcHV0IGl0IGJlZm9yZSB0aGUgdGFyZ2V0XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiB0YXJnZXRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkcmFnZ2VkLCB0YXJnZXQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkcmFnZ2VkLCBuZXh0U2libGluZylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGVsZW1lbnQgaW4gY29udGFpbmVyIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ2hpbGQoY3VycmVudEluZGV4LCB0YXJnZXRJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBkcmFnZ2VkIGlzIGFsc28gc29ydGFibGUsIGRpc3BhdGNoIG9uU29ydFN1Y2Nlc3MgZXZlbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudC5jb21wb25lbnQgaW5zdGFuY2VvZiBTb3J0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uQ2hhbmdlID0gdGFyZ2V0SW5kZXggLSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQuY29tcG9uZW50Lm9uU29ydFN1Y2Nlc3Moe2xhc3RJbmRleDogY3VycmVudEluZGV4LCBpbmRleDogdGFyZ2V0SW5kZXgsIHBvc2l0aW9uQ2hhbmdlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcm9wWm9uZSB9IGZyb20gJy4vY29udGFpbmVycy9kcm9wem9uZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQ29tcG9uZW50PHt9PiBpbXBsZW1lbnRzIElEcmFnZ2FibGVcclxue1xyXG4gICAgcHVibGljIGNvbnRhaW5lcjogRHJvcFpvbmU7XHJcbiAgICBwdWJsaWMgY2FuRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpbml0RHJhZ0V2ZW50cygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7IHRoaXMub25EcmFnU3RhcnQoZXZlbnQpIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChldmVudCkgPT4geyB0aGlzLm9uRHJhZ0VuZChldmVudCkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRBc0N1cnJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ3VycmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHMgdGhlIGN1cnJlbnQgZHJhZ2dlZCBlbGVtZW50IGluIGNvbnRhaW5lclxyXG4gICAgcHJpdmF0ZSBzZXRBc0N1cnJlbnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEN1cnJlbnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIHRoZSBjdXJyZW50IGRyYWdnZWQgZWxlbWVudCBpbiBjb250YWluZXJcclxuICAgIHByaXZhdGUgY2xlYXJDdXJyZW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlXHJcbntcclxuICAgIGNvbnRhaW5lcjogRHJvcFpvbmU7XHJcbiAgICBjYW5EcmFnOiBib29sZWFuO1xyXG5cclxuICAgIG9uRHJhZ0VuZChldmVudDogYW55KTogdm9pZDtcclxuICAgIG9uRHJhZ1N0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQ8e30+XHJcbntcclxuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCwgaW5wdXQ6IENoZWNrYm94KSA9PiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBjaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2tcIiB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBgY2hlY2tib3gtJHt0aGlzLmF0dHJpYnV0ZXMubmFtZX1gO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrYm94ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcclxuICAgICAgICAgICAgLi4ueyBjbGFzc05hbWU6IFwiZm9ybS1jaGVjay1pbnB1dFwiLCBpZCB9LCAuLi50aGlzLmF0dHJpYnV0ZXNcclxuICAgICAgICB9KSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4geyB0aGlzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudCh0aGlzLmNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsO1xyXG4gICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbENsYXNzID0gXCJmb3JtLWNoZWNrLWxhYmVsXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBsYWJlbCwgeyBjbGFzc05hbWU6IGxhYmVsQ2xhc3MsIGZvcklkOiBpZCB9KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb250ZW50KGxhYmVsRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7IHR5cGU6IFwiY2hlY2tib3hcIiB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElGb3JtQXR0cmlidXRlLCBJRm9ybUF0dHJpYnV0ZU9wdGlvbiB9IGZyb20gXCIuL0lmb3JtQXR0cmlidXRlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IG9iamVjdE1hcCBmcm9tIFwiLi4vdXRpbGl0eS9vYmplY3RNYXBcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL2lucHV0XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4uL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8e30+XHJcbntcclxuICAgIHB1YmxpYyBtb2RlbDogeyBbbmFtZTogc3RyaW5nXTogSUZvcm1BdHRyaWJ1dGUgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblN1Ym1pdChldmVudCkpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLnJlbmRlckZvcm0oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudChmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFnID0gXCJmb3JtXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3VibWl0KGV2ZW50OiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcbiAgICAgICAgLypldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblN1Ym1pdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUubW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJGb3JtKCk6IEFycmF5PENvbXBvbmVudDx7fT4+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHRoaXMubW9kZWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1Db250ZW50ID0gb2JqZWN0TWFwKGF0dHJpYnV0ZXMsIChhdHRyaWJ1dGU6IElGb3JtQXR0cmlidXRlKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBhdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyYWRpb1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5yZW5kZXJSYWRpb0xpc3QoYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHRoaXMucmVuZGVyU2VsZWN0KGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHRoaXMucmVuZGVyQ2hlY2tib3goYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSB0aGlzLnJlbmRlclRleHQoYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybUNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlclJhZGlvTGlzdChhdHRyaWJ1dGU6IElGb3JtQXR0cmlidXRlKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICAvKmNvbnN0IHsga2V5LCB0eXBlLCBvcHRpb25zLCBsYWJlbCB9ID0gYXR0cmlidXRlO1xyXG5cclxuICAgICAgICBsZXQgcmFkaW9FbGVtZW50ID0gb2JqZWN0TWFwKG9wdGlvbnMsIChvcHRpb246IElGb3JtQXR0cmlidXRlT3B0aW9uKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUmFkaW8oa2V5LCB0eXBlLCBvcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByYWRpb0lkID0gYGlucHV0LXdyYXBwZXItJHtrZXl9YDtcclxuICAgICAgICBjb25zdCByYWRpb1dyYXBwZXIgPSA8ZGl2IGlkPXtyYWRpb0lkfT57cmFkaW9FbGVtZW50fTwvZGl2PjtcclxuICAgICAgICBsZXQgbGFiZWxFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudCA9IDxsYWJlbCBodG1sRm9yPXtyYWRpb0lkfT57bGFiZWx9PC9sYWJlbD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWxFbGVtZW50fVxyXG4gICAgICAgICAgICAgICAge3JhZGlvV3JhcHBlcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsqL1xyXG4gICAgICAgIHJldHVybiBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJSYWRpbyhrZXk6IHN0cmluZywgdHlwZTogc3RyaW5nLCBvcHRpb246IElGb3JtQXR0cmlidXRlT3B0aW9uKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICAvKmNvbnN0IGNoZWNrZWQgPSB0aGlzLnN0YXRlLm1vZGVsLmdldEF0dHJpYnV0ZShrZXkpLnZhbHVlID09PSBvcHRpb24ua2V5O1xyXG5cclxuICAgICAgICBjb25zdCByYWRpb0tleSA9IGAke2tleX0tJHtvcHRpb24ua2V5fWAsIGlkID0gYHJhZGlvLSR7cmFkaW9LZXl9YCxcclxuICAgICAgICAgICAgbGFiZWxJZCA9IGAke2lkfS1sYWJlbGAsIGdyb3VwSWQgPSBgJHtpZH0tZ3JvdXBgO1xyXG5cclxuICAgICAgICBjb25zdCByYWRpb0VsZW1lbnQgPSA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17b3B0aW9uLmRpc2FibGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7IHRoaXMub25SYWRpb0NoYW5nZShldmVudCwga2V5LCBvcHRpb24ua2V5KSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvPjtcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSA8bGFiZWwgaWQ9e2xhYmVsSWR9IGh0bWxGb3I9e2lkfT57b3B0aW9uLnZhbHVlfTwvbGFiZWw+O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBrZXk9e3JhZGlvS2V5fSBpZD17Z3JvdXBJZH0+XHJcbiAgICAgICAgICAgICAgICB7cmFkaW9FbGVtZW50fVxyXG4gICAgICAgICAgICAgICAge2xhYmVsRWxlbWVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsqL1xyXG5cclxuICAgICAgICByZXR1cm4gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyU2VsZWN0KGF0dHJpYnV0ZTogSUZvcm1BdHRyaWJ1dGUpOiBTZWxlY3RcclxuICAgIHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBvcHRpb25zLCBsYWJlbCwgZGlzYWJsZWQgfSA9IGF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudHMgPSBvYmplY3RNYXAob3B0aW9ucywgKG9wdGlvbjogSUZvcm1BdHRyaWJ1dGVPcHRpb24pID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgb3B0aW9uLSR7bmFtZX0tJHtvcHRpb24ua2V5fWA7XHJcbiAgICAgICAgICAgIHJldHVybiBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIG9wdGlvbi52YWx1ZSwgeyBpZCB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0SWQgPSBgc2VsZWN0LSR7bmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBuZXcgU2VsZWN0KHsgbGFiZWwsIGF0dHJpYnV0ZXM6IHsgbmFtZSwgZGlzYWJsZWQsIHZhbHVlLCBpZDogc2VsZWN0SWQgfSB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0RWxlbWVudC5hZGRDb250ZW50KG9wdGlvbkVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlckNoZWNrYm94KGF0dHJpYnV0ZTogSUZvcm1BdHRyaWJ1dGUpOiBDaGVja2JveFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgbGFiZWwsIHZhbHVlLCBkaXNhYmxlZCB9ID0gYXR0cmlidXRlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IG5ldyBDaGVja2JveCh7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblRleHRDaGFuZ2UsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgbmFtZSwgZGlzYWJsZWQsIHZhbHVlLCB0eXBlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBjaGVja2VkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGV4dChhdHRyaWJ1dGU6IElGb3JtQXR0cmlidXRlKTogSW5wdXRcclxuICAgIHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHR5cGUsIGxhYmVsLCB2YWx1ZSwgZGlzYWJsZWQgfSA9IGF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXQoe1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25UZXh0Q2hhbmdlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IG5hbWUsIGRpc2FibGVkLCB2YWx1ZSwgdHlwZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25UZXh0Q2hhbmdlKGV2ZW50OiBFdmVudCwgaW5wdXQ6IElucHV0KVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKnByb3RlY3RlZCBvblNlbGVjdENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+LCBrZXk6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucmVmZXJlbmNlc1trZXldLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLnNldFZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJhZGlvQ2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Piwga2V5OiBzdHJpbmcsIG9wdGlvbktleTogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoa2V5LCBvcHRpb25LZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLnNldFZhbHVlKGtleSwgb3B0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsOiB0aGlzLnN0YXRlLm1vZGVsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Piwga2V5OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubW9kZWwuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbDogdGhpcy5zdGF0ZS5tb2RlbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnN0YXRlLm1vZGVsLmdldEF0dHJpYnV0ZShrZXkpO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9Ki9cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4uL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PHt9PlxyXG57XHJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgb25DaGFuZ2U6IChldmVudDogRXZlbnQsIGlucHV0OiBJbnB1dCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gYGlucHV0LSR7dGhpcy5hdHRyaWJ1dGVzLm5hbWV9YDtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgdGhpcy5sYWJlbCwgeyBmb3JJZDogaWQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29udGVudChsYWJlbEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsLCB7XHJcbiAgICAgICAgICAgIC4uLnsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBpZCB9LCAuLi50aGlzLmF0dHJpYnV0ZXNcclxuICAgICAgICB9KSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4geyB0aGlzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyB0eXBlOiBcInRleHRcIiB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50PHt9PlxyXG57XHJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50LCBzZWxlY3Q6IFNlbGVjdCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgc2V0Q29udGVudCh2YWx1ZTogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQ8e30+IHwgc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSB8IENvbXBvbmVudDx7fT5bXSB8IHN0cmluZ1tdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5zZXRDb250ZW50KHRoaXMuc2VsZWN0LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb250ZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IENvbXBvbmVudDx7fT4gfCBzdHJpbmcgfCBIVE1MRWxlbWVudFtdIHwgQ29tcG9uZW50PHt9PltdIHwgc3RyaW5nW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5zZWxlY3QsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ29udGVudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmNsZWFyQ29udGVudCh0aGlzLnNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IGBzZWxlY3QtJHt0aGlzLmF0dHJpYnV0ZXMubmFtZX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB0aGlzLmxhYmVsLCB7IGZvcklkOiBpZCB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgbnVsbCwge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZFxyXG4gICAgICAgIH0pIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudDogRXZlbnQpID0+IHsgdGhpcy5vbkNoYW5nZShldmVudCwgdGhpcykgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3QpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyB0eXBlOiBcInNlbGVjdFwiIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PHtjb250ZW50OiBhbnl9PlxyXG57XHJcbiAgICBwdWJsaWMgdGl0bGU6IHsgc2l6ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfTtcclxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XHJcbiAgICBwdWJsaWMgaGFzQ2xvc2VCdXR0b246IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZGlzbWlzc0J1dHRvbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY29uZmlybUJ1dHRvbjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gXCJtb2RhbC1vdmVybGF5XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpbmRvd0hlYWRlciA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwibW9kYWwtd2luZG93LWhlYWRlclwiIH0pO1xyXG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcIm1vZGFsLXdpbmRvdy1ib2R5XCIgfSk7XHJcbiAgICAgICAgY29uc3Qgd2luZG93Rm9vdGVyID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB7IGNsYXNzTmFtZTogXCJtb2RhbC13aW5kb3ctZm9vdGVyXCIgfSk7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgXCJkaXZcIixcclxuICAgICAgICAgICAgW3dpbmRvd0hlYWRlciwgdGhpcy5jb250ZW50RWxlbWVudCwgd2luZG93Rm9vdGVyXSxcclxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibW9kYWwtd2luZG93XCIgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoYGgke3RoaXMudGl0bGUuc2l6ZX1gLCB0aGlzLnRpdGxlLnRleHQpO1xyXG4gICAgICAgICAgICB3aW5kb3dIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIiZ0aW1lcztcIiwgeyBhcmlhSGlkZGVuOiBcInRydWVcIiB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGljb24sIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsOiBcIkNsb3NlXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuY2xvc2UoKSB9KTtcclxuICAgICAgICAgICAgd2luZG93SGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb250ZW50KHRoaXMuc3RhdGUuY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNtaXNzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25EaXNtaXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlybUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db25maXJtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgYnV0dG9uR3JvdXAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRpc21pc3NCdXR0b24gfHwgdGhpcy5jb25maXJtQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNtaXNzQnV0dG9uLCB0aGlzLmNvbmZpcm1CdXR0b25dLFxyXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiYnRuLWdyb3VwXCIsIHJvbGU6IFwiZ3JvdXBcIiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFbGVtZW50VXRpbGl0eS5hZGRDb250ZW50KHdpbmRvd0Zvb3RlciwgYnV0dG9uR3JvdXApO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5lbGVtZW50LCB3aW5kb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjbG9zZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc0Nsb3NlQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGlzbWlzc0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMub25Db25maXJtID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tIFwiLi9kcmFnZ2FibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZSBleHRlbmRzIERyYWdnYWJsZVxyXG57XHJcbiAgICBwdWJsaWMgb25Tb3J0U3VjY2VzcyhkYXRhOiBJT25Tb3J0U3VjY2Vzc0RhdGEpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uU29ydFN1Y2Nlc3NEYXRhXHJcbntcclxuICAgIGxhc3RJbmRleDogbnVtYmVyO1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uQ2hhbmdlOiBudW1iZXI7IFxyXG59XHJcbiIsImltcG9ydCBJSHRtbEF0dHJpYnV0ZXMgZnJvbSBcIi4uL2ludGVyZmFjZXMvSWh0bWxBdHRyaWJ1dGVzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZvciB3b3JraW5nIHdpdGggZWxlbWVudHMgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRWxlbWVudFV0aWxpdHlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZzogc3RyaW5nLCBjb250ZW50PzogYW55LCBhdHRyaWJ1dGVzPzogSUh0bWxBdHRyaWJ1dGVzKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gYXR0cmlidXRlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCBhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbnRlbnQoZWxlbWVudCwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYnV0ZSh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMuc2FuaXRpemVBdHRyaWJ1dGVOYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0LmVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ29udGVudChcclxuICAgICAgICB0YXJnZXQ6IGFueSxcclxuICAgICAgICBjb250ZW50OiBhbnlcclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQgfHwgIXRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvRWxlbWVudCh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0VsZW1lbnQodGFyZ2V0LCBjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDb250ZW50KFxyXG4gICAgICAgIHRhcmdldDogYW55LFxyXG4gICAgICAgIGNvbnRlbnQ6IGFueVxyXG4gICAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghY29udGVudCB8fCAhdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDb250ZW50KHRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudCh0YXJnZXQsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJDb250ZW50KHRhcmdldDogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZWFsRWxlbWVudCA9IHRoaXMuZ2V0UmVhbEVsZW1lbnQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHJlYWxFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgcmVhbEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVhbEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFRvRWxlbWVudCh0YXJnZXQ6IGFueSwgY29udGVudDogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZWFsRWxlbWVudCA9IHRoaXMuZ2V0UmVhbEVsZW1lbnQodGFyZ2V0KTtcclxuICAgICAgICBjb25zdCByZWFsQ29udGVudCA9IHRoaXMuZ2V0UmVhbENvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChyZWFsRWxlbWVudCAmJiByZWFsQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChyZWFsQ29udGVudCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlYWxFbGVtZW50LmlubmVySFRNTCArPSByZWFsQ29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlYWxFbGVtZW50LmFwcGVuZENoaWxkKHJlYWxDb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRSZWFsRWxlbWVudCh0YXJnZXQ6IGFueSk6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5lbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRSZWFsQ29udGVudChjb250ZW50OiBhbnkpOiBIVE1MRWxlbWVudCB8IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50LmVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNhbml0aXplQXR0cmlidXRlTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsYXNzTmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2xhc3NcIjtcclxuICAgICAgICAgICAgY2FzZSBcImZvcklkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmb3JcIjtcclxuICAgICAgICAgICAgY2FzZSBcImFyaWFMYWJlbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXJpYS1sYWJlbFwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXJpYUhpZGRlblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXJpYS1oaWRkZW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdEZpbHRlcihvYmplY3Q6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGNhbGxiYWNrOiAoaXRlbTogYW55KSA9PiBib29sZWFuKTogYW55XHJcbntcclxuICAgIGxldCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9iamVjdFtrZXldO1xyXG4gICAgICAgIGxldCBjYWxsYmFja1Jlc3VsdCA9IGNhbGxiYWNrKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0TWFwKG9iamVjdDogb2JqZWN0LCBjYWxsYmFjazogYW55KTogYW55XHJcbntcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IChvYmplY3QgYXMgYW55KVtrZXldO1xyXG4gICAgICAgIGxldCBjYWxsYmFja1Jlc3VsdCA9IGNhbGxiYWNrKHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2tSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IFRyZWVXaWRnZXQgZnJvbSBcIi4vVHJlZVdpZGdldFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShjb25maWc6IG9iamVjdClcclxue1xyXG4gICAgcmV0dXJuIFRyZWVXaWRnZXQuY3JlYXRlKGNvbmZpZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVRyZWVFdmVudHMsIElEYXRhTm9kZSwgSVN0cnVjdHVyZSwgSVN0cnVjdHVyZUl0ZW0gfSBmcm9tIFwiLi90cmVlXCI7XHJcbmltcG9ydCB7IFNvcnRhYmxlLCBJT25Tb3J0U3VjY2Vzc0RhdGEgfSBmcm9tIFwiLi9iYXNlL3NvcnRhYmxlXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4vYmFzZS91dGlsaXR5L2VsZW1lbnRVdGlsaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUxpbmUgZXh0ZW5kcyBTb3J0YWJsZVxyXG57XHJcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBkYXRhOiBJRGF0YU5vZGU7XHJcbiAgICBwdWJsaWMgc3RydWN0dXJlOiBJU3RydWN0dXJlO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY2FuRWRpdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBJVHJlZUV2ZW50cztcclxuXHJcbiAgICBwdWJsaWMgb25Tb3J0U3VjY2VzcyhkYXRhOiBJT25Tb3J0U3VjY2Vzc0RhdGEpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vdmVEYXRhID0geyAuLi5kYXRhLCAuLi57IHRleHQ6IFwidGV4dFwiLCBuYW1lOiBcIm5hbWVcIiwgY2FuRHJhZzogdGhpcy5jYW5EcmFnIH0gfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHMub25MaW5lTW92ZShtb3ZlRGF0YSwgdGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB7IHRoaXMuZXZlbnRzLm9uTGluZUNsaWNrKHsgdGV4dDogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiLCBjYW5EcmFnOiB0aGlzLmNhbkRyYWcgfSwgdGhpcy5lbGVtZW50KSB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcInRyZWUtbGluZSByb3dcIjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSB0cmVlLWxpbmUtZXZlbmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSB0cmVlLWxpbmUtb2RkYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuRHJhZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RSZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5pdERyYWdFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbXMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdHJ1Y3R1cmUuaXRlbXM7XHJcbiAgICAgICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGVJdGVtQ291bnQgPSB0aGlzLmdldFZpc2libGVJdGVtQ291bnQoaXRlbXMpO1xyXG4gICAgICAgICAgICBsZXQgaXNPZmZzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaXRlbVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW1WYWx1ZShrZXksIGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRWxlbWVudCA9IHRoaXMuY3JlYXRlSXRlbSh2YWx1ZSwgdmlzaWJsZUl0ZW1Db3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAxMCArIDIwICogdGhpcy5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7b2Zmc2V0fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT2Zmc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbSh2YWx1ZTogc3RyaW5nLCBpdGVtQ291bnQ6IG51bWJlcik6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uU2l6ZSA9IE1hdGgucm91bmQoMTIgLyBpdGVtQ291bnQpO1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgY29sLSR7TWF0aC5tYXgoMSwgY29sdW1uU2l6ZSl9YDtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHZhbHVlLCB7IGNsYXNzTmFtZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb250ZW50KGl0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbVZhbHVlKGtleTogc3RyaW5nLCBpdGVtOiBJU3RydWN0dXJlSXRlbSk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGRhdGFWYWx1ZSA9IHRoaXMuZGF0YS5pdGVtW2tleV07XHJcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucyAmJiBkYXRhVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub3B0aW9uc1tkYXRhVmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0ub3B0aW9uc1tkYXRhVmFsdWVdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGFWYWx1ZSA/IGRhdGFWYWx1ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFZpc2libGVJdGVtQ291bnQoaXRlbXM6IHsgW25hbWU6IHN0cmluZ106IElTdHJ1Y3R1cmVJdGVtIH0pOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1trZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7IGl0ZW06IG51bGwgfTtcclxuICAgICAgICB0aGlzLnN0cnVjdHVyZSA9IHsgbmFtZTogbnVsbCwgcGFyZW50OiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZGFya1wiO1xyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gXCJsaWdodFwiO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnRhZyA9IFwiZGl2XCI7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5vbkxpbmVDbGljayA9IChkYXRhLCBpdGVtKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5ldmVudHMub25MaW5lTW92ZSA9IChkYXRhLCBpdGVtKSA9PiB7IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uQ2xpY2tEYXRhXHJcbntcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNhbkRyYWc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uTGluZU1vdmVEYXRhIGV4dGVuZHMgSU9uQ2xpY2tEYXRhLCBJT25Tb3J0U3VjY2Vzc0RhdGFcclxue1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UvY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRyZWVMaW5lLCBJT25DbGlja0RhdGEsIElPbkxpbmVNb3ZlRGF0YSB9IGZyb20gXCIuL3RyZWUtbGluZVwiO1xyXG5pbXBvcnQgU29ydFpvbmUgZnJvbSBcIi4vYmFzZS9jb250YWluZXJzL3NvcnR6b25lXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL2Jhc2UvY29udGFpbmVycy9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi9iYXNlL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9iYXNlL21vZGFsXCI7XHJcbmltcG9ydCB7IER5bmFtaWNGb3JtIH0gZnJvbSBcIi4vYmFzZS9mb3Jtcy9keW5hbWljRm9ybVwiO1xyXG5pbXBvcnQgeyBJRm9ybUF0dHJpYnV0ZSwgSUZvcm1BdHRyaWJ1dGVPcHRpb24gfSBmcm9tIFwiLi9iYXNlL2Zvcm1zL0lmb3JtQXR0cmlidXRlXCI7XHJcbmltcG9ydCBvYmplY3RGaWx0ZXIgZnJvbSBcIi4vYmFzZS91dGlsaXR5L29iamVjdEZpbHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBDb21wb25lbnQ8e30+XHJcbntcclxuICAgIHB1YmxpYyBkYXRhOiBBcnJheTxJRGF0YU5vZGU+O1xyXG4gICAgcHVibGljIHN0cnVjdHVyZTogeyBbbmFtZTogc3RyaW5nXTogSVN0cnVjdHVyZSB9O1xyXG4gICAgcHVibGljIGNhbkVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZXZlbnRzOiBJVHJlZUV2ZW50cztcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJVHJlZUNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgbm9kZXM6IEFycmF5PElUcmVlTm9kZT47XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwidHJlZS13aWRnZXQtbGlzdFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHRoaXMuZWxlbWVudCwgeyBjbGFzc05hbWU6IFwidHJlZS13aWRnZXRcIiB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLnB1c2goeyBub2RlOiB0aGlzLCBwYXJlbnQ6IG51bGwsIGNoaWxkcmVuOiBbXSB9KTtcclxuXHJcbiAgICAgICAgbGV0IGxldmVsID0gMDtcclxuICAgICAgICBsZXQgaXRlcmF0b3IgPSB7IGNvdW50OiAwIH07XHJcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGluZXModGhpcy5kYXRhLCBsYXN0Tm9kZS5jaGlsZHJlbiwgbGFzdE5vZGUsIGxldmVsLCBpdGVyYXRvciwgdGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgbGV0IG1vZGFsQnV0dG9uID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0VkaXQnLCB7IGNsYXNzTmFtZTogXCJidG5cIiB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b24ub25jbGljayA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoe1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50OiBkb2N1bWVudC5ib2R5LCB0aXRsZTogeyBzaXplOiAzLCB0ZXh0OiBcIkhlYWRlclwiIH0sIGNvbnRlbnQ6IFwiRm9vXCIsXHJcbiAgICAgICAgICAgIGRpc21pc3NCdXR0b246IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdDYW5jZWwnLCB7IGNsYXNzTmFtZTogXCJidG4gYnRuLWRlZmF1bHRcIiB9KSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0NvbmZpcm0nLCB7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zdHJ1Y3R1cmUgPSB7fTtcclxuICAgICAgICB0aGlzLmNhbkVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0geyBhZGRMaW5lVGV4dDogbnVsbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVMaW5lcyhcclxuICAgICAgICBkYXRhOiBBcnJheTxhbnk+LFxyXG4gICAgICAgIG5vZGVzOiBBcnJheTxJVHJlZU5vZGU+LFxyXG4gICAgICAgIHBhcmVudE5vZGU6IElUcmVlTm9kZSxcclxuICAgICAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgICAgIGl0ZXJhdG9yOiB7IGNvdW50OiBudW1iZXIgfSxcclxuICAgICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHNvcnRab25lPzogU29ydFpvbmVcclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhQ291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhTm9kZSA9IGRhdGFba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cnVjdHVyZUtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RydWN0dXJlKVtsZXZlbF07XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlW3N0cnVjdHVyZUtleV07XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNTb3J0YWJsZSA9IHRoaXMuY2FuRWRpdCAmJiBzdHJ1Y3R1cmUuaXNTb3J0YWJsZTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLmNyZWF0ZUxpbmUobGV2ZWwsIGl0ZXJhdG9yLmNvdW50LCBpc1NvcnRhYmxlLCBwYXJlbnQsIGRhdGFOb2RlLCBzdHJ1Y3R1cmUsIHt9LCBzb3J0Wm9uZSk7XHJcblxyXG4gICAgICAgICAgICAvL25vZGVzLnB1c2goeyBub2RlOiBsaW5lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkVkaXQgJiYgc29ydFpvbmUpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRab25lLmFkZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYWRkIGxpbmUgaW4gZWRpdCBtb2RlIGF0IHRoZSBlbmQgb2YgbGV2ZWxcclxuICAgICAgICAgICAgY3VycmVudENvdW50Kys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkVkaXQgJiYgZGF0YUNvdW50ID09PSBjdXJyZW50Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkTGluZSA9IHRoaXMuY3JlYXRlQWRkTGluZShsZXZlbCwgaXRlcmF0b3IuY291bnQsIHBhcmVudCwgZGF0YU5vZGUsIHN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGVzLnB1c2goeyBub2RlOiBhZGRMaW5lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXRlcmF0b3IuY291bnQrKztcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICAgICAgLy8gaWYgZWxlbWVudCBoYXZlIGNoaWxkcmVuIGNyZWF0ZSB3cmFwcGVyIGZvciB0aGVtXHJcbiAgICAgICAgICAgIGlmIChkYXRhTm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgY2hpbGQgc3RydWN0dXJlIGxldmVsIGlzIHNvcnRhYmxlIGNyZWF0ZSBkcm9wem9uZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0cnVjdHVyZUtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RydWN0dXJlKVtsZXZlbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlW25leHRTdHJ1Y3R1cmVLZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuRWRpdCAmJiBuZXh0U3RydWN0dXJlLmlzU29ydGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Wm9uZSA9IG5ldyBTb3J0Wm9uZSh7IHRhZzogXCJkaXZcIiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gc29ydFpvbmUuZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaCh7IG5vZGU6IHNvcnRab25lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSwgY2hpbGRyZW46IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJDb21wb25lbnQgPSBuZXcgQ29udGFpbmVyPHt9Pih7IHRhZzogXCJkaXZcIiwgcGFyZW50RWxlbWVudDogcGFyZW50IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXJDb21wb25lbnQuZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHsgbm9kZTogY29udGFpbmVyQ29tcG9uZW50LCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSwgY2hpbGRyZW46IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHJ1Y3R1cmUubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpbmVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFOb2RlLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydFpvbmVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZEVkaXRMaW5lKGxpbmU6IFRyZWVMaW5lKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaW5lLmVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbGluZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdMaW5lID0gdGhpcy5jcmVhdGVFZGl0TGluZShsaW5lLmxldmVsLCBsaW5lLnN0cnVjdHVyZS5uYW1lLCBsaW5lLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBuZXdMaW5lLmVsZW1lbnQ7XHJcbiAgICAgICAgbmV3RWxlbWVudC5mb2N1cygpO1xyXG5cclxuXHJcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKnByb3RlY3RlZCBlZGl0RG9uZSgpOiBUcmVlTGluZVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfSovXHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUFkZExpbmUoXHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IElEYXRhTm9kZSxcclxuICAgICAgICBzdHJ1Y3R1cmU6IElTdHJ1Y3R1cmUsXHJcbiAgICAgICAgb3B0aW9ucz86IG9iamVjdFxyXG4gICAgKTogVHJlZUxpbmVcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0VGV4dCA9IFwiQWRkIGxpbmUgK1wiO1xyXG4gICAgICAgIGxldCBsaW5lID0gbmV3IFRyZWVMaW5lKHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgc3RydWN0dXJlLFxyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5hZGRMaW5lVGV4dCA/IHRoaXMub3B0aW9ucy5hZGRMaW5lVGV4dCA6IGRlZmF1bHRUZXh0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpbmUuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShkYXRhLCBzdHJ1Y3R1cmUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkTGluZShkYXRhOiBJRGF0YU5vZGUsIHN0cnVjdHVyZTogSVN0cnVjdHVyZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RydWN0dXJlLnVzZUZvcm1FZGl0KSB7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbEl0ZW1zID0gb2JqZWN0RmlsdGVyKHN0cnVjdHVyZS5pdGVtcywgKGl0ZW06IElTdHJ1Y3R1cmVJdGVtKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBEeW5hbWljRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWxJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2V0U3RhdGUoeyBjb250ZW50OiBmb3JtIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVMaW5lKFxyXG4gICAgICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICAgICAgY291bnQ6IG51bWJlcixcclxuICAgICAgICBpc1NvcnRhYmxlOiBib29sZWFuLFxyXG4gICAgICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IElEYXRhTm9kZSxcclxuICAgICAgICBzdHJ1Y3R1cmU6IElTdHJ1Y3R1cmUsXHJcbiAgICAgICAgb3B0aW9ucz86IG9iamVjdCxcclxuICAgICAgICBzb3J0Wm9uZT86IFNvcnRab25lXHJcbiAgICApOiBUcmVlTGluZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaW5lT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgc3RydWN0dXJlLFxyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgY2FuRHJhZzogaXNTb3J0YWJsZSxcclxuICAgICAgICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcclxuICAgICAgICAgICAgY29udGFpbmVyOiBzb3J0Wm9uZSxcclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJlZUxpbmUobGluZU9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0TGluZShsZXZlbDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHBhcmVudDogSFRNTEVsZW1lbnQpOiBUcmVlTGluZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaW5lID0gdGhpcy5jcmVhdGVMaW5lKGxldmVsLCAwLCBmYWxzZSwgcGFyZW50LCB7IGl0ZW06IG51bGwgfSwgeyBuYW1lOiBudWxsLCBwYXJlbnQ6IG51bGwgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVxyXG57XHJcbiAgICBub2RlOiBDb21wb25lbnQ8e30+O1xyXG4gICAgcGFyZW50OiBDb21wb25lbnQ8e30+O1xyXG4gICAgY2hpbGRyZW4/OiBBcnJheTxJVHJlZU5vZGU+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlRXZlbnRzXHJcbntcclxuICAgIG9uTGluZUNsaWNrPzogKGRhdGE6IElPbkNsaWNrRGF0YSwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbiAgICBvbkxpbmVNb3ZlPzogKGRhdGE6IElPbkxpbmVNb3ZlRGF0YSwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVDb25maWdcclxue1xyXG4gICAgYWRkTGluZVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YU5vZGVcclxue1xyXG4gICAgaXRlbTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBjaGlsZHJlbj86IEFycmF5PElEYXRhTm9kZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cnVjdHVyZVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXJlbnQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NvcnRhYmxlPzogYm9vbGVhbjtcclxuICAgIHVzZUZvcm1FZGl0PzogYm9vbGVhbjtcclxuICAgIG9wdGlvbnM/OiB7IGNsYXNzPzogc3RyaW5nIH07XHJcbiAgICBpdGVtcz86IHsgW25hbWU6IHN0cmluZ106IElTdHJ1Y3R1cmVJdGVtIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cnVjdHVyZUl0ZW0gZXh0ZW5kcyBJRm9ybUF0dHJpYnV0ZVxyXG57XHJcbiAgICBoaWRkZW4/OiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==