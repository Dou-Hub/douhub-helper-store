import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
export declare type Message = {
    id: string;
    content: string;
};
export declare const MessageStore: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    content: import("mobx-state-tree").ISimpleType<string>;
    list: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, {
    addMessage: (message: Message) => void;
    getMessage: (id: string) => Message | undefined;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IMessageStore = Instance<typeof MessageStore>;
export declare type IMessageStoreSnapshotIn = SnapshotIn<typeof MessageStore>;
export declare type IMessageStoreSnapshotOut = SnapshotOut<typeof MessageStore>;
export declare function initializeMessageStore(snapshot?: null): {
    id: string;
    content: string;
    list: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    addMessage: (message: Message) => void;
    getMessage: (id: string) => Message | undefined;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    content: import("mobx-state-tree").ISimpleType<string>;
    list: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, {
    addMessage: (message: Message) => void;
    getMessage: (id: string) => Message | undefined;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
export declare function useMessageStore(initialState: any): {
    id: string;
    content: string;
    list: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    addMessage: (message: Message) => void;
    getMessage: (id: string) => Message | undefined;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    content: import("mobx-state-tree").ISimpleType<string>;
    list: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, {
    addMessage: (message: Message) => void;
    getMessage: (id: string) => Message | undefined;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
