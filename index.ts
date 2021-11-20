//  Copyright PrimeObjects Software Inc. and other contributors <https://www.primeobjects.com/>
// 
//  This source code is licensed under the MIT license.
//  The detail information can be found in the LICENSE file in the root directory of this source tree.


import { IMessageStore as IMessageStoreInternal, MessageStore as MessageStoreInternal, initializeMessageStore as initializeMessageStoreInternal, useMessageStore as useMessageStoreInternal } from './stores/message';
import { IEnvStore as IEnvStoreInternal, EnvStore as EnvStoreInternal, initializeEnvStore as initializeEnvStoreInternal, useEnvStore as useEnvStoreInternal } from './stores/env';
import { IContextStore as IContextStoreInternal, ContextStore as ContextStoreInternal, initializeContextStore as initializeContextStoreInternal, useContextStore as useContextStoreInternal } from './stores/context';

export const MessageStore = MessageStoreInternal;
export type IMessageStore = IMessageStoreInternal;
export const initializeMessageStore = initializeMessageStoreInternal;
export const useMessageStore = useMessageStoreInternal;

export const EnvStore = EnvStoreInternal;
export type IEnvStore = IEnvStoreInternal;
export const initializeEnvStore = initializeEnvStoreInternal;
export const useEnvStore = useEnvStoreInternal;

export const ContextStore = ContextStoreInternal;
export type IContextStore = IContextStoreInternal;
export const initializeContextStore = initializeContextStoreInternal;
export const useContextStore = useContextStoreInternal;