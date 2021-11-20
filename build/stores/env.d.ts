import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
export declare type Env = {
    width: number;
    height: number;
    offsetHeight: number;
    scrollTop: number;
    scrollHeight: number;
    offsetToBottom: number;
    size: string;
};
export declare const EnvStore: import("mobx-state-tree").IModelType<{
    width: import("mobx-state-tree").ISimpleType<number>;
    height: import("mobx-state-tree").ISimpleType<number>;
    offsetHeight: import("mobx-state-tree").ISimpleType<number>;
    scrollTop: import("mobx-state-tree").ISimpleType<number>;
    scrollHeight: import("mobx-state-tree").ISimpleType<number>;
    offsetToBottom: import("mobx-state-tree").ISimpleType<number>;
    size: import("mobx-state-tree").ISimpleType<string>;
}, {
    setWidth: (width: number) => void;
    setHeight: (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IEnvStore = Instance<typeof EnvStore>;
export declare type IEnvStoreSnapshotIn = SnapshotIn<typeof EnvStore>;
export declare type IEnvStoreSnapshotOut = SnapshotOut<typeof EnvStore>;
export declare function initializeEnvStore(snapshot?: null): {
    width: number;
    height: number;
    offsetHeight: number;
    scrollTop: number;
    scrollHeight: number;
    offsetToBottom: number;
    size: string;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    setWidth: (width: number) => void;
    setHeight: (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => void;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    width: import("mobx-state-tree").ISimpleType<number>;
    height: import("mobx-state-tree").ISimpleType<number>;
    offsetHeight: import("mobx-state-tree").ISimpleType<number>;
    scrollTop: import("mobx-state-tree").ISimpleType<number>;
    scrollHeight: import("mobx-state-tree").ISimpleType<number>;
    offsetToBottom: import("mobx-state-tree").ISimpleType<number>;
    size: import("mobx-state-tree").ISimpleType<string>;
}, {
    setWidth: (width: number) => void;
    setHeight: (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
export declare function useEnvStore(initialState: any): {
    width: number;
    height: number;
    offsetHeight: number;
    scrollTop: number;
    scrollHeight: number;
    offsetToBottom: number;
    size: string;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    setWidth: (width: number) => void;
    setHeight: (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => void;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    width: import("mobx-state-tree").ISimpleType<number>;
    height: import("mobx-state-tree").ISimpleType<number>;
    offsetHeight: import("mobx-state-tree").ISimpleType<number>;
    scrollTop: import("mobx-state-tree").ISimpleType<number>;
    scrollHeight: import("mobx-state-tree").ISimpleType<number>;
    offsetToBottom: import("mobx-state-tree").ISimpleType<number>;
    size: import("mobx-state-tree").ISimpleType<string>;
}, {
    setWidth: (width: number) => void;
    setHeight: (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
