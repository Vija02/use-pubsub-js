export declare function debounce<T extends Function>(func: T, wait?: number, immediate?: boolean): {
    (): unknown;
    clear(): void;
    flush(): void;
};
export declare namespace debounce {
    var debounce: typeof import("./debounce").debounce;
}
