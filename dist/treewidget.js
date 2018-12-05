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
    }
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
        this.parentElement = document.body;
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
    }
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
    }
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
            this.element.addEventListener('drop', function (event) { console.log(event); return _this.onDrop(event); });
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
    }
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
    }
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
    }
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
        var window = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", new Array(windowHeader, this.contentElement, windowFooter), { className: "modal-window" });
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
            buttonGroup = _utility_elementUtility__WEBPACK_IMPORTED_MODULE_1__["ElementUtility"].createElement("div", new Array(this.dismissButton, this.confirmButton), { className: "btn-group", role: "group" });
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
    }
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
        this.addContent(element, content);
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
    }
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
                var value = item.options[dataValue].label;
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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
        newElement.addEventListener("focusout", function () {
            console.log("focusout");
        });
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
            var previousElement = line.element.previousElementSibling;
            _this.addEditLine(line);
        });
        return line;
    };
    Tree.prototype.addLine = function (data, structure) {
        if (structure.useFormEdit) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmVlV2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvVHJlZVdpZGdldC50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvY29tcG9uZW50LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL2NvbnRhaW5lcnMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL2Ryb3B6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9jb250YWluZXJzL3NvcnR6b25lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9kcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vVHJlZVdpZGdldC8uL3NyYy9iYXNlL21vZGFsLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvYmFzZS9zb3J0YWJsZS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2Jhc2UvdXRpbGl0eS9lbGVtZW50VXRpbGl0eS50cyIsIndlYnBhY2s6Ly9UcmVlV2lkZ2V0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvdHJlZS1saW5lLnRzIiwid2VicGFjazovL1RyZWVXaWRnZXQvLi9zcmMvdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVB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SUFBWSxFQUFFLE1BQW1CO1FBRXJFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVsRyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0EzTnlCLHlEQUFTLEdBMk5sQyIsImZpbGUiOiJ0cmVld2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vdHJlZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVHJlZVdpZGdldFxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0cmVlO1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoY29uZmlnOiBvYmplY3QpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgVHJlZVdpZGdldC50cmVlID0gbmV3IFRyZWUoY29uZmlnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWd1cmFibGUgZnJvbSBcIi4vY29uZmlndXJhYmxlXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5pbXBvcnQgSUh0bWxBdHRyaWJ1dGVzIGZyb20gXCIuL2ludGVyZmFjZXMvSWh0bWxBdHRyaWJ1dGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVzOiBJSHRtbEF0dHJpYnV0ZXM7XHJcblxyXG4gICAgcHVibGljIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIHBhcmVudFNlbGVjdG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFyZW50OiBDb21wb25lbnQ7XHJcblxyXG4gICAgcHVibGljIGV2ZW50czogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZzogYW55ID0ge307XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55ID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmlubmVyUmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb250ZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEFycmF5PEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LnNldENvbnRlbnQodGhpcy5lbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb250ZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEFycmF5PEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRVdGlsaXR5LmFkZENvbnRlbnQodGhpcy5lbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNvbnRlbnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuY2xlYXJDb250ZW50KHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudCh0aGlzLnRhZywgbnVsbCwgdGhpcy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwb3N0UmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFBhcmVudEVsZW1lbnQoKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRTZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJlbnRTZWxlY3RvcikgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyBpZDogbnVsbCwgY2xhc3NOYW1lOiBudWxsLCBzdHlsZTogbnVsbCB9O1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBhcmVudFNlbGVjdG9yID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRhZyA9ICdkaXYnO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlubmVyUmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RSZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb25maWd1cmFibGVcclxue1xyXG4gICAgcHVibGljIGNvbmZpZyhjb25maWc6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IHByb3BlcnR5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHJvdGVjdGVkIGNoaWxkcmVuOiBBcnJheTxJQ29udGFpbmVyQ2hpbGQ+O1xyXG5cclxuICAgIHB1YmxpYyBhZGRDaGlsZChjaGlsZDogQ29tcG9uZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHtpbmRleDogc2l6ZSwgY29tcG9uZW50OiBjaGlsZH0pO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRDaGlsZEJ5RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IElDb250YWluZXJDaGlsZFxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kQ2hpbGQoY29tcG9uZW50OiBDb21wb25lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVDaGlsZChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bZnJvbUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoZnJvbUluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZSh0b0luZGV4LCAwLCBjaGlsZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRJbmRleGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlc2V0SW5kZXhlcygpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyQ2hpbGRcclxue1xyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCIuLi9kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJQ29udGFpbmVyQ2hpbGQgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wWm9uZSBleHRlbmRzIENvbnRhaW5lclxyXG57XHJcbiAgICBwdWJsaWMgY3VycmVudDogSUNvbnRhaW5lckNoaWxkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50KGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZmluZENoaWxkKGRyYWdnYWJsZSk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RSZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0RXZlbnRzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMub25EcmFnT3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMub25EcmFnTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRXZlbnQpID0+IHsgY29uc29sZS5sb2coZXZlbnQpOyByZXR1cm4gdGhpcy5vbkRyb3AoZXZlbnQpIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihcIm9uRHJhZ0xlYXZlIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRHJvcChldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBsZXQgZHJhZ2dhYmxlID0gdGhpcy5jdXJyZW50LmNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZS5lbGVtZW50LCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyb3Bab25lIH0gZnJvbSBcIi4vZHJvcHpvbmVcIjtcclxuaW1wb3J0IHsgU29ydGFibGUgfSBmcm9tIFwiLi4vc29ydGFibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRab25lIGV4dGVuZHMgRHJvcFpvbmVcclxue1xyXG4gICAgcHVibGljIG9uRHJvcChldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZHJhZ2dlZCA9IHRoaXMuY3VycmVudC5jb21wb25lbnQuZWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gaWYgZHJhZ2dlZCBpcyB0YXJnZXQgZG8gbm90aGluZyBcclxuICAgICAgICBpZiAoZHJhZ2dlZCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRhcmdldENoaWxkID0gdGhpcy5maW5kQ2hpbGRCeUVsZW1lbnQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldENoaWxkKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmN1cnJlbnQuaW5kZXg7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRJbmRleCA9IHRhcmdldENoaWxkLmluZGV4O1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgY3VycmVudCBpcyBoaWdoZXIgdGhlbiB0aGUgdGFyZ2V0IHB1dCBpdCBhZnRlciwgb3RoZXJ3aXNlIHB1dCBpdCBiZWZvcmUgdGhlIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gdGFyZ2V0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZHJhZ2dlZCwgdGFyZ2V0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZHJhZ2dlZCwgbmV4dFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBlbGVtZW50IGluIGNvbnRhaW5lciBsaXN0XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUNoaWxkKGN1cnJlbnRJbmRleCwgdGFyZ2V0SW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgZHJhZ2dlZCBpcyBhbHNvIHNvcnRhYmxlLCBkaXNwYXRjaCBvblNvcnRTdWNjZXNzIGV2ZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQuY29tcG9uZW50IGluc3RhbmNlb2YgU29ydGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbkNoYW5nZSA9IHRhcmdldEluZGV4IC0gY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50LmNvbXBvbmVudC5vblNvcnRTdWNjZXNzKHtsYXN0SW5kZXg6IGN1cnJlbnRJbmRleCwgaW5kZXg6IHRhcmdldEluZGV4LCBwb3NpdGlvbkNoYW5nZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJvcFpvbmUgfSBmcm9tICcuL2NvbnRhaW5lcnMvZHJvcHpvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIENvbXBvbmVudCBpbXBsZW1lbnRzIElEcmFnZ2FibGVcclxue1xyXG4gICAgcHVibGljIGNvbnRhaW5lcjogRHJvcFpvbmU7XHJcbiAgICBwdWJsaWMgY2FuRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpbml0RHJhZ0V2ZW50cygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7IHRoaXMub25EcmFnU3RhcnQoZXZlbnQpIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChldmVudCkgPT4geyB0aGlzLm9uRHJhZ0VuZChldmVudCkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRBc0N1cnJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ3VycmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHMgdGhlIGN1cnJlbnQgZHJhZ2dlZCBlbGVtZW50IGluIGNvbnRhaW5lclxyXG4gICAgcHJpdmF0ZSBzZXRBc0N1cnJlbnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEN1cnJlbnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXJzIHRoZSBjdXJyZW50IGRyYWdnZWQgZWxlbWVudCBpbiBjb250YWluZXJcclxuICAgIHByaXZhdGUgY2xlYXJDdXJyZW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlXHJcbntcclxuICAgIGNvbnRhaW5lcjogRHJvcFpvbmU7XHJcbiAgICBjYW5EcmFnOiBib29sZWFuO1xyXG5cclxuICAgIG9uRHJhZ0VuZChldmVudCk6IHZvaWQ7XHJcbiAgICBvbkRyYWdTdGFydChldmVudCk6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRVdGlsaXR5IH0gZnJvbSBcIi4vdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyB0aXRsZTogeyBzaXplOiBudW1iZXIsIHRleHQ6IHN0cmluZyB9O1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgQXJyYXk8SFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmc+O1xyXG4gICAgcHVibGljIGhhc0Nsb3NlQnV0dG9uOiBib29sZWFuO1xyXG4gICAgcHVibGljIGRpc21pc3NCdXR0b246IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGNvbmZpcm1CdXR0b246IEhUTUxFbGVtZW50O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgb25Db25maXJtOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgc2V0Q29udGVudCh2YWx1ZTogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcgfCBBcnJheTxIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZz4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuc2V0Q29udGVudCh0aGlzLmNvbnRlbnRFbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb250ZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEFycmF5PEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBFbGVtZW50VXRpbGl0eS5hZGRDb250ZW50KHRoaXMuY29udGVudEVsZW1lbnQsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ29udGVudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgRWxlbWVudFV0aWxpdHkuY2xlYXJDb250ZW50KHRoaXMuY29udGVudEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IFwibW9kYWwtb3ZlcmxheVwiO1xyXG5cclxuICAgICAgICBjb25zdCB3aW5kb3dIZWFkZXIgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcIm1vZGFsLXdpbmRvdy1oZWFkZXJcIiB9KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50ID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB7IGNsYXNzTmFtZTogXCJtb2RhbC13aW5kb3ctYm9keVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd0Zvb3RlciA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwibW9kYWwtd2luZG93LWZvb3RlclwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgICAgIG5ldyBBcnJheSh3aW5kb3dIZWFkZXIsIHRoaXMuY29udGVudEVsZW1lbnQsIHdpbmRvd0Zvb3RlciksXHJcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm1vZGFsLXdpbmRvd1wiIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50aXRsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KGBoJHt0aGlzLnRpdGxlLnNpemV9YCwgdGhpcy50aXRsZS50ZXh0KTtcclxuICAgICAgICAgICAgd2luZG93SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNDbG9zZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCImdGltZXM7XCIsIHsgYXJpYUhpZGRlbjogXCJ0cnVlXCIgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBpY29uLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiY2xvc2VcIixcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogXCJDbG9zZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLmNsb3NlKCkgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvd0hlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29udGVudCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkdyb3VwID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzbWlzc0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uRGlzbWlzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1CdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29uZmlybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc21pc3NCdXR0b24gfHwgdGhpcy5jb25maXJtQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICBuZXcgQXJyYXkodGhpcy5kaXNtaXNzQnV0dG9uLCB0aGlzLmNvbmZpcm1CdXR0b24pLFxyXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiYnRuLWdyb3VwXCIsIHJvbGU6IFwiZ3JvdXBcIiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFbGVtZW50VXRpbGl0eS5hZGRDb250ZW50KHdpbmRvd0Zvb3RlciwgYnV0dG9uR3JvdXApO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBFbGVtZW50VXRpbGl0eS5hZGRDb250ZW50KHRoaXMuZWxlbWVudCwgd2luZG93KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xvc2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbkNsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNDbG9zZUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb25maXJtQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpc21pc3NCdXR0b24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ29uZmlybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4vZHJhZ2dhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydGFibGUgZXh0ZW5kcyBEcmFnZ2FibGVcclxue1xyXG4gICAgcHVibGljIG9uU29ydFN1Y2Nlc3MoZGF0YTogSU9uU29ydFN1Y2Nlc3NEYXRhKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPblNvcnRTdWNjZXNzRGF0YVxyXG57XHJcbiAgICBsYXN0SW5kZXg6IG51bWJlcjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBwb3NpdGlvbkNoYW5nZTogbnVtYmVyOyBcclxufVxyXG4iLCJpbXBvcnQgSUh0bWxBdHRyaWJ1dGVzIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lodG1sQXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudFV0aWxpdHlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIHRhZzogc3RyaW5nLFxyXG4gICAgICAgIGNvbnRlbnQ/OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCB8IHN0cmluZyB8IEFycmF5PEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nPixcclxuICAgICAgICBhdHRyaWJ1dGVzPzogSUh0bWxBdHRyaWJ1dGVzXHJcbiAgICApOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudChlbGVtZW50LCBjb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdHRyaWJ1dGUodGFyZ2V0OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMuc2FuaXRpemVBdHRyaWJ1dGVOYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0LmVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ29udGVudChcclxuICAgICAgICB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50LFxyXG4gICAgICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgQXJyYXk8SFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmc+XHJcbiAgICApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50IHx8ICF0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb0VsZW1lbnQodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9FbGVtZW50KHRhcmdldCwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29udGVudChcclxuICAgICAgICB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50LFxyXG4gICAgICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50IHwgc3RyaW5nIHwgQXJyYXk8SFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmc+XHJcbiAgICApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50IHx8ICF0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGVhckNvbnRlbnQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb250ZW50KHRhcmdldCwgY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckNvbnRlbnQodGFyZ2V0OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVhbEVsZW1lbnQgPSB0aGlzLmdldFJlYWxFbGVtZW50KHRhcmdldCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChyZWFsRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHJlYWxFbGVtZW50LnJlbW92ZUNoaWxkKHJlYWxFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRUb0VsZW1lbnQodGFyZ2V0OiBIVE1MRWxlbWVudCB8IENvbXBvbmVudCwgY29udGVudDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlYWxFbGVtZW50ID0gdGhpcy5nZXRSZWFsRWxlbWVudCh0YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHJlYWxDb250ZW50ID0gdGhpcy5nZXRSZWFsQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHJlYWxFbGVtZW50ICYmIHJlYWxDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHJlYWxDb250ZW50KSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVhbEVsZW1lbnQuaW5uZXJIVE1MICs9IHJlYWxDb250ZW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVhbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmVhbENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJlYWxFbGVtZW50KHRhcmdldDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQpOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmVhbENvbnRlbnQoY29udGVudDogSFRNTEVsZW1lbnQgfCBDb21wb25lbnQgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50LmVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNhbml0aXplQXR0cmlidXRlTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsYXNzTmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2xhc3NcIjtcclxuICAgICAgICAgICAgY2FzZSBcImZvcklkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmb3JcIjtcclxuICAgICAgICAgICAgY2FzZSBcImFyaWFMYWJlbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXJpYS1sYWJlbFwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXJpYUhpZGRlblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXJpYS1oaWRkZW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBUcmVlV2lkZ2V0IGZyb20gXCIuL1RyZWVXaWRnZXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoY29uZmlnOiBvYmplY3QpXHJcbntcclxuICAgIHJldHVybiBUcmVlV2lkZ2V0LmNyZWF0ZShjb25maWcpO1xyXG59XHJcbiIsImltcG9ydCB7IElUcmVlRXZlbnRzLCBJRGF0YU5vZGUsIElTdHJ1Y3R1cmUsIElTdHJ1Y3R1cmVJdGVtIH0gZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgeyBTb3J0YWJsZSwgSU9uU29ydFN1Y2Nlc3NEYXRhIH0gZnJvbSBcIi4vYmFzZS9zb3J0YWJsZVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuL2Jhc2UvdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVMaW5lIGV4dGVuZHMgU29ydGFibGVcclxue1xyXG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGF0YTogSURhdGFOb2RlO1xyXG4gICAgcHVibGljIHN0cnVjdHVyZTogSVN0cnVjdHVyZTtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNhbkVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGV2ZW50czogSVRyZWVFdmVudHM7XHJcblxyXG4gICAgcHVibGljIG9uU29ydFN1Y2Nlc3MoZGF0YTogSU9uU29ydFN1Y2Nlc3NEYXRhKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtb3ZlRGF0YSA9IHsgLi4uZGF0YSwgLi4ueyB0ZXh0OiBcInRleHRcIiwgbmFtZTogXCJuYW1lXCIsIGNhbkRyYWc6IHRoaXMuY2FuRHJhZyB9IH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzLm9uTGluZU1vdmUobW92ZURhdGEsIHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICgpID0+IHsgdGhpcy5ldmVudHMub25MaW5lQ2xpY2soeyB0ZXh0OiBcInRleHRcIiwgbmFtZTogXCJuYW1lXCIsIGNhbkRyYWc6IHRoaXMuY2FuRHJhZyB9LCB0aGlzLmVsZW1lbnQpIH0sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwidHJlZS1saW5lIHJvd1wiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHRyZWUtbGluZS1ldmVuYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHRyZWUtbGluZS1vZGRgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIiwgY2xhc3NOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5EcmFnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9zdFJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbml0RHJhZ0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0cnVjdHVyZS5pdGVtcztcclxuICAgICAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUl0ZW1Db3VudCA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1Db3VudChpdGVtcyk7XHJcbiAgICAgICAgICAgIGxldCBpc09mZnNldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5pdGVtW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbVZhbHVlKGtleSwgaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5oaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1FbGVtZW50ID0gdGhpcy5jcmVhdGVJdGVtKHZhbHVlLCB2aXNpYmxlSXRlbUNvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IDEwICsgMjAgKiB0aGlzLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUVsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtvZmZzZXR9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPZmZzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtKHZhbHVlOiBzdHJpbmcsIGl0ZW1Db3VudDogbnVtYmVyKTogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5TaXplID0gTWF0aC5yb3VuZCgxMiAvIGl0ZW1Db3VudCk7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBjb2wtJHtNYXRoLm1heCgxLCBjb2x1bW5TaXplKX1gO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdmFsdWUsIHsgY2xhc3NOYW1lIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbnRlbnQoaXRlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRJdGVtVmFsdWUoa2V5OiBzdHJpbmcsIGl0ZW06IElTdHJ1Y3R1cmVJdGVtKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0YVZhbHVlID0gdGhpcy5kYXRhLml0ZW1ba2V5XTtcclxuICAgICAgICBpZiAoaXRlbS5vcHRpb25zICYmIGRhdGFWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5vcHRpb25zW2RhdGFWYWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5vcHRpb25zW2RhdGFWYWx1ZV0ubGFiZWw7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVZhbHVlID8gZGF0YVZhbHVlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0VmlzaWJsZUl0ZW1Db3VudChpdGVtczogeyBbbmFtZTogc3RyaW5nXTogSVN0cnVjdHVyZUl0ZW0gfSk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHsgaXRlbTogbnVsbCB9O1xyXG4gICAgICAgIHRoaXMuc3RydWN0dXJlID0geyBuYW1lOiBudWxsLCBwYXJlbnQ6IG51bGwgfTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gXCJkYXJrXCI7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBcImxpZ2h0XCI7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xyXG4gICAgICAgIHRoaXMudGFnID0gXCJkaXZcIjtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm9uTGluZUNsaWNrID0gKGRhdGEsIGl0ZW0pID0+IHsgfTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5vbkxpbmVNb3ZlID0gKGRhdGEsIGl0ZW0pID0+IHsgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25DbGlja0RhdGFcclxue1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY2FuRHJhZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25MaW5lTW92ZURhdGEgZXh0ZW5kcyBJT25DbGlja0RhdGEsIElPblNvcnRTdWNjZXNzRGF0YVxyXG57XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUxpbmUsIElPbkNsaWNrRGF0YSwgSU9uTGluZU1vdmVEYXRhIH0gZnJvbSBcIi4vdHJlZS1saW5lXCI7XHJcbmltcG9ydCBTb3J0Wm9uZSBmcm9tIFwiLi9iYXNlL2NvbnRhaW5lcnMvc29ydHpvbmVcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vYmFzZS9jb250YWluZXJzL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBFbGVtZW50VXRpbGl0eSB9IGZyb20gXCIuL2Jhc2UvdXRpbGl0eS9lbGVtZW50VXRpbGl0eVwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL2Jhc2UvbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBkYXRhOiBBcnJheTxJRGF0YU5vZGU+O1xyXG4gICAgcHVibGljIHN0cnVjdHVyZTogeyBbbmFtZTogc3RyaW5nXTogSVN0cnVjdHVyZSB9O1xyXG4gICAgcHVibGljIGNhbkVkaXQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZXZlbnRzOiBJVHJlZUV2ZW50cztcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJVHJlZUNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgbm9kZXM6IEFycmF5PElUcmVlTm9kZT47XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NOYW1lOiBcInRyZWUtd2lkZ2V0LWxpc3RcIiB9KTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gRWxlbWVudFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImRpdlwiLCB0aGlzLmVsZW1lbnQsIHsgY2xhc3NOYW1lOiBcInRyZWUtd2lkZ2V0XCIgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKHsgbm9kZTogdGhpcywgcGFyZW50OiBudWxsLCBjaGlsZHJlbjogW10gfSk7XHJcblxyXG4gICAgICAgIGxldCBsZXZlbCA9IDA7XHJcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0geyBjb3VudDogMCB9O1xyXG4gICAgICAgIGxldCBsYXN0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVzKHRoaXMuZGF0YSwgbGFzdE5vZGUuY2hpbGRyZW4sIGxhc3ROb2RlLCBsZXZlbCwgaXRlcmF0b3IsIHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGxldCBtb2RhbEJ1dHRvbiA9IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdFZGl0JywgeyBjbGFzc05hbWU6IFwiYnRuXCIgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbik7XHJcblxyXG4gICAgICAgIG1vZGFsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudDogZG9jdW1lbnQuYm9keSwgdGl0bGU6IHsgc2l6ZTogMywgdGV4dDogXCJIZWFkZXJcIiB9LCBjb250ZW50OiBcIkZvb1wiLFxyXG4gICAgICAgICAgICBkaXNtaXNzQnV0dG9uOiBFbGVtZW50VXRpbGl0eS5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnQ2FuY2VsJywgeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1kZWZhdWx0XCIgfSksXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IEVsZW1lbnRVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdDb25maXJtJywgeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RydWN0dXJlID0ge307XHJcbiAgICAgICAgdGhpcy5jYW5FZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsgYWRkTGluZVRleHQ6IG51bGwgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTGluZXMoXHJcbiAgICAgICAgZGF0YTogQXJyYXk8YW55PixcclxuICAgICAgICBub2RlczogQXJyYXk8SVRyZWVOb2RlPixcclxuICAgICAgICBwYXJlbnROb2RlOiBJVHJlZU5vZGUsXHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcixcclxuICAgICAgICBpdGVyYXRvcjogeyBjb3VudDogbnVtYmVyIH0sXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBzb3J0Wm9uZT86IFNvcnRab25lXHJcbiAgICApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0YUNvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU5vZGUgPSBkYXRhW2tleV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJ1Y3R1cmVLZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0cnVjdHVyZSlbbGV2ZWxdO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZVtzdHJ1Y3R1cmVLZXldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlzU29ydGFibGUgPSB0aGlzLmNhbkVkaXQgJiYgc3RydWN0dXJlLmlzU29ydGFibGU7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5jcmVhdGVMaW5lKGxldmVsLCBpdGVyYXRvci5jb3VudCwgaXNTb3J0YWJsZSwgcGFyZW50LCBkYXRhTm9kZSwgc3RydWN0dXJlLCB7fSwgc29ydFpvbmUpO1xyXG5cclxuICAgICAgICAgICAgLy9ub2Rlcy5wdXNoKHsgbm9kZTogbGluZSwgcGFyZW50OiBwYXJlbnROb2RlLm5vZGUgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5FZGl0ICYmIHNvcnRab25lKSB7XHJcbiAgICAgICAgICAgICAgICBzb3J0Wm9uZS5hZGRDaGlsZChsaW5lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFkZCBsaW5lIGluIGVkaXQgbW9kZSBhdCB0aGUgZW5kIG9mIGxldmVsXHJcbiAgICAgICAgICAgIGN1cnJlbnRDb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5FZGl0ICYmIGRhdGFDb3VudCA9PT0gY3VycmVudENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZExpbmUgPSB0aGlzLmNyZWF0ZUFkZExpbmUobGV2ZWwsIGl0ZXJhdG9yLmNvdW50LCBwYXJlbnQsIGRhdGFOb2RlLCBzdHJ1Y3R1cmUpO1xyXG4gICAgICAgICAgICAgICAgLy9ub2Rlcy5wdXNoKHsgbm9kZTogYWRkTGluZSwgcGFyZW50OiBwYXJlbnROb2RlLm5vZGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNvdW50Kys7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIGlmIGVsZW1lbnQgaGF2ZSBjaGlsZHJlbiBjcmVhdGUgd3JhcHBlciBmb3IgdGhlbVxyXG4gICAgICAgICAgICBpZiAoZGF0YU5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGNoaWxkIHN0cnVjdHVyZSBsZXZlbCBpcyBzb3J0YWJsZSBjcmVhdGUgZHJvcHpvbmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdHJ1Y3R1cmVLZXkgPSBPYmplY3Qua2V5cyh0aGlzLnN0cnVjdHVyZSlbbGV2ZWwgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZVtuZXh0U3RydWN0dXJlS2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbkVkaXQgJiYgbmV4dFN0cnVjdHVyZS5pc1NvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydFpvbmUgPSBuZXcgU29ydFpvbmUoeyB0YWc6IFwiZGl2XCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHNvcnRab25lLmVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goeyBub2RlOiBzb3J0Wm9uZSwgcGFyZW50OiBwYXJlbnROb2RlLm5vZGUsIGNoaWxkcmVuOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyQ29tcG9uZW50ID0gbmV3IENvbnRhaW5lcih7IHRhZzogXCJkaXZcIiwgcGFyZW50RWxlbWVudDogcGFyZW50IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXJDb21wb25lbnQuZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHsgbm9kZTogY29udGFpbmVyQ29tcG9uZW50LCBwYXJlbnQ6IHBhcmVudE5vZGUubm9kZSwgY2hpbGRyZW46IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdHJ1Y3R1cmUubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpbmVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFOb2RlLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydFpvbmVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZEVkaXRMaW5lKGxpbmU6IFRyZWVMaW5lKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaW5lLmVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbGluZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdMaW5lID0gdGhpcy5jcmVhdGVFZGl0TGluZShsaW5lLmxldmVsLCBsaW5lLnN0cnVjdHVyZS5uYW1lLCBsaW5lLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBuZXdMaW5lLmVsZW1lbnQ7XHJcbiAgICAgICAgbmV3RWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb2N1c291dFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKnByb3RlY3RlZCBlZGl0RG9uZSgpOiBUcmVlTGluZVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfSovXHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUFkZExpbmUoXHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IElEYXRhTm9kZSxcclxuICAgICAgICBzdHJ1Y3R1cmU6IElTdHJ1Y3R1cmUsXHJcbiAgICAgICAgb3B0aW9ucz86IG9iamVjdFxyXG4gICAgKTogVHJlZUxpbmVcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0VGV4dCA9IFwiQWRkIGxpbmUgK1wiO1xyXG4gICAgICAgIGxldCBsaW5lID0gbmV3IFRyZWVMaW5lKHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgc3RydWN0dXJlLFxyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5hZGRMaW5lVGV4dCA/IHRoaXMub3B0aW9ucy5hZGRMaW5lVGV4dCA6IGRlZmF1bHRUZXh0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpbmUuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0VsZW1lbnQgPSBsaW5lLmVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5hZGRFZGl0TGluZShsaW5lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZExpbmUoZGF0YTogSURhdGFOb2RlLCBzdHJ1Y3R1cmU6IElTdHJ1Y3R1cmUpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHN0cnVjdHVyZS51c2VGb3JtRWRpdCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUxpbmUoXHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgICAgIGlzU29ydGFibGU6IGJvb2xlYW4sXHJcbiAgICAgICAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgZGF0YTogSURhdGFOb2RlLFxyXG4gICAgICAgIHN0cnVjdHVyZTogSVN0cnVjdHVyZSxcclxuICAgICAgICBvcHRpb25zPzogb2JqZWN0LFxyXG4gICAgICAgIHNvcnRab25lPzogU29ydFpvbmVcclxuICAgICk6IFRyZWVMaW5lXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpbmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBzdHJ1Y3R1cmUsXHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBjYW5EcmFnOiBpc1NvcnRhYmxlLFxyXG4gICAgICAgICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgICAgICBjb250YWluZXI6IHNvcnRab25lLFxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlTGluZShsaW5lT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRMaW5lKGxldmVsOiBudW1iZXIsIG5hbWU6IHN0cmluZywgcGFyZW50OiBIVE1MRWxlbWVudCk6IFRyZWVMaW5lXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLmNyZWF0ZUxpbmUobGV2ZWwsIDAsIGZhbHNlLCBwYXJlbnQsIHsgaXRlbTogbnVsbCB9LCB7IG5hbWU6IG51bGwsIHBhcmVudDogbnVsbCB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlXHJcbntcclxuICAgIG5vZGU6IENvbXBvbmVudDtcclxuICAgIHBhcmVudDogQ29tcG9uZW50O1xyXG4gICAgY2hpbGRyZW4/OiBBcnJheTxJVHJlZU5vZGU+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlRXZlbnRzXHJcbntcclxuICAgIG9uTGluZUNsaWNrPzogKGRhdGE6IElPbkNsaWNrRGF0YSwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbiAgICBvbkxpbmVNb3ZlPzogKGRhdGE6IElPbkxpbmVNb3ZlRGF0YSwgaXRlbTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVDb25maWdcclxue1xyXG4gICAgYWRkTGluZVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YU5vZGVcclxue1xyXG4gICAgaXRlbTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBjaGlsZHJlbj86IEFycmF5PElEYXRhTm9kZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cnVjdHVyZVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXJlbnQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NvcnRhYmxlPzogYm9vbGVhbjtcclxuICAgIHVzZUZvcm1FZGl0PzogYm9vbGVhbjtcclxuICAgIG9wdGlvbnM/OiB7IGNsYXNzPzogc3RyaW5nIH07XHJcbiAgICBpdGVtcz86IHsgW25hbWU6IHN0cmluZ106IElTdHJ1Y3R1cmVJdGVtIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cnVjdHVyZUl0ZW1cclxue1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBoaWRkZW4/OiBzdHJpbmc7XHJcbiAgICBvcHRpb25zPzogeyBbbmFtZTogc3RyaW5nXTogSVN0cnVjdHVyZUl0ZW1PcHRpb24gfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RydWN0dXJlSXRlbU9wdGlvblxyXG57XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9