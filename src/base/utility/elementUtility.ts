import HtmlAttributes from '../interfaces/htmlAttributes';
import { Component } from '../component';

/**
 * Utility for working with elements 
 */
export class ElementUtility
{
  public static createElement(tag: string, content?: any, attributes?: HtmlAttributes): HTMLElement
  {
    let element = document.createElement(tag);

    if (attributes) {
      for (let name in attributes) {
        let attribute = attributes[name];

        this.setAttribute(element, name, attribute);
      }
    }

    if (content) {
      this.addContent(element, content);
    }

    return element;
  }

  public static setAttribute(target: any, name: string, value: any): void
  {
    if (target && value != null && value != undefined) {
      name = this.sanitizeAttributeName(name);

      let element = null;
      if (target instanceof Component) {
        element = target.element;
      } else {
        element = target;
      }

      if (element) {
        element.setAttribute(name, value);
      }
    }
  }

  public static addContent(
    target: any,
    content: any
  ): void
  {
    if (!content || !target) {
      return;
    }

    if (content instanceof Array) {
      for (const item of content) {
        this.addToElement(target, item);
      }
    } else {
      this.addToElement(target, content);
    }
  }

  public static setContent(
    target: any,
    content: any
  ): void
  {
    if (!content || !target) {
      return;
    }

    this.clearContent(target);

    this.addContent(target, content);
  }

  public static clearContent(target: any): void
  {
    let realElement = this.getRealElement(target);

    while (realElement.firstChild) {
      realElement.removeChild(realElement.firstChild);
    }
  }

  private static addToElement(target: any, content: any): void
  {
    let realElement = this.getRealElement(target);
    const realContent = this.getRealContent(content);

    if (realElement && realContent) {
      if (typeof (realContent) === 'string') {
        realElement.innerHTML += realContent;
      } else {
        realElement.appendChild(realContent);
      }
    }
  }

  private static getRealElement(target: any): HTMLElement
  {
    if (target instanceof HTMLElement) {
      return target;
    } else {
      return target.element;
    }
  }

  private static getRealContent(content: any): HTMLElement | string
  {
    if (content instanceof Component) {
      return content.element;
    } else {
      return content;
    }
  }

  private static sanitizeAttributeName(name: string): string
  {
    switch (name) {
      case 'className':
        return 'class';
      case 'forId':
        return 'for';
      case 'ariaLabel':
        return 'aria-label';
      case 'ariaHidden':
        return 'aria-hidden';
    }

    return name;
  }
}
