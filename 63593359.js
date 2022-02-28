import{_ as e,e as t,n as s,s as a,$ as i}from"./f4a5eb30.js";let p=class extends a{constructor(){super(...arguments),this.ageItems=[]}render(){return i`
        <p @myage=${this.updateName}><slot></slot></p>
        <span>Historique:</span>
        <ul>
          ${this.ageItems.map((e=>i`
              <li>
              ${e}
              </li>
            `))}
        </ul>
     `}updateName(e){console.log(this.ageItems),this.ageItems.push(e.detail.ages),this.requestUpdate()}};e([t({type:Array})],p.prototype,"ageItems",void 0),p=e([s("list-age")],p);
