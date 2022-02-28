import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ListAge = class ListAge extends LitElement {
    constructor() {
        super(...arguments);
        this.ageItems = [];
    }
    render() {
        return html `
        <p @myage=${this.updateName}><slot></slot></p>
        <span>Historique:</span>
        <ul>
          ${this.ageItems.map(item => html `
              <li>
              ${item}
              </li>
            `)}
        </ul>
     `;
    }
    updateName(e) {
        console.log(this.ageItems);
        this.ageItems.push(e.detail.ages);
        this.requestUpdate();
    }
};
__decorate([
    property({ type: Array })
], ListAge.prototype, "ageItems", void 0);
ListAge = __decorate([
    customElement('list-age')
], ListAge);
export { ListAge };
//# sourceMappingURL=list-age.js.map