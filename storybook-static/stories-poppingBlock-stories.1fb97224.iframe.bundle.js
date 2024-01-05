"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [17],
  {
    "./src/stories/poppingBlock.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => poppingBlock_stories,
          popping: () => popping,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        PoppingBlock = function (props) {
          return react.createElement(
            "details",
            null,
            react.createElement("summary", null, props.summary),
            react.createElement("div", null, props.children)
          );
        };
      PoppingBlock.defaultProps = { summary: "Подробности" };
      try {
        (PoppingBlock.displayName = "PoppingBlock"),
          (PoppingBlock.__docgenInfo = {
            description: "",
            displayName: "PoppingBlock",
            props: {
              summary: {
                defaultValue: { value: "Подробности" },
                description: "",
                name: "summary",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/poppingBlock.tsx#PoppingBlock"
            ] = {
              docgenInfo: PoppingBlock.__docgenInfo,
              name: "PoppingBlock",
              path: "src/components/poppingBlock.tsx#PoppingBlock",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      let poppingBlock_stories = {
        title: "Example/PoppingBlock",
        component: PoppingBlock,
      };
      var popping = { args: { summary: "Test", children: "TEST CONTENT" } };
      popping.parameters = {
        ...popping.parameters,
        docs: {
          ...popping.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    summary: "Test",\n    children: "TEST CONTENT"\n  }\n}',
            ...popping.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ["popping"];
    },
  },
]);
