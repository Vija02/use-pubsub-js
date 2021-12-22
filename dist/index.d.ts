import PubSub from 'pubsub-js';
import { useSubscribe } from './hooks/useSubscribe';
import { usePublish } from './hooks/usePublish';
export { PubSub, useSubscribe, usePublish };
declare const _default: {
    PubSub: PubSubJS.Base;
    useSubscribe: <TokenType extends string | symbol = string | symbol>({ token, handler, isUnsubscribe, }: import("./hooks/useSubscribe").UseSubscriptionParams<TokenType>) => import("./hooks/useSubscribe").UseSubscriptionResponse;
    usePublish: <TokenType_1 extends string | symbol = string | symbol>({ token, message, isAutomatic, isInitialPublish, isImmediate, debounceMs, }: import("./hooks/usePublish").IUsePublishParams<TokenType_1>) => import("./hooks/usePublish").IUsePublishResponse;
};
export default _default;
