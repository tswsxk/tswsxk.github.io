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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pygment_trac.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pygment_trac.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".highlight  { background: #ffffff; }\r\n.highlight .c { color: #999988; font-style: italic } /* Comment */\r\n.highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */\r\n.highlight .k { font-weight: bold } /* Keyword */\r\n.highlight .o { font-weight: bold } /* Operator */\r\n.highlight .cm { color: #999988; font-style: italic } /* Comment.Multiline */\r\n.highlight .cp { color: #999999; font-weight: bold } /* Comment.Preproc */\r\n.highlight .c1 { color: #999988; font-style: italic } /* Comment.Single */\r\n.highlight .cs { color: #999999; font-weight: bold; font-style: italic } /* Comment.Special */\r\n.highlight .gd { color: #000000; background-color: #ffdddd } /* Generic.Deleted */\r\n.highlight .gd .x { color: #000000; background-color: #ffaaaa } /* Generic.Deleted.Specific */\r\n.highlight .ge { font-style: italic } /* Generic.Emph */\r\n.highlight .gr { color: #aa0000 } /* Generic.Error */\r\n.highlight .gh { color: #999999 } /* Generic.Heading */\r\n.highlight .gi { color: #000000; background-color: #ddffdd } /* Generic.Inserted */\r\n.highlight .gi .x { color: #000000; background-color: #aaffaa } /* Generic.Inserted.Specific */\r\n.highlight .go { color: #888888 } /* Generic.Output */\r\n.highlight .gp { color: #555555 } /* Generic.Prompt */\r\n.highlight .gs { font-weight: bold } /* Generic.Strong */\r\n.highlight .gu { color: #800080; font-weight: bold; } /* Generic.Subheading */\r\n.highlight .gt { color: #aa0000 } /* Generic.Traceback */\r\n.highlight .kc { font-weight: bold } /* Keyword.Constant */\r\n.highlight .kd { font-weight: bold } /* Keyword.Declaration */\r\n.highlight .kn { font-weight: bold } /* Keyword.Namespace */\r\n.highlight .kp { font-weight: bold } /* Keyword.Pseudo */\r\n.highlight .kr { font-weight: bold } /* Keyword.Reserved */\r\n.highlight .kt { color: #445588; font-weight: bold } /* Keyword.Type */\r\n.highlight .m { color: #009999 } /* Literal.Number */\r\n.highlight .s { color: #d14 } /* Literal.String */\r\n.highlight .na { color: #008080 } /* Name.Attribute */\r\n.highlight .nb { color: #0086B3 } /* Name.Builtin */\r\n.highlight .nc { color: #445588; font-weight: bold } /* Name.Class */\r\n.highlight .no { color: #008080 } /* Name.Constant */\r\n.highlight .ni { color: #800080 } /* Name.Entity */\r\n.highlight .ne { color: #990000; font-weight: bold } /* Name.Exception */\r\n.highlight .nf { color: #990000; font-weight: bold } /* Name.Function */\r\n.highlight .nn { color: #555555 } /* Name.Namespace */\r\n.highlight .nt { color: #000080 } /* Name.Tag */\r\n.highlight .nv { color: #008080 } /* Name.Variable */\r\n.highlight .ow { font-weight: bold } /* Operator.Word */\r\n.highlight .w { color: #bbbbbb } /* Text.Whitespace */\r\n.highlight .mf { color: #009999 } /* Literal.Number.Float */\r\n.highlight .mh { color: #009999 } /* Literal.Number.Hex */\r\n.highlight .mi { color: #009999 } /* Literal.Number.Integer */\r\n.highlight .mo { color: #009999 } /* Literal.Number.Oct */\r\n.highlight .sb { color: #d14 } /* Literal.String.Backtick */\r\n.highlight .sc { color: #d14 } /* Literal.String.Char */\r\n.highlight .sd { color: #d14 } /* Literal.String.Doc */\r\n.highlight .s2 { color: #d14 } /* Literal.String.Double */\r\n.highlight .se { color: #d14 } /* Literal.String.Escape */\r\n.highlight .sh { color: #d14 } /* Literal.String.Heredoc */\r\n.highlight .si { color: #d14 } /* Literal.String.Interpol */\r\n.highlight .sx { color: #d14 } /* Literal.String.Other */\r\n.highlight .sr { color: #009926 } /* Literal.String.Regex */\r\n.highlight .s1 { color: #d14 } /* Literal.String.Single */\r\n.highlight .ss { color: #990073 } /* Literal.String.Symbol */\r\n.highlight .bp { color: #999999 } /* Name.Builtin.Pseudo */\r\n.highlight .vc { color: #008080 } /* Name.Variable.Class */\r\n.highlight .vg { color: #008080 } /* Name.Variable.Global */\r\n.highlight .vi { color: #008080 } /* Name.Variable.Instance */\r\n.highlight .il { color: #009999 } /* Literal.Number.Integer.Long */\r\n\r\n.type-csharp .highlight .k { color: #0000FF }\r\n.type-csharp .highlight .kt { color: #0000FF }\r\n.type-csharp .highlight .nf { color: #000000; font-weight: normal }\r\n.type-csharp .highlight .nc { color: #2B91AF }\r\n.type-csharp .highlight .nn { color: #000000 }\r\n.type-csharp .highlight .s { color: #A31515 }\r\n.type-csharp .highlight .sc { color: #A31515 }\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./pygment_trac.css */ "./node_modules/css-loader/dist/cjs.js!./src/pygment_trac.css"), "");

// Module
exports.push([module.i, "body {\r\n    background-color: #fff;\r\n    padding: 50px;\r\n    font: 14px/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    color: #595959;\r\n    font-weight: 400;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    color: #222;\r\n    margin: 0 0 20px;\r\n}\r\n\r\np, ul, ol, table, pre, dl {\r\n    margin: 0 0 20px;\r\n}\r\n\r\nh1, h2, h3 {\r\n    line-height: 1.1;\r\n}\r\n\r\nh1 {\r\n    font-size: 28px;\r\n    font-weight: 500;\r\n}\r\n\r\nh2 {\r\n    color: #393939;\r\n    font-weight: 500;\r\n}\r\n\r\nh3, h4, h5, h6 {\r\n    color: #494949;\r\n    font-weight: 500;\r\n}\r\n\r\na {\r\n    color: #39c;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: #069;\r\n}\r\n\r\na small {\r\n    font-size: 11px;\r\n    color: #777;\r\n    margin-top: -0.3em;\r\n    display: block;\r\n}\r\n\r\na:hover small {\r\n    color: #777;\r\n}\r\n\r\n.wrapper {\r\n    width: 860px;\r\n    margin: 0 auto;\r\n}\r\n\r\nblockquote {\r\n    border-left: 1px solid #e5e5e5;\r\n    margin: 0;\r\n    padding: 0 0 0 20px;\r\n    font-style: italic;\r\n}\r\n\r\ncode, pre {\r\n    font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal, Consolas, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;\r\n    color: #333;\r\n    font-size: 12px;\r\n}\r\n\r\npre {\r\n    padding: 8px 15px;\r\n    background: #f8f8f8;\r\n    border-radius: 5px;\r\n    border: 1px solid #e5e5e5;\r\n    overflow-x: auto;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 5px 10px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\ndt {\r\n    color: #444;\r\n    font-weight: 500;\r\n}\r\n\r\nth {\r\n    color: #444;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\nheader {\r\n    width: 270px;\r\n    float: left;\r\n    position: fixed;\r\n    -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\nheader ul {\r\n    list-style: none;\r\n    height: 40px;\r\n    padding: 0;\r\n    background: #f4f4f4;\r\n    border-radius: 5px;\r\n    border: 1px solid #e0e0e0;\r\n    width: 270px;\r\n}\r\n\r\nheader li {\r\n    width: 89px;\r\n    float: left;\r\n    border-right: 1px solid #e0e0e0;\r\n    height: 40px;\r\n}\r\n\r\nheader li:first-child a {\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\nheader li:last-child a {\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\nheader ul a {\r\n    line-height: 1;\r\n    font-size: 11px;\r\n    color: #999;\r\n    display: block;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    height: 34px;\r\n}\r\n\r\nheader ul a:hover {\r\n    color: #999;\r\n}\r\n\r\nheader ul a:active {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nstrong {\r\n    color: #222;\r\n    font-weight: 500;\r\n}\r\n\r\nheader ul li + li + li {\r\n    border-right: none;\r\n    width: 89px;\r\n}\r\n\r\nheader ul a strong {\r\n    font-size: 14px;\r\n    display: block;\r\n    color: #222;\r\n}\r\n\r\nsection {\r\n    width: 500px;\r\n    float: right;\r\n    padding-bottom: 50px;\r\n}\r\n\r\nsmall {\r\n    font-size: 11px;\r\n}\r\n\r\nhr {\r\n    border: 0;\r\n    background: #e5e5e5;\r\n    height: 1px;\r\n    margin: 0 0 20px;\r\n}\r\n\r\nfooter {\r\n    width: 270px;\r\n    float: left;\r\n    position: fixed;\r\n    bottom: 50px;\r\n    -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n@media print, screen and (max-width: 960px) {\r\n\r\n    div.wrapper {\r\n        width: auto;\r\n        margin: 0;\r\n    }\r\n\r\n    header, section, footer {\r\n        float: none;\r\n        position: static;\r\n        width: auto;\r\n    }\r\n\r\n    header {\r\n        padding-right: 320px;\r\n    }\r\n\r\n    section {\r\n        border: 1px solid #e5e5e5;\r\n        border-width: 1px 0;\r\n        padding: 20px 0;\r\n        margin: 0 0 20px;\r\n    }\r\n\r\n    header a small {\r\n        display: inline;\r\n    }\r\n\r\n    header ul {\r\n        position: absolute;\r\n        right: 50px;\r\n        top: 52px;\r\n    }\r\n}\r\n\r\n@media print, screen and (max-width: 720px) {\r\n    body {\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    header {\r\n        padding: 0;\r\n    }\r\n\r\n    header ul, header p.view {\r\n        position: static;\r\n    }\r\n\r\n    pre, code {\r\n        word-wrap: normal;\r\n    }\r\n}\r\n\r\n@media print, screen and (max-width: 480px) {\r\n    body {\r\n        padding: 15px;\r\n    }\r\n\r\n    header ul {\r\n        width: 99%;\r\n    }\r\n\r\n    header li, header ul li + li + li {\r\n        width: 33%;\r\n    }\r\n}\r\n\r\n@media print {\r\n    body {\r\n        padding: 0.4in;\r\n        font-size: 12pt;\r\n        color: #444;\r\n    }\r\n}\r\n\r\nbutton.accordion {\r\n    font: 14px/1.5 Lato, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    cursor: pointer;\r\n    padding: 0px;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 100%;\r\n    transition: 0.3s;\r\n    background-color: #f8f8f8;\r\n}\r\n\r\nbutton.accordion.active, button.accordion:hover {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\nbutton.accordion:after {\r\n    content: \" [+] \";\r\n    font-size: 90%;\r\n    color: #777;\r\n    float: left;\r\n    margin-left: 1px;\r\n}\r\n\r\nbutton.accordion.active:after {\r\n    content: \" [\\2212] \";\r\n}\r\n\r\ndiv.panel {\r\n    padding: 0 20px;\r\n    margin-top: 5px;\r\n    display: none;\r\n    background-color: white;\r\n    font-size: 100%;\r\n}\r\n\r\ndiv.panel.show {\r\n    display: block !important;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pygment_trac_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pygment_trac.css */ "./src/pygment_trac.css");
/* harmony import */ var _pygment_trac_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pygment_trac_css__WEBPACK_IMPORTED_MODULE_1__);


let metas = document.getElementsByTagName('meta');
let i;

if (navigator.userAgent.match(/iPhone/i)) {
  for (i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }

  document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
  for (i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

/***/ }),

/***/ "./src/pygment_trac.css":
/*!******************************!*\
  !*** ./src/pygment_trac.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./pygment_trac.css */ "./node_modules/css-loader/dist/cjs.js!./src/pygment_trac.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B5Z21lbnRfdHJhYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B5Z21lbnRfdHJhYy5jc3M/NWRmYSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz81MmY2Il0sIm5hbWVzIjpbIm1ldGFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImxlbmd0aCIsIm5hbWUiLCJjb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlc3R1cmVTdGFydCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7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RTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsQ0FBWjtBQUNBLElBQUlDLENBQUo7O0FBQ0EsSUFBSUMsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixTQUExQixDQUFKLEVBQTBDO0FBQ3RDLE9BQUtILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0gsS0FBSyxDQUFDTyxNQUF0QixFQUE4QkosQ0FBQyxFQUEvQixFQUFtQztBQUMvQixRQUFJSCxLQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTSyxJQUFULEtBQWtCLFVBQXRCLEVBQWtDO0FBQzlCUixXQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTTSxPQUFULEdBQW1CLDBEQUFuQjtBQUNIO0FBQ0o7O0FBQ0RSLFVBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMENDLFlBQTFDLEVBQXdELEtBQXhEO0FBQ0g7O0FBRUQsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQixPQUFLUixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILEtBQUssQ0FBQ08sTUFBdEIsRUFBOEJKLENBQUMsRUFBL0IsRUFBbUM7QUFDL0IsUUFBSUgsS0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0ssSUFBVCxLQUFrQixVQUF0QixFQUFrQztBQUM5QlIsV0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU00sT0FBVCxHQUFtQiwyREFBbkI7QUFDSDtBQUNKO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDbkJELGNBQWMsbUJBQU8sQ0FBQyxnSUFBNkQ7O0FBRW5GLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsb0hBQXVEOztBQUU3RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZ2hsaWdodCAgeyBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XFxyXFxuLmhpZ2hsaWdodCAuYyB7IGNvbG9yOiAjOTk5OTg4OyBmb250LXN0eWxlOiBpdGFsaWMgfSAvKiBDb21tZW50ICovXFxyXFxuLmhpZ2hsaWdodCAuZXJyIHsgY29sb3I6ICNhNjE3MTc7IGJhY2tncm91bmQtY29sb3I6ICNlM2QyZDIgfSAvKiBFcnJvciAqL1xcclxcbi5oaWdobGlnaHQgLmsgeyBmb250LXdlaWdodDogYm9sZCB9IC8qIEtleXdvcmQgKi9cXHJcXG4uaGlnaGxpZ2h0IC5vIHsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBPcGVyYXRvciAqL1xcclxcbi5oaWdobGlnaHQgLmNtIHsgY29sb3I6ICM5OTk5ODg7IGZvbnQtc3R5bGU6IGl0YWxpYyB9IC8qIENvbW1lbnQuTXVsdGlsaW5lICovXFxyXFxuLmhpZ2hsaWdodCAuY3AgeyBjb2xvcjogIzk5OTk5OTsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBDb21tZW50LlByZXByb2MgKi9cXHJcXG4uaGlnaGxpZ2h0IC5jMSB7IGNvbG9yOiAjOTk5OTg4OyBmb250LXN0eWxlOiBpdGFsaWMgfSAvKiBDb21tZW50LlNpbmdsZSAqL1xcclxcbi5oaWdobGlnaHQgLmNzIHsgY29sb3I6ICM5OTk5OTk7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXN0eWxlOiBpdGFsaWMgfSAvKiBDb21tZW50LlNwZWNpYWwgKi9cXHJcXG4uaGlnaGxpZ2h0IC5nZCB7IGNvbG9yOiAjMDAwMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkIH0gLyogR2VuZXJpYy5EZWxldGVkICovXFxyXFxuLmhpZ2hsaWdodCAuZ2QgLnggeyBjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWFhYSB9IC8qIEdlbmVyaWMuRGVsZXRlZC5TcGVjaWZpYyAqL1xcclxcbi5oaWdobGlnaHQgLmdlIHsgZm9udC1zdHlsZTogaXRhbGljIH0gLyogR2VuZXJpYy5FbXBoICovXFxyXFxuLmhpZ2hsaWdodCAuZ3IgeyBjb2xvcjogI2FhMDAwMCB9IC8qIEdlbmVyaWMuRXJyb3IgKi9cXHJcXG4uaGlnaGxpZ2h0IC5naCB7IGNvbG9yOiAjOTk5OTk5IH0gLyogR2VuZXJpYy5IZWFkaW5nICovXFxyXFxuLmhpZ2hsaWdodCAuZ2kgeyBjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZCB9IC8qIEdlbmVyaWMuSW5zZXJ0ZWQgKi9cXHJcXG4uaGlnaGxpZ2h0IC5naSAueCB7IGNvbG9yOiAjMDAwMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhIH0gLyogR2VuZXJpYy5JbnNlcnRlZC5TcGVjaWZpYyAqL1xcclxcbi5oaWdobGlnaHQgLmdvIHsgY29sb3I6ICM4ODg4ODggfSAvKiBHZW5lcmljLk91dHB1dCAqL1xcclxcbi5oaWdobGlnaHQgLmdwIHsgY29sb3I6ICM1NTU1NTUgfSAvKiBHZW5lcmljLlByb21wdCAqL1xcclxcbi5oaWdobGlnaHQgLmdzIHsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBHZW5lcmljLlN0cm9uZyAqL1xcclxcbi5oaWdobGlnaHQgLmd1IHsgY29sb3I6ICM4MDAwODA7IGZvbnQtd2VpZ2h0OiBib2xkOyB9IC8qIEdlbmVyaWMuU3ViaGVhZGluZyAqL1xcclxcbi5oaWdobGlnaHQgLmd0IHsgY29sb3I6ICNhYTAwMDAgfSAvKiBHZW5lcmljLlRyYWNlYmFjayAqL1xcclxcbi5oaWdobGlnaHQgLmtjIHsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBLZXl3b3JkLkNvbnN0YW50ICovXFxyXFxuLmhpZ2hsaWdodCAua2QgeyBmb250LXdlaWdodDogYm9sZCB9IC8qIEtleXdvcmQuRGVjbGFyYXRpb24gKi9cXHJcXG4uaGlnaGxpZ2h0IC5rbiB7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5OYW1lc3BhY2UgKi9cXHJcXG4uaGlnaGxpZ2h0IC5rcCB7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5Qc2V1ZG8gKi9cXHJcXG4uaGlnaGxpZ2h0IC5rciB7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5SZXNlcnZlZCAqL1xcclxcbi5oaWdobGlnaHQgLmt0IHsgY29sb3I6ICM0NDU1ODg7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5UeXBlICovXFxyXFxuLmhpZ2hsaWdodCAubSB7IGNvbG9yOiAjMDA5OTk5IH0gLyogTGl0ZXJhbC5OdW1iZXIgKi9cXHJcXG4uaGlnaGxpZ2h0IC5zIHsgY29sb3I6ICNkMTQgfSAvKiBMaXRlcmFsLlN0cmluZyAqL1xcclxcbi5oaWdobGlnaHQgLm5hIHsgY29sb3I6ICMwMDgwODAgfSAvKiBOYW1lLkF0dHJpYnV0ZSAqL1xcclxcbi5oaWdobGlnaHQgLm5iIHsgY29sb3I6ICMwMDg2QjMgfSAvKiBOYW1lLkJ1aWx0aW4gKi9cXHJcXG4uaGlnaGxpZ2h0IC5uYyB7IGNvbG9yOiAjNDQ1NTg4OyBmb250LXdlaWdodDogYm9sZCB9IC8qIE5hbWUuQ2xhc3MgKi9cXHJcXG4uaGlnaGxpZ2h0IC5ubyB7IGNvbG9yOiAjMDA4MDgwIH0gLyogTmFtZS5Db25zdGFudCAqL1xcclxcbi5oaWdobGlnaHQgLm5pIHsgY29sb3I6ICM4MDAwODAgfSAvKiBOYW1lLkVudGl0eSAqL1xcclxcbi5oaWdobGlnaHQgLm5lIHsgY29sb3I6ICM5OTAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTmFtZS5FeGNlcHRpb24gKi9cXHJcXG4uaGlnaGxpZ2h0IC5uZiB7IGNvbG9yOiAjOTkwMDAwOyBmb250LXdlaWdodDogYm9sZCB9IC8qIE5hbWUuRnVuY3Rpb24gKi9cXHJcXG4uaGlnaGxpZ2h0IC5ubiB7IGNvbG9yOiAjNTU1NTU1IH0gLyogTmFtZS5OYW1lc3BhY2UgKi9cXHJcXG4uaGlnaGxpZ2h0IC5udCB7IGNvbG9yOiAjMDAwMDgwIH0gLyogTmFtZS5UYWcgKi9cXHJcXG4uaGlnaGxpZ2h0IC5udiB7IGNvbG9yOiAjMDA4MDgwIH0gLyogTmFtZS5WYXJpYWJsZSAqL1xcclxcbi5oaWdobGlnaHQgLm93IHsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBPcGVyYXRvci5Xb3JkICovXFxyXFxuLmhpZ2hsaWdodCAudyB7IGNvbG9yOiAjYmJiYmJiIH0gLyogVGV4dC5XaGl0ZXNwYWNlICovXFxyXFxuLmhpZ2hsaWdodCAubWYgeyBjb2xvcjogIzAwOTk5OSB9IC8qIExpdGVyYWwuTnVtYmVyLkZsb2F0ICovXFxyXFxuLmhpZ2hsaWdodCAubWggeyBjb2xvcjogIzAwOTk5OSB9IC8qIExpdGVyYWwuTnVtYmVyLkhleCAqL1xcclxcbi5oaWdobGlnaHQgLm1pIHsgY29sb3I6ICMwMDk5OTkgfSAvKiBMaXRlcmFsLk51bWJlci5JbnRlZ2VyICovXFxyXFxuLmhpZ2hsaWdodCAubW8geyBjb2xvcjogIzAwOTk5OSB9IC8qIExpdGVyYWwuTnVtYmVyLk9jdCAqL1xcclxcbi5oaWdobGlnaHQgLnNiIHsgY29sb3I6ICNkMTQgfSAvKiBMaXRlcmFsLlN0cmluZy5CYWNrdGljayAqL1xcclxcbi5oaWdobGlnaHQgLnNjIHsgY29sb3I6ICNkMTQgfSAvKiBMaXRlcmFsLlN0cmluZy5DaGFyICovXFxyXFxuLmhpZ2hsaWdodCAuc2QgeyBjb2xvcjogI2QxNCB9IC8qIExpdGVyYWwuU3RyaW5nLkRvYyAqL1xcclxcbi5oaWdobGlnaHQgLnMyIHsgY29sb3I6ICNkMTQgfSAvKiBMaXRlcmFsLlN0cmluZy5Eb3VibGUgKi9cXHJcXG4uaGlnaGxpZ2h0IC5zZSB7IGNvbG9yOiAjZDE0IH0gLyogTGl0ZXJhbC5TdHJpbmcuRXNjYXBlICovXFxyXFxuLmhpZ2hsaWdodCAuc2ggeyBjb2xvcjogI2QxNCB9IC8qIExpdGVyYWwuU3RyaW5nLkhlcmVkb2MgKi9cXHJcXG4uaGlnaGxpZ2h0IC5zaSB7IGNvbG9yOiAjZDE0IH0gLyogTGl0ZXJhbC5TdHJpbmcuSW50ZXJwb2wgKi9cXHJcXG4uaGlnaGxpZ2h0IC5zeCB7IGNvbG9yOiAjZDE0IH0gLyogTGl0ZXJhbC5TdHJpbmcuT3RoZXIgKi9cXHJcXG4uaGlnaGxpZ2h0IC5zciB7IGNvbG9yOiAjMDA5OTI2IH0gLyogTGl0ZXJhbC5TdHJpbmcuUmVnZXggKi9cXHJcXG4uaGlnaGxpZ2h0IC5zMSB7IGNvbG9yOiAjZDE0IH0gLyogTGl0ZXJhbC5TdHJpbmcuU2luZ2xlICovXFxyXFxuLmhpZ2hsaWdodCAuc3MgeyBjb2xvcjogIzk5MDA3MyB9IC8qIExpdGVyYWwuU3RyaW5nLlN5bWJvbCAqL1xcclxcbi5oaWdobGlnaHQgLmJwIHsgY29sb3I6ICM5OTk5OTkgfSAvKiBOYW1lLkJ1aWx0aW4uUHNldWRvICovXFxyXFxuLmhpZ2hsaWdodCAudmMgeyBjb2xvcjogIzAwODA4MCB9IC8qIE5hbWUuVmFyaWFibGUuQ2xhc3MgKi9cXHJcXG4uaGlnaGxpZ2h0IC52ZyB7IGNvbG9yOiAjMDA4MDgwIH0gLyogTmFtZS5WYXJpYWJsZS5HbG9iYWwgKi9cXHJcXG4uaGlnaGxpZ2h0IC52aSB7IGNvbG9yOiAjMDA4MDgwIH0gLyogTmFtZS5WYXJpYWJsZS5JbnN0YW5jZSAqL1xcclxcbi5oaWdobGlnaHQgLmlsIHsgY29sb3I6ICMwMDk5OTkgfSAvKiBMaXRlcmFsLk51bWJlci5JbnRlZ2VyLkxvbmcgKi9cXHJcXG5cXHJcXG4udHlwZS1jc2hhcnAgLmhpZ2hsaWdodCAuayB7IGNvbG9yOiAjMDAwMEZGIH1cXHJcXG4udHlwZS1jc2hhcnAgLmhpZ2hsaWdodCAua3QgeyBjb2xvcjogIzAwMDBGRiB9XFxyXFxuLnR5cGUtY3NoYXJwIC5oaWdobGlnaHQgLm5mIHsgY29sb3I6ICMwMDAwMDA7IGZvbnQtd2VpZ2h0OiBub3JtYWwgfVxcclxcbi50eXBlLWNzaGFycCAuaGlnaGxpZ2h0IC5uYyB7IGNvbG9yOiAjMkI5MUFGIH1cXHJcXG4udHlwZS1jc2hhcnAgLmhpZ2hsaWdodCAubm4geyBjb2xvcjogIzAwMDAwMCB9XFxyXFxuLnR5cGUtY3NoYXJwIC5oaWdobGlnaHQgLnMgeyBjb2xvcjogI0EzMTUxNSB9XFxyXFxuLnR5cGUtY3NoYXJwIC5oaWdobGlnaHQgLnNjIHsgY29sb3I6ICNBMzE1MTUgfVxcclxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3B5Z21lbnRfdHJhYy5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBmb250OiAxNHB4LzEuNSAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbiAgICBjb2xvcjogIzU5NTk1OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5wLCB1bCwgb2wsIHRhYmxlLCBwcmUsIGRsIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMyB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGNvbG9yOiAjMzkzOTM5O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGNvbG9yOiAjNDk0OTQ5O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6ICMzOWM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMDY5O1xcclxcbn1cXHJcXG5cXHJcXG5hIHNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTAuM2VtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciBzbWFsbCB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA4NjBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUge1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5jb2RlLCBwcmUge1xcclxcbiAgICBmb250LWZhbWlseTogTW9uYWNvLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBUZXJtaW5hbCwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxudGgsIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG5kdCB7XFxyXFxuICAgIGNvbG9yOiAjNDQ0O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAyNzBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcclxcbiAgICB3aWR0aDogMjcwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBsaSB7XFxyXFxuICAgIHdpZHRoOiA4OXB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbGk6Zmlyc3QtY2hpbGQgYSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbGk6bGFzdC1jaGlsZCBhIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBhIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIGE6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaSArIGxpICsgbGkge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA4OXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWwgYSBzdHJvbmcge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG5cXHJcXG4gICAgZGl2LndyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyLCBzZWN0aW9uLCBmb290ZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNlY3Rpb24ge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciBhIHNtYWxsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIgdWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICB0b3A6IDUycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciB1bCwgaGVhZGVyIHAudmlldyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHByZSwgY29kZSB7XFxyXFxuICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciB1bCB7XFxyXFxuICAgICAgICB3aWR0aDogOTklO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciBsaSwgaGVhZGVyIHVsIGxpICsgbGkgKyBsaSB7XFxyXFxuICAgICAgICB3aWR0aDogMzMlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZzogMC40aW47XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHQ7XFxyXFxuICAgICAgICBjb2xvcjogIzQ0NDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWNjb3JkaW9uIHtcXHJcXG4gICAgZm9udDogMTRweC8xLjUgTGF0bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWNjb3JkaW9uLmFjdGl2ZSwgYnV0dG9uLmFjY29yZGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hY2NvcmRpb246YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiIFsrXSBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDkwJTtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWNjb3JkaW9uLmFjdGl2ZTphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIgW1xcXFwyMjEyXSBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucGFuZWwge1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnBhbmVsLnNob3cge1xcclxcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3B5Z21lbnRfdHJhYy5jc3MnO1xuXG5sZXQgbWV0YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xubGV0IGk7XG5pZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG1ldGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtZXRhc1tpXS5uYW1lID09PSBcInZpZXdwb3J0XCIpIHtcbiAgICAgICAgICAgIG1ldGFzW2ldLmNvbnRlbnQgPSBcIndpZHRoPWRldmljZS13aWR0aCwgbWluaW11bS1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImdlc3R1cmVzdGFydFwiLCBnZXN0dXJlU3RhcnQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gZ2VzdHVyZVN0YXJ0KCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtZXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWV0YXNbaV0ubmFtZSA9PT0gXCJ2aWV3cG9ydFwiKSB7XG4gICAgICAgICAgICBtZXRhc1tpXS5jb250ZW50ID0gXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIG1pbmltdW0tc2NhbGU9MC4yNSwgbWF4aW11bS1zY2FsZT0xLjZcIjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9weWdtZW50X3RyYWMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3B5Z21lbnRfdHJhYy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3B5Z21lbnRfdHJhYy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9