export interface IUsePublishResponse {
    lastPublish: boolean;
    publish: () => void;
}
export interface IUsePublishParams<TokenType extends string | symbol = string | symbol> {
    token: TokenType;
    message: string;
    isAutomatic?: boolean;
    isInitialPublish?: boolean;
    isImmediate?: boolean;
    debounceMs?: number | string;
}
export declare const usePublish: <TokenType extends string | symbol = string | symbol>({ token, message, isAutomatic, isInitialPublish, isImmediate, debounceMs, }: IUsePublishParams<TokenType>) => IUsePublishResponse;
