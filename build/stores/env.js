"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnvStore = exports.initializeEnvStore = exports.EnvStore = void 0;
var react_1 = require("react");
var mobx_state_tree_1 = require("mobx-state-tree");
var getSize = function (width) {
    if (width >= 1200)
        return 'xl';
    if (width >= 992 && width <= 1199)
        return 'l';
    if (width >= 768 && width <= 991)
        return 'm';
    if (width >= 576 && width <= 767)
        return 's';
    if (width >= 0 && width <= 575)
        return 'xs';
    return 'xs';
};
var envStore;
exports.EnvStore = mobx_state_tree_1.types
    .model({
    width: mobx_state_tree_1.types.number,
    height: mobx_state_tree_1.types.number,
    offsetHeight: mobx_state_tree_1.types.number,
    scrollTop: mobx_state_tree_1.types.number,
    scrollHeight: mobx_state_tree_1.types.number,
    offsetToBottom: mobx_state_tree_1.types.number,
    size: mobx_state_tree_1.types.string
})
    .actions(function (self) {
    var setWidth = function (width) {
        self.width = width;
        self.size = getSize(width);
    };
    var setHeight = function (height, offsetHeight, scrollTop, scrollHeight) {
        self.height = height;
        self.offsetHeight = offsetHeight;
        self.scrollTop = scrollTop;
        self.scrollHeight = scrollHeight;
        self.offsetToBottom = offsetHeight - height - scrollTop;
    };
    return { setWidth: setWidth, setHeight: setHeight };
});
function initializeEnvStore(snapshot) {
    if (snapshot === void 0) { snapshot = null; }
    var _envStore = envStore !== null && envStore !== void 0 ? envStore : exports.EnvStore.create({
        width: 0,
        height: 0,
        offsetHeight: 0,
        scrollTop: 0,
        scrollHeight: 0,
        offsetToBottom: 0,
        size: ''
    });
    // If your page has Next.js data fetching methods that use a Mobx envStore, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        (0, mobx_state_tree_1.applySnapshot)(_envStore, snapshot);
    }
    // For SSG and SSR always create a new envStore
    // if (typeof window === 'undefined') return _store
    // Create the envStore once in the client
    if (!envStore)
        envStore = _envStore;
    return envStore;
}
exports.initializeEnvStore = initializeEnvStore;
function useEnvStore(initialState) {
    var envStore = (0, react_1.useMemo)(function () { return initializeEnvStore(initialState); }, [initialState]);
    return envStore;
}
exports.useEnvStore = useEnvStore;
