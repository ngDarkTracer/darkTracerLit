import{r as e,_ as t,e as s,n as i,s as o,$ as a}from"./f4a5eb30.js";let l=class extends o{constructor(){super(),this.ageItems=[],this.age=0}render(){return 0!==this.age?this.ageItems.push(this.age):this.age=0,a`
        <ul>
          ${this.ageItems.map((e=>a`
              <li>🤣 Nom: ${null==e?void 0:e.name} - Age: ${null==e?void 0:e.age} an(s)</li>
            `))}
        </ul>
     `}};l.styles=e`
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
  `,t([s({type:Array})],l.prototype,"ageItems",void 0),t([s({type:Number})],l.prototype,"age",void 0),l=t([i("list-age")],l);
