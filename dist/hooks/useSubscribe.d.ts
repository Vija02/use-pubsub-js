export interface UseSubscriptionResponse {
    unsubscribe: () => void;
    resubscribe: () => void;
}
export interface UseSubscriptionParams<TokenType extends string | symbol = string | symbol> {
    token: TokenType;
    handler: (token?: TokenType, message?: string) => void;
    isUnsubscribe?: boolean;
}
export declare const useSubscribe: <TokenType extends string | symbol = string | symbol>({ token, handler, isUnsubscribe, }: UseSubscriptionParams<TokenType>) => UseSubscriptionResponse;
