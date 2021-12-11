import { useMemo } from 'react';
import {
    applySnapshot,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
} from 'mobx-state-tree';
import { isEmpty } from 'lodash';

let contextStore: IContextStore | undefined

export const ContextStore = types
    .model({
        data: types.string
    })
    .actions((self) => {
        const setData = (newData: Record<string,any>) => {
            self.data = JSON.stringify(newData);
        }
        const getData = (name: string) => {
            const data = JSON.parse(self.data);
            return data[name];
        }
        return { setData, getData }
    })

export type IContextStore = Instance<typeof ContextStore>;
export type IContextStoreSnapshotIn = SnapshotIn<typeof ContextStore>;
export type IContextStoreSnapshotOut = SnapshotOut<typeof ContextStore>;

export function initializeContextStore(snapshot = null) {
    const _contextStore = contextStore ?? ContextStore.create({data:'{}'});

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot && isEmpty(snapshot)) {
        applySnapshot(_contextStore, snapshot);
    }
    // For SSG and SSR always create a new store
    // if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!contextStore) contextStore = _contextStore;

    return contextStore
}

export function useContextStore(initialState: any) {
    const store = useMemo(() => initializeContextStore(initialState), [initialState]);
    return store;
}