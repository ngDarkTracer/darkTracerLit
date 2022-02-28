import{r as e,_ as t,e as a,n as s,s as i,$ as n}from"./f4a5eb30.js";let p=class extends i{constructor(){super(...arguments),this.name="",this.age=""}render(){return n`
       <input type="text" name="input-text" @input=${this.updateName} placeholder="enter some text here..."></input>
       <button @click=${this.search}>Search</button>
       <label>${this.age}</label>
     `}updateName(e){const t=e.target;this.name=t.value}search(){fetch("https://api.agify.io/?name="+this.name).then((e=>e.json())).then((e=>{this.age=e.age,this.dispatchEvent(new CustomEvent("myage",{detail:{ages:e.age},bubbles:!0,composed:!0}))}))}};p.styles=e`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `,t([a({type:String})],p.prototype,"name",void 0),t([a({type:String})],p.prototype,"age",void 0),p=t([s("my-comp")],p);
