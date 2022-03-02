import { LitElement } from 'lit';
export declare class ListAge extends LitElement {
    ageItems: any[];
    age: number;
    static styles: import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'list-age': ListAge;
    }
}
