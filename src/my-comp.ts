 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 
 @customElement('my-comp')
 export class MyComp extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
 
   
   @property({type: String})
   name='';
 
   
   @property({type: String})
   age='';
 
   override render() {
     return html`
       <input type="text" name="input-text" @input=${this.updateName} placeholder="enter some text here..."></input>
       <button @click=${this.search}>Search</button>
       <label>${this.age}</label>
     `;
   }

   updateName(e: Event){
       const input = e.target as HTMLInputElement;
       this.name = input.value;
   }

   search(){
    fetch('https://api.agify.io/?name=' + this.name)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      this.age = result.age as string;
      this.dispatchEvent(new CustomEvent('myage', {
        detail: {ages: result.age},
        bubbles: true,
        composed: true
      }))
    });
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'my-comp': MyComp;
   }
 }
 

