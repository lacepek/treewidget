import IHtmlAttributes from "../interfaces/IhtmlAttributes";
/**
 * Utility for working with elements
 */
export declare class ElementUtility {
    static createElement(tag: string, content?: any, attributes?: IHtmlAttributes): HTMLElement;
    static setAttribute(target: any, name: string, value: any): void;
    static addContent(target: any, content: any): void;
    static setContent(target: any, content: any): void;
    static clearContent(target: any): void;
    private static addToElement;
    private static getRealElement;
    private static getRealContent;
    private static sanitizeAttributeName;
}
//# sourceMappingURL=elementUtility.d.ts.map