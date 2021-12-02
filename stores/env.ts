import { useMemo } from 'react';
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

let envStore: IEnvStore | undefined;

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

    const setHeight = (height: number, offsetHeight:number, scrollTop: number, scrollHeight: number) => {
      self.height = height;
      self.offsetHeight=  offsetHeight;
      self.scrollTop=  scrollTop;
      self.scrollHeight=  scrollHeight;
      self.offsetToBottom=  offsetHeight - height - scrollTop;
    }

    return { setWidth, setHeight };
  })

export type IEnvStore = Instance<typeof EnvStore>;
export type IEnvStoreSnapshotIn = SnapshotIn<typeof EnvStore>;
export type IEnvStoreSnapshotOut = SnapshotOut<typeof EnvStore>;

export function initializeEnvStore(snapshot = null) {
  const _envStore = envStore ?? EnvStore.create({
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
  if (snapshot && !isEmpty(snapshot)) {
    applySnapshot(_envStore, snapshot)
  }
  // For SSG and SSR always create a new envStore
   // if (typeof window === 'undefined') return _store
  // Create the envStore once in the client
  if (!envStore) envStore = _envStore

  return envStore
}

export function useEnvStore(initialState: any) {
  const envStore = useMemo(() => initializeEnvStore(initialState), [initialState])
  return envStore;
}