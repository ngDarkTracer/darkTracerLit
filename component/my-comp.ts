 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';


 @customElement('my-comp')
 export class MyComp extends LitElement {

   static styles = css `

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


   @property({type: String})
   name='';


   @property({type: String})
   age='';

   override render() {
     return html`
       <div>
         <input type="text" name="input-text" @input=${this.updateName} placeholder="Enter a name..."></input>
         <button @click=${this.search}>Search</button>
       </div>
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
        detail: {name: this.name, age: result.age},
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


