import { initializeMessageStore as initializeMessageStoreInternal, useMessageStore as useMessageStoreInternal } from './stores/message';
import { initializeEnvStore as initializeEnvStoreInternal, useEnvStore as useEnvStoreInternal } from './stores/env';
import { initializeContextStore as initializeContextStoreInternal, useContextStore as useContextStoreInternal } from './stores/context';
export declare const MessageStore: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    content: import("mobx-state-tree").ISimpleType<string>;
    list: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        content: import("mobx-state-tree").ISimpleType<string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, {
    addMessage: (message: import("./stores/message").Message) => void;
    getMessage: (id: string) => import("./stores/message").Message | undefined;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const initializeMessageStore: typeof initializeMessageStoreInternal;
export declare const useMessageStore: typeof useMessageStoreInternal;
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
export declare const initializeEnvStore: typeof initializeEnvStoreInternal;
export declare const useEnvStore: typeof useEnvStoreInternal;
export declare const ContextStore: import("mobx-state-tree").IModelType<{
    data: import("mobx-state-tree").ISimpleType<string>;
}, {
    setData: (newData: Record<string, any>) => void;
    getData: (name: string) => any;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const initializeContextStore: typeof initializeContextStoreInternal;
export declare const useContextStore: typeof useContextStoreInternal;
