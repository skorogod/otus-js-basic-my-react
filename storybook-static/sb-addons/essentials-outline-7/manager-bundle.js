try {
  (() => {
    var a = __REACT__,
      {
        Children: k,
        Component: I,
        Fragment: B,
        Profiler: L,
        PureComponent: P,
        StrictMode: v,
        Suspense: x,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: M,
        cloneElement: H,
        createContext: N,
        createElement: D,
        createFactory: F,
        createRef: K,
        forwardRef: W,
        isValidElement: Y,
        lazy: G,
        memo: i,
        useCallback: p,
        useContext: w,
        useDebugValue: U,
        useEffect: m,
        useImperativeHandle: V,
        useLayoutEffect: q,
        useMemo: z,
        useReducer: Z,
        useRef: $,
        useState: j,
        version: J,
      } = __REACT__;
    var oe = __STORYBOOK_API__,
      {
        ActiveTabs: re,
        Consumer: ae,
        ManagerContext: ne,
        Provider: le,
        addons: s,
        combineParameters: se,
        controlOrMetaKey: ue,
        controlOrMetaSymbol: ce,
        eventMatchesShortcut: ie,
        eventToShortcut: pe,
        isMacLike: me,
        isShortcutTaken: Se,
        keyToSymbol: _e,
        merge: de,
        mockChannel: Te,
        optionOrAltSymbol: Oe,
        shortcutMatchesShortcut: be,
        shortcutToHumanString: ye,
        types: S,
        useAddonState: Ce,
        useArgTypes: he,
        useArgs: Ae,
        useChannel: fe,
        useGlobalTypes: Ee,
        useGlobals: _,
        useParameter: ge,
        useSharedState: Re,
        useStoryPrepared: ke,
        useStorybookApi: d,
        useStorybookState: Ie,
      } = __STORYBOOK_API__;
    var xe = __STORYBOOK_COMPONENTS__,
      {
        A: Me,
        ActionBar: He,
        AddonPanel: Ne,
        Badge: De,
        Bar: Fe,
        Blockquote: Ke,
        Button: We,
        ClipboardCode: Ye,
        Code: Ge,
        DL: we,
        Div: Ue,
        DocumentWrapper: Ve,
        ErrorFormatter: qe,
        FlexBar: ze,
        Form: Ze,
        H1: $e,
        H2: je,
        H3: Je,
        H4: Qe,
        H5: Xe,
        H6: et,
        HR: tt,
        IconButton: T,
        IconButtonSkeleton: ot,
        Icons: O,
        Img: rt,
        LI: at,
        Link: nt,
        ListItem: lt,
        Loader: st,
        OL: ut,
        P: ct,
        Placeholder: it,
        Pre: pt,
        ResetWrapper: mt,
        ScrollArea: St,
        Separator: _t,
        Spaced: dt,
        Span: Tt,
        StorybookIcon: Ot,
        StorybookLogo: bt,
        Symbols: yt,
        SyntaxHighlighter: Ct,
        TT: ht,
        TabBar: At,
        TabButton: ft,
        TabWrapper: Et,
        Table: gt,
        Tabs: Rt,
        TabsState: kt,
        TooltipLinkList: It,
        TooltipMessage: Bt,
        TooltipNote: Lt,
        UL: Pt,
        WithTooltip: vt,
        WithTooltipPure: xt,
        Zoom: Mt,
        codeCommon: Ht,
        components: Nt,
        createCopyToClipboardFunction: Dt,
        getStoryHref: Ft,
        icons: Kt,
        interleaveSeparators: Wt,
        nameSpaceClassNames: Yt,
        resetComponents: Gt,
        withReset: wt,
      } = __STORYBOOK_COMPONENTS__;
    var u = "storybook/outline",
      b = "outline",
      C = i(function () {
        let [r, y] = _(),
          c = d(),
          n = [!0, "true"].includes(r[b]),
          l = p(() => y({ [b]: !n }), [n]);
        return (
          m(() => {
            c.setAddonShortcut(u, {
              label: "Toggle Outline [O]",
              defaultShortcut: ["O"],
              actionName: "outline",
              showInMenu: !1,
              action: l,
            });
          }, [l, c]),
          a.createElement(
            T,
            {
              key: "outline",
              active: n,
              title: "Apply outlines to the preview",
              onClick: l,
            },
            a.createElement(O, { icon: "outline" })
          )
        );
      });
    s.register(u, () => {
      s.add(u, {
        title: "Outline",
        type: S.TOOL,
        match: ({ viewMode: r }) => !!(r && r.match(/^(story|docs)$/)),
        render: () => a.createElement(C, null),
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}