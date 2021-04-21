import { useEffect, useCallback } from "react";
import PubSub from "pubsub-js";

type Handler = () => void;

export interface IUseSubscriptionResponse {
  unsubscribe: Handler;
  resubscribe: Handler;
}

export interface IUseSubscriptionParams {
  token: string;
  handler: Handler;
  isUnsubscribe?: boolean;
}

export const useSubscribe = ({
  token,
  handler,
  isUnsubscribe = false,
}: IUseSubscriptionParams): IUseSubscriptionResponse => {
  const unsubscribe = useCallback(() => {
    PubSub.unsubscribe(token);
  }, [token]);

  const resubscribe = useCallback(() => {
    PubSub.unsubscribe(token);

    PubSub.subscribe(token, handler);
  }, [token, handler]);

  useEffect(() => {
    PubSub.subscribe(token, handler);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isUnsubscribe) {
      unsubscribe();
    }
  }, [isUnsubscribe]);

  return { unsubscribe, resubscribe };
};
