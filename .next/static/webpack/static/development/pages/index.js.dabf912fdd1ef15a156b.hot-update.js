webpackHotUpdate('static\\development\\pages\\index.js', {
    /***/ './pages/index.js':
        /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js',
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! react-redux */ './node_modules/react-redux/es/index.js',
            );
            /* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../lib/redux */ './lib/redux.js',
            );
            /* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! swr */ './node_modules/swr/esm/index.js',
            );
            /* harmony import */ var _store_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../store/posts */ './store/posts/index.js',
            );
            /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../components/Layout */ './components/Layout.js',
            );
            /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../components/List */ './components/List.js',
            );
            var _this = undefined,
                _jsxFileName = 'C:\\Users\\Liliya\\Desktop\\frontend\\simple-blog\\pages\\index.js';

            var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

            var fetcher = function fetcher(url) {
                return fetch(url).then(function (res) {
                    return res.json();
                });
            };

            var IndexPage = function IndexPage() {
                var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__['default'])('/api/posts', fetcher),
                    data = _useSWR.data,
                    error = _useSWR.error;

                if (error)
                    return __jsx(
                        'div',
                        {
                            __self: _this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13,
                                columnNumber: 23,
                            },
                        },
                        'Failed to load',
                    );
                if (!data)
                    return __jsx(
                        'div',
                        {
                            __self: _this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14,
                                columnNumber: 23,
                            },
                        },
                        'Loading...',
                    );

                if (data) {
                    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__['useDispatch'])();
                    dispatch({
                        type: _store_posts__WEBPACK_IMPORTED_MODULE_4__['types'].GET_ALL_POSTS,
                        payload: data,
                    });
                }

                return __jsx(
                    _components_Layout__WEBPACK_IMPORTED_MODULE_5__['default'],
                    {
                        title: 'The GL Blog',
                        __self: _this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25,
                            columnNumber: 9,
                        },
                    },
                    __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__['default'], {
                        __self: _this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 13,
                        },
                    }),
                );
            };

            /* harmony default export */ __webpack_exports__['default'] = Object(
                _lib_redux__WEBPACK_IMPORTED_MODULE_2__['withRedux'],
            )(IndexPage);

            /***/
        },
});
//# sourceMappingURL=index.js.dabf912fdd1ef15a156b.hot-update.js.map
