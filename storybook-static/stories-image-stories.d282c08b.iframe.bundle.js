"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [306],
  {
    "./src/stories/image.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: () => Large,
          Medium: () => Medium,
          Round: () => Round,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => image_stories,
        });
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
        components_image = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/image.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default()),
        injectStylesIntoStyleTag_default()(components_image.Z, options),
        components_image.Z &&
          components_image.Z.locals &&
          components_image.Z.locals;
      var Image = function (props) {
        return react.createElement("img", {
          className: [
            "image",
            props.size ? "image--".concat(props.size) : "",
            props.imageRound ? "image--round" : "",
          ].join(" "),
          style: {
            borderWidth: props.borderWidth,
            borderStyle: props.borderStyle,
            borderRadius: props.borderRadius,
          },
          src: props.src,
          title: props.title ? props.title : "",
          alt: props.alt ? props.alt : "",
        });
      };
      try {
        (Image.displayName = "Image"),
          (Image.__docgenInfo = {
            description: "",
            displayName: "Image",
            props: {
              src: {
                defaultValue: null,
                description: "",
                name: "src",
                required: !0,
                type: { name: "string" },
              },
              size: {
                defaultValue: null,
                description: "",
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
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              alt: {
                defaultValue: null,
                description: "",
                name: "alt",
                required: !1,
                type: { name: "string" },
              },
              borderWidth: {
                defaultValue: null,
                description: "",
                name: "borderWidth",
                required: !1,
                type: { name: "string" },
              },
              borderStyle: {
                defaultValue: null,
                description: "",
                name: "borderStyle",
                required: !1,
                type: { name: "string" },
              },
              borderRadius: {
                defaultValue: null,
                description: "",
                name: "borderRadius",
                required: !1,
                type: { name: "string" },
              },
              imageRound: {
                defaultValue: null,
                description: "",
                name: "imageRound",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/image.tsx#Image"] = {
              docgenInfo: Image.__docgenInfo,
              name: "Image",
              path: "src/components/image.tsx#Image",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      let tiger_namespaceObject =
          __webpack_require__.p + "static/media/tiger.34ce51c9.jpg",
        image_stories = {
          title: "Example/Image",
          component: Image,
          parameters: { layout: "centered" },
        };
      var Small = { args: { src: tiger_namespaceObject, size: "small" } },
        Medium = { args: { src: tiger_namespaceObject, size: "medium" } },
        Large = { args: { src: tiger_namespaceObject, size: "large" } },
        Round = {
          args: { src: tiger_namespaceObject, size: "medium", imageRound: !0 },
        };
      (Small.parameters = {
        ...Small.parameters,
        docs: {
          ...Small.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    src: Tiger,\n    size: "small"\n  }\n}',
            ...Small.parameters?.docs?.source,
          },
        },
      }),
        (Medium.parameters = {
          ...Medium.parameters,
          docs: {
            ...Medium.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: Tiger,\n    size: "medium"\n  }\n}',
              ...Medium.parameters?.docs?.source,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: Tiger,\n    size: "large"\n  }\n}',
              ...Large.parameters?.docs?.source,
            },
          },
        }),
        (Round.parameters = {
          ...Round.parameters,
          docs: {
            ...Round.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: Tiger,\n    size: "medium",\n    imageRound: true\n  }\n}',
              ...Round.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ["Small", "Medium", "Large", "Round"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/image.css":
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
          `.image--round {
  border-radius: 50%;
}

.image--small {
  width: 25%;
}

.image--medium {
  width: 50%;
}

.image--large {
  width: 100%;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/image.css"],
            names: [],
            mappings:
              "AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb",
            sourcesContent: [
              ".image--round {\n  border-radius: 50%;\n}\n\n.image--small {\n  width: 25%;\n}\n\n.image--medium {\n  width: 50%;\n}\n\n.image--large {\n  width: 100%;\n}\n",
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
  },
]);
//# sourceMappingURL=stories-image-stories.d282c08b.iframe.bundle.js.map
