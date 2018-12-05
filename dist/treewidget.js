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
        _this.innerRender();
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
    Component.prototype.init = function () {
        this.config(this._config);
    };
    Component.prototype.render = function () {
        if (!this.element) {
            this.element = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement(this.tag, null, this.attributes);
        }
        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    };
    Component.prototype.postRender = function () {
    };
    Component.prototype.getParentElement = function () {
        return this.parentSelector ? document.querySelector(this.parentSelector) : this.parentElement;
    };
    Component.prototype.setDefaultProps = function () {
        this.attributes = { id: null, className: null, style: null };
        this.parentElement = null;
        this.element = null;
        this.parentSelector = null;
        this.tag = 'div';
        this.parent = null;
    };
    Component.prototype.innerRender = function () {
        this.render();
        this.postRender();
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
        var id = "checkbox-" + this.name;
        this.checkbox = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("input", null, __assign({ className: "form-check-input", id: id }, this.attributes));
        if (this.onChange) {
            this.checkbox.addEventListener("change", function (event) { _this.onChange(event, _this); });
        }
        this.addContent(this.checkbox);
        var label = this.label;
        if (label) {
            var labelClass = "form-check-input";
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
        _super.prototype.render.call(this);
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
        var id = "input-" + this.name;
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
        var id = "select-" + this.name;
        if (this.label) {
            var labelElement = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("label", this.label, { forId: id });
            this.addContent(labelElement);
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
    Modal.prototype.setContent = function (value) {
        if (this.contentElement) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].setContent(this.contentElement, value);
        }
    };
    Modal.prototype.addContent = function (value) {
        if (this.contentElement) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].addContent(this.contentElement, value);
        }
    };
    Modal.prototype.clearContent = function () {
        if (this.contentElement) {
            _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].clearContent(this.contentElement);
        }
    };
    Modal.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
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
        if (this.content) {
            this.addContent(this.content);
        }
        var buttonGroup = null;
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
        _super.prototype.render.call(this);
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
        this.parentElement = this.getParentElement();
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
            this.modal.setContent(form);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmVlV2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvVHJlZVdpZGdldC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvY29tcG9uZW50LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2NvbnRhaW5lcnMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL2Ryb3B6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL3NvcnR6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9kcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2Zvcm1zL2NoZWNrYm94LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9mb3Jtcy9keW5hbWljRm9ybS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvZm9ybXMvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2Zvcm1zL3NlbGVjdC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL3NvcnRhYmxlLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS91dGlsaXR5L2VsZW1lbnRVdGlsaXR5LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS91dGlsaXR5L29iamVjdEZpbHRlci50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvdXRpbGl0eS9vYmplY3RNYXAudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL3RyZWUtbGluZS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE4QjtBQUU5QjtJQUFBO0lBT0EsQ0FBQztJQUppQixpQkFBTSxHQUFwQixVQUFxQixNQUFjO1FBRS9CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSwwQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUM7QUFDZ0I7QUFHMUQ7SUFBK0IsNkJBQVk7SUFjdkMsbUJBQW1CLE1BQWtCO1FBQWxCLHNDQUFrQjtRQUFyQyxZQUVJLGlCQUFPLFNBU1Y7UUF2Qk0s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MEIsRUFDMUIsSUFBZSxFQUNmLFNBQXFCLEVBQ3JCLE9BQWlCLEVBQ2pCLFFBQW9CO1FBR3BCLElBQUksV0FBVyxHQUFHO1lBQ2QsYUFBYTtZQUNiLElBQUk7WUFDSixTQUFTO1lBQ1QsS0FBSztZQUNMLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsUUFBUTtZQUNuQixLQUFLO1NBQ1I7UUFFRCxPQUFPLElBQUksbURBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRWEsNkJBQWMsR0FBeEIsVUFBeUIsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFtQjtRQUV6RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbEcsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELFdBQUM7QUFBRCxDQUFDLENBbk95Qix5REFBUyxHQW1PbEMiLCJmaWxlIjoidHJlZXdpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRyZWVXaWRnZXRcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJlZTogVHJlZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNvbmZpZzogb2JqZWN0KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFRyZWVXaWRnZXQudHJlZSA9IG5ldyBUcmVlKGNvbmZpZyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlndXJhYmxlIGZyb20gXCIuL2NvbmZpZ3VyYWJsZVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuaW1wb3J0IElIdG1sQXR0cmlidXRlcyBmcm9tIFwiLi9pbnRlcmZhY2VzL0lodG1sQXR0cmlidXRlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbmZpZ3VyYWJsZVxyXG57XHJcbiAgICBwdWJsaWMgYXR0cmlidXRlczogSUh0bWxBdHRyaWJ1dGVzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgcGFyZW50U2VsZWN0b3I6IHN0cmluZztcclxuICAgIHB1YmxpYyB0YWc6IHN0cmluZztcclxuICAgIHB1YmxpYyBwYXJlbnQ6IENvbXBvbmVudDtcclxuXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBhbnkgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBhbnkgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJSZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbnRlbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgQXJyYXk8SFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmc+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuc2V0Q29udGVudCh0aGlzLmVsZW1lbnQsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENvbnRlbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgQXJyYXk8SFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmc+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuYWRkQ29udGVudCh0aGlzLmVsZW1lbnQsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ29udGVudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5jbGVhckNvbnRlbnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KHRoaXMudGFnLCBudWxsLCB0aGlzLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RSZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UGFyZW50RWxlbWVudCgpOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudFNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmVudFNlbGVjdG9yKSA6IHRoaXMucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7IGlkOiBudWxsLCBjbGFzc05hbWU6IG51bGwsIHN0eWxlOiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFyZW50U2VsZWN0b3IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFnID0gJ2Rpdic7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5uZXJSZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdFJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbmZpZ3VyYWJsZVxyXG57XHJcbiAgICBba2V5OnN0cmluZ106IGFueTtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbmZpZyhjb25maWc6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IHByb3BlcnR5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHJvdGVjdGVkIGNoaWxkcmVuOiBBcnJheTxJQ29udGFpbmVyQ2hpbGQ+O1xyXG5cclxuICAgIHB1YmxpYyBhZGRDaGlsZChjaGlsZDogQ29tcG9uZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHtpbmRleDogc2l6ZSwgY29tcG9uZW50OiBjaGlsZH0pO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRDaGlsZEJ5RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IElDb250YWluZXJDaGlsZFxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kQ2hpbGQoY29tcG9uZW50OiBDb21wb25lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVDaGlsZChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bZnJvbUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoZnJvbUluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZSh0b0luZGV4LCAwLCBjaGlsZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRJbmRleGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlc2V0SW5kZXhlcygpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyQ2hpbGRcclxue1xyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCIuLi9kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJQ29udGFpbmVyQ2hpbGQgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wWm9uZSBleHRlbmRzIENvbnRhaW5lclxyXG57XHJcbiAgICBwdWJsaWMgY3VycmVudDogSUNvbnRhaW5lckNoaWxkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50KGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZmluZENoaWxkKGRyYWdnYWJsZSk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RSZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RXZlbnRzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMub25EcmFnT3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMub25EcmFnTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRXZlbnQpID0+IHsgcmV0dXJuIHRoaXMub25Ecm9wKGV2ZW50KSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJvbkRyYWdMZWF2ZSBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGRyYWdnYWJsZSA9IHRoaXMuY3VycmVudC5jb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShkcmFnZ2FibGUuZWxlbWVudCwgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcm9wWm9uZSB9IGZyb20gXCIuL2Ryb3B6b25lXCI7XHJcbmltcG9ydCB7IFNvcnRhYmxlIH0gZnJvbSBcIi4uL3NvcnRhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0Wm9uZSBleHRlbmRzIERyb3Bab25lXHJcbntcclxuICAgIHB1YmxpYyBvbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRyYWdnZWQgPSB0aGlzLmN1cnJlbnQuY29tcG9uZW50LmVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGlmIGRyYWdnZWQgaXMgdGFyZ2V0IGRvIG5vdGhpbmcgXHJcbiAgICAgICAgaWYgKGRyYWdnZWQgPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0YXJnZXRDaGlsZCA9IHRoaXMuZmluZENoaWxkQnlFbGVtZW50KHRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRDaGlsZCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50LmluZGV4O1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SW5kZXggPSB0YXJnZXRDaGlsZC5pbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgaXMgaGlnaGVyIHRoZW4gdGhlIHRhcmdldCBwdXQgaXQgYWZ0ZXIsIG90aGVyd2lzZSBwdXQgaXQgYmVmb3JlIHRoZSB0YXJnZXRcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHRhcmdldEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRyYWdnZWQsIHRhcmdldClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRyYWdnZWQsIG5leHRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZHJhZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgZWxlbWVudCBpbiBjb250YWluZXIgbGlzdFxyXG4gICAgICAgICAgICB0aGlzLm1vdmVDaGlsZChjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGRyYWdnZWQgaXMgYWxzbyBzb3J0YWJsZSwgZGlzcGF0Y2ggb25Tb3J0U3VjY2VzcyBldmVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50LmNvbXBvbmVudCBpbnN0YW5jZW9mIFNvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25DaGFuZ2UgPSB0YXJnZXRJbmRleCAtIGN1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5jb21wb25lbnQub25Tb3J0U3VjY2Vzcyh7bGFzdEluZGV4OiBjdXJyZW50SW5kZXgsIGluZGV4OiB0YXJnZXRJbmRleCwgcG9zaXRpb25DaGFuZ2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyb3Bab25lIH0gZnJvbSAnLi9jb250YWluZXJzL2Ryb3B6b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBDb21wb25lbnQgaW1wbGVtZW50cyBJRHJhZ2dhYmxlXHJcbntcclxuICAgIHB1YmxpYyBjb250YWluZXI6IERyb3Bab25lO1xyXG4gICAgcHVibGljIGNhbkRyYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdERyYWdFdmVudHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4geyB0aGlzLm9uRHJhZ1N0YXJ0KGV2ZW50KSB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXZlbnQpID0+IHsgdGhpcy5vbkRyYWdFbmQoZXZlbnQpIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnU3RhcnQoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0QXNDdXJyZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRHJhZ0VuZChldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbGVhckN1cnJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRzIHRoZSBjdXJyZW50IGRyYWdnZWQgZWxlbWVudCBpbiBjb250YWluZXJcclxuICAgIHByaXZhdGUgc2V0QXNDdXJyZW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRDdXJyZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFycyB0aGUgY3VycmVudCBkcmFnZ2VkIGVsZW1lbnQgaW4gY29udGFpbmVyXHJcbiAgICBwcml2YXRlIGNsZWFyQ3VycmVudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZVxyXG57XHJcbiAgICBjb250YWluZXI6IERyb3Bab25lO1xyXG4gICAgY2FuRHJhZzogYm9vbGVhbjtcclxuXHJcbiAgICBvbkRyYWdFbmQoZXZlbnQ6IGFueSk6IHZvaWQ7XHJcbiAgICBvbkRyYWdTdGFydChldmVudDogYW55KTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4uL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCwgaW5wdXQ6IENoZWNrYm94KSA9PiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBjaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2tcIiB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBgY2hlY2tib3gtJHt0aGlzLm5hbWV9YDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsLCB7XHJcbiAgICAgICAgICAgIC4uLnsgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2staW5wdXRcIiwgaWQgfSwgLi4udGhpcy5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudDogRXZlbnQpID0+IHsgdGhpcy5vbkNoYW5nZShldmVudCwgdGhpcykgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZENvbnRlbnQodGhpcy5jaGVja2JveCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcclxuICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxDbGFzcyA9IFwiZm9ybS1jaGVjay1pbnB1dFwiO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbGFiZWwsIHsgY2xhc3NOYW1lOiBsYWJlbENsYXNzLCBmb3JJZDogaWQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29udGVudChsYWJlbEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2JveC5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyB0eXBlOiBcImNoZWNrYm94XCIgfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJRm9ybUF0dHJpYnV0ZSwgSUZvcm1BdHRyaWJ1dGVPcHRpb24gfSBmcm9tIFwiLi9JZm9ybUF0dHJpYnV0ZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCBvYmplY3RNYXAgZnJvbSBcIi4uL3V0aWxpdHkvb2JqZWN0TWFwXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9pbnB1dFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuLi91dGlsaXR5L2VsZW1lbnRVdGlsaXR5XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBtb2RlbDogeyBbbmFtZTogc3RyaW5nXTogSUZvcm1BdHRyaWJ1dGUgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblN1Ym1pdChldmVudCkpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLnJlbmRlckZvcm0oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudChmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFnID0gXCJmb3JtXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3VibWl0KGV2ZW50OiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcbiAgICAgICAgLypldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblN1Ym1pdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUubW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJGb3JtKCk6IEFycmF5PENvbXBvbmVudD5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5tb2RlbDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRlbnQgPSBvYmplY3RNYXAoYXR0cmlidXRlcywgKGF0dHJpYnV0ZTogSUZvcm1BdHRyaWJ1dGUpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IG51bGw7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSB0aGlzLnJlbmRlclJhZGlvTGlzdChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5yZW5kZXJTZWxlY3QoYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5yZW5kZXJDaGVja2JveChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHRoaXMucmVuZGVyVGV4dChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtQ29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyUmFkaW9MaXN0KGF0dHJpYnV0ZTogSUZvcm1BdHRyaWJ1dGUpOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIC8qY29uc3QgeyBrZXksIHR5cGUsIG9wdGlvbnMsIGxhYmVsIH0gPSBhdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIGxldCByYWRpb0VsZW1lbnQgPSBvYmplY3RNYXAob3B0aW9ucywgKG9wdGlvbjogSUZvcm1BdHRyaWJ1dGVPcHRpb24pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSYWRpbyhrZXksIHR5cGUsIG9wdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGlvSWQgPSBgaW5wdXQtd3JhcHBlci0ke2tleX1gO1xyXG4gICAgICAgIGNvbnN0IHJhZGlvV3JhcHBlciA9IDxkaXYgaWQ9e3JhZGlvSWR9PntyYWRpb0VsZW1lbnR9PC9kaXY+O1xyXG4gICAgICAgIGxldCBsYWJlbEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgbGFiZWxFbGVtZW50ID0gPGxhYmVsIGh0bWxGb3I9e3JhZGlvSWR9PntsYWJlbH08L2xhYmVsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtsYWJlbEVsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICB7cmFkaW9XcmFwcGVyfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyovXHJcbiAgICAgICAgcmV0dXJuIEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlclJhZGlvKGtleTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIG9wdGlvbjogSUZvcm1BdHRyaWJ1dGVPcHRpb24pOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIC8qY29uc3QgY2hlY2tlZCA9IHRoaXMuc3RhdGUubW9kZWwuZ2V0QXR0cmlidXRlKGtleSkudmFsdWUgPT09IG9wdGlvbi5rZXk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGlvS2V5ID0gYCR7a2V5fS0ke29wdGlvbi5rZXl9YCwgaWQgPSBgcmFkaW8tJHtyYWRpb0tleX1gLFxyXG4gICAgICAgICAgICBsYWJlbElkID0gYCR7aWR9LWxhYmVsYCwgZ3JvdXBJZCA9IGAke2lkfS1ncm91cGA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGlvRWxlbWVudCA9IDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtvcHRpb24uZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgIChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHsgdGhpcy5vblJhZGlvQ2hhbmdlKGV2ZW50LCBrZXksIG9wdGlvbi5rZXkpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+O1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IDxsYWJlbCBpZD17bGFiZWxJZH0gaHRtbEZvcj17aWR9PntvcHRpb24udmFsdWV9PC9sYWJlbD47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIGtleT17cmFkaW9LZXl9IGlkPXtncm91cElkfT5cclxuICAgICAgICAgICAgICAgIHtyYWRpb0VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICB7bGFiZWxFbGVtZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyovXHJcblxyXG4gICAgICAgIHJldHVybiBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXJTZWxlY3QoYXR0cmlidXRlOiBJRm9ybUF0dHJpYnV0ZSk6IFNlbGVjdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIG9wdGlvbnMsIGxhYmVsLCBkaXNhYmxlZCB9ID0gYXR0cmlidXRlO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50cyA9IG9iamVjdE1hcChvcHRpb25zLCAob3B0aW9uOiBJRm9ybUF0dHJpYnV0ZU9wdGlvbikgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGBvcHRpb24tJHtuYW1lfS0ke29wdGlvbi5rZXl9YDtcclxuICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgb3B0aW9uLnZhbHVlLCB7IGlkIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RJZCA9IGBzZWxlY3QtJHtuYW1lfWA7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IG5ldyBTZWxlY3QoeyBsYWJlbCwgYXR0cmlidXRlczogeyBuYW1lLCBkaXNhYmxlZCwgdmFsdWUsIGlkOiBzZWxlY3RJZCB9IH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RFbGVtZW50LmFkZENvbnRlbnQob3B0aW9uRWxlbWVudHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VsZWN0RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyQ2hlY2tib3goYXR0cmlidXRlOiBJRm9ybUF0dHJpYnV0ZSk6IENoZWNrYm94XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB0eXBlLCBsYWJlbCwgdmFsdWUsIGRpc2FibGVkIH0gPSBhdHRyaWJ1dGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gbmV3IENoZWNrYm94KHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uVGV4dENoYW5nZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogeyBuYW1lLCBkaXNhYmxlZCwgdmFsdWUsIHR5cGUgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIGNoZWNrZWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2tib3g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUZXh0KGF0dHJpYnV0ZTogSUZvcm1BdHRyaWJ1dGUpOiBJbnB1dFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgbGFiZWwsIHZhbHVlLCBkaXNhYmxlZCB9ID0gYXR0cmlidXRlO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dCh7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblRleHRDaGFuZ2UsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgbmFtZSwgZGlzYWJsZWQsIHZhbHVlLCB0eXBlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblRleHRDaGFuZ2UoZXZlbnQ6IEV2ZW50LCBpbnB1dDogSW5wdXQpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qcHJvdGVjdGVkIG9uU2VsZWN0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4sIGtleTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5yZWZlcmVuY2VzW2tleV0uY3VycmVudDtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gaW5wdXQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubW9kZWwuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uUmFkaW9DaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBrZXk6IHN0cmluZywgb3B0aW9uS2V5OiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZShrZXksIG9wdGlvbktleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubW9kZWwuc2V0VmFsdWUoa2V5LCBvcHRpb25LZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWw6IHRoaXMuc3RhdGUubW9kZWwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBrZXk6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb2RlbC5zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsOiB0aGlzLnN0YXRlLm1vZGVsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMuc3RhdGUubW9kZWwuZ2V0QXR0cmlidXRlKGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0qL1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50LCBpbnB1dDogSW5wdXQpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IGBpbnB1dC0ke3RoaXMubmFtZX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB0aGlzLmxhYmVsLCB7IGZvcklkOiBpZCB9KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb250ZW50KGxhYmVsRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlucHV0ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcclxuICAgICAgICAgICAgLi4ueyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIGlkIH0sIC4uLnRoaXMuYXR0cmlidXRlc1xyXG4gICAgICAgIH0pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7IHRoaXMub25DaGFuZ2UoZXZlbnQsIHRoaXMpIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7IHR5cGU6IFwidGV4dFwiIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuLi91dGlsaXR5L2VsZW1lbnRVdGlsaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCwgc2VsZWN0OiBTZWxlY3QpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHNldENvbnRlbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSB8IENvbXBvbmVudFtdIHwgc3RyaW5nW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LnNldENvbnRlbnQodGhpcy5zZWxlY3QsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENvbnRlbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSB8IENvbXBvbmVudFtdIHwgc3RyaW5nW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5zZWxlY3QsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ29udGVudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmNsZWFyQ29udGVudCh0aGlzLnNlbGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IGBzZWxlY3QtJHt0aGlzLm5hbWV9YDtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgdGhpcy5sYWJlbCwgeyBmb3JJZDogaWQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29udGVudChsYWJlbEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIG51bGwsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWRcclxuICAgICAgICB9KSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7IHRoaXMub25DaGFuZ2UoZXZlbnQsIHRoaXMpIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHsgdHlwZTogXCJzZWxlY3RcIiB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgdGl0bGU6IHsgc2l6ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgfTtcclxuICAgIHB1YmxpYyBjb250ZW50OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEhUTUxFbGVtZW50W10gfCBDb21wb25lbnRbXSB8IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGhhc0Nsb3NlQnV0dG9uOiBib29sZWFuO1xyXG4gICAgcHVibGljIGRpc21pc3NCdXR0b246IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGNvbmZpcm1CdXR0b246IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHNldENvbnRlbnQodmFsdWU6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgSFRNTEVsZW1lbnRbXSB8IENvbXBvbmVudFtdIHwgc3RyaW5nW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuc2V0Q29udGVudCh0aGlzLmNvbnRlbnRFbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb250ZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEhUTUxFbGVtZW50W10gfCBDb21wb25lbnRbXSB8IHN0cmluZ1tdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5jb250ZW50RWxlbWVudCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJDb250ZW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5jbGVhckNvbnRlbnQodGhpcy5jb250ZW50RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gXCJtb2RhbC1vdmVybGF5XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpbmRvd0hlYWRlciA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwibW9kYWwtd2luZG93LWhlYWRlclwiIH0pO1xyXG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcIm1vZGFsLXdpbmRvdy1ib2R5XCIgfSk7XHJcbiAgICAgICAgY29uc3Qgd2luZG93Rm9vdGVyID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB7IGNsYXNzTmFtZTogXCJtb2RhbC13aW5kb3ctZm9vdGVyXCIgfSk7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgXCJkaXZcIixcclxuICAgICAgICAgICAgW3dpbmRvd0hlYWRlciwgdGhpcy5jb250ZW50RWxlbWVudCwgd2luZG93Rm9vdGVyXSxcclxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibW9kYWwtd2luZG93XCIgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoYGgke3RoaXMudGl0bGUuc2l6ZX1gLCB0aGlzLnRpdGxlLnRleHQpO1xyXG4gICAgICAgICAgICB3aW5kb3dIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIiZ0aW1lcztcIiwgeyBhcmlhSGlkZGVuOiBcInRydWVcIiB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIGljb24sIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsOiBcIkNsb3NlXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuY2xvc2UoKSB9KTtcclxuICAgICAgICAgICAgd2luZG93SGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb250ZW50KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uR3JvdXAgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNtaXNzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25EaXNtaXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlybUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db25maXJtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzbWlzc0J1dHRvbiB8fCB0aGlzLmNvbmZpcm1CdXR0b24pIHtcclxuICAgICAgICAgICAgYnV0dG9uR3JvdXAgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcclxuICAgICAgICAgICAgICAgIFt0aGlzLmRpc21pc3NCdXR0b24sIHRoaXMuY29uZmlybUJ1dHRvbl0sXHJcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJidG4tZ3JvdXBcIiwgcm9sZTogXCJncm91cFwiIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQod2luZG93Rm9vdGVyLCBidXR0b25Hcm91cCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRWxlbWVudFV0aWxpdHkuYWRkQ29udGVudCh0aGlzLmVsZW1lbnQsIHdpbmRvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb3NlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFzQ2xvc2VCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXNtaXNzQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNvbmZpcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCIuL2RyYWdnYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgRHJhZ2dhYmxlXHJcbntcclxuICAgIHB1YmxpYyBvblNvcnRTdWNjZXNzKGRhdGE6IElPblNvcnRTdWNjZXNzRGF0YSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25Tb3J0U3VjY2Vzc0RhdGFcclxue1xyXG4gICAgbGFzdEluZGV4OiBudW1iZXI7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgcG9zaXRpb25DaGFuZ2U6IG51bWJlcjsgXHJcbn1cclxuIiwiaW1wb3J0IElIdG1sQXR0cmlidXRlcyBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JaHRtbEF0dHJpYnV0ZXNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRVdGlsaXR5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudChcclxuICAgICAgICB0YWc6IHN0cmluZyxcclxuICAgICAgICBjb250ZW50PzogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcgfCBBcnJheTxIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZz4sXHJcbiAgICAgICAgYXR0cmlidXRlcz86IElIdG1sQXR0cmlidXRlc1xyXG4gICAgKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gYXR0cmlidXRlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCBhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbnRlbnQoZWxlbWVudCwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYnV0ZSh0YXJnZXQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuYW1lID0gdGhpcy5zYW5pdGl6ZUF0dHJpYnV0ZU5hbWUobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQuZWxlbWVudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRDb250ZW50KFxyXG4gICAgICAgIHRhcmdldDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQsXHJcbiAgICAgICAgY29udGVudDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcgfCBBcnJheTxIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZz5cclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQgfHwgIXRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvRWxlbWVudCh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0VsZW1lbnQodGFyZ2V0LCBjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDb250ZW50KFxyXG4gICAgICAgIHRhcmdldDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQsXHJcbiAgICAgICAgY29udGVudDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcgfCBBcnJheTxIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZz5cclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQgfHwgIXRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFyQ29udGVudCh0YXJnZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbnRlbnQodGFyZ2V0LCBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ29udGVudCh0YXJnZXQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZWFsRWxlbWVudCA9IHRoaXMuZ2V0UmVhbEVsZW1lbnQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHJlYWxFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgcmVhbEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVhbEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFRvRWxlbWVudCh0YXJnZXQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50LCBjb250ZW50OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVhbEVsZW1lbnQgPSB0aGlzLmdldFJlYWxFbGVtZW50KHRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcmVhbENvbnRlbnQgPSB0aGlzLmdldFJlYWxDb250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAocmVhbEVsZW1lbnQgJiYgcmVhbENvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAocmVhbENvbnRlbnQpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZWFsRWxlbWVudC5pbm5lckhUTUwgKz0gcmVhbENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWFsRWxlbWVudC5hcHBlbmRDaGlsZChyZWFsQ29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmVhbEVsZW1lbnQodGFyZ2V0OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCk6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5lbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRSZWFsQ29udGVudChjb250ZW50OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZWxlbWVudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2FuaXRpemVBdHRyaWJ1dGVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjbGFzc1wiO1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9ySWRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImZvclwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXJpYUxhYmVsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhcmlhLWxhYmVsXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcmlhSGlkZGVuXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhcmlhLWhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0RmlsdGVyKG9iamVjdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgY2FsbGJhY2s6IChpdGVtOiBhbnkpID0+IGJvb2xlYW4pOiBhbnlcclxue1xyXG4gICAgbGV0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrUmVzdWx0ID0gY2FsbGJhY2sodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2tSZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RNYXAob2JqZWN0OiBvYmplY3QsIGNhbGxiYWNrOiBhbnkpOiBhbnlcclxue1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gKG9iamVjdCBhcyBhbnkpW2tleV07XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrUmVzdWx0ID0gY2FsbGJhY2sodmFsdWUpO1xyXG5cclxuICAgICAgICByZXN1bHQucHVzaChjYWxsYmFja1Jlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgVHJlZVdpZGdldCBmcm9tIFwiLi9UcmVlV2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGNvbmZpZzogb2JqZWN0KVxyXG57XHJcbiAgICByZXR1cm4gVHJlZVdpZGdldC5jcmVhdGUoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJVHJlZUV2ZW50cywgSURhdGFOb2RlLCBJU3RydWN0dXJlLCBJU3RydWN0dXJlSXRlbSB9IGZyb20gXCIuL3RyZWVcIjtcclxuaW1wb3J0IHsgU29ydGFibGUsIElPblNvcnRTdWNjZXNzRGF0YSB9IGZyb20gXCIuL2Jhc2Uvc29ydGFibGVcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi9iYXNlL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlTGluZSBleHRlbmRzIFNvcnRhYmxlXHJcbntcclxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xyXG4gICAgcHVibGljIGRhdGE6IElEYXRhTm9kZTtcclxuICAgIHB1YmxpYyBzdHJ1Y3R1cmU6IElTdHJ1Y3R1cmU7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBvZmZzZXQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjYW5FZGl0OiBib29sZWFuO1xyXG4gICAgcHVibGljIGNvdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBldmVudHM6IElUcmVlRXZlbnRzO1xyXG5cclxuICAgIHB1YmxpYyBvblNvcnRTdWNjZXNzKGRhdGE6IElPblNvcnRTdWNjZXNzRGF0YSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbW92ZURhdGEgPSB7IC4uLmRhdGEsIC4uLnsgdGV4dDogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiLCBjYW5EcmFnOiB0aGlzLmNhbkRyYWcgfSB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5vbkxpbmVNb3ZlKG1vdmVEYXRhLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB7IHRoaXMuZXZlbnRzLm9uTGluZUNsaWNrKHsgdGV4dDogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiLCBjYW5EcmFnOiB0aGlzLmNhbkRyYWcgfSwgdGhpcy5lbGVtZW50KSB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcInRyZWUtbGluZSByb3dcIjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSB0cmVlLWxpbmUtZXZlbmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSB0cmVlLWxpbmUtb2RkYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuRHJhZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RSZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5pdERyYWdFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbXMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdHJ1Y3R1cmUuaXRlbXM7XHJcbiAgICAgICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGVJdGVtQ291bnQgPSB0aGlzLmdldFZpc2libGVJdGVtQ291bnQoaXRlbXMpO1xyXG4gICAgICAgICAgICBsZXQgaXNPZmZzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaXRlbVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW1WYWx1ZShrZXksIGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRWxlbWVudCA9IHRoaXMuY3JlYXRlSXRlbSh2YWx1ZSwgdmlzaWJsZUl0ZW1Db3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAxMCArIDIwICogdGhpcy5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7b2Zmc2V0fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT2Zmc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbSh2YWx1ZTogc3RyaW5nLCBpdGVtQ291bnQ6IG51bWJlcik6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uU2l6ZSA9IE1hdGgucm91bmQoMTIgLyBpdGVtQ291bnQpO1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgY29sLSR7TWF0aC5tYXgoMSwgY29sdW1uU2l6ZSl9YDtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHZhbHVlLCB7IGNsYXNzTmFtZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb250ZW50KGl0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbVZhbHVlKGtleTogc3RyaW5nLCBpdGVtOiBJU3RydWN0dXJlSXRlbSk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGRhdGFWYWx1ZSA9IHRoaXMuZGF0YS5pdGVtW2tleV07XHJcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucyAmJiBkYXRhVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ub3B0aW9uc1tkYXRhVmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0ub3B0aW9uc1tkYXRhVmFsdWVdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGFWYWx1ZSA/IGRhdGFWYWx1ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFZpc2libGVJdGVtQ291bnQoaXRlbXM6IHsgW25hbWU6IHN0cmluZ106IElTdHJ1Y3R1cmVJdGVtIH0pOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1trZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7IGl0ZW06IG51bGwgfTtcclxuICAgICAgICB0aGlzLnN0cnVjdHVyZSA9IHsgbmFtZTogbnVsbCwgcGFyZW50OiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZGFya1wiO1xyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gXCJsaWdodFwiO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnRhZyA9IFwiZGl2XCI7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5vbkxpbmVDbGljayA9IChkYXRhLCBpdGVtKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5ldmVudHMub25MaW5lTW92ZSA9IChkYXRhLCBpdGVtKSA9PiB7IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uQ2xpY2tEYXRhXHJcbntcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNhbkRyYWc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uTGluZU1vdmVEYXRhIGV4dGVuZHMgSU9uQ2xpY2tEYXRhLCBJT25Tb3J0U3VjY2Vzc0RhdGFcclxue1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UvY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRyZWVMaW5lLCBJT25DbGlja0RhdGEsIElPbkxpbmVNb3ZlRGF0YSB9IGZyb20gXCIuL3RyZWUtbGluZVwiO1xyXG5pbXBvcnQgU29ydFpvbmUgZnJvbSBcIi4vYmFzZS9jb250YWluZXJzL3NvcnR6b25lXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL2Jhc2UvY29udGFpbmVycy9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRWxlbWVudFV0aWxpdHkgfSBmcm9tIFwiLi9iYXNlL3V0aWxpdHkvZWxlbWVudFV0aWxpdHlcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9iYXNlL21vZGFsXCI7XHJcbmltcG9ydCB7IER5bmFtaWNGb3JtIH0gZnJvbSBcIi4vYmFzZS9mb3Jtcy9keW5hbWljRm9ybVwiO1xyXG5pbXBvcnQgeyBJRm9ybUF0dHJpYnV0ZSwgSUZvcm1BdHRyaWJ1dGVPcHRpb24gfSBmcm9tIFwiLi9iYXNlL2Zvcm1zL0lmb3JtQXR0cmlidXRlXCI7XHJcbmltcG9ydCBvYmplY3RGaWx0ZXIgZnJvbSBcIi4vYmFzZS91dGlsaXR5L29iamVjdEZpbHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIGRhdGE6IEFycmF5PElEYXRhTm9kZT47XHJcbiAgICBwdWJsaWMgc3RydWN0dXJlOiB7IFtuYW1lOiBzdHJpbmddOiBJU3RydWN0dXJlIH07XHJcbiAgICBwdWJsaWMgY2FuRWRpdDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBldmVudHM6IElUcmVlRXZlbnRzO1xyXG4gICAgcHVibGljIG9wdGlvbnM6IElUcmVlQ29uZmlnO1xyXG5cclxuICAgIHB1YmxpYyBub2RlczogQXJyYXk8SVRyZWVOb2RlPjtcclxuXHJcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwidHJlZS13aWRnZXQtbGlzdFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHRoaXMuZWxlbWVudCwgeyBjbGFzc05hbWU6IFwidHJlZS13aWRnZXRcIiB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzLnB1c2goeyBub2RlOiB0aGlzLCBwYXJlbnQ6IG51bGwsIGNoaWxkcmVuOiBbXSB9KTtcclxuXHJcbiAgICAgICAgbGV0IGxldmVsID0gMDtcclxuICAgICAgICBsZXQgaXRlcmF0b3IgPSB7IGNvdW50OiAwIH07XHJcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGluZXModGhpcy5kYXRhLCBsYXN0Tm9kZS5jaGlsZHJlbiwgbGFzdE5vZGUsIGxldmVsLCBpdGVyYXRvciwgdGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgbGV0IG1vZGFsQnV0dG9uID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0VkaXQnLCB7IGNsYXNzTmFtZTogXCJidG5cIiB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b24ub25jbGljayA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoe1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50OiBkb2N1bWVudC5ib2R5LCB0aXRsZTogeyBzaXplOiAzLCB0ZXh0OiBcIkhlYWRlclwiIH0sIGNvbnRlbnQ6IFwiRm9vXCIsXHJcbiAgICAgICAgICAgIGRpc21pc3NCdXR0b246IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdDYW5jZWwnLCB7IGNsYXNzTmFtZTogXCJidG4gYnRuLWRlZmF1bHRcIiB9KSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0NvbmZpcm0nLCB7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnlcIiB9KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5zdHJ1Y3R1cmUgPSB7fTtcclxuICAgICAgICB0aGlzLmNhbkVkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0geyBhZGRMaW5lVGV4dDogbnVsbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVMaW5lcyhcclxuICAgICAgICBkYXRhOiBBcnJheTxhbnk+LFxyXG4gICAgICAgIG5vZGVzOiBBcnJheTxJVHJlZU5vZGU+LFxyXG4gICAgICAgIHBhcmVudE5vZGU6IElUcmVlTm9kZSxcclxuICAgICAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgICAgIGl0ZXJhdG9yOiB7IGNvdW50OiBudW1iZXIgfSxcclxuICAgICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHNvcnRab25lPzogU29ydFpvbmVcclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhQ291bnQgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhTm9kZSA9IGRhdGFba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cnVjdHVyZUtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RydWN0dXJlKVtsZXZlbF07XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlW3N0cnVjdHVyZUtleV07XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNTb3J0YWJsZSA9IHRoaXMuY2FuRWRpdCAmJiBzdHJ1Y3R1cmUuaXNTb3J0YWJsZTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLmNyZWF0ZUxpbmUobGV2ZWwsIGl0ZXJhdG9yLmNvdW50LCBpc1NvcnRhYmxlLCBwYXJlbnQsIGRhdGFOb2RlLCBzdHJ1Y3R1cmUsIHt9LCBzb3J0Wm9uZSk7XHJcblxyXG4gICAgICAgICAgICAvL25vZGVzLnB1c2goeyBub2RlOiBsaW5lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkVkaXQgJiYgc29ydFpvbmUpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRab25lLmFkZENoaWxkKGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYWRkIGxpbmUgaW4gZWRpdCBtb2RlIGF0IHRoZSBlbmQgb2YgbGV2ZWxcclxuICAgICAgICAgICAgY3VycmVudENvdW50Kys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkVkaXQgJiYgZGF0YUNvdW50ID09PSBjdXJyZW50Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkTGluZSA9IHRoaXMuY3JlYXRlQWRkTGluZShsZXZlbCwgaXRlcmF0b3IuY291bnQsIHBhcmVudCwgZGF0YU5vZGUsIHN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAvL25vZGVzLnB1c2goeyBub2RlOiBhZGRMaW5lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXRlcmF0b3IuY291bnQrKztcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICAgICAgLy8gaWYgZWxlbWVudCBoYXZlIGNoaWxkcmVuIGNyZWF0ZSB3cmFwcGVyIGZvciB0aGVtXHJcbiAgICAgICAgICAgIGlmIChkYXRhTm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgY2hpbGQgc3RydWN0dXJlIGxldmVsIGlzIHNvcnRhYmxlIGNyZWF0ZSBkcm9wem9uZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0cnVjdHVyZUtleSA9IE9iamVjdC5rZXlzKHRoaXMuc3RydWN0dXJlKVtsZXZlbCArIDFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlW25leHRTdHJ1Y3R1cmVLZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuRWRpdCAmJiBuZXh0U3RydWN0dXJlLmlzU29ydGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Wm9uZSA9IG5ldyBTb3J0Wm9uZSh7IHRhZzogXCJkaXZcIiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gc29ydFpvbmUuZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaCh7IG5vZGU6IHNvcnRab25lLCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSwgY2hpbGRyZW46IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJDb21wb25lbnQgPSBuZXcgQ29udGFpbmVyKHsgdGFnOiBcImRpdlwiLCBwYXJlbnRFbGVtZW50OiBwYXJlbnQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lckNvbXBvbmVudC5lbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goeyBub2RlOiBjb250YWluZXJDb21wb25lbnQsIHBhcmVudDogcGFyZW50Tm9kZS5ub2RlLCBjaGlsZHJlbjogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0cnVjdHVyZS5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGluZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YU5vZGUuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Wm9uZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkRWRpdExpbmUobGluZTogVHJlZUxpbmUpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpbmUuZWxlbWVudDtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBsaW5lLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSB0aGlzLmNyZWF0ZUVkaXRMaW5lKGxpbmUubGV2ZWwsIGxpbmUuc3RydWN0dXJlLm5hbWUsIGxpbmUucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG5ld0xpbmUuZWxlbWVudDtcclxuICAgICAgICBuZXdFbGVtZW50LmZvY3VzKCk7XHJcblxyXG5cclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qcHJvdGVjdGVkIGVkaXREb25lKCk6IFRyZWVMaW5lXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9Ki9cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQWRkTGluZShcclxuICAgICAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgICAgIGNvdW50OiBudW1iZXIsXHJcbiAgICAgICAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgZGF0YTogSURhdGFOb2RlLFxyXG4gICAgICAgIHN0cnVjdHVyZTogSVN0cnVjdHVyZSxcclxuICAgICAgICBvcHRpb25zPzogb2JqZWN0XHJcbiAgICApOiBUcmVlTGluZVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gXCJBZGQgbGluZSArXCI7XHJcbiAgICAgICAgbGV0IGxpbmUgPSBuZXcgVHJlZUxpbmUoe1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBzdHJ1Y3R1cmUsXHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5vcHRpb25zLmFkZExpbmVUZXh0ID8gdGhpcy5vcHRpb25zLmFkZExpbmVUZXh0IDogZGVmYXVsdFRleHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGluZS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKGRhdGEsIHN0cnVjdHVyZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRMaW5lKGRhdGE6IElEYXRhTm9kZSwgc3RydWN0dXJlOiBJU3RydWN0dXJlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdHJ1Y3R1cmUudXNlRm9ybUVkaXQpIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsSXRlbXMgPSBvYmplY3RGaWx0ZXIoc3RydWN0dXJlLml0ZW1zLCAoaXRlbTogSVN0cnVjdHVyZUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5oaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gbmV3IER5bmFtaWNGb3JtKHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiBtb2RlbEl0ZW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW9kYWwuc2V0Q29udGVudChmb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTGluZShcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgaXNTb3J0YWJsZTogYm9vbGVhbixcclxuICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgZGF0YTogSURhdGFOb2RlLFxyXG4gICAgc3RydWN0dXJlOiBJU3RydWN0dXJlLFxyXG4gICAgb3B0aW9ucyA/OiBvYmplY3QsXHJcbiAgICBzb3J0Wm9uZSA/OiBTb3J0Wm9uZVxyXG4pOiBUcmVlTGluZVxyXG57XHJcbiAgICBsZXQgbGluZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHN0cnVjdHVyZSxcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBjYW5EcmFnOiBpc1NvcnRhYmxlLFxyXG4gICAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXHJcbiAgICAgICAgY29udGFpbmVyOiBzb3J0Wm9uZSxcclxuICAgICAgICBjb3VudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgVHJlZUxpbmUobGluZU9wdGlvbnMpO1xyXG59XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRMaW5lKGxldmVsOiBudW1iZXIsIG5hbWU6IHN0cmluZywgcGFyZW50OiBIVE1MRWxlbWVudCk6IFRyZWVMaW5lXHJcbntcclxuICAgIGxldCBsaW5lID0gdGhpcy5jcmVhdGVMaW5lKGxldmVsLCAwLCBmYWxzZSwgcGFyZW50LCB7IGl0ZW06IG51bGwgfSwgeyBuYW1lOiBudWxsLCBwYXJlbnQ6IG51bGwgfSk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVcclxue1xyXG4gICAgbm9kZTogQ29tcG9uZW50O1xyXG4gICAgcGFyZW50OiBDb21wb25lbnQ7XHJcbiAgICBjaGlsZHJlbj86IEFycmF5PElUcmVlTm9kZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVFdmVudHNcclxue1xyXG4gICAgb25MaW5lQ2xpY2s/OiAoZGF0YTogSU9uQ2xpY2tEYXRhLCBpdGVtOiBIVE1MRWxlbWVudCkgPT4gdm9pZDtcclxuICAgIG9uTGluZU1vdmU/OiAoZGF0YTogSU9uTGluZU1vdmVEYXRhLCBpdGVtOiBIVE1MRWxlbWVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZUNvbmZpZ1xyXG57XHJcbiAgICBhZGRMaW5lVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhTm9kZVxyXG57XHJcbiAgICBpdGVtOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIGNoaWxkcmVuPzogQXJyYXk8SURhdGFOb2RlPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RydWN0dXJlXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhcmVudDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU29ydGFibGU/OiBib29sZWFuO1xyXG4gICAgdXNlRm9ybUVkaXQ/OiBib29sZWFuO1xyXG4gICAgb3B0aW9ucz86IHsgY2xhc3M/OiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zPzogeyBbbmFtZTogc3RyaW5nXTogSVN0cnVjdHVyZUl0ZW0gfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RydWN0dXJlSXRlbSBleHRlbmRzIElGb3JtQXR0cmlidXRlXHJcbntcclxuICAgIGhpZGRlbj86IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9