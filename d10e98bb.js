import{r as e,_ as t,e as n,n as i,s as a,$ as o}from"./f4a5eb30.js";let r=class extends a{constructor(){super(...arguments),this.name="",this.age=""}render(){return o`
       <div>
         <input type="text" name="input-text" @input=${this.updateName} placeholder="Enter a name..."></input>
         <button @click=${this.search}>Search</button>
       </div>
     `}updateName(e){const t=e.target;this.name=t.value}search(){fetch("https://api.agify.io/?name="+this.name).then((e=>e.json())).then((e=>{this.age=e.age,this.dispatchEvent(new CustomEvent("myage",{detail:{name:this.name,age:e.age},bubbles:!0,composed:!0}))}))}};r.styles=e`

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
  `,t([n({type:String})],r.prototype,"name",void 0),t([n({type:String})],r.prototype,"age",void 0),r=t([i("my-comp")],r);
