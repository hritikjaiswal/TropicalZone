import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{d as defineCustomElement$e}from"./sc-alert2.js";import{d as defineCustomElement$d}from"./sc-block-ui2.js";import{d as defineCustomElement$c}from"./sc-button2.js";import{d as defineCustomElement$b}from"./sc-card2.js";import{d as defineCustomElement$a}from"./sc-dashboard-module2.js";import{d as defineCustomElement$9}from"./sc-divider2.js";import{d as defineCustomElement$8}from"./sc-empty2.js";import{d as defineCustomElement$7}from"./sc-format-bytes2.js";import{d as defineCustomElement$6}from"./sc-icon2.js";import{d as defineCustomElement$5}from"./sc-skeleton2.js";import{d as defineCustomElement$4}from"./sc-spacing2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-stacked-list2.js";import{d as defineCustomElement$1}from"./sc-stacked-list-row2.js";import{a as addQueryArgs}from"./add-query-args.js";const scPurchaseDownloadsListCss=":host{display:block}.download__details{opacity:0.75}",ScPurchaseDownloadsListStyle0=scPurchaseDownloadsListCss,ScPurchaseDownloadsList=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.allLink=void 0,this.heading=void 0,this.busy=void 0,this.loading=void 0,this.requestNonce=void 0,this.error=void 0,this.purchases=[]}renderEmpty(){return h("div",null,h("sc-divider",{style:{"--spacing":"0"}}),h("slot",{name:"empty"},h("sc-empty",{icon:"download"},wp.i18n.__("You don't have any downloads.","surecart"))))}renderLoading(){return h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},h("div",{style:{padding:"0.5em"}},h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%"}})))))}renderList(){return this.purchases.map((e=>{var s,t,n;const o=null===(t=null===(s=null==e?void 0:e.product)||void 0===s?void 0:s.downloads)||void 0===t?void 0:t.data.filter((e=>!e.archived)),a=(o||[]).map((e=>{var s;return(null==e?void 0:e.media)?null===(s=null==e?void 0:e.media)||void 0===s?void 0:s.byte_size:0})),d=a.reduce(((e,s)=>e+s),0);return h("sc-stacked-list-row",{href:(null==e?void 0:e.revoked)?null:addQueryArgs(window.location.href,{action:"show",model:"download",id:e.id,nonce:this.requestNonce}),key:e.id,"mobile-size":0},h("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},h("div",null,h("strong",null,null===(n=null==e?void 0:e.product)||void 0===n?void 0:n.name)),h("div",{class:"download__details"},wp.i18n.sprintf(wp.i18n._n("%s file","%s files",null==o?void 0:o.length,"surecart"),null==o?void 0:o.length),!!d&&h(Fragment,null," ","• ",h("sc-format-bytes",{value:d})))),h("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}renderContent(){var e;return this.loading?this.renderLoading():0===(null===(e=this.purchases)||void 0===e?void 0:e.length)?this.renderEmpty():h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,this.renderList()))}render(){return h("sc-dashboard-module",{key:"5ccf0a38a0bc8b065d0ff56eaaf3a9717e793f43",class:"downloads-list",error:this.error},h("span",{key:"57110086a52d06895a05c445f4ad5824aea9f0af",slot:"heading"},h("slot",{key:"1d2c5639a5966b8a03dad99855ad2879a7047036",name:"heading"},this.heading||wp.i18n.__("Items","surecart"))),h("slot",{key:"8c988bfc8038d2a71af97aa30f790799d2b7aeda",name:"before"}),!!this.allLink&&h("sc-button",{key:"c49361ab9aa83d123c5185dc3249f04ebe00aa0c",type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),h("sc-icon",{key:"e6b38f6630fab8f33c1aa2d98da294a4110d22ae",name:"chevron-right",slot:"suffix"})),this.renderContent(),h("slot",{key:"e2a8442ebe848fb3cc9edf0647358781dce7d617",name:"after"}),this.busy&&h("sc-block-ui",{key:"a5d7e2413662795dceae785db3473de988bdc94e"}))}get el(){return this}static get style(){return ScPurchaseDownloadsListStyle0}},[1,"sc-purchase-downloads-list",{allLink:[1,"all-link"],heading:[1],busy:[4],loading:[4],requestNonce:[1,"request-nonce"],error:[1],purchases:[16]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-purchase-downloads-list","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-divider","sc-empty","sc-format-bytes","sc-icon","sc-skeleton","sc-spacing","sc-spinner","sc-stacked-list","sc-stacked-list-row"].forEach((e=>{switch(e){case"sc-purchase-downloads-list":customElements.get(e)||customElements.define(e,ScPurchaseDownloadsList);break;case"sc-alert":customElements.get(e)||defineCustomElement$e();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$d();break;case"sc-button":customElements.get(e)||defineCustomElement$c();break;case"sc-card":customElements.get(e)||defineCustomElement$b();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$a();break;case"sc-divider":customElements.get(e)||defineCustomElement$9();break;case"sc-empty":customElements.get(e)||defineCustomElement$8();break;case"sc-format-bytes":customElements.get(e)||defineCustomElement$7();break;case"sc-icon":customElements.get(e)||defineCustomElement$6();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$5();break;case"sc-spacing":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$2();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$1()}}))}export{ScPurchaseDownloadsList as S,defineCustomElement as d};