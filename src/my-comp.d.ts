import { LitElement } from 'lit';
export declare class MyComp extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    age: string;
    render(): import("lit-html").TemplateResult<1>;
    updateName(e: Event): void;
    search(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-comp': MyComp;
    }
}
