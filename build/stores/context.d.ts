import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
export declare const ContextStore: import("mobx-state-tree").IModelType<{
    data: import("mobx-state-tree").ISimpleType<string>;
}, {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IContextStore = Instance<typeof ContextStore>;
export declare type IContextStoreSnapshotIn = SnapshotIn<typeof ContextStore>;
export declare type IContextStoreSnapshotOut = SnapshotOut<typeof ContextStore>;
export declare function initializeContextStore(snapshot?: null): {
    data: string;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    data: import("mobx-state-tree").ISimpleType<string>;
}, {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
export declare function useContextStore(initialState: any): {
    data: string;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    data: import("mobx-state-tree").ISimpleType<string>;
}, {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
