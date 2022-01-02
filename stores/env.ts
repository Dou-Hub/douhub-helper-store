import { useMemo } from 'react';
import { _process } from 'douhub-helper-util';
import {
    applySnapshot,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
} from 'mobx-state-tree';
import { isEmpty } from 'lodash';

const getSize = (width: number) => {
    if (width >= 1200) return 'xl';
    if (width >= 992 && width <= 1199) return 'l';
    if (width >= 768 && width <= 991) return 'm';
    if (width >= 576 && width <= 767) return 's';
    if (width >= 0 && width <= 575) return 'xs';
    return 'xs';
}

const INIT_VALUE = {
    width: 0,
    height: 0,
    offsetHeight: 0,
    scrollTop: 0,
    scrollHeight: 0,
    offsetToBottom: 0,
    size: ''
}

export const EnvStore = types
    .model({
        width: types.number,
        height: types.number,
        offsetHeight: types.number,
        scrollTop: types.number,
        scrollHeight: types.number,
        offsetToBottom: types.number,
        size: types.string
    })
    .actions((self) => {

        const setWidth = (width: number) => {
            self.width = width;
            self.size = getSize(width);
        }

        const setHeight = (height: number, offsetHeight: number, scrollTop: number, scrollHeight: number) => {
            self.height = height;
            self.offsetHeight = offsetHeight;
            self.scrollTop = scrollTop;
            self.scrollHeight = scrollHeight;
            self.offsetToBottom = offsetHeight - height - scrollTop;
        }

        return { setWidth, setHeight };
    })

export type IEnvStore = Instance<typeof EnvStore>;
export type IEnvStoreSnapshotIn = SnapshotIn<typeof EnvStore>;
export type IEnvStoreSnapshotOut = SnapshotOut<typeof EnvStore>;

let envStore: IEnvStore = EnvStore.create(INIT_VALUE);

export const initializeEnvStore = (snapshot?:Record<string,any>) : IEnvStore => {
    _process._envStore = _process._envStore ?? EnvStore.create(INIT_VALUE);

    if (snapshot && isEmpty(snapshot)) {
        applySnapshot(_process._envStore, snapshot);
    }
    envStore = _process._envStore;
    return envStore;
}

export function useEnvStore(initialState?: Record<string,any>) {
    return useMemo(() => initializeEnvStore(initialState), [initialState]);
}

