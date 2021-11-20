import { useMemo } from 'react';
import { find } from 'lodash';
import {
    applySnapshot,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
} from 'mobx-state-tree';

let store: IMessageStore | undefined;
const MESSAGE_STORE_LIST_MAX_SIZE = 100;

export type Message = {
    id: string,
    content: string
}

const MessageItem = types.model({
    id: types.string,
    content: types.string
});


export const MessageStore = types
    .model({
        id: types.string,
        content: types.string,
        list: types.array(MessageItem)
    })
    .actions((self) => {
        const addMessage = (message: Message) => {
            self.id = message.id;
            self.content = message.content;
            self.list.push({ id: self.id, content: self.content });
            if (self.list.length > MESSAGE_STORE_LIST_MAX_SIZE) {
                self.list.shift();
            }
        }
        const getMessage = (id: string): Message | undefined => {
            if (id == self.id) return { id: self.id, content: self.content };
            //try to find from array
            return find(self.list, (item) => item.id == id);
        }
        return { addMessage, getMessage }
    })

export type IMessageStore = Instance<typeof MessageStore>
export type IMessageStoreSnapshotIn = SnapshotIn<typeof MessageStore>
export type IMessageStoreSnapshotOut = SnapshotOut<typeof MessageStore>

export function initializeMessageStore(snapshot = null) {
    const _store = store ?? MessageStore.create();

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        applySnapshot(_store, snapshot);
    }
    // For SSG and SSR always create a new store
    // if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store;

    return store;
}

export function useMessageStore(initialState: any) {
    const store = useMemo(() => initializeMessageStore(initialState), [initialState])
    return store
}