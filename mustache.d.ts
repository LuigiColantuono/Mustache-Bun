export as namespace Mustache;

export function clearCache(): void;
export function escape(value: string): string;
export function parse(template: string, tags?: string[]): any[];
export function render(
    template: string,
    view: any,
    partials?: any,
    config?: any
): string;

export class Scanner {
    string: string;
    tail: string;
    pos: number;
    constructor(string: string);
    eos(): boolean;
    scan(re: RegExp): string;
    scanUntil(re: RegExp): string;
}

export class Context {
    view: any;
    parent: Context | undefined;
    constructor(view: any, parentContext?: Context);
    push(view: any): Context;
    lookup(name: string): any;
}

export class Writer {
    constructor();
    clearCache(): void;
    parse(template: string, tags?: string[]): any[];
    render(template: string, view: any, partials?: any, config?: any): string;
    renderTokens(tokens: any[], context: Context, partials?: any, originalTemplate?: any, config?: any): string;
}

export interface MustacheStatic {
    name: string;
    version: string;
    tags: string[];
    clearCache: typeof clearCache;
    escape: typeof escape;
    parse: typeof parse;
    render: typeof render;
    Scanner: typeof Scanner;
    Context: typeof Context;
    Writer: typeof Writer;
}

declare const mustache: MustacheStatic;
export default mustache;
