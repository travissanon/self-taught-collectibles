(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var _vector_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vector_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(148);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);







var ThirdPage = function ThirdPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "about-block__title header header--primary"
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-block__paragraph body body--primary"
  }, "Self Taught Collectibles is currenly a living resource pool for creatives, hobbiest, and many more that are interested in learning from thought leaders within the design and development industry."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-block__paragraph body body--primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Travis Sanon"), " is a currently working within (put company travis) and (etc however you want to describe yourself)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-block__paragraph body body--primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Micah Carroll"), " spends time designing to help fuel up on self help books, anime, and more Nintendo Switch games. Constantly experimenting with product design, front end development, and social media growth strategies. Currently working at Ring protecting the neighborhoods daily.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "about-block__title header header--primary"
  }, "Credits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-block__paragraph body body--primary"
  }, "These are just some people we\u2019d like to give credit to helping us build out this resource and we are forever grateful."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "about-block__list body body--primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Hunter Keca - developer resource"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Spencer Marsh - designer resource"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Trisha Happy - designer resource")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ThirdPage);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var _pages_vector_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(147);
/* harmony import */ var _pages_vector_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_vector_svg__WEBPACK_IMPORTED_MODULE_5__);







var Header =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Header, _Component);

  function Header(_ref) {
    var _this;

    var siteTitle = _ref.siteTitle;
    _this = _Component.call(this, {
      siteTitle: siteTitle
    }) || this;
    _this.state = {
      showMenu: false
    };
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    return _this;
  }

  var _proto = Header.prototype;

  _proto.handleClick = function handleClick() {
    this.setState(function (prevState) {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  _proto.render = function render() {
    var menu = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "nav nav-mobile"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      onClick: this.handleClick
    }, "X"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "nav-mobile__container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/listing/development"
    }, "Development"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/listing/design"
    }, "Design"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/about"
    }, "About")));
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      className: _pages_vector_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: _pages_vector_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "nav nav-desktop"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/listing/development"
    }, "Development"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/listing/design"
    }, "Design"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/about"
    }, "About")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "nav-toggle",
      onClick: this.handleClick
    }, "Menu"), this.state.showMenu ? menu : ''));
  };

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var Test = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "Ayy"));
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(6);

$export($export.P, 'Function', { bind: __webpack_require__(150) });


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(17);
var isObject = __webpack_require__(11);
var invoke = __webpack_require__(78);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer(_ref) {
  var siteTitle = _ref.siteTitle;
  var path = window.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/devmaterial"
  }, "Development by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Travis Sanon")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/about",
    style: {
      visibility: path === '/' ? 'visible' : 'hidden'
    }
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/_micahcarroll"
  }, "Design by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Micah Carroll")));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-about-js-10638cd2ebe312cc3355.js.map