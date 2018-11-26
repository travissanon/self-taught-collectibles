(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_d_1697857809_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(166);
var _public_static_d_1697857809_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(166, 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(144);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(148);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(151);
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(152);








 // import logo from './vector.svg'





var SecondPage = function SecondPage(_ref) {
  var location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["StaticQuery"], {
    query: "1697857809" // let windowLocation = location.pathname.split("/").pop();
    ,
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "list-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "list-content__container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "list-content__header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, data.site.siteMetadata.professionTitle[location.pathname.split("/").pop()]), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "body body--primary"
      }, data.site.siteMetadata.professionDescription[location.pathname.split("/").pop()])), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_divider__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(People, {
        data: data,
        location: location.pathname.split("/").pop()
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null));
    },
    data: _public_static_d_1697857809_json__WEBPACK_IMPORTED_MODULE_4__
  });
};

var People = function People(_ref2) {
  var data = _ref2.data,
      location = _ref2.location;
  var listOfPeople = [];
  {
    data.allPeopleJson.edges.map(function (_ref3, i) {
      var node = _ref3.node;

      if (node.profession === location) {
        listOfPeople.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Person, {
          person: node,
          image: data.allImageSharp.edges.filter(function (selection) {
            return selection.node.fluid.originalName === node.image;
          }),
          key: i
        }));
      }
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "list-content__people"
  }, listOfPeople);
};

var Person = function Person(_ref4) {
  var person = _ref4.person,
      image = _ref4.image,
      key = _ref4.key;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "list-content__person",
    key: key
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    src: image[0].node.fluid.src
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "body body--secondary"
  }, "Sub Count: ", person.subCount), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, person.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "list-content__description"
  }, person.description));
};

/* harmony default export */ __webpack_exports__["default"] = (SecondPage); // export const query = graphql`
//   query People {
//     site {
//       siteMetadata {
//         title
//         professionTitle {
//           development
//           design
//         }
//         professionDescription {
//           development
//           design
//         }
//       }
//     }
//     allPeopleJson {
//       edges {
//         node {
//           id
//           subCount
//           name
//           description
//           image
//           profession
//         }
//       }
//     }
//   }`

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

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Divider = function Divider() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-divider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dot"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dot"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dot"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(18) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 166:
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Self Taught Collectables","professionTitle":{"development":"Development","design":"Design"},"professionDescription":{"development":"This section derives of majority anyone who's really spreading the knowledge of your front-end section of a website. So expect a lot of HTML, CSS, Javascript like tutorials.","design":"This section derives of designers that dive into deep design concepts as well as tangible tutorials for you to complete."}}},"allImageSharp":{"edges":[{"node":{"fluid":{"src":"/static/charli-marie-tv-1e1cb1db625c643942f9b908fd3d6590-e27b1.jpg","originalName":"charli-marie-tv.jpg"}}},{"node":{"fluid":{"src":"/static/caler-edwards-6b891f60a7d3cb7191180f60f02053c5-e27b1.jpg","originalName":"caler-edwards.jpg"}}},{"node":{"fluid":{"src":"/static/dan-petty-da58b63a83bb763976196d5ea6b160ee-e27b1.jpg","originalName":"dan-petty.jpg"}}},{"node":{"fluid":{"src":"/static/design-course-fc8e0814c472cd1385cad6ec7e16e903-e27b1.jpg","originalName":"design-course.jpg"}}},{"node":{"fluid":{"src":"/static/dev-tips-ee7688514dd57f360cd4f5ddf8f0f69c-e27b1.jpg","originalName":"dev-tips.jpg"}}},{"node":{"fluid":{"src":"/static/fun-fun-function-3372e9b22f6a1fd8e9a82738195772f8-e27b1.jpg","originalName":"fun-fun-function.jpg"}}},{"node":{"fluid":{"src":"/static/flux-1472addb3cd934ce06db61051be5b3f2-e27b1.jpg","originalName":"flux.jpg"}}},{"node":{"fluid":{"src":"/static/free-code-camp-7834efa5d7041a28fa5e5e455f4ffd70-e27b1.jpg","originalName":"free-code-camp.jpg"}}},{"node":{"fluid":{"src":"/static/gal-shir-aba223a31cf8251785c2c778afbd57fa-e27b1.jpg","originalName":"gal-shir.jpg"}}},{"node":{"fluid":{"src":"/static/high-resolution-podcast-bed872703daa3f80050622176f1fdf10-e27b1.jpg","originalName":"high-resolution-podcast.jpg"}}},{"node":{"fluid":{"src":"/static/jesse-showalter-fcd64838682b3a614693c71f95790e14-e27b1.jpg","originalName":"jesse-showalter.jpg"}}},{"node":{"fluid":{"src":"/static/joel-beukelman-fbb9c17599746017882afd7e34d62b87-e27b1.jpg","originalName":"joel-beukelman.jpg"}}},{"node":{"fluid":{"src":"/static/learn-code-academy-514f2e709be938bbb68b79eeb35e9719-e27b1.jpg","originalName":"learn-code-academy.jpg"}}},{"node":{"fluid":{"src":"/static/level-up-tuts-11afc0075e3d8395605ee26a50216c9d-e27b1.jpg","originalName":"level-up-tuts.jpg"}}},{"node":{"fluid":{"src":"/static/maex-b3de3887722b304645ca47a9a313c78d-e27b1.jpg","originalName":"maex.jpg"}}},{"node":{"fluid":{"src":"/static/the-coding-train-88dede19b30fafe2fca421a30ac32786-e27b1.jpg","originalName":"the-coding-train.jpg"}}},{"node":{"fluid":{"src":"/static/mds-c38618aede566cdd2d2d4e5380fb7353-e27b1.jpg","originalName":"mds.jpg"}}},{"node":{"fluid":{"src":"/static/sketch-together-5334d6c00b11b30f3bf5717067f3c192-e27b1.jpg","originalName":"sketch-together.jpg"}}},{"node":{"fluid":{"src":"/static/the-futur-6011a5379a0d76dd0099c814b9d555aa-e27b1.jpg","originalName":"the-futur.jpg"}}},{"node":{"fluid":{"src":"/static/the-net-ninja-abb2619aca2b184b36f9e268e4de0af3-e27b1.jpg","originalName":"the-net-ninja.jpg"}}},{"node":{"fluid":{"src":"/static/the-new-boston-ce0f8368881b6a338291c4c4693a2039-e27b1.jpg","originalName":"the-new-boston.jpg"}}},{"node":{"fluid":{"src":"/static/the-simple-designers-b95b5602f9239b0535eb5e5077d51daf-e27b1.jpg","originalName":"the-simple-designers.jpg"}}},{"node":{"fluid":{"src":"/static/traversy-media-880a316cc871788e76891fff71e6f246-e27b1.jpg","originalName":"traversy-media.jpg"}}},{"node":{"fluid":{"src":"/static/wes-bos-e80394ff693343aef78ed386b06bee9e-e27b1.jpg","originalName":"wes-bos.jpg"}}}]},"allPeopleJson":{"edges":[{"node":{"id":"1","subCount":"11,111","name":"Traversy Media","description":"Traversy Media is for those who enjoy almost course like tutorials lasting to around 30-40 mins each (Very in depth).","image":"traversy-media.jpg","profession":"development"}},{"node":{"id":"2","subCount":"11,111","name":"Dev Tips","description":"Weekly videos on the subject of development, and even personal development. Also including some tangible development tutorials, plus a hint of design.","image":"dev-tips.jpg","profession":"development"}},{"node":{"id":"3","subCount":"11,111","name":"Fun Fun Function","description":"Now this channel goes in depth with a lot of higher level development concepts, Mattias does a great job at explaining them and I think many could use this helping hand.","image":"fun-fun-function.jpg","profession":"development"}},{"node":{"id":"4","subCount":"11,111","name":"Learn Code.academy","description":"Now if you’re looking for just massive amounts of tutorials, this is your place to go. Organized playlists just waiting for you to get started.","image":"learn-code-academy.jpg","profession":"development"}},{"node":{"id":"6","subCount":"11,111","name":"The Net Ninja","description":"Similar to Traversy and a few other channels, very hardworking channel owner staying on top of various topics within the industry.","image":"the-net-ninja.jpg","profession":"development"}},{"node":{"id":"7","subCount":"11,111","name":"FreeCodeCamp","description":"If you don’t know about freeCodeCamp already, then you need to probably binge watch a lot of their youtube as well as check out their platform.","image":"free-code-camp.jpg","profession":"development"}},{"node":{"id":"8","subCount":"11,111","name":"The Coding Train","description":"I’m going to say this… this is probably one of the most unique development channels on youtube and honestly he offers the feeling of being in a college course.","image":"the-coding-train.jpg","profession":"development"}},{"node":{"id":"9","subCount":"11,111","name":"Wes Bos","description":"Probably one of the more famous people within the development community. Wes endlessly drops more and more content to help educate the community.","image":"wes-bos.jpg","profession":"development"}},{"node":{"id":"10","subCount":"11,111","name":"The New Boston","description":"Hard concrete tutorials and guides for many topics.","image":"the-new-boston.jpg","profession":"development"}},{"node":{"id":"11","subCount":"11,111","name":"Level Up Tuts","description":"Another great youtuber that backs up updated tutorials with a great personality.","image":"level-up-tuts.jpg","profession":"development"}},{"node":{"id":"12","subCount":"11,111","name":"Design Course","description":"I know, odd to have the name design but this is a mix between the both and It’s much more development heavy.","image":"design-course.jpg","profession":"development"}},{"node":{"id":"13","subCount":"11,111","name":"TheFutur","description":"Content ranging from how to talk to clients and how to create up to date modern designs.","image":"the-futur.jpg","profession":"design"}},{"node":{"id":"14","subCount":"11,111","name":"Flux","description":"Great designer with a vlog covering the concepts of development and ui/ux design.","image":"flux.jpg","profession":"design"}},{"node":{"id":"15","subCount":"11,111","name":"Charli Marie TV","description":"She’s constantly delivering content such as reviewing the newest tools, sharing her workflow, and life as a freelance designer.","image":"charli-marie-tv.jpg","profession":"design"}},{"node":{"id":"16","subCount":"11,111","name":"Jesse Showalter","description":"His channel covers a wide range of soft skills and concrete tutorials, can’t miss out on that.","image":"jesse-showalter.jpg","profession":"design"}},{"node":{"id":"17","subCount":"11,111","name":"Dan Petty","description":"Family man and a great personality, he doesn’t post as often as he used to but the interviews and the content he provides goes deep.","image":"dan-petty.jpg","profession":"design"}},{"node":{"id":"18","subCount":"11,111","name":"High Resolution Podcast","description":"I’ve watched this time and time again, if you want to educate yourself to be more than the average designer.. This is a series you must consume.","image":"high-resolution-podcast.jpg","profession":"design"}},{"node":{"id":"19","subCount":"11,111","name":"Gal Shir","description":"If you’re curious about one’s process for illustration, Gal is a great dude to watch.","image":"gal-shir.jpg","profession":"design"}},{"node":{"id":"20","subCount":"11,111","name":"Sketch Together","description":"I would say, Pablo always create high quality tutorials on the newest tools.. Easily content I would watch to become current with the industry.","image":"sketch-together.jpg","profession":"design"}},{"node":{"id":"21","subCount":"11,111","name":"MDS","description":"Another awesome family dude, with a channel loaded with soft skills.","image":"mds.jpg","profession":"design"}},{"node":{"id":"22","subCount":"11,111","name":"Maex","description":"Quite the motivational channel, with concrete tutorials alongside vlog like content.","image":"maex.jpg","profession":"design"}},{"node":{"id":"23","subCount":"11,111","name":"Caler Edwards","description":"Great pieces of content to get you started transitioning over from development to design.","image":"caler-edwards.jpg","profession":"design"}},{"node":{"id":"24","subCount":"11,111","name":"Joel Beukelman","description":"Majority vlogging content showing the behind the scenes on being a designer for Google, he also leads the design system community heavily.","image":"joel-beukelman.jpg","profession":"design"}},{"node":{"id":"25","subCount":"11,111","name":"The Simple Designers","description":"Illustration tutorials galore, tons of stuff to keep you busy for some time.","image":"the-simple-designers.jpg","profession":"design"}}]}}};

/***/ })

}]);
//# sourceMappingURL=component---src-templates-second-page-js-96adfaba2a0244e2811e.js.map