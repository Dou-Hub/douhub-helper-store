"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMessageStore = exports.initializeMessageStore = exports.MessageStore = void 0;
var react_1 = require("react");
var lodash_1 = require("lodash");
var mobx_state_tree_1 = require("mobx-state-tree");
var store;
var MESSAGE_STORE_LIST_MAX_SIZE = 100;
var MessageItem = mobx_state_tree_1.types.model({
    id: mobx_state_tree_1.types.string,
    content: mobx_state_tree_1.types.string
});
exports.MessageStore = mobx_state_tree_1.types
    .model({
    id: mobx_state_tree_1.types.string,
    content: mobx_state_tree_1.types.string,
    list: mobx_state_tree_1.types.array(MessageItem)
})
    .actions(function (self) {
    var addMessage = function (message) {
        self.id = message.id;
        self.content = message.content;
        self.list.push({ id: self.id, content: self.content });
        if (self.list.length > MESSAGE_STORE_LIST_MAX_SIZE) {
            self.list.shift();
        }
    };
    var getMessage = function (id) {
        if (id == self.id)
            return { id: self.id, content: self.content };
        //try to find from array
        return (0, lodash_1.find)(self.list, function (item) { return item.id == id; });
    };
    return { addMessage: addMessage, getMessage: getMessage };
});
function initializeMessageStore(snapshot) {
    if (snapshot === void 0) { snapshot = null; }
    var _store = store !== null && store !== void 0 ? store : exports.MessageStore.create();
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
exports.initializeMessageStore = initializeMessageStore;
function useMessageStore(initialState) {
    var store = (0, react_1.useMemo)(function () { return initializeMessageStore(initialState); }, [initialState]);
    return store;
}
exports.useMessageStore = useMessageStore;
