"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [610],
  {
    "./src/stories/title.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => title_stories,
          h1: () => h1,
          h2: () => h2,
          h3: () => h3,
          h4: () => h4,
          h5: () => h5,
          h6: () => h6,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        Title = function (props) {
          switch (props.level) {
            case 1:
              return react.createElement("h1", null, props.text);
            case 2:
              return react.createElement("h2", null, props.text);
            case 3:
              return react.createElement("h3", null, props.text);
            case 4:
              return react.createElement("h4", null, props.text);
            case 5:
              return react.createElement("h5", null, props.text);
            case 6:
              return react.createElement("h6", null, props.text);
          }
        };
      Title.defaultProps = { level: 1, text: "HELLO WORLD" };
      try {
        (Title.displayName = "Title"),
          (Title.__docgenInfo = {
            description: "",
            displayName: "Title",
            props: {
              level: {
                defaultValue: { value: "1" },
                description: "",
                name: "level",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: "1" },
                    { value: "2" },
                    { value: "3" },
                    { value: "4" },
                    { value: "5" },
                    { value: "6" },
                  ],
                },
              },
              text: {
                defaultValue: { value: "HELLO WORLD" },
                description: "",
                name: "text",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/title.tsx#Title"] = {
              docgenInfo: Title.__docgenInfo,
              name: "Title",
              path: "src/components/title.tsx#Title",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      let title_stories = {
        title: "Example/Title",
        component: Title,
        parameters: { layout: "centered" },
      };
      var h1 = { args: { level: 1, text: "Test Title" } },
        h2 = { args: { level: 2, text: "Test Title" } },
        h3 = { args: { level: 3, text: "Test Title" } },
        h4 = { args: { level: 4, text: "Test Title" } },
        h5 = { args: { level: 5, text: "Test Title" } },
        h6 = { args: { level: 6, text: "Test Title" } };
      (h1.parameters = {
        ...h1.parameters,
        docs: {
          ...h1.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    level: 1,\n    text: "Test Title"\n  }\n}',
            ...h1.parameters?.docs?.source,
          },
        },
      }),
        (h2.parameters = {
          ...h2.parameters,
          docs: {
            ...h2.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    level: 2,\n    text: "Test Title"\n  }\n}',
              ...h2.parameters?.docs?.source,
            },
          },
        }),
        (h3.parameters = {
          ...h3.parameters,
          docs: {
            ...h3.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    level: 3,\n    text: "Test Title"\n  }\n}',
              ...h3.parameters?.docs?.source,
            },
          },
        }),
        (h4.parameters = {
          ...h4.parameters,
          docs: {
            ...h4.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    level: 4,\n    text: "Test Title"\n  }\n}',
              ...h4.parameters?.docs?.source,
            },
          },
        }),
        (h5.parameters = {
          ...h5.parameters,
          docs: {
            ...h5.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    level: 5,\n    text: "Test Title"\n  }\n}',
              ...h5.parameters?.docs?.source,
            },
          },
        }),
        (h6.parameters = {
          ...h6.parameters,
          docs: {
            ...h6.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    level: 6,\n    text: "Test Title"\n  }\n}',
              ...h6.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ["h1", "h2", "h3", "h4", "h5", "h6"];
    },
  },
]);
