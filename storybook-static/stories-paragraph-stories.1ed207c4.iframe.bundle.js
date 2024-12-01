"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [278],
  {
    "./src/stories/paragraph.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => paragraph_stories,
          paragraph: () => paragraph,
        });
      var react = __webpack_require__("./node_modules/react/index.js");
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
      var Paragraph = function (_param) {
        var text = _param.text,
          fontFamily = _param.fontFamily,
          fontSize = _param.fontSize,
          fontWeight = _param.fontWeight,
          color = _param.color;
        return (
          _object_without_properties(_param, [
            "text",
            "fontFamily",
            "fontSize",
            "fontWeight",
            "color",
          ]),
          react.createElement(
            "p",
            {
              style: {
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontWeight,
                color: color,
              },
            },
            text
          )
        );
      };
      Paragraph.defaultProps = {
        text: "Test text",
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "normal",
        color: "black",
      };
      try {
        (Paragraph.displayName = "Paragraph"),
          (Paragraph.__docgenInfo = {
            description: "",
            displayName: "Paragraph",
            props: {
              text: {
                defaultValue: { value: "Test text" },
                description: "",
                name: "text",
                required: !1,
                type: { name: "string" },
              },
              fontFamily: {
                defaultValue: { value: "Arial" },
                description: "",
                name: "fontFamily",
                required: !1,
                type: { name: "string" },
              },
              fontSize: {
                defaultValue: { value: "1rem" },
                description: "",
                name: "fontSize",
                required: !1,
                type: { name: "string" },
              },
              fontWeight: {
                defaultValue: { value: "normal" },
                description: "",
                name: "fontWeight",
                required: !1,
                type: { name: "string | number" },
              },
              color: {
                defaultValue: { value: "black" },
                description: "",
                name: "color",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/paragraph.tsx#Paragraph"] =
              {
                docgenInfo: Paragraph.__docgenInfo,
                name: "Paragraph",
                path: "src/components/paragraph.tsx#Paragraph",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      let paragraph_stories = {
        title: "Example/paragraph",
        component: Paragraph,
        parameters: { layout: "centered" },
      };
      var paragraph = { args: { text: "PARAGRAPH" } };
      paragraph.parameters = {
        ...paragraph.parameters,
        docs: {
          ...paragraph.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    text: "PARAGRAPH"\n  }\n}',
            ...paragraph.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ["paragraph"];
    },
  },
]);
