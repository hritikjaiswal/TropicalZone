import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$2}from"./sc-tag2.js";const scOrderReturnBadgeCss=":host{display:inline-block}",ScOrderReturnBadgeStyle0=scOrderReturnBadgeCss,status={open:wp.i18n.__("Return in progress","surecart"),completed:wp.i18n.__("Returned","surecart")},type={open:"warning",completed:"success"},ScOrderReturnBadge$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status=void 0,this.size="medium",this.pill=!1,this.clearable=!1}render(){return h("sc-tag",{key:"bae24922b7ee77d821455a17d4b66e4afc596bc2",type:null==type?void 0:type[null==this?void 0:this.status],pill:this.pill},(null==status?void 0:status[this.status])||this.status)}static get style(){return ScOrderReturnBadgeStyle0}},[1,"sc-order-return-badge",{status:[1],size:[513],pill:[516],clearable:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-return-badge","sc-tag"].forEach((e=>{switch(e){case"sc-order-return-badge":customElements.get(e)||customElements.define(e,ScOrderReturnBadge$1);break;case"sc-tag":customElements.get(e)||defineCustomElement$2()}}))}const ScOrderReturnBadge=ScOrderReturnBadge$1,defineCustomElement=defineCustomElement$1;export{ScOrderReturnBadge,defineCustomElement};