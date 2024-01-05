"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [758],
  {
    "./src/stories/Header.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LoggedIn: () => LoggedIn,
          LoggedOut: () => LoggedOut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Example/Header",
        component: __webpack_require__("./src/stories/Header.tsx").h,
        tags: ["autodocs"],
        parameters: { layout: "fullscreen" },
      };
      var LoggedIn = { args: { user: { name: "Jane Doe" } } },
        LoggedOut = {};
      (LoggedIn.parameters = {
        ...LoggedIn.parameters,
        docs: {
          ...LoggedIn.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    user: {\n      name: "Jane Doe"\n    }\n  }\n}',
            ...LoggedIn.parameters?.docs?.source,
          },
        },
      }),
        (LoggedOut.parameters = {
          ...LoggedOut.parameters,
          docs: {
            ...LoggedOut.parameters?.docs,
            source: {
              originalSource: "{}",
              ...LoggedOut.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ["LoggedIn", "LoggedOut"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `.storybook-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/stories/button.css"],
            names: [],
            mappings:
              "AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",
            sourcesContent: [
              '.storybook-button {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        let __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `.storybook-header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/stories/header.css"],
            names: [],
            mappings:
              "AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB",
            sourcesContent: [
              '.storybook-header {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        let __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/runtime/api.js": (module) => {
      module.exports = function (cssWithMappingToString) {
        var list = [];
        return (
          (list.toString = function toString() {
            return this.map(function (item) {
              var content = "",
                needLayer = void 0 !== item[5];
              return (
                item[4] && (content += "@supports (".concat(item[4], ") {")),
                item[2] && (content += "@media ".concat(item[2], " {")),
                needLayer &&
                  (content += "@layer".concat(
                    item[5].length > 0 ? " ".concat(item[5]) : "",
                    " {"
                  )),
                (content += cssWithMappingToString(item)),
                needLayer && (content += "}"),
                item[2] && (content += "}"),
                item[4] && (content += "}"),
                content
              );
            }).join("");
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            "string" == typeof modules && (modules = [[null, modules, void 0]]);
            var alreadyImportedModules = {};
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                null != id && (alreadyImportedModules[id] = !0);
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              (dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = "@layer"
                      .concat(
                        item[5].length > 0 ? " ".concat(item[5]) : "",
                        " {"
                      )
                      .concat(item[1], "}")),
                  (item[5] = layer)),
                media &&
                  (item[2] &&
                    (item[1] = "@media "
                      .concat(item[2], " {")
                      .concat(item[1], "}")),
                  (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = "@supports ("
                        .concat(item[4], ") {")
                        .concat(item[1], "}")),
                      (item[4] = supports))
                    : (item[4] = "".concat(supports))),
                list.push(item));
            }
          }),
          list
        );
      };
    },
    "./node_modules/css-loader/dist/runtime/sourceMaps.js": (module) => {
      module.exports = function (item) {
        var content = item[1],
          cssMapping = item[3];
        if (!cssMapping) return content;
        if ("function" == typeof btoa) {
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(cssMapping)))
          );
          return [content]
            .concat([
              "/*# ".concat(
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  base64
                ),
                " */"
              ),
            ])
            .join("\n");
        }
        return [content].join("\n");
      };
    },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
      module
    ) => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        return result;
      }
      function modulesToDom(list, options) {
        for (
          var idCountMap = {}, identifiers = [], i = 0;
          i < list.length;
          i++
        ) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++,
              stylesInDOM[indexByIdentifier].updater(obj);
          else {
            var updater = addElementStyle(obj, options);
            (options.byIndex = i),
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        return (
          api.update(obj),
          function (newObj) {
            newObj
              ? (newObj.css !== obj.css ||
                  newObj.media !== obj.media ||
                  newObj.sourceMap !== obj.sourceMap ||
                  newObj.supports !== obj.supports ||
                  newObj.layer !== obj.layer) &&
                api.update((obj = newObj))
              : api.remove();
          }
        );
      }
      module.exports = function (list, options) {
        var lastIdentifiers = modulesToDom(
          (list = list || []),
          (options = options || {})
        );
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i]);
            stylesInDOM[index].references--;
          }
          for (
            var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
            _i < lastIdentifiers.length;
            _i++
          ) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i]);
            0 === stylesInDOM[_index].references &&
              (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": (
      module
    ) => {
      var memo = {};
      function getTarget(target) {
        if (void 0 === memo[target]) {
          var styleTarget = document.querySelector(target);
          if (
            window.HTMLIFrameElement &&
            styleTarget instanceof window.HTMLIFrameElement
          )
            try {
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          memo[target] = styleTarget;
        }
        return memo[target];
      }
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target)
          throw Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        target.appendChild(style);
      }
      module.exports = insertBySelector;
    },
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (
      module
    ) => {
      function insertStyleElement(options) {
        var element = document.createElement("style");
        return (
          options.setAttributes(element, options.attributes),
          options.insert(element, options.options),
          element
        );
      }
      module.exports = insertStyleElement;
    },
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = __webpack_require__.nc;
          nonce && styleElement.setAttribute("nonce", nonce);
        }
        module.exports = setAttributesWithoutAttributes;
      },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
      function apply(styleElement, options, obj) {
        var css = "";
        obj.supports && (css += "@supports (".concat(obj.supports, ") {")),
          obj.media && (css += "@media ".concat(obj.media, " {"));
        var needLayer = void 0 !== obj.layer;
        needLayer &&
          (css += "@layer".concat(
            obj.layer.length > 0 ? " ".concat(obj.layer) : "",
            " {"
          )),
          (css += obj.css),
          needLayer && (css += "}"),
          obj.media && (css += "}"),
          obj.supports && (css += "}");
        var sourceMap = obj.sourceMap;
        sourceMap &&
          "undefined" != typeof btoa &&
          (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            " */"
          )),
          options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        if (null === styleElement.parentNode) return !1;
        styleElement.parentNode.removeChild(styleElement);
      }
      function domAPI(options) {
        if ("undefined" == typeof document)
          return { update: function update() {}, remove: function remove() {} };
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;
    },
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (
      module
    ) => {
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
        else {
          for (; styleElement.firstChild; )
            styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
    },
    "./src/stories/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var react = __webpack_require__("./node_modules/react/index.js"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        stories_button = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css"
        ),
        options = {};
      function _define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            )),
            ownKeys.forEach(function (key) {
              _define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function _object_without_properties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = _object_without_properties_loose(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(excluded.indexOf(key) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _object_without_properties_loose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default()),
        injectStylesIntoStyleTag_default()(stories_button.Z, options),
        stories_button.Z && stories_button.Z.locals && stories_button.Z.locals;
      var Button = function (_param) {
        var _param_primary = _param.primary,
          _param_size = _param.size,
          backgroundColor = _param.backgroundColor,
          label = _param.label,
          props = _object_without_properties(_param, [
            "primary",
            "size",
            "backgroundColor",
            "label",
          ]);
        return react.createElement(
          "button",
          _object_spread(
            {
              type: "button",
              className: [
                "storybook-button",
                "storybook-button--".concat(
                  void 0 === _param_size ? "medium" : _param_size
                ),
                void 0 !== _param_primary && _param_primary
                  ? "storybook-button--primary"
                  : "storybook-button--secondary",
              ].join(" "),
              style: { backgroundColor: backgroundColor },
            },
            props
          ),
          label
        );
      };
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "Primary UI component for user interaction",
            displayName: "Button",
            props: {
              primary: {
                defaultValue: { value: "false" },
                description:
                  "Is this the principal call to action on the page?",
                name: "primary",
                required: !1,
                type: { name: "boolean" },
              },
              backgroundColor: {
                defaultValue: null,
                description: "What background color to use",
                name: "backgroundColor",
                required: !1,
                type: { name: "string" },
              },
              size: {
                defaultValue: { value: "medium" },
                description: "How large should the button be?",
                name: "size",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              label: {
                defaultValue: null,
                description: "Button contents",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              onClick: {
                defaultValue: null,
                description: "Optional click handler",
                name: "onClick",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"] = {
              docgenInfo: Button.__docgenInfo,
              name: "Button",
              path: "src/stories/Button.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/stories/Header.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => Header });
      var react = __webpack_require__("./node_modules/react/index.js"),
        Button = __webpack_require__("./src/stories/Button.tsx"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        header = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default()),
        injectStylesIntoStyleTag_default()(header.Z, options),
        header.Z && header.Z.locals && header.Z.locals;
      var Header = function (param) {
        var user = param.user,
          onLogin = param.onLogin,
          onLogout = param.onLogout,
          onCreateAccount = param.onCreateAccount;
        return react.createElement(
          "header",
          null,
          react.createElement(
            "div",
            { className: "storybook-header" },
            react.createElement(
              "div",
              null,
              react.createElement(
                "svg",
                {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                react.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd" },
                  react.createElement("path", {
                    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                    fill: "#FFF",
                  }),
                  react.createElement("path", {
                    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                    fill: "#555AB9",
                  }),
                  react.createElement("path", {
                    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                    fill: "#91BAF8",
                  })
                )
              ),
              react.createElement("h1", null, "Acme")
            ),
            react.createElement(
              "div",
              null,
              user
                ? react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(
                      "span",
                      { className: "welcome" },
                      "Welcome, ",
                      react.createElement("b", null, user.name),
                      "!"
                    ),
                    react.createElement(Button.z, {
                      size: "small",
                      onClick: onLogout,
                      label: "Log out",
                    })
                  )
                : react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(Button.z, {
                      size: "small",
                      onClick: onLogin,
                      label: "Log in",
                    }),
                    react.createElement(Button.z, {
                      primary: !0,
                      size: "small",
                      onClick: onCreateAccount,
                      label: "Sign up",
                    })
                  )
            )
          )
        );
      };
      try {
        (Header.displayName = "Header"),
          (Header.__docgenInfo = {
            description: "",
            displayName: "Header",
            props: {
              user: {
                defaultValue: null,
                description: "",
                name: "user",
                required: !1,
                type: { name: "User" },
              },
              onLogin: {
                defaultValue: null,
                description: "",
                name: "onLogin",
                required: !0,
                type: { name: "() => void" },
              },
              onLogout: {
                defaultValue: null,
                description: "",
                name: "onLogout",
                required: !0,
                type: { name: "() => void" },
              },
              onCreateAccount: {
                defaultValue: null,
                description: "",
                name: "onCreateAccount",
                required: !0,
                type: { name: "() => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"] = {
              docgenInfo: Header.__docgenInfo,
              name: "Header",
              path: "src/stories/Header.tsx#Header",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
//# sourceMappingURL=stories-Header-stories.dfc601a4.iframe.bundle.js.map
