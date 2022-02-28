import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('list-age')
 export class ListAge extends LitElement {

@property({ type: Array }) ageItems: string[] = [];

   override render() {
     return html`
        <p @myage=${this.updateName}><slot></slot></p>
        <span>Historique:</span>
        <ul>
          ${this.ageItems.map(
            item => html`
              <li>
              ${item}
              </li>
            `
          )}
        </ul>
     `;
   }

   updateName(e: CustomEvent){
     console.log(this.ageItems)
    this.ageItems.push(e.detail.ages);
    this.requestUpdate();
   }


 }

 declare global {
   interface HTMLElementTagNameMap {
     'list-age': ListAge;
   }
 }
