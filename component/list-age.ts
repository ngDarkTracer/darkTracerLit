import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('list-age')
 export class ListAge extends LitElement {

  @property({ type: Array }) ageItems: any[] = [];

  @property({ type: Number }) age = 0;

  static styles = css `
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

  constructor() {
    super();
  }

  override render() {
     this.age !== 0 ? this.ageItems.push(this.age) : this.age = 0;
     return html`
        <ul>
          ${this.ageItems.map(
            item => html`
              <li>🤣 Nom: ${item?.name} - Age: ${item?.age} an(s)</li>
            `
          )}
        </ul>
     `;
   }
 }

 declare global {
   interface HTMLElementTagNameMap {
     'list-age': ListAge;
   }
 }
