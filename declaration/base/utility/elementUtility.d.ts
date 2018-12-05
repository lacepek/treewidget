import IHtmlAttributes from "../interfaces/IhtmlAttributes";
import { Component } from "../component";
export declare class ElementUtility {
    static createElement(tag: string, content?: HTMLElement | Component | string | Array<HTMLElement | Component | string>, attributes?: IHtmlAttributes): HTMLElement;
    static setAttribute(target: HTMLElement | Component, name: string, value: any): void;
    static addContent(target: HTMLElement | Component, content: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void;
    static setContent(target: HTMLElement | Component, content: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void;
    static clearContent(target: HTMLElement | Component): void;
    private static addToElement;
    private static getRealElement;
    private static getRealContent;
    private static sanitizeAttributeName;
}
//# sourceMappingURL=elementUtility.d.ts.map