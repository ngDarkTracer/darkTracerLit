import { __decorate } from "tslib";
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ListAge = class ListAge extends LitElement {
    constructor() {
        super();
        this.ageItems = [];
        this.age = 0;
    }
    render() {
        this.age !== 0 ? this.ageItems.push(this.age) : this.age = 0;
        return html `
        <ul>
          ${this.ageItems.map(item => html `
              <li>🤣 Nom: ${item === null || item === void 0 ? void 0 : item.name} - Age: ${item === null || item === void 0 ? void 0 : item.age} an(s)</li>
            `)}
        </ul>
     `;
    }
};
ListAge.styles = css `
    .hist {
      font-weight: bolder;
      font-size: 20px;
    }
    ul {
      list-style-type: none;
    }
    p {
      color: green;
    }
  `;
__decorate([
    property({ type: Array })
], ListAge.prototype, "ageItems", void 0);
__decorate([
    property({ type: Number })
], ListAge.prototype, "age", void 0);
ListAge = __decorate([
    customElement('list-age')
], ListAge);
export { ListAge };
//# sourceMappingURL=list-age.js.map