"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextStore = exports.initializeContextStore = exports.ContextStore = void 0;
var react_1 = require("react");
var mobx_state_tree_1 = require("mobx-state-tree");
var store;
exports.ContextStore = mobx_state_tree_1.types
    .model({
    data: mobx_state_tree_1.types.string
})
    .actions(function (self) {
    var setData = function (newData) {
        self.data = JSON.stringify(newData);
    };
    var getData = function (name) {
        var data = JSON.parse(self.data);
        return data[name];
    };
    return { setData: setData, getData: getData };
});
function initializeContextStore(snapshot) {
    if (snapshot === void 0) { snapshot = null; }
    var _store = store !== null && store !== void 0 ? store : exports.ContextStore.create({ data: '{}' });
    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        (0, mobx_state_tree_1.applySnapshot)(_store, snapshot);
    }
    // For SSG and SSR always create a new store
    // if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store)
        store = _store;
    return store;
}
exports.initializeContextStore = initializeContextStore;
function useContextStore(initialState) {
    var store = (0, react_1.useMemo)(function () { return initializeContextStore(initialState); }, [initialState]);
    return store;
}
exports.useContextStore = useContextStore;
