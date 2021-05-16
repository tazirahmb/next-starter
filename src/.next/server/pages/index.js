module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './pages/index.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './components/elements/Button/Button.js':
      /*!**********************************************!*\
  !*** ./components/elements/Button/Button.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ 'prop-types'
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        );

        var _jsxFileName =
          'Y:\\coding\\codebase\\next-codebase-starter\\src\\components\\elements\\Button\\Button.js';

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        const Button = (_ref) => {
          let { children, style } = _ref,
            rest = _objectWithoutProperties(_ref, ['children', 'style']);

          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
          )(
            'button',
            _objectSpread(
              _objectSpread(
                {
                  style: _objectSpread(
                    {
                      backgroundColor: 'teal',
                      border: 'none',
                      color: 'white',
                      padding: '0 16px',
                      height: 32,
                      minWidth: 100,
                      borderRadius: 4,
                      fontWeight: 'bold',
                    },
                    style
                  ),
                },
                rest
              ),
              {},
              {
                children: children,
              }
            ),
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 5,
              columnNumber: 3,
            },
            undefined
          );
        };

        Button.propTypes = {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['any'],
          style: prop_types__WEBPACK_IMPORTED_MODULE_2__['object'],
        };
        /* harmony default export */ __webpack_exports__['default'] = Button;

        /***/
      },

    /***/ './components/elements/Button/index.js':
      /*!*********************************************!*\
  !*** ./components/elements/Button/index.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Button */ './components/elements/Button/Button.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return _Button__WEBPACK_IMPORTED_MODULE_0__['default'];
          }
        );

        /***/
      },

    /***/ './components/elements/index.js':
      /*!**************************************!*\
  !*** ./components/elements/index.js ***!
  \**************************************/
      /*! exports provided: Button */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Button */ './components/elements/Button/index.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Button',
          function () {
            return _Button__WEBPACK_IMPORTED_MODULE_0__['default'];
          }
        );

        /***/
      },

    /***/ './containers/Home/Home.js':
      /*!*********************************!*\
  !*** ./containers/Home/Home.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Home;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/head */ 'next/head'
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Home.module.css */ './containers/Home/Home.module.css'
        );
        /* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _Home_module_css__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ~/components/elements */ './components/elements/index.js'
        );

        var _jsxFileName =
          'Y:\\coding\\codebase\\next-codebase-starter\\src\\containers\\Home\\Home.js';

        function Home() {
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
          )(
            'div',
            {
              className:
                _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a
                  .container,
              children: [
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
                )(
                  next_head__WEBPACK_IMPORTED_MODULE_2___default.a,
                  {
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'title',
                        {
                          children: 'Create Next App',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 10,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'link',
                        {
                          rel: 'icon',
                          href: '/favicon.ico',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 11,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
                )(
                  _components_elements__WEBPACK_IMPORTED_MODULE_4__['Button'],
                  {
                    children: 'Hello World',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
                )(
                  'main',
                  {
                    className:
                      _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a
                        .main,
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'h1',
                        {
                          className:
                            _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                              .a.title,
                          children: [
                            'Welcome to ',
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'a',
                              {
                                href: 'https://nextjs.org',
                                children: 'Next.js!',
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 16,
                                columnNumber: 22,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 15,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'h1',
                        {
                          children: 'development',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 18,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'p',
                        {
                          className:
                            _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                              .a.description,
                          children: [
                            'Get started by editing',
                            ' ',
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'code',
                              {
                                className:
                                  _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.code,
                                children: 'pages/index.js',
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 22,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          'jsxDEV'
                        ]
                      )(
                        'div',
                        {
                          className:
                            _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                              .a.grid,
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'a',
                              {
                                href: 'https://nextjs.org/docs',
                                className:
                                  _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.card,
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'h3',
                                    {
                                      children: 'Documentation \u2192',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 27,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'p',
                                    {
                                      children:
                                        'Find in-depth information about Next.js features and API.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 28,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 26,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'a',
                              {
                                href: 'https://nextjs.org/learn',
                                className:
                                  _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.card,
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'h3',
                                    {
                                      children: 'Learn \u2192',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 32,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'p',
                                    {
                                      children:
                                        'Learn about Next.js in an interactive course with quizzes!',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 33,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'a',
                              {
                                href:
                                  'https://github.com/vercel/next.js/tree/master/examples',
                                className:
                                  _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.card,
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'h3',
                                    {
                                      children: 'Examples \u2192',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 40,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'p',
                                    {
                                      children:
                                        'Discover and deploy boilerplate example Next.js projects.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 41,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 36,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                'jsxDEV'
                              ]
                            )(
                              'a',
                              {
                                href:
                                  'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
                                className:
                                  _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.card,
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'h3',
                                    {
                                      children: 'Deploy \u2192',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 48,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      'jsxDEV'
                                    ]
                                  )(
                                    'p',
                                    {
                                      children:
                                        'Instantly deploy your Next.js site to a public URL with Vercel.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 49,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 44,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__['jsxDEV']
                )(
                  'footer',
                  {
                    className:
                      _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a
                        .footer,
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        'jsxDEV'
                      ]
                    )(
                      'a',
                      {
                        href:
                          'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: [
                          'Powered by',
                          ' ',
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                              'jsxDEV'
                            ]
                          )(
                            'img',
                            {
                              src: '/vercel.svg',
                              alt: 'Vercel Logo',
                              className:
                                _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default
                                  .a.logo,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 63,
                              columnNumber: 11,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 9,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 8,
              columnNumber: 5,
            },
            this
          );
        }

        /***/
      },

    /***/ './containers/Home/Home.module.css':
      /*!*****************************************!*\
  !*** ./containers/Home/Home.module.css ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // Exports
        module.exports = {
          container: 'Home_container__3dsot',
          main: 'Home_main__9_8c1',
          footer: 'Home_footer__1Y4Sp',
          title: 'Home_title__3kizd',
          description: 'Home_description__1GwYE',
          code: 'Home_code__yeizs',
          grid: 'Home_grid__1GsxR',
          card: 'Home_card__1Y_C9',
          logo: 'Home_logo__STlBn',
        };

        /***/
      },

    /***/ './containers/Home/index.js':
      /*!**********************************!*\
  !*** ./containers/Home/index.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Home */ './containers/Home/Home.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return _Home__WEBPACK_IMPORTED_MODULE_0__['default'];
          }
        );

        /***/
      },

    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../containers/Home */ './containers/Home/index.js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return _containers_Home__WEBPACK_IMPORTED_MODULE_0__['default'];
          }
        );

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('next/head');

        /***/
      },

    /***/ 'prop-types':
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('prop-types');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'react/jsx-dev-runtime':
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require('react/jsx-dev-runtime');

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZWxlbWVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ib21lL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2hpbGRyZW4iLCJzdHlsZSIsInJlc3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsInBhZGRpbmciLCJoZWlnaHQiLCJtaW5XaWR0aCIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJwcm9wVHlwZXMiLCJhbnkiLCJvYmplY3QiLCJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwicHJvY2VzcyIsIk1PREUiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LGFBQUcsRUFBQyxhQUEzQjtBQUF5QyxtQkFBUyxFQUFFVix1REFBTSxDQUFDVztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2REQsQzs7Ozs7Ozs7Ozs7QUNuRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFueSwgb2JqZWN0IH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBzdHlsZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b25cbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndGVhbCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIC4uLnN0eWxlLFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IGFueSxcbiAgc3R5bGU6IG9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbic7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJ1dHRvbj5IZWxsbyBXb3JsZDwvQnV0dG9uPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+TmV4dC5qcyE8L2E+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMT57cHJvY2Vzcy5lbnYuTU9ERX08L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC5qczwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz5MZWFybiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5FeGFtcGxlcyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5EZXBsb3kgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzNkc290XCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fOV84YzFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVk0U3BcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNraXpkXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xR3dZRVwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3llaXpzXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMUdzeFJcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18xWV9DOVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fX1NUbEJuXCJcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ib21lJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
