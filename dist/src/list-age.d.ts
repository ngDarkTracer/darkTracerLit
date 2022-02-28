import { LitElement } from 'lit';
export declare class ListAge extends LitElement {
    ageItems: string[];
    render(): import("lit-html").TemplateResult<1>;
    updateName(e: CustomEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'list-age': ListAge;
    }
}
