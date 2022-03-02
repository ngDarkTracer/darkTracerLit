import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyComp = class MyComp extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.age = '';
    }
    render() {
        return html `
       <div>
         <input type="text" name="input-text" @input=${this.updateName} placeholder="Enter a name..."></input>
         <button @click=${this.search}>Search</button>
       </div>
     `;
    }
    updateName(e) {
        const input = e.target;
        this.name = input.value;
    }
    search() {
        fetch('https://api.agify.io/?name=' + this.name)
            .then((response) => {
            return response.json();
        })
            .then((result) => {
            this.age = result.age;
            this.dispatchEvent(new CustomEvent('myage', {
                detail: { name: this.name, age: result.age },
                bubbles: true,
                composed: true
            }));
        });
    }
};
MyComp.styles = css `

      div {
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
      }

      input[type=text] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-outline: none;
      box-sizing: border-box;
    }

      button {
      width: 40%;
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
    }
  `;
__decorate([
    property({ type: String })
], MyComp.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MyComp.prototype, "age", void 0);
MyComp = __decorate([
    customElement('my-comp')
], MyComp);
export { MyComp };
//# sourceMappingURL=my-comp.js.map